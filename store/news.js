export const state = () => ({
  news: [],
  currentNews: undefined,
  count: undefined,
  pages: undefined,
  currentPage: 0,
  itemPerPage: 12
})

export const mutations = {
  SET_NEWS (state, payload) {
    state.news = payload.news
    state.currentPage = payload.page
    state.pages = payload.pages
    state.count = payload.count
  },
  SET_CURRENT_NEWS (state, payload) {
    state.currentNews = payload
  }
}

export const actions = {
  async getNews({ commit, state }) {
    const response = await this.$axios.$get(`${process.env.API_URL}/news`, { params: {
      page: state.currentPage,
      npp: state.itemPerPage
      }})
    const news = response.news.map(item => {
      return {
        ...item,
        image: {
          ...item.image,
          src: `${process.env.IMAGE_BASE_URL}/${item.image.src}`
        }
      }
    });
    commit('SET_NEWS', {news, page: response.page, pages: response.pages, count: response.count})
  },

  async getNewsBySlug({ commit }, { slug }) {
    try {
      const response = await this.$axios.$get(`${process.env.API_URL}/news/${slug}`)
      commit('SET_CURRENT_NEWS', response)
    } catch (err) {
      commit('SET_CURRENT_NEWS', undefined)
    }
  }

}
