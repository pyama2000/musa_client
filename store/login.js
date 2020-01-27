import axios from 'axios'

export const state = () => ({
  isSignedIn: false
})

export const mutations = {
  setSignIn(state, isSignedIn) {
    state.isSignedIn = isSignedIn
  }
}

export const actions = {
  async signIn({ commit }, code) {
    await axios.post(`http://0.0.0.0:8000/login?code=${code}`).then((_) => {
      commit('setSignIn', true)
    })
  }
}
