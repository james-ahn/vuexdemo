import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App.vue'
import { store } from './vuex/store'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
