<template>
  <div :class="getClasses" :style="getStyle">
    <div class="builder-box__header-options-content">
      <div class="builder-box__header-options-image">
        <img v-if="block.media" :src="block.media.preview" />
      </div>

      <a v-if="block.phone" :href="`tel:${block.phone}`" class="builder-box__header-options-call">
        <v-icon src="phone-call" />
      </a>

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

    <slot></slot>
  </div>
</template>

<script>
import { PAGE_BLOCK_HEADER_LAYOUTS } from "../../../../../stubs/tools-pages";
import previewMixin from "../../../../../mixins/pages-block-preview";

export default {
  name: "ToolsPagesBlocksHeaderPreview",
  mixins: [previewMixin],
  data() {
    return {
      layouts: PAGE_BLOCK_HEADER_LAYOUTS
    };
  }
};
</script>

<style scoped></style>
