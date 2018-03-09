import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Components
import Dashboard from '../components/Dashboard'
import Comic from '../components/Comic'
import Itunes from '../components/Itunes'


const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/Dashboard',
      alias: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/Comic',
      name: 'Comic',
      component: Comic
    },
    {
      path: '/Itunes',
      name: 'Itunes',
      component: Itunes
    }
  ]
})

export default router
