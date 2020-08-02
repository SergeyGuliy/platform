import { validationMixin } from "vuelidate";
import { mapGetters, mapMutations } from "vuex";
import { LEARNING_ADD_QUESTION_TO_TEST } from "@/updated/modules/learning/store/mutation-types";
import { newCourseQuestion } from "@/updated/modules/learning/models/learning-courses-router-names";
const AbstractTestComponentBinder = ({ formData, formValidation }) => ({
  mixins: [validationMixin],
  computed: {
    ...mapGetters("learning", ["getTestValueById"]),
    formData() {
      return this[formData];
    },
    getQuestions() {
      return this.config.questions;
    },
    testId() {
      return this.config.id;
    },
    getLastQuestionId() {
      const questions = this.getQuestions;
      return questions.length ? questions[questions.length - 1].id : 0;
    }
  },
  validations: {
    formData: formValidation
  },
  methods: {
    ...mapMutations("learning", [LEARNING_ADD_QUESTION_TO_TEST]),
    addQuestion(id) {
      console.log(this.$v);
      console.log(formValidation);
      const data = {
        id: id + 1,
        questionText: null,
        answers: [
          {
            answer: "",
            explanation: "",
            isCorrect: false
          }
        ]
      };
      this[LEARNING_ADD_QUESTION_TO_TEST]({
        chapterId: this.chapterId,
        lectureId: this.config.id,
        data
      });
      this.$router.push({ name: newCourseQuestion, params: { testId: this.config.id, questionId: id + 1 } });
    }
  }
});

export default AbstractTestComponentBinder;
