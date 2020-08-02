<template>
  <div class="create-course-box__body">
    <div class="create-course-box__body-title">
      <button type="button" class="__clean-btn create-course-box__body-title-back" @click="goToFillerPage">
        <v-icon src="back" /><span>Тест {{ getTestId }}: {{ getTestName }}</span>
      </button>
    </div>
    <div class="create-course-box__body-content fill-width">
      <div class="content-course-box">
        <div id="swap-box" class="content-course-box__items swap-box">
          <QuestionComponent :config="getQuestionById"></QuestionComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuestionComponent from "./QuestionComponent";
import AbstractQuestionBinder from "@/updated/modules/learning/user-courses/new-course-plan/ChapterFilling/TestComponent/Questions/AbstractQuestionBuilder";
export default {
  name: "QuestionPage",
  components: { QuestionComponent },
  mixins: [AbstractQuestionBinder()]
};
</script>

<style scoped></style>
