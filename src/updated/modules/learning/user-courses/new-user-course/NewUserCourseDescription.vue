<template>
  <div class="platform-user-course-description">
    <div class="abstract-new-course-step__title">
      <div class="abstract-new-course-step__title-name">
        Описание курса
      </div>
      <div class="abstract-new-course-step__title-caption">
        Добавьте описание курса чтобы помочь студентам больше узнать о курсе и о том чего они могут научиться здесь.
      </div>
    </div>
    <div class="abstract-new-course-step__content">
      <v-input
        :max-length="60"
        class="abstract-new-course-step__control"
        name="title"
        placeholder="Например: “Photoshop с нуля”"
        title="Название курса"
        v-model="formData.title"
      ></v-input>
      <v-input
        :max-length="80"
        class="abstract-new-course-step__control"
        name="subtitle"
        placeholder="Например: “Photoshop с нуля”"
        title="Подзаголовок курса"
        v-model="formData.subtitle"
      ></v-input>
      <div class="abstract-new-course-step__control">
        <platform-editor
          :richEditorOptions="descriptionEditorOptions"
          v-model="formData.extendedDescription"
          title="Описание курса"
        ></platform-editor>
        <div class="abstract-new-course-step__form-group-caption">
          Минимум 300 символов
        </div>
      </div>

      <div class="abstract-new-course-step__control platform-user-course-description__subject-control">
        <v-input
          name="subject"
          class="platform-user-course-description__subject-control-input"
          title="Какой основной предмет вашего курса?"
          placeholder="Например: “Photoshop с нуля”"
          v-model="formData.subject"
        ></v-input>
        <v-icon src="info" class="platform-user-course-description__subject-control-icon" />
      </div>
      <v-select
        class="abstract-new-course-step__control"
        name="category"
        placeholder="Дизайн"
        title="Категория"
        v-model="formData.category"
        :options="categoriesGetter"
      ></v-select>
      <v-select
        class="abstract-new-course-step__control"
        name="level"
        placeholder="Дизайн"
        title="Уровень"
        v-model="formData.level"
        :options="levelsGetter"
      ></v-select>
      <v-select
        class="abstract-new-course-step__control"
        name="language"
        placeholder="Дизайн"
        title="Язык"
        v-model="formData.language"
        :options="langsGetter"
      ></v-select>
    </div>

    <span v-if="nextStepRequest && !isActiveStepValid" style="color: red">Not Valid</span>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/src/validators";

import AbstractNewCourseStepFormBinder from "./AbstractNewCourseStepFormBinder";
import { richEditorOptionPrimaryPack } from "@/updated/common/constants/rich-editor-options";
import Editor from "../../../../common/components/Editor";
import { LEARNING_GET_LANGS, LEARNING_GET_LEVELS } from "@/updated/modules/learning/store/mutation-types";

export default {
  mixins: [
    AbstractNewCourseStepFormBinder({
      fieldName: "description",
      formValidation: {
        title: { required },
        subtitle: { required },
        extendedDescription: { required, minLength: minLength(300) },
        subject: { required },
        category: { required },
        level: { required },
        language: { required }
      }
    })
  ],
  created() {
    this[LEARNING_GET_LEVELS]();
    this[LEARNING_GET_LANGS]();
  },
  components: { "platform-editor": Editor },
  data() {
    return {
      selectOptions: [
        { label: "one", value: 1 },
        { label: "two", value: 2 }
      ],
      descriptionEditorOptions: richEditorOptionPrimaryPack
    };
  }
};
</script>

<style scoped lang="scss">
@import "./abstract-new-course-step";

.platform-user-course-description {
  &__subject-control {
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  &__subject-control-input {
    width: calc(100% - 32px);
    margin-bottom: 0;
  }

  &__subject-control-icon {
    position: absolute;
    right: 0;
    bottom: 8px;
    text-align: right;
    font-size: 24px;
    color: #8e99ab;
    cursor: pointer;
  }
}
</style>
