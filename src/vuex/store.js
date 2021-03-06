import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex);

const state = {
  title: '',
  alt: '',
  img: '',
  year: '',
  month: '',
  day: '',
  num: '',
  flag: false,
  ituensData: {}
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

export {store}
