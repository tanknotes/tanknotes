<template>
  <main>
    <spec-selection class="card" />
    <section class="margin-top">
      <tiny v-model="content" :init="initConfig" />
    </section>
    <section class="card margin-top markdown-body" :class="specClassName" v-html="content"/>
  </main>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';
import RAIDS from '@/data/RAIDS'
import SPECS from '@/data/SPECS'

export default {
  name: 'quill',
  data () {
    return {
      content: '<h1>Demo</h1>',
      shortHands: SPECS.map(e => e.class === '' ? e.short : 'spec-' + e.short),
      initConfig: {
        style_formats: [
          {title: 'Blood Death Knight', inline: 'span', classes: 'spec-blood'},
          {title: 'Physical Damage', inline: 'span', styles: {color: '#ff0000'}},
          {title: 'Magic Damage', block: 'span', styles: {color: '#ffff00'}},
        ],
        content_css: 'my_custom_css.css',
        plugins: "textcolor",
        toolbar: "forecolor backcolor",
      },
    }
  },
  components: {
    'tiny': Editor
  },
  created: function() {
    this.content = this.$vuex.state.lastBossGuide
  },
  watch: {
    content: function (newBossGuide) {
      this.$vuex.commit('store', {
        var: 'lastBossGuide',
        value: newBossGuide,
      })
    }
  },
  computed: {
    specClassName: function() {
      return this.$vuex.state.currentSpec === 0 ? 'all' : `spec-${SPECS[this.$vuex.state.currentSpec].short.toLowerCase()}`
    }
  }
}
</script>