<template>
  <div>
    <div class="abstract-new-course-step__title">
      <div class="abstract-new-course-step__title-name">
        Название курса
      </div>
      <div class="abstract-new-course-step__title-caption">
        Если вы пока не придумали окончательное название своего курса, ничего страшнего. Название можно будет потом
        отредактировать
      </div>
    </div>
    <div class="abstract-new-course-step__content">
      <v-input
        :max="60"
        :counter="true"
        name="name"
        placeholder="Например: “Photoshop с нуля”"
        v-model="formData.name"
      ></v-input>
    </div>

    <div v-if="nextStepRequest && !isActiveStepValid" style="color: red">
      Not valid
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/src/validators";

import AbstractNewCourseStepFormBinder from "./AbstractNewCourseStepFormBinder";

export default {
  mixins: [
    AbstractNewCourseStepFormBinder({
      fieldName: "name",
      formValidation: { name: { required } }
    })
  ]
};
</script>

<style scoped lang="scss">
@import "./abstract-new-course-step";
</style>
