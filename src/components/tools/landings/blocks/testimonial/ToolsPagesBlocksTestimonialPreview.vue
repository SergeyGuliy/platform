<template>
  <div :class="getClasses" :style="getStyle">
    <div v-if="block.title" class="builder-box__layouts-text-title">
      {{ block.title }}
    </div>
    <div v-if="block.text" class="builder-box__layouts-text-subtitle">
      {{ block.text }}
    </div>
    <div class="builder-box__layouts-user">
      <div v-if="block.media" class="builder-box__layouts-user-photo">
        <img :src="block.media.preview" />
      </div>
      <div class="builder-box__layouts-user-data">
        <div v-if="block.username" class="builder-box__layouts-user-name">
          {{ block.username }}
        </div>
        <div v-if="block.position" class="builder-box__layouts-user-position">
          {{ block.position }}
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { PAGE_BLOCK_TESTIMONIAL_LAYOUTS } from "../../../../../stubs/tools-pages";
import previewMixin from "../../../../../mixins/pages-block-preview";

export default {
  name: "ToolsPagesBlocksTestimonialPreview",
  mixins: [previewMixin],
  data() {
    return {
      layouts: PAGE_BLOCK_TESTIMONIAL_LAYOUTS
    };
  }
};
</script>

<style scoped></style>
