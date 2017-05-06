import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Buying from '@/components/Buying'
import Trading from '@/components/Trading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/compre',
      name: 'Buying',
      component: Buying
    },
    {
      path: '/trading',
      name: 'Trading',
      component: Trading
    }
  ]
})
