<template>
  <main>
    <section class="card">
      <wysiwyg />
      <vue-editor ref="quillEditor" v-model="content" :editorOptions="editorSettings"></vue-editor>
    </section>
  </main>
</template>

<script>
import { VueEditor, Quill } from 'vue2-editor'
import WysiwygToolbar from '@/components/WysiwygToolbar'
import Parchment from 'parchment';

export default {
  name: 'quill',
  data () {
    return {
      content: '<h1>Demo</h1>',
      editorSettings: {
        modules: {
          toolbar: {
            container: '#toolbar', 
            handlers: {
              customBtn: () => {
                const quill = this.$refs.quillEditor.quill

                console.info(Quill.imports);

                var range = quill.getSelection();
                if(range){
                  // const selectedText = quill.getText(range.index, range.length)

                  // let node = document.createElement('div');
                  // node.classList.add("custom")
                  // node.innerHTML = selectedText
                  quill.format('custom', 'test');
                  // quill.insertText(range.index, node.outerHTML)
                }
                // quill.insertText(quill.getSelection( true ).index, '%greetings-en%');
              },
            },
          },
        },
      },
    }
  },
  components: {
    VueEditor,
    'wysiwyg': WysiwygToolbar,
  },
}
</script>