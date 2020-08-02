<template>
  <div :class="getClasses" :style="getStyle">
    <div class="builder-box__layouts-text">
      <div v-if="block.title" class="builder-box__layouts-text-title">
        {{ block.title }}
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { PAGE_BLOCK_TITLE_LAYOUTS } from "../../../../../stubs/tools-pages";
import previewMixin from "../../../../../mixins/pages-block-preview";

export default {
  name: "ToolsPagesBlocksTitlePreview",
  mixins: [previewMixin],
  data() {
    return {
      layouts: PAGE_BLOCK_TITLE_LAYOUTS
    };
  }
};
</script>

<style scoped></style>
