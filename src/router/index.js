import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Raid from '@/pages/Raid'
import Boss from '@/pages/Boss'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/:raidUrl',
      name: 'Raid',
      component: Raid
    },
    {
      path: '/:raidUrl/:bossUrl',
      name: 'Boss',
      component: Boss
    }
  ],
  mode: 'history',
})
