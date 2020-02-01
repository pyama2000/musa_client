export const state = () => ({
  authState: null
})

export const mutations = {
  setAuthState(state, authState) {
    state.authState = authState
  },
  removeAuthState(state) {
    state.authState = null
  }
}

export const getters = {
  authState(state) {
    return state.authState
  }
}
