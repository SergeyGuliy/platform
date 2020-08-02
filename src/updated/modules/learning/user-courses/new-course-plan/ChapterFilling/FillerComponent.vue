<template>
  <div class="content-course-box">
    <div id="swap-box" class="content-course-box__items swap-box">
      <component :is="config.label" :config="config" :chapter-id="chapterId"></component>
    </div>
    <div class="content-course-box__additional" :class="{ active: isActive }">
      <button type="button" class="btn btn_plus" :class="{ active: isActive }" @click="toggle">
        <v-icon src="plus" />
      </button>
      <div class="content-course-box__additional-list ">
        <ul class="list">
          <li>
            <button type="button" id="addLecture" class="btn btn_add" @click="addLecture(lastLectureId, 'lecture')">
              <v-icon src="plus" /><span class="fs16">Лекция</span>
            </button>
          </li>
          <li>
            <button type="button" class="btn btn_add" @click="addLecture(lastTestId, 'test')">
              <v-icon src="plus" /><span class="fs16">Тест</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import LectureComponent from "./LectureComponent/LectureComponent";
import TestComponent from "./TestComponent/TestComponent";
import AbstractChapterFillerBinder from "@/updated/modules/learning/user-courses/new-course-plan/ChapterFilling/AbstractChapterFillerBuilder";
export default {
  name: "FillerComponent",
  props: ["config", "chapterId"],
  mixins: [AbstractChapterFillerBinder()],
  components: {
    lecture: LectureComponent,
    test: TestComponent
  },
  data() {
    return {
      isActive: false
    };
  }
};
</script>

<style lang="scss" scoped>
.content-course-box__additional {
  margin-bottom: 20px;
}
</style>
