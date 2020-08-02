<template>
  <div :class="getClasses" :style="getStyle">
    <div class="builder-box__footer-options-content">
      <div v-if="block.media || block.button.text" class="builder-box__header-options-content">
        <div v-if="block.media" class="builder-box__header-options-logo">
          <img :src="block.media.preview" />
        </div>

        <template v-if="block.button.text">
          <button v-if="block.button.type === null" @click.prevent class="btn dark-btn">
            {{ block.button.text }}
          </button>
          <a
            v-else-if="block.button.type === 'site'"
            @click.prevent
            :href="block.button.link"
            target="_blank"
            class="btn dark-btn"
          >
            {{ block.button.text }}
          </a>
          <a
            v-else-if="block.button.type === 'file'"
            @click.prevent
            :href="block.button.link"
            target="_blank"
            download
            class="btn dark-btn"
          >
            {{ block.button.text }}
          </a>
        </template>
      </div>
      <div class="builder-box__footer-options-copyrigth">
        {{ block.title ? block.title : "©2020 by Platform. Proudly created with Platform.ru" }}
      </div>
    </div>

    <slot></slot>
  </div>
</template>

<script>
import { PAGE_BLOCK_FOOTER_LAYOUTS } from "../../../../../stubs/tools-pages";
import previewMixin from "../../../../../mixins/pages-block-preview";

export default {
  name: "ToolsPagesBlocksFooterPreview",
  mixins: [previewMixin],
  data() {
    return {
      layouts: PAGE_BLOCK_FOOTER_LAYOUTS
    };
  }
};
</script>

<style scoped></style>
