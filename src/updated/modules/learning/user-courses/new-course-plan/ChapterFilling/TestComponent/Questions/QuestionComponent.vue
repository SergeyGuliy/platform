<template>
  <div class="content-course-box__item swap-item">
    <div class="content-course-box__head">
      <div class="content-course-box__action">
        <v-icon src="drag" />
      </div>
      <div class="content-course-box__title content-course-box__title_delete">
        Вопрос {{ config.id }}
        <button type="button" class="__clean-btn" @click="reset">
          <v-icon src="delete" />
        </button>
      </div>
    </div>
    <div class="content-course-box__body">
      <div class="content-course-box__name">
        <div class="form-group form-group_numeric">
          <label>Вопрос</label>
          <platform-editor
            :richEditorOptions="descriptionEditorOptions"
            v-model="formData.questionText"
            name="name"
          ></platform-editor>
        </div>
      </div>
      <div class="content-course-box__question">
        <div class="content-course-box__question-title">Ответы</div>
        <div class="content-course-box__question-caption">
          Добавьте ответы; укажите почему ответ правильный или неправильный; отметьте правильный ответ
        </div>
        <div class="content-course-box__question-form">
          <div class="content-course-box__question-form-items">
            <AnswerItem
              v-for="(answer, index) in formData.answers"
              :item="answer"
              :index="index"
              :questionId="formData.id"
              :key="index"
              v-model="www"
            ></AnswerItem>
          </div>
          <div class="content-course-box__question-form-action">
            <button type="button" id="addAnswer" class="btn btn_add" @click="addAnswer">
              <v-icon src="plus" /><span>Добавить ответ</span>
            </button>
          </div>
        </div>
        <div class="content-course-box__question-actions">
          <div class="content-course-box__question-action" @click="reset">
            <button type="button" class="btn btn_revert">Отменить</button>
          </div>
          <div class="content-course-box__question-action">
            <button type="button" class="btn" @click="save">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from "../../../../../../../common/components/Editor";
import AnswerItem from "./AnswerItem";
import { richEditorOptionPrimaryPack } from "@/updated/common/constants/rich-editor-options";
import AbstractQuestionBinder from "@/updated/modules/learning/user-courses/new-course-plan/ChapterFilling/TestComponent/Questions/AbstractQuestionBuilder";
import { required } from "vuelidate/src/validators";
export default {
  name: "QuestionComponent",
  props: ["config"],
  components: { "platform-editor": Editor, AnswerItem },
  mixins: [
    AbstractQuestionBinder({
      formData: "config",
      formValidation: {
        questionText: { required },
        answers: {
          required,
          $each: {
            answer: {
              required
            },
            explanation: {
              required
            }
          }
        }
      }
    })
  ],
  data() {
    return {
      www: "",
      descriptionEditorOptions: richEditorOptionPrimaryPack
    };
  }
};
</script>

<style scoped></style>
