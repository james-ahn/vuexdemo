import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    getCounter: (state) => {
      return state.counter;
    }
  },
  mutations: {
    addCounter: (state, payload) => {
      ///state.counter = payload;
      console.log('payload_mutation',payload);
      return state.counter++;
    }
  },
  actions: {
    addCounter: (context, payload) => {
      console.log('payload_action',payload);
      return context.commit('addCounter',10); //commit for mutations
    }
  }

});
