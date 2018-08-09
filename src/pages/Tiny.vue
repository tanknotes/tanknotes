<template>
  <main>
    <spec-selection class="card" />
    <section class="margin-top">
      <div id="tabs">
        <div :class="currentTab == 0 ? 'active' : ''" @click="currentTab = 0">Editor</div>
        <div :class="currentTab == 1 ? 'active' : ''" @click="currentTab = 1">Preview</div>
        <div :class="currentTab == 2 ? 'active' : ''" @click="currentTab = 2">Code</div>
      </div>
    </section>
    <section class="card">
      <tiny v-if="currentTab == 0" v-model="content" :init="initConfig" />
      <div v-if="currentTab == 1" class="markdown-body" :class="specClassName" v-html="content"/>
      <div v-if="currentTab == 2">
        <code>{{ content }}</code>
      </div>
    </section>
  </main>
</template>

<script>
import Editor from '@tinymce/tinymce-vue';
import RAIDS from '@/data/RAIDS'
import SPECS from '@/data/SPECS'
import EDITOR_CONFIG from '@/data/EDITOR_CONFIG'

export default {
  name: 'quill',
  data () {
    return {
      content: '<h1>Demo</h1>',
      shortHands: SPECS.map(e => e.class === '' ? e.short : 'spec-' + e.short),
      initConfig: {
        style_formats: [
          {title: 'Specs', items: SPECS.map(e => { return {
            title: e.spec + " " + e.class,
            inline: 'span',
            classes: e.class === '' ? e.short : 'spec-' + e.short,
          }})},
          ...EDITOR_CONFIG
        ],
        invalid_styles: 'font-family text-decoration',
        content_css: 'static/tinymce.css',
        plugins: "textcolor link lists image table",
        menubar: false,
        toolbar: [
          "formatselect | styleselect | forecolor | backcolor | bold italic | bullist numlist | link image table | alignleft aligncenter alignright alignjustify | outdent indent | code | undo redo | removeformat",
        ],
      },
      currentTab: 0,
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