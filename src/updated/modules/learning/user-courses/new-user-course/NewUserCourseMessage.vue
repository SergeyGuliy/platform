<template>
  <div class="platform-user-course-message">
    <div class="abstract-new-course-step__title">
      <div class="abstract-new-course-step__title-name">
        Сообщение курса
      </div>
      <div class="abstract-new-course-step__title-caption">
        Чтобы привлечь студентов к работе с материалами курса, напишите сообщения (необязательно), которые будут
        автоматически отправляться им после регистрации на курс или его завершения. Если вы не хотите отправлять
        сообщения с приветствием или поздравлениями, оставьте эти текстовые поля пустыми.
      </div>
    </div>
    <div class="abstract-new-course-step__content">
      <v-textarea
        name="greetings"
        v-model="formData.greetings"
        title="Приветствие"
        :counter="true"
        :max="1000"
        class="platform-user-course-message__greetings"
      ></v-textarea>
      <v-textarea
        name="greetings"
        v-model="formData.congratulations"
        title="Поздравление"
        :counter="true"
        :max="1000"
      ></v-textarea>
    </div>
  </div>
</template>

<script>
import AbstractNewCourseStepFormBinder from "./AbstractNewCourseStepFormBinder";

export default {
  mixins: [
    AbstractNewCourseStepFormBinder({
      fieldName: "message",
      formValidation: {}
    })
  ]
};
</script>

<style scoped lang="scss">
@import "./abstract-new-course-step";

.platform-user-course-message {
  &__greetings {
    margin-bottom: 24px;
  }
}
</style>
