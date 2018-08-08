<template>
  <div id="toolbar">
    <span class="formats">
      <select class="ql-size">
        <option value="small"></option>
        <option selected></option>
        <option value="large"></option>
        <option value="huge"></option>
      </select>
      <button class="ql-bold"></button>
      <button class="ql-italic"></button>
      <button class="ql-underline"></button>
      <button class="ql-strike"></button>
      <button class="ql-blockquote"></button>
      <button class="ql-code-block"></button>
      <button class="ql-link"></button>

      <select class="ql-color" title="Color">
        <option value="#ff0000" />
        <option selected />
        <option value="#0000ff" />
      </select>

      <select class="ql-background" title="Background-Color">
        <option value="#ff0000" />
        <option selected />
        <option value="#0000ff" />
      </select>

      <select class="ql-list">
        <option selected />
        <option value="bullet" />
        <option value="ordered" />
      </select>

      <br/><br/>

      <button class="ql-customBtn">Custom</button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'wysiwyg-toolbar',
}
</script>

