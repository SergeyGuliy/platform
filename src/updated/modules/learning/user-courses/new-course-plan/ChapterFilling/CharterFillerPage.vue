<template>
  <div class="create-course-box__body">
    <div class="create-course-box__body-title">
      <button type="button" class="__clean-btn create-course-box__body-title-back" @click="goToChapter">
        <v-icon src="back" />
        <span>
          {{ getChapterName || "" }}
        </span>
      </button>
    </div>
    <div class="create-course-box__body-content fill-width">
      <FillerComponent
        v-for="(component, index) in lectures"
        :key="index"
        :config="component"
        :chapterId="$route.params.chapterId"
      ></FillerComponent>
    </div>
  </div>
</template>

<script>
import FillerComponent from "./FillerComponent";
import AbstractChapterFillerBinder from "@/updated/modules/learning/user-courses/new-course-plan/ChapterFilling/AbstractChapterFillerBuilder";

export default {
  name: "CharterFillerPage",
  components: { FillerComponent },
  mixins: [AbstractChapterFillerBinder()],
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style scoped></style>
