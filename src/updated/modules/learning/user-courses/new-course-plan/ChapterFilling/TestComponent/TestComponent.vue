<template>
  <div class="content-course-box__item swap-item">
    <div class="content-course-box__head">
      <div class="content-course-box__action">
        <v-icon src="drag" />
      </div>
      <div class="content-course-box__title content-course-box__title_delete">
        Тест {{ testId }}
        <button class="__clean-btn">
          <v-icon src="delete" />
        </button>
      </div>
    </div>
    <div class="content-course-box__body">
      <div class="content-course-box__name">
        <div class="form-group form-group_numeric">
          <label>Название лекции</label>
          <v-input
            :max="40"
            :counter="true"
            name="name"
            placeholder="Например: “Photoshop с нуля”"
            v-model="formData.name"
          ></v-input>
        </div>
        <div class="form-group form-group_numeric">
          <label>Описание</label>
          <v-textarea
            :max="200"
            :counter="true"
            name="name"
            placeholder="Например: “Photoshop с нуля”"
            v-model="formData.description"
          ></v-textarea>
        </div>
      </div>
    </div>
    <div class="content-course-box__questions" v-if="getQuestions.length">
      <div class="content-course-box__questions-title block-title">Вопросы</div>
      <QuestionStick
        v-for="(question, index) in getQuestions"
        :config="{ ...question, testId: testId }"
        :index="index"
        :key="question.id"
      ></QuestionStick>
    </div>

    <div class="content-course-box__add-section">
      <button type="button" class="btn btn_add" @click="addQuestion(getLastQuestionId)">
        <v-icon src="plus" />
        <span class="fs16">Добавить вопрос</span>
      </button>
    </div>
  </div>
</template>

<script>
import QuestionStick from "../../../components/QuestionStick";
import AbstractTestComponentBinder from "@/updated/modules/learning/user-courses/new-course-plan/ChapterFilling/TestComponent/AbstractTestComponentBuilder";
import { required } from "vuelidate/src/validators";
export default {
  name: "TestComponent",
  props: ["config", "chapterId"],
  components: { QuestionStick },
  mixins: [
    AbstractTestComponentBinder({
      formData: "config",
      formValidation: {
        name: { required },
        description: { required }
      }
    })
  ]
};
</script>

<style scoped></style>
