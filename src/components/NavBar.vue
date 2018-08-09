<template>
  <nav :class="sideBarOpen ? 'min' : ''">
    <router-link :to="{ name: 'Home' }" class="logo pull-left">
      Tanknotes
    </router-link>
    <div class="right pull-right">
      <img 
        class="current-spec" 
        :src="currentSpec.icon"
        @click="toggleSpecSelection"
        v-tippy
        title="Change your spec"
      />
      <router-link
        v-for="raid in raids" 
        :key="raid.id"
        :to="{ name: 'Raid', params: { raidUrl: raid.url }}"
        class="raid"
      >
        {{ raid.short }}
      </router-link>
      <router-link v-if='isDev' :to="{ name: 'Editor' }" class="raid">
        Editor
      </router-link>
    </div>
  </nav>
</template>

<script>
import RAIDS from '@/data/RAIDS'
import SPECS from '@/data/SPECS'

export default {
  name: 'nav-bar',
  data () {
    return {
      raids: RAIDS,
    }
  },
  methods: {
    toggleSpecSelection: function() {
      this.$vuex.commit('toggle', 'specSelectionIsOpen')
    },
    isDev: function() {
      return process.env.NODE_ENV === 'development'
    },
  },
  computed: {
    currentSpec: function() {
      return SPECS[this.$vuex.state.currentSpec]
    },
    sideBarOpen: function() {
      return this.$vuex.state.specSelectionIsOpen
    },
  }
}
</script>
