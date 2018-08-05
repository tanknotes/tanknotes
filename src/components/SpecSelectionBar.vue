<template>
  <div 
    class="spec-sidebar" 
    :class="sideBarOpen ? 'open' : ''"
  >
    <div
      v-for="(spec, index) in specs"
      :key="name(spec)"
      class="spec"
      :class="[index === currentSpec ? 'active' : '', spec.short]"
      @click="updateCurrentSpec(index)"
    >
      <img 
        :src="spec.icon" 
        :title="name(spec)"
        v-tippy="{ placement : 'left',  arrow: true }"
      />
    </div>
  </div>
</template>

<script>
import SPECS from '@/data/SPECS'

export default {
  name: 'spec-bar',
  data () {
    return {
      specs: SPECS,
    }
  },
  methods: {
    name: function(spec) {
      return spec.spec + " " + spec.class
    },
    updateCurrentSpec: function(specIndex) {
      this.$vuex.commit('toggle', 'specSelectionIsOpen')
      this.$vuex.commit('store', { 
        var: 'currentSpec', 
        value: specIndex 
      })
    }
  },
  computed: {
    currentSpec: function() {
      return this.$vuex.state.currentSpec
    },
    sideBarOpen: function() {
      return this.$vuex.state.specSelectionIsOpen
    }
  }
}
</script>

