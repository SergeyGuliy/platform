<template>
  <div :class="getClasses" :style="getStyle">
    <div v-if="block.title" class="builder-box__layouts-text-title">
      {{ block.title }}
    </div>
    <div v-if="block.media" class="builder-box__layouts-image">
      <img :src="block.media.preview" />
    </div>
    <div v-if="block.text" class="builder-box__layouts-text-subtitle">
      {{ block.text }}
    </div>
    <div v-if="block.button.text" class="builder-box__layouts-button">
      <button v-if="block.button.type === null" @click.prevent class="btn dark-btn">{{ block.button.text }}</button>
      <a
        v-if="block.button.type === 'site'"
        @click.prevent
        :href="block.button.link"
        target="_blank"
        class="btn dark-btn"
      >
        {{ block.button.text }}
      </a>
      <a
        v-if="block.button.type === 'file'"
        @click.prevent
        :href="block.button.link"
        target="_blank"
        download
        class="btn dark-btn"
      >
        {{ block.button.text }}
      </a>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { PAGE_BLOCK_MEDIA_LAYOUTS } from "../../../../../stubs/tools-pages";
import previewMixin from "../../../../../mixins/pages-block-preview";

export default {
  name: "ToolsPagesBlocksMediaPreview",
  mixins: [previewMixin],
  data() {
    return {
      layouts: PAGE_BLOCK_MEDIA_LAYOUTS
    };
  }
};
</script>

<style scoped></style>
