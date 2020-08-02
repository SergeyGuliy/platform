<template>
  <div class="platform-user-course-requirements">
    <div class="abstract-new-course-step__title">
      <div class="abstract-new-course-step__title-name">
        Задача и требования
      </div>
      <div class="abstract-new-course-step__title-caption">
        Добавьте описание курса чтобы помочь студентам больше узнать о курсе и о том чего они могут научиться здесь.
      </div>
    </div>
    <div class="abstract-new-course-step__content">
      <new-user-requirements-section
        :form-data="formData"
        :itemKey="section.key"
        :key="section.key"
        :title="section.label"
        v-for="section in sectionList"
        class="platform-user-course-requirements__section"
      ></new-user-requirements-section>
    </div>
    <div v-if="nextStepRequest && !isActiveStepValid" style="color: red">
      Not valid
    </div>
  </div>
</template>

<script>
import reject from "lodash/reject";
import { required } from "vuelidate/src/validators";

import AbstractNewCourseStepFormBinder from "../AbstractNewCourseStepFormBinder";
import NewUserCourseRequirementsSection from "./NewUserCourseRequirementsSection";
import { LEARNING_CREATE_COURSE_FILL_FORM_FIELD } from "../../../store/mutation-types";

export default {
  components: {
    "new-user-requirements-section": NewUserCourseRequirementsSection
  },
  mixins: [
    AbstractNewCourseStepFormBinder({
      fieldName: "requirements",
      formValidation: {
        learningPlan: { $each: { value: { required } } },
        preliminaryRequirements: { $each: { value: { required } } },
        targetAudience: { $each: { value: { required } } }
      }
    })
  ],
  data() {
    return {
      sectionList: [
        {
          key: "learningPlan",
          label: "Что студенты будут изучать на вашем курсе?"
        },
        {
          key: "preliminaryRequirements",
          label: "Существуют ли у курса какие-либо (предварительные) требования?"
        },
        {
          key: "targetAudience",
          label: "Какова ваша целевая аудитория?"
        }
      ]
    };
  },
  methods: {
    addAnswer(key) {
      const updatedFormValue = {
        ...this.formData,
        [key]: [...this.formData[key], { value: null }]
      };

      this.updateRequirementsFormValue(updatedFormValue);
    },
    removeAnswer(key, index) {
      const updatedFormValue = {
        ...this.formData,
        [key]: reject(this.formData[key], (_, itemIndex) => itemIndex === index)
      };
      this.updateRequirementsFormValue(updatedFormValue);
    },
    updateRequirementsFormValue(updatedFormValue) {
      this[LEARNING_CREATE_COURSE_FILL_FORM_FIELD]({
        name: "requirements",
        value: updatedFormValue
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "../abstract-new-course-step";

.platform-user-course-requirements {
  &__section {
    &:not(:last-of-type) {
      margin-bottom: 26px;
    }
  }
}
</style>
