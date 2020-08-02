<template>
  <div class="uploader-descriptor__control-item-result-content">
    <button type="button" class="__clean-btn upload-result video-reset" @click="removeResource(config.index)">
      <i :style="{ width: config.progress }"></i><span>{{ config.name }}</span>
      <v-icon src="delete"></v-icon>
    </button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import { LEARNING_LECTURE_RESOURCE_REMOVE } from "@/updated/modules/learning/store/mutation-types";

export default {
  name: "Stick",
  props: ["config"],
  methods: {
    ...mapMutations("learning", [LEARNING_LECTURE_RESOURCE_REMOVE]),
    removeResource(idx) {
      this[LEARNING_LECTURE_RESOURCE_REMOVE]({
        chapterId: this.$route.params.chapterId,
        lectureId: this.config.fillerId,
        idx
      });
    }
  }
};
</script>

<style scoped></style>
