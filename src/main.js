import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App.vue'
import { store } from './vuex/store'
import router from './vuex/router'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
