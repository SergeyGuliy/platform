<template>
  <div>
    <div class="create-course-box__body-title">
      <div class="create-course-box__body-title-name">Категория по теме курса</div>
      <div class="create-course-box__body-title-caption">
        Если вы пока не определились с категорией, ничего страшнего.<br />Ее можно будет потом отредактировать
      </div>
    </div>
    <div class="abstract-new-course-step__content">
      <v-select :options="categoriesGetter" name="category" placeholder="Дизайн" v-model="formData.category"></v-select>
    </div>

    <div v-if="nextStepRequest && !isActiveStepValid" style="color: red">
      Not valid
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/src/validators";

import AbstractNewCourseStepFormBinder from "./AbstractNewCourseStepFormBinder";
import { LEARNING_GET_CATEGORIES } from "@/updated/modules/learning/store/mutation-types";

export default {
  mixins: [
    AbstractNewCourseStepFormBinder({
      fieldName: "category",
      formValidation: { category: { required } }
    })
  ],
  created() {
    this[LEARNING_GET_CATEGORIES]();
  }
};
</script>

<style scoped lang="scss">
@import "./abstract-new-course-step";
</style>
