<template>
  <div>
    <div class="abstract-new-course-step__title">
      <div class="abstract-new-course-step__title-name">
        Сколько времени планируете выделять на курс?
      </div>
      <div class="abstract-new-course-step__title-caption">
        На этот вопрос можно дать любой ответ. Мы сможем помочь вам достичь поставленной цели, даже если у вас не очень
        много свободного времени.
      </div>
    </div>
    <radio-button-list :config="timesGetter" @value="setRadioButtonValue" />

    <div v-if="nextStepRequest && !isActiveStepValid" style="color: red">
      Not valid
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/src/validators";

import AbstractNewCourseStepFormBinder from "./AbstractNewCourseStepFormBinder";
import RadioButtonList from "../../../../common/components/RadioButtonList/RadioButtonList";
import { LEARNING_GET_TIMES } from "@/updated/modules/learning/store/mutation-types";

export default {
  mixins: [
    AbstractNewCourseStepFormBinder({
      fieldName: "time",
      formValidation: { time: { required } }
    })
  ],
  created() {
    this[LEARNING_GET_TIMES]();
  },
  components: { RadioButtonList },
  methods: {
    setRadioButtonValue(value) {
      this.formData.time = value;
    }
  }
};
</script>

<style scoped lang="scss">
@import "./abstract-new-course-step";
</style>
