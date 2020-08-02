<template>
  <div class="uploader-descriptor__view">
    <div class="uploader-descriptor__view-preview">
      <media-player v-if="showKey > 0" :config="videoData" :key="showKey" />
      <v-icon v-if="showKey === 0" src="play"></v-icon>
    </div>
    <div class="uploader-descriptor__view-caption" v-show="videoData.video.name">
      <p>
        <b>{{ videoData.video.name }}</b>
      </p>
      <span class="duration">08:12</span>
      <span class="subtitles">
        <v-icon src="subtitles"></v-icon>
      </span>
    </div>
  </div>
</template>

<script>
import MediaPlayer from "../../../../common/components/Mediaplayer";

export default {
  name: "VideoPlayer",
  components: { MediaPlayer },
  props: ["showKey", "videoData"]
};
</script>

<style lang="scss" scoped>
.uploader-box__result {
  display: block;
}
.uploader-descriptor__view {
  margin-top: 0;
  width: 240px;
}
.uploader-descriptor__view-caption {
  position: relative;
  p {
    max-width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .duration {
    position: absolute;
    top: 1px;
    right: 0;
  }
}
</style>
