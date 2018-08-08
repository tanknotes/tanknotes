import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Raid from '@/pages/Raid'
import Boss from '@/pages/Boss'
import Editor from '@/pages/Editor'
import Quill from '@/pages/Quill'
import Tiny from '@/pages/Tiny'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: process.env.SUB_FOLDER + '/:raidUrl',
      name: 'Raid',
      component: Raid,
    },
    {
      path: process.env.SUB_FOLDER + '/:raidUrl/:bossUrl',
      name: 'Boss',
      component: Boss,
    },
    {
      path: process.env.SUB_FOLDER + '/',
      name: 'Home',
      component: Home,
    },
    {
      path: process.env.SUB_FOLDER + 'markdown-editor',
      name: 'markdown-editor',
      component: Editor,
    },
    {
      path: process.env.SUB_FOLDER + 'quill',
      name: 'quill',
      component: Quill,
    },
    {
      path: process.env.SUB_FOLDER + 'tiny',
      name: 'tiny',
      component: Tiny,
    },
  ],
  mode: 'history',
})
