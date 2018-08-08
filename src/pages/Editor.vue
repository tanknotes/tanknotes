<template>
  <main>
    <spec-selection class="card" />
    <section class="card margin-top">
      <div class="class-helper">
        <div v-for="shortHand in shortHands" :key="shortHand" @click="addToCursorPoition(shortHand)">
          {{ "." + shortHand }}
        </div>
      </div>
      <textarea id="preview" ref="ta" v-model="bossGuide" />
    </section>
    <markdown-render :markdown="bossGuide" :spec="specClassName" class="margin-top" />
  </main>
</template>

<script>
import RAIDS from '@/data/RAIDS'
import SPECS from '@/data/SPECS'


export default {
  name: 'boss',
  data () {
    return {
      bossGuide: '',
      tableOfContent: '',
      shortHands: SPECS.map(e => e.class === '' ? e.short : 'spec-' + e.short)
    }
  },
  methods: {
    addToCursorPoition: function(text) {
      let textarea = this.$refs.ta
      let cursorPosition = textarea.selectionStart
      this.bossGuide = this.bossGuide.substring(0, cursorPosition) + ` {.${text}}` + this.bossGuide.substring(cursorPosition, this.bossGuide.length)
    }
  },
  watch: {
    bossGuide: function (newBossGuide) {
      this.$vuex.commit('store', {
        var: 'lastBossGuide',
        value: newBossGuide,
      })
    }
  },
  created: function() {
    this.bossGuide = this.$vuex.state.lastBossGuide
  },
  computed: {
    specClassName: function() {
      return this.$vuex.state.currentSpec === 0 ? 'all' : `spec-${SPECS[this.$vuex.state.currentSpec].short.toLowerCase()}`
    }
  }
}
</script>