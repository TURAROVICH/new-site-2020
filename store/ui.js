export const state = () => ({
  breadcrumbs: []
})

export const mutations = {
  SET_BREADCRUMBS(state, payload) {
    state.breadcrumbs = payload
  }
}

export const actions = {
  setBreadcrumbs(state, { breadcrumbs }) {
   state.commit('SET_BREADCRUMBS', breadcrumbs)
  }
}
