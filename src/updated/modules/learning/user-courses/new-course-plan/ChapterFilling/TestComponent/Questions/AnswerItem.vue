<template>
  <div class="content-course-box__question-form-item" :class="{ active: !!formData.answer }">
    <div class="content-course-box__question-form-item-radio">
      <RadioButton :config="{ value: index }" @change="changeValue"></RadioButton>
    </div>
    <div class="content-course-box__question-form-item-answer">
      <div class="content-course-box__question-form-item-answer-main">
        <div class="form-group">
          <v-input name="name" placeholder="Например: “Photoshop с нуля”" v-model="formData.answer"></v-input>
        </div>
      </div>
      <div class="content-course-box__question-form-item-answer-detail">
        <div class="form-group">
          <v-input name="name" placeholder="Например: “Photoshop с нуля”" v-model="formData.explanation"></v-input>
        </div>
      </div>
    </div>
    <div class="content-course-box__question-form-item-delete">
      <button type="button" class="__clean-btn" @click="removeAnswer(index)">
        <v-icon src="delete" />
      </button>
    </div>
  </div>
</template>

<script>
import RadioButton from "../../../../../../../common/components/RadioButtonList/RadioButton";
import AbstractQuestionBinder from "@/updated/modules/learning/user-courses/new-course-plan/ChapterFilling/TestComponent/Questions/AbstractQuestionBuilder";
import { required } from "vuelidate/src/validators";
export default {
  name: "AnswerItem",
  components: { RadioButton },
  props: ["item", "index", "questionId"],
  mixins: [
    AbstractQuestionBinder({
      formData: "item",
      formValidation: { explanation: { required }, answer: { required } }
    })
  ]
};
</script>

<style scoped></style>
