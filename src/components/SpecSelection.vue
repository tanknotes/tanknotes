<template>
  <div>
    <div class="spec-picker" :style="{'width': `${specs.length * 80}px`}">
      <div 
        class="spec"
        v-for="(spec, index) in specs"
        :style="{
          'background-image': `url(${spec.icon})`
        }"
        :key="name(spec)"
        :alt="name(spec)"
        :class="index === currentSpec ? 'active' : ''"
        @click="updateCurrentSpec(index)"
        :title="name(spec)"
        v-tippy
      />
    </div>
  </div>
</template>

<script>
import SPECS from '@/data/SPECS'

export default {
  name: 'nav-bar',
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
      this.$vuex.commit('store', { 
        var: 'currentSpec', 
        value: specIndex 
      })
    }
  },
  computed: {
    currentSpec: function() {
      return this.$vuex.state.currentSpec
    }
  }
}
</script>
