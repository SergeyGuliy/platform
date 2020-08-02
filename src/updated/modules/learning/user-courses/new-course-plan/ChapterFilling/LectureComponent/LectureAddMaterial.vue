<template>
  <div class="content-course-box__add-section">
    <button type="button" class="btn btn_add" v-if="!config.videoData.video">
      <v-icon src="plus" />
      <span class="fs16" @click="next('v-material')">Добавить материалы (видео, статья)</span>
    </button>
    <button type="button" class="btn btn_add" v-if="!config.description">
      <v-icon src="plus" />
      <span class="fs16" @click="next('v-description')">Добавить описание лекции</span>
    </button>
    <button type="button" class="btn btn_add" v-upload:resource="emitResource">
      <v-icon src="plus" />
      <span class="fs16">Добавить ресурсы на скачивание</span>
    </button>
  </div>
</template>

<script>
import { UploadDirective } from "@/updated/directives/uploadDirective";

export default {
  name: "LectureAddMaterial",
  directives: { upload: UploadDirective },
  props: ["config"],
  methods: {
    next(to) {
      this.$emit("emitData", { name: "navigation", to });
    },
    emitResource(file) {
      this.$emit("emitData", { name: "resource", file });
    }
  }
};
</script>

<style scoped></style>
