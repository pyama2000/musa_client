import axios from 'axios'

export const state = () => ({
  userId: null
})

export const mutations = {
  setUserId(state, userId) {
    state.userId = userId
  }
}

export const getters = {
  userId(state) {
    return state.userId
  }
}

export const actions = {
  async signIn({ commit }, code) {
    await axios
      .post(`http://0.0.0.0:8000/login?code=${code}`)
      .then((response) => {
        commit('setUserId', response.data)
      })
  }
}
