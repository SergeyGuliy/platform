<template>
  <div class="create-course-box__body">
    <div class="create-course-box__body-title">
      <div class="create-course-box__body-title-name">Учебный план</div>
      <div class="create-course-box__body-title-caption">
        Начните составлять свой курс, создав разделы, лекции и практические задания (тесты и упражнения по написанию
        кода) ниже.
      </div>
    </div>
    <div class="create-course-box__body-content fill-width">
      <div class="content-course-box">
        <PlanChapter
          @next="next"
          v-for="(chapter, index) in chapters"
          :config="chapter"
          :index="index"
          :key="index"
        ></PlanChapter>
        <div class="content-course-box__additional">
          <button type="button" class="btn btn_add" @click="addChapter">
            <v-icon src="plus"></v-icon><span class="fs16">Добавить раздел</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PlanChapter from "./PlanChapter";
import AbstractChapterBinder from "@/updated/modules/learning/user-courses/new-course-plan/Chapter/AbstractChapterBuilder";
import { required } from "vuelidate/src/validators";
export default {
  name: "ChaptersList",
  mixins: [AbstractChapterBinder({ formValidation: required })],
  components: { PlanChapter }
};
</script>

<style scoped></style>
