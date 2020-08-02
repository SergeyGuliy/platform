import { validationMixin } from "vuelidate";
import { mapActions, mapGetters, mapMutations } from "vuex";

import {
  LEARNING_CREATE_COURSE_FILL_FORM_FIELD,
  LEARNING_CREATE_COURSE_STEP_VALIDITY
} from "../../store/mutation-types";
import {
  LEARNING_GET_CATEGORIES,
  LEARNING_GET_LANGS,
  LEARNING_GET_LEVELS,
  LEARNING_GET_TIMES
} from "@/updated/modules/learning/store/mutation-types";

const AbstractNewCourseStepFormBinder = ({ fieldName, formValidation }) => ({
  mixins: [validationMixin],
  computed: {
    ...mapGetters("learning", [
      "formFieldValue",
      "isActiveStepValid",
      "nextStepRequest",
      "categoriesGetter",
      "timesGetter",
      "levelsGetter",
      "langsGetter"
    ]),
    formData() {
      return this.formFieldValue(fieldName);
    }
  },
  validations: { formData: formValidation },
  methods: {
    ...mapMutations("learning", [LEARNING_CREATE_COURSE_STEP_VALIDITY, LEARNING_CREATE_COURSE_FILL_FORM_FIELD]),
    ...mapActions("learning", [LEARNING_GET_CATEGORIES, LEARNING_GET_TIMES, LEARNING_GET_LEVELS, LEARNING_GET_LANGS])
  },
  watch: {
    formData: {
      handler(value) {
        this[LEARNING_CREATE_COURSE_FILL_FORM_FIELD]({
          name: fieldName,
          value
        });
        this[LEARNING_CREATE_COURSE_STEP_VALIDITY]({
          isValid: !this.$v.$invalid
        });
      },
      deep: true
    }
  }
});

export default AbstractNewCourseStepFormBinder;
