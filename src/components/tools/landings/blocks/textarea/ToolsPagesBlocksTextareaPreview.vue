<template>
  <div :class="getClasses" :style="getStyle">
    <div v-if="block.text" class="builder-box__layouts-text">
      <div class="builder-box__layouts-text-subtitle">{{ block.text }}</div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { PAGE_BLOCK_TEXTAREA_LAYOUTS } from "../../../../../stubs/tools-pages";
import previewMixin from "../../../../../mixins/pages-block-preview";

export default {
  name: "ToolsPagesBlocksTextareaPreview",
  mixins: [previewMixin],
  data() {
    return {
      layouts: PAGE_BLOCK_TEXTAREA_LAYOUTS
    };
  }
};
</script>

<style scoped></style>
