<template>
  <main>
    <div v-html="filteredGuide" ref="guide" class="card markdown-body" :data-spec="specClassName" />
  </main>
</template>

<script>
import RAIDS from '@/data/RAIDS'
import SPECS from '@/data/SPECS'

export default {
  name: 'boss',
  data () {
    return {
      boss: RAIDS
        .find(e => e.url === this.$route.params.raidUrl).bosses
        .find(e => e.url === this.$route.params.bossUrl),
      bossGuide: '',
    }
  },
  created: function() {
    this.$vuex.commit('setBannerImage', this.boss.img)
    this.$vuex.commit('setBannerPos', 50)

    // require only local and make request in prod
    if (process.env.NODE_ENV === "development") {
      var bossGuide = require(`raw-loader!./../../static/guides/${this.boss.content}`)
      this.bossGuide = bossGuide
      return
    }

    if (process.env.NODE_ENV !== "development") {
      this.axios.get(`${process.env.SUB_FOLDER}/static/guides/${this.boss.content}`).then((response) => {
        this.bossGuide = response.data
      })
    }
  },
  computed: {
    specClassName: function() {
      return this.$vuex.state.currentSpec === 0 ? 'all' : `spec-${SPECS[this.$vuex.state.currentSpec].short.toLowerCase()}`
    },
    filteredGuide: function() {
      let node = document.createElement('div')
      node.innerHTML = this.bossGuide

      if (this.specClassName === 'all') {
        return node.innerHTML
      }

      node.querySelectorAll(`*[class^="spec-"]:not(.${this.specClassName})`).forEach((elem, index) => {
        if (elem.parentNode.nodeName === 'LI') {
          elem.parentNode.remove()
          return
        }
        elem.remove()
      })

      return node.innerHTML
    }
  }
}
</script>