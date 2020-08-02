<template>
  <v-base-swiper :options="getOptions">
    <slot></slot>

    <div class="swiper-pagination" slot="pagination"></div>
  </v-base-swiper>
</template>

<script>
import { Swiper } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Swiper",
  props: {
    options: {},
    slidesPerView: { type: Number, default: () => 2 }
  },
  components: {
    "v-base-swiper": Swiper
  },
  computed: {
    getOptions() {
      return {
        pagination: {
          el: ".swiper-pagination"
        },
        slidesPerView: this.slidesPerView,
        spaceBetween: 12
      };
    }
  }
};
</script>

<style lang="scss">
.swiper-container {
  padding-bottom: 20px;
}

.left-alignment {
  .swiper-pagination {
    text-align: left;
  }
}

.swiper-pagination {
  position: static;

  &-bullet {
    opacity: 1 !important;
    width: 12px !important;
    height: 12px !important;
    background: #ebeff5 !important;
    margin-left: 0 !important;
    margin-right: 8px !important;

    &-active {
      background: #8e99ab !important;
    }
  }
}
</style>
