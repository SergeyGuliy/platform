<template>
  <div>
    <label class="input-box-label" v-if="title">
      <span>{{ title }}</span>
    </label>
    <quill-editor :options="richEditorOptions" :value="value" @input="onInput" />
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor";

export default {
  name: "platform-editor",
  components: { quillEditor },
  props: {
    value: String,
    richEditorOptions: Object,
    title: String
  },
  methods: {
    onInput(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~quill/dist/quill.core.css";
@import "~quill/dist/quill.snow.css";
@import "~quill/dist/quill.bubble.css";
</style>
