<template>
  <main>
    <section class="card">
      <spec-selection/>
    </section>
    <section class="card margin-top">
      <div class="markdown-body" :class="specClassName">
        <div v-html="markdownHtml" />
      </div>
    </section>
  </main>
</template>

<script>
import RAIDS from '@/data/RAIDS'
import SPECS from '@/data/SPECS'
import '@/style-markdown.css'

var md = require('markdown-it')({
  html: true,
  breaks: true,
  typographer: true,
  linkify: true,
});

md.use(require('markdown-it-attrs'));
md.use(require('markdown-it-container'), 'div', {

  validate: function(params) {
    return params.trim().match(/^div\s+(.*)$/);
  },

  render: function (tokens, idx) {
    var m = tokens[idx].info.trim().match(/^div\s+(.*)$/);

    if (tokens[idx].nesting === 1) {
      return '<div class="' + md.utils.escapeHtml(m[1]) + '">\n';
    } else {
      return '</div>\n';
    }
  }
});


export default {
  name: 'boss',
  data () {
    return {
      boss: RAIDS
        .find(e => e.url === this.$route.params.raidUrl).bosses
        .find(e => e.url === this.$route.params.bossUrl),
    }
  },
  created: function() {
    this.$vuex.commit('setBannerImage', this.boss.img)
    this.$vuex.commit('setBannerPos', 50)
  },
  computed: {
    markdownHtml: function() {
      if (!this.boss.content) {
        return ""
      }

      var bossGuide = require(`raw-loader!./../../static/guides/${this.boss.content}`)
      return md.render(bossGuide)
    },
    currentSpec: function() {
      return SPECS[this.$vuex.state.currentSpec]
    },
    specClassName: function() {
      return this.$vuex.state.currentSpec === 0 ? 'all' : `spec-${this.currentSpec.short.toLowerCase()}`
    }
  }
}
</script>