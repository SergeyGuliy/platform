<template>
  <vue-plyr :options="{ controls }">
    <video controls crossorigin playsinline :poster="config.poster.src" id="video_player">
      <source :src="config.video.src" :type="config.video.type" />
      <!--      <track kind="captions" :label="config.trackLabel" :srclang="config.trackLang" :src="config.track.src" default />-->
    </video>
  </vue-plyr>
</template>

<script>
import VuePlyr from "vue-plyr";

export default {
  name: "VMediaPlayer",
  props: {
    config: { type: Object }
  },
  data() {
    return {
      controls: ["play", "progress", "mute", "volume", "settings", "fullscreen"]
    };
  },
  components: {
    VuePlyr
  }
};
</script>

<style scoped></style>
