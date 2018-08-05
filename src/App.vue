<template>
  <div id="app">
    <nav-bar/>
    <spec-selection-bar/>
    <div class="main">
      <div class="banner" :style="{ 
        'background-image': `url(${bannerImage})`,
        'background-position-y': `${bannerPos}%`
      }" />
      <transition name="slide-fade">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
import '@/style.css'

export default {
  name: 'App',
  computed: {
    bannerImage: function() {
      return this.$vuex.state.banner
    },
    bannerPos: function() {
      return this.$vuex.state.bannerPos
    }
  }
}
</script>
