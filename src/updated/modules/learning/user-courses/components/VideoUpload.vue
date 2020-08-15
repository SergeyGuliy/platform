<template>
  <div class="uploader-descriptor">
    <div class="uploader-descriptor__control">
      <VideoControlStick
        v-for="control in controls"
        :config="control"
        :key="control.label"
        @uploadFile="coverUpload"
        :cleanById="cleanById"
      ></VideoControlStick>
    </div>
    <VideoPlayer :show-key="showKey" :video-data="videoData"></VideoPlayer>
  </div>
</template>

<script>
import { UploadDirective } from "@/updated/directives/uploadDirective";
import VideoControlStick from "./VideoControl";
import VideoPlayer from "./VideoPlayer";
export default {
  name: "VideoUpload",
  directives: { upload: UploadDirective },
  components: { VideoPlayer, VideoControlStick },
  props: ["videoData", "showKey", "controls", "cleanById"],
  methods: {
    coverUpload(file) {
      this.$emit("uploadFileData", file);
    }
  }
};
</script>

<style lang="scss" scoped>
.uploader-box__result {
  display: block;
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
