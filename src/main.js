// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'
Vue.use(Vuex)

import storePlugin from './storePlugin';
Vue.use(storePlugin)


import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import VueTippy from 'vue-tippy'
Vue.use(VueTippy, {
  arrow: true,
})


import NavBar from '@/components/NavBar'
Vue.component('nav-bar', NavBar)

import SpecSelection from '@/components/SpecSelection'
Vue.component('spec-selection', SpecSelection)

import SpecSelectionBar from '@/components/SpecSelectionBar'
Vue.component('spec-selection-bar', SpecSelectionBar)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
