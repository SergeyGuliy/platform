<template>
  <div :class="getClasses" :style="getStyle">
    <div v-if="block.title" class="builder-box__layouts-text-title">{{ block.title }}</div>

    <div v-if="isGrid" class="builder-box__layouts-gallery">
      <div v-for="media in block.media" :class="getGridClasses">
        <img :src="media.preview" alt="" />
      </div>
    </div>
    <div v-else-if="isSlider" class="builder-box__layouts-gallery">
      <v-swiper>
        <v-swiper-item v-for="(media, index) in block.media" :key="`slide-${index}`">
          <img :src="media.preview" />
        </v-swiper-item>
      </v-swiper>
    </div>

    <slot></slot>
  </div>
</template>

<script>
import { PAGE_BLOCK_GALLERY_LAYOUTS } from "../../../../../stubs/tools-pages";
import previewMixin from "../../../../../mixins/pages-block-preview";

export default {
  name: "ToolsPagesBlocksGalleryPreview",
  mixins: [previewMixin],
  data() {
    return {
      layouts: PAGE_BLOCK_GALLERY_LAYOUTS
    };
  },
  computed: {
    isGrid() {
      return ["grid-small", "grid-small-left", "grid-big", "grid-big-left"].indexOf(this.getLayout) !== -1;
    },
    smallGrid() {
      return ["grid-small", "grid-small-left"].indexOf(this.getLayout) !== -1;
    },
    bigGrid() {
      return ["grid-big", "grid-big-left"].indexOf(this.getLayout) !== -1;
    },
    getGridClasses() {
      return {
        "builder-box__layouts-gallery-small-img": this.smallGrid,
        "builder-box__layouts-gallery-middle-img": this.bigGrid
      };
    },

    isSlider() {
      return ["slider", "slider-left"].indexOf(this.getLayout) !== -1;
    }
  }
};
</script>

<style scoped></style>
