export const state = () => ({
  userID: null
})

export const mutations = {
  setUserID(state, userID) {
    state.userID = userID
  }
}

export const getters = {
  userID(state) {
    return state.userID
  }
}

export const actions = {
  async login({ commit, dispatch, rootState }) {
    const authState = rootState.login.authState
    commit('login/removeAuthState', null, { root: true })

    await this.$axios
      .post(`http://localhost:8000/login?state=${authState}`)
      .then((response) => {
        commit('setUserID', response.data)
      })
  }
}
