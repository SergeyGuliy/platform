import { validationMixin } from "vuelidate";
import { mapGetters, mapMutations } from "vuex";
import { newCourseLecture } from "@/updated/modules/learning/models/learning-courses-router-names";
import router from "@/config/router";
import {
  LEARNING_REMOVE_ANSWER,
  LEARNING_REMOVE_QUESTION_FROM_TEST,
  LEARNING_SAVE_QUESTION_TO_TEST,
  LEARNING_SET_CORRECT_ANSWER
} from "@/updated/modules/learning/store/mutation-types";
const AbstractQuestionBinder = ({ formData, formValidation } = {}) => ({
  mixins: [validationMixin],
  computed: {
    ...mapGetters("learning", ["getTestValueById"]),
    getTestName() {
      return this.getTestValueById(this.$route.params.chapterId, this.$route.params.testId, "name");
    },
    selectedQuestionId() {
      return this.$route.params.questionId;
    },
    getTestId() {
      return this.getTestValueById(this.$route.params.chapterId, this.$route.params.testId, "id");
    },
    getTestQuestions() {
      return this.getTestValueById(this.$route.params.chapterId, this.getTestId, "questions");
    },
    getQuestionById() {
      return this.getTestQuestions.find(el => el.id === this.selectedQuestionId);
    },
    formData() {
      return this[formData];
    }
  },
  validations: {
    formData: formValidation
  },
  methods: {
    ...mapMutations("learning", [
      LEARNING_REMOVE_QUESTION_FROM_TEST,
      LEARNING_SAVE_QUESTION_TO_TEST,
      LEARNING_SET_CORRECT_ANSWER,
      LEARNING_REMOVE_ANSWER
    ]),
    reset() {
      this[LEARNING_REMOVE_QUESTION_FROM_TEST]({
        chapterId: this.$route.params.chapterId,
        lectureId: this.$route.params.testId,
        id: this.config.id
      });
      router.push({ name: newCourseLecture, params: { chapterId: this.$route.params.chapterId } });
    },
    addAnswer() {
      this.config.answers.push({
        answer: null,
        explanation: null,
        isCorrect: false
      });
    },
    save() {
      this[LEARNING_SAVE_QUESTION_TO_TEST]({
        chapterId: this.$route.params.chapterId,
        lectureId: this.$route.params.testId,
        id: this.config.id,
        data: this.config
      });
      router.push({ name: newCourseLecture, params: { chapterId: this.$route.params.chapterId } });
    },
    goToFillerPage() {
      router.push({ name: newCourseLecture, params: { chapterId: this.$route.params.chapterId } });
    },
    changeValue(value) {
      this[LEARNING_SET_CORRECT_ANSWER]({
        chapterId: this.$route.params.chapterId,
        testId: this.$route.params.testId,
        questionId: this.questionId,
        id: value
      });
    },
    removeAnswer(index) {
      this[LEARNING_REMOVE_ANSWER]({
        chapterId: this.$route.params.chapterId,
        testId: this.$route.params.testId,
        questionId: this.questionId,
        id: index
      });
    }
  }
});

export default AbstractQuestionBinder;
