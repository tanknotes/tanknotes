<template>
  <section>
    <div id="boss-guide" class="markdown-body card" :class="spec" v-html="markdownHtml" />
  </section>
</template>

<script>
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
  name: 'Markdown',
  props: ['markdown', 'spec'],
  computed: {
    markdownHtml: function() {
      if (!this.markdown) {
        return ""
      }

      return md.render(this.markdown)
    },
  }
}
</script>

