<template>
  <div class="create-course-box__head">
    <div class="create-course-box__head-detail">
      <div class="create-course-box__head-exit">
        <button type="button">
          <v-icon src="log-out"></v-icon>
          <v-icon src="close"></v-icon>
        </button>
      </div>
      <div class="create-course-box__head-name">Мой курс</div>
    </div>
    <div class="create-course-box__head-actions" v-if="areControlButtonsVisible">
      <v-btn
        :clear="true"
        @click="previousClickHandler()"
        class="create-course-box__head-action"
        v-if="isPreviousStepVisible"
      >
        Назад
      </v-btn>
      <v-btn @click="nextClickHandler()" class="create-course-box__head-action" v-if="isNextButtonVisible">
        Продолжить
      </v-btn>
      <v-btn @click="createCourseClickHandler()" class="create-course-box__head-action" v-else>
        Создать курс
      </v-btn>
    </div>
    <platforma-progress-bar
      :progress="formFillProgress"
      class="create-course-box__head-progress-bar"
      type="secondary"
    ></platforma-progress-bar>
  </div>
</template>

<script>
import ProgressBar from "../../../../common/components/ProgressBar";

export default {
  props: {
    areControlButtonsVisible: { type: Boolean, required: true },
    formFillProgress: { type: Number, required: true },
    isNextButtonVisible: { type: Boolean, required: true },
    isPreviousStepVisible: { type: Boolean, required: true }
  },
  components: {
    "platforma-progress-bar": ProgressBar
  },
  methods: {
    nextClickHandler() {
      this.$emit("next");
    },
    previousClickHandler() {
      this.$emit("previous");
    },
    createCourseClickHandler() {
      this.$emit("createCourse");
    }
  }
};
</script>
