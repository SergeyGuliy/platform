import { validationMixin } from "vuelidate";
import { mapGetters, mapMutations } from "vuex";

import {
  LEARNING_ADD_CHAPTER_TO_PLAN,
  LEARNING_CREATE_COURSE_NEXT_STEP_REQUEST,
  LEARNING_SET_ACTIVE_PLAN_ID
} from "../../../store/mutation-types";
import { LEARNING_LECTURE_REMOVE_FILLER } from "@/updated/modules/learning/store/mutation-types";
import router from "@/config/router";
import { newCourseLecture } from "@/updated/modules/learning/models/learning-courses-router-names";

const AbstractChapterBinder = ({ fieldName, formValidation } = {}) => ({
  mixins: [validationMixin],
  computed: {
    ...mapGetters("learning", [
      "nextStep",
      "previousStep",
      "isActiveStepValid",
      "coursePlanChapters",
      "lastPlanChapterId",
      "coursePlanChapters",
      "getCharterParamValueById"
    ]),
    chapters() {
      return this.coursePlanChapters;
    },
    fillers() {
      return this.getCharterParamValueById("filler", this.config.id);
    },
    chapterName: {
      get: function() {
        return this.config[fieldName];
      },
      set: function(val) {
        this.config[fieldName] = val;
      }
    }
  },
  validations: { chapterName: { formValidation } },
  methods: {
    ...mapMutations("learning", [
      LEARNING_CREATE_COURSE_NEXT_STEP_REQUEST,
      LEARNING_SET_ACTIVE_PLAN_ID,
      LEARNING_ADD_CHAPTER_TO_PLAN,
      LEARNING_LECTURE_REMOVE_FILLER,
      LEARNING_LECTURE_REMOVE_FILLER
    ]),
    next() {
      if (!this.$v.$invalid) {
        router.push({ name: newCourseLecture, params: { chapterId: this.config.id } });
      }
    },
    remove(fillerId, label) {
      this[LEARNING_LECTURE_REMOVE_FILLER]({
        chapterId: this.config.id,
        fillerId,
        label
      });
    },
    previous() {
      this.navigateToStep(this.previousStep.title);
    },
    addChapter() {
      this[LEARNING_ADD_CHAPTER_TO_PLAN]({
        id: this.lastPlanChapterId + 1,
        name: null,
        filler: []
      });
    }
  }
});

export default AbstractChapterBinder;
