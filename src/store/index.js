import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    createMode: false,
  },
  mutations: {

    setCreateMode(state, val){
      state.createMode = val;
    }

  },
  actions: {
  },
  modules: {
  }
})
