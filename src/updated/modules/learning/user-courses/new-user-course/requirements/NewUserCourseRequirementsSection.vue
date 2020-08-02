<template>
  <div class="platform-user-course-requirements-section">
    <div
      v-for="(learningPlanItem, index) in formData[itemKey]"
      :key="index"
      class="platform-user-course-requirements-section__item"
    >
      <v-input
        class="platform-user-course-requirements-section__input"
        :title="index ? '' : title"
        name="learningPlanItem.value"
        placeholder="Пример: нотная грамота и умение читать с листа"
        v-model="learningPlanItem.value"
      ></v-input>
      <v-btn
        class="platform-user-course-requirements-section__remove-button"
        :clear="true"
        @click="removeAnswer(itemKey, index)"
        v-if="!!index"
      >
        <span>Удалить ответ</span>
      </v-btn>
    </div>
    <div class="add-input-box__action" @click="addAnswer(itemKey)">
      <button data-name="name1" data-placeholder="test placeholder1" class="btn btn_add">
        <v-icon src="plus"></v-icon><span>Добавить ответ</span>
      </button>
    </div>
  </div>
</template>

<script>
import reject from "lodash/reject";
import { mapMutations } from "vuex";

import { LEARNING_CREATE_COURSE_FILL_FORM_FIELD } from "../../../store/mutation-types";

export default {
  props: {
    title: { type: String, required: true },
    itemKey: { type: String, required: true },
    formData: { type: Object, required: true }
  },
  methods: {
    ...mapMutations("learning", [LEARNING_CREATE_COURSE_FILL_FORM_FIELD]),
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
.platform-user-course-requirements-section {
  &__input {
    width: 100%;
    margin-bottom: 5px;
  }

  &__item {
    display: flex;
    align-items: center;
    position: relative;
  }

  &__remove-button {
    position: absolute;
    top: 0;
    right: -180px;
  }
}
</style>
