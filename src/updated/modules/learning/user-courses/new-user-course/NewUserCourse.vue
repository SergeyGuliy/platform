<template>
  <div class="platform-user-course">
    <new-user-course-header
      :are-control-buttons-visible="!isLastStep"
      :form-fill-progress="formFillProgress"
      :is-next-button-visible="isNextButtonVisible"
      :is-previous-step-visible="!!previousStep"
      @createCourse="createCourse()"
      @next="next()"
      @previous="previous()"
    ></new-user-course-header>
    <router-view class="platform-user-course__content" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

import NewUserCourseHeader from "./NewUserCourseHeader";

import {
  LEARNING_CREATE_COURSE_ACTIVE_STEP,
  LEARNING_CREATE_COURSE_FINAL_CREATE_REQUEST,
  LEARNING_CREATE_COURSE_NEXT_STEP_REQUEST,
  LEARNING_GET_CURRENT_COURSE_DATA
} from "../../store/mutation-types";

export default {
  components: {
    "new-user-course-header": NewUserCourseHeader
  },
  computed: {
    ...mapGetters("learning", [
      "nextStep",
      "previousStep",
      "isActiveStepValid",
      "formFillProgress",
      "isNextButtonVisible",
      "isLastStep",
      "currentCourseData"
    ])
  },
  methods: {
    ...mapMutations("learning", [LEARNING_CREATE_COURSE_ACTIVE_STEP, LEARNING_CREATE_COURSE_NEXT_STEP_REQUEST]),
    ...mapMutations("modal", ["SET_MODAL"]),
    ...mapActions("learning", [LEARNING_CREATE_COURSE_FINAL_CREATE_REQUEST, LEARNING_GET_CURRENT_COURSE_DATA]),
    navigateToStep(step) {
      this[LEARNING_CREATE_COURSE_NEXT_STEP_REQUEST]({ isActive: false });
      this.$router.push({
        path: `/create-course/${step}`
      });
    },
    next() {
      if (this.isActiveStepValid) {
        this.navigateToStep(this.nextStep.title);
      } else {
        this[LEARNING_CREATE_COURSE_NEXT_STEP_REQUEST]({
          isActive: true
        });
      }
    },
    previous() {
      this.navigateToStep(this.previousStep.title);
    },
    createCourse() {
      this[LEARNING_CREATE_COURSE_FINAL_CREATE_REQUEST]();
    },
    requestCourseData(vm, courseId) {
      vm[LEARNING_GET_CURRENT_COURSE_DATA]({ courseId });
    },
    openCourseCreationCompleteModal(nextHandler) {
      this.SET_MODAL({
        component: "CourseCreationComplete",
        data: { nextHandler }
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      !vm.currentCourseData && vm.requestCourseData(vm, to.params.id);
      vm[LEARNING_CREATE_COURSE_ACTIVE_STEP]({
        stepTitle: to.meta.stepTitle
      });
    });
  },
  beforeRouteUpdate(to, from, next) {
    this[LEARNING_CREATE_COURSE_ACTIVE_STEP]({
      stepTitle: to.meta.stepTitle
    });
    next();
  },
  beforeRouteLeave(to, from, next) {
    this.openCourseCreationCompleteModal(next);
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/variables";

.platform-user-course {
  &__content {
    margin-top: 46px;
    padding: 0 128px;

    @media (max-width: $screen-sm-max) {
      padding: 0 32px;
    }

    @media (max-width: $screen-xs-max) {
      padding: 0 12px;
      margin-top: 22px;
    }
  }
}
</style>
