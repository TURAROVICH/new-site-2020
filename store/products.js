export const state = () => ({
  products: [],
  filter: [],
  activeFilter: {},
  currentProduct: undefined,
  collections: [],
  currentCollection: undefined,
})

export const mutations = {
  SET_PRODUCTS (state, payload) {
    state.products = payload
  },
  SET_CURRENT_PRODUCT (state, payload) {
    state.currentProduct = payload
  },
  SET_FILTER_VALUES (state, payload) {
    state.filter = payload
  },
  CHANGE_FILTER (state, payload) {
    state.activeFilter = payload
  },
  SET_COLLECTIONS (state, payload) {
    state.collections = payload
  },
  SET_CURRENT_COLLECTION (state, payload) {
    state.currentCollection = payload
  }
}

export const actions = {
  async changeFilter ({ commit, state, dispatch }, payload) {
    const currentFilter = { ...state.activeFilter }
    switch (payload.filter.toLowerCase()) {
      case 'single':
        if (payload.checked) {
          currentFilter[payload.value] = true
        } else {
          delete currentFilter[payload.value]
        }
        break;
      case 'amount':
        currentFilter[payload.filter] = payload.value
        break;
      case 'price':
        currentFilter[payload.filter] = payload.value
        break;
      default:
        if (payload.checked) {
          currentFilter[payload.filter] = currentFilter[payload.filter] ?
            [ ...currentFilter[payload.filter], payload.value ] :
            [ payload.value ]
        } else {
          currentFilter[payload.filter] = currentFilter[payload.filter].filter(item => item !== payload.value)
        }
    }
    commit('CHANGE_FILTER', currentFilter)
    await dispatch('getProducts')
  },

  async getProducts({ commit, state }) {
    const activeFilterKeys = Object.keys(state.activeFilter)
    const activeFilter = { ...state.activeFilter }
    activeFilterKeys.forEach(key => {
      if (typeof activeFilter[key] === 'object') {
        activeFilter[key] = activeFilter[key].join(',')
      }
    })

    const response = await this.$axios.$get(`${process.env.API_URL}/papers/filter`, { params: activeFilter})

    const products = response.items.map(item => {
      return {
        id: item.sku,
        slug: item.sku,
        title: item.name,
        img: item.cover ? `${process.env.IMAGE_BASE_URL}/${item.cover.image}` : '',
        params: `${item.height}м X ${item.width}м`,
        prices: {
          current: item.price,
          old: item.price_old
        }
      }
    })
    const filterKeys = Object.keys(response.faset)
    const formatVariants = (key, variants) => {
      switch (key.toLowerCase()) {
        case 'amount':
          return variants
        case 'price':
          return variants.map(v => {
            const name = (v.min ? ('от ' + v.min) : '') + ' ' + (v.max ? ('до ' + v.max) : '')
            const slug = (v.min ? v.min : '') + '-' + (v.max ? v.max : '')
            return {
              name,
              slug
            }
          })
        case 'single':
          return variants.map(v => {
            return {
              name: v,
              slug: v
            }
          })
        default:
          return variants
      }
    }
    const filter = filterKeys.map(key => {
      return {
        type: key,
        title: key,
        variants: formatVariants(key, response.faset[key])
      }
    })
    commit('SET_PRODUCTS', products)
    commit('SET_FILTER_VALUES', filter)
  },

  async getProductBySlug( { commit, state }, { slug }) {
    try {
      const response = await this.$axios.$get(`${process.env.API_URL}/papers/data/${slug}`)
      if (response) {
        const product = {
          ...response,
          title: response.name,
          params: `${response.height}м X ${response.width}м`,
          prices: {
            current: response.price,
            old: response.price_old
          }
        }
        commit('SET_CURRENT_PRODUCT', product)
      } else {
        commit('SET_CURRENT_PRODUCT', undefined)
      }
    } catch (err) {
      commit('SET_CURRENT_PRODUCT', undefined)
    }
  },

  async getCollections({ commit, state }) {
    const response = await this.$axios.$get(`${process.env.API_URL}/papers/collection/list`, { params: {}})
    const collections = response.map(item => {
      return {
        ...item,
        slug: `/shop/collections/${item.slug}`,
        img: item.cover ? `${process.env.IMAGE_BASE_URL}/${item.cover.image}` : ''
      }
    })
    commit('SET_COLLECTIONS', collections)
  },

  async getCollectionBySlug({ commit }, { slug }) {
    try {
      const response = await this.$axios.$get(`${process.env.API_URL}/papers/collection/${slug}`)
      const collection = {
        ...response,
        image: response.images.length > 0 ? `${process.env.IMAGE_BASE_URL}/${response.images[0].image}` : '',
        papers: response.papers.map(i => {
          return {
            id: i.sku,
            title: i.name,
            img: i.cover ? `${process.env.IMAGE_BASE_URL}/${i.cover.image}` : '',
            params: `${i.height}м X ${i.width}м`,
            prices: {
              current: i.price,
              old: i.price_old
            }
          }
        })
      }
      commit('SET_CURRENT_COLLECTION', collection)
    } catch (err) {
      commit('SET_CURRENT_COLLECTION', undefined)
    }
  }
}
