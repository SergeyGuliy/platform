<template>
  <v-base-swiper-slide>
    <slot></slot>
  </v-base-swiper-slide>
</template>

<script>
import { SwiperSlide } from "vue-awesome-swiper";

export default {
  name: "SwiperItem",
  components: {
    "v-base-swiper-slide": SwiperSlide
  }
};
</script>

<style scoped></style>
