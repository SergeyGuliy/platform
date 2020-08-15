<template>
  <div class="uploader-descriptor__control-item" :class="{ active: config.isActive }">
    <div class="uploader-descriptor__control-item-result">
      <div class="uploader-descriptor__control-item-result-label input-label">
        {{ config.label }} (<span class="file-size">{{ config.size }}</span> MB )
      </div>
      <Stick
        :config="{ name: config.name, progress: config.progress, directiveId: config.directiveId }"
        :cleanById="cleanById"
      />
    </div>
    <div class="uploader-descriptor__control-item-action">
      <label v-upload:[config.directiveId]="emitUpload">
        <span class="btn btn_add">
          <v-icon src="plus"></v-icon>
          <span class="fs16">{{ config.preview }}</span>
        </span>
      </label>
    </div>
  </div>
</template>

<script>
import { UploadDirective } from "../../../../directives/uploadDirective";
import Stick from "./Stick";

export default {
  name: "VideoControl",
  directives: { upload: UploadDirective },
  components: { Stick },
  props: ["config", "cleanById"],
  methods: {
    emitUpload(data) {
      this.$emit("uploadFile", data);
    }
  }
};
</script>

<style scoped></style>
