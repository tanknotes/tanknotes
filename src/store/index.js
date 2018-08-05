import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    currentSpec: 0,
    specSelectionIsOpen: false,
    banner: '',
    bannerPos: 0,
  },
  mutations: {
    store(state, payload) {
      return state[payload.var] = payload.value
    },
    toggle(state, val) {
      return state[val] = !state[val]
    },
    setBannerImage(state, val) {
      return state.banner = val
    },
    setBannerPos(state, val) {
      return state.bannerPos = val
    },
  },
  actions: {

  },
  plugins: [vuexLocal.plugin]
})