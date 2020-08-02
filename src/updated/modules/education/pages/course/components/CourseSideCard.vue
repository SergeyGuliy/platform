<template>
  <div class="learn-cours__video-card">
    <div class="video-card__title" v-html="title"></div>
    <div class="video-card__subtitle" v-html="subTitle"></div>
    <div class="video-card__player">
      <video
        src="#"
        width="100%"
        height="100%"
        poster="../../../../../../assets/images/base-photo.png"
        controls="controls"
      ></video>
    </div>
    <v-button @click="$emit('click', $event)">Начать курс</v-button>
  </div>
</template>

<script>
import VButton from "../../../../../common/components/VButton";
export default {
  components: {
    VButton
  },
  props: {
    title: String,
    subTitle: String
  }
};
</script>

<style lang="scss"></style>
