export const state = () => ({
  cities: []
})

export const mutations = {
  SET_STORES (state, payload) {
    state.cities = payload.cities
  },
}

export const actions = {
  async getStores({ commit, state }) {
    const response = await this.$axios.$get(`${process.env.API_URL}/site/stores`, { params: {}})
    const storesByCity = {}
    response.forEach(item => {
      if (storesByCity[item.city.slug]) {
        storesByCity[item.city.slug].shops.push({
          ...item,
          id: item.slug,
          title: item.name,
          phones: item.phones.map(i => i.phone),
          coords: [+item.lat, +item.lon]
        })
      } else {
        storesByCity[item.city.slug] = {
          title: item.city.name,
          shops: [
            {
              ...item,
              id: item.slug,
              title: item.name,
              phones: item.phones.map(i => i.phone),
              coords: [+item.lat, +item.lon]
            }
          ]
        }
      }
    })
    commit('SET_STORES', {cities: Object.values(storesByCity)})
  }
}
