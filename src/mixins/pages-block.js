import { PAGE_CANVAS } from "../stubs/tools-pages";
import { mapActions } from "vuex";

export default {
  $_veeValidate: {
    validator: "new"
  },
  props: {
    request: {}
  },
  mounted() {
    if (this.stepQuery.step === this.STEP_LAYOUT) {
      this.$set(this, "localStep", this.stepQuery.step);
    }
  },
  beforeDestroy() {
    this.setStepQuery({});
  },
  computed: {
    stepQuery() {
      return this.$store.state.toolsPages.stepQuery;
    },
    insertPosition() {
      return this.$store.state.toolsPages.insertPosition;
    },
    stepComplete() {
      return this.$store.state.toolsPages.stepComplete;
    },

    canBack() {
      return this.stepQuery.step !== this.STEP_LAYOUT;
    },
    getBackTitle() {
      if (this.STEPS_ORDER.indexOf(this.localStep) !== 0) {
        return "Назад";
      } else {
        return this.insertPosition !== null ? "Отменить" : "Назад";
      }
    },
    getContinueTitle() {
      if (this.STEPS_ORDER.length - 1 !== this.STEPS_ORDER.indexOf(this.localStep)) {
        return "Продолжить";
      } else {
        return this.insertPosition !== null ? "Создать" : "Сохранить";
      }
    }
  },
  methods: {
    ...mapActions("toolsPages", ["prevStep", "nextStep", "setStepQuery", "setInsertPosition", "addRequestToHistory"]),

    back() {
      let index = this.STEPS_ORDER.indexOf(this.localStep);
      let stepIndex = this.STEPS.indexOf(this.localStep);
      if (this.STEPS_ORDER[index - 1] !== undefined) {
        this.$set(this, "localStep", this.STEPS_ORDER[index - 1]);
      } else if (stepIndex !== -1 && stepIndex !== 0) {
        this.$set(this, "localStep", this.STEP_MAIN);
      } else {
        if (this.insertPosition !== null) {
          this.request.blocks.splice(this.insertPosition, 1);
        }
        this.prevStep();
      }
    },
    send() {
      this.validate().then(() => {
        let index = this.STEPS_ORDER.indexOf(this.localStep);
        if (this.STEPS_ORDER[index + 1] !== undefined) {
          this.$set(this, "localStep", this.STEPS_ORDER[index + 1]);
        } else {
          this.addRequestToHistory(this.request);
          this.setInsertPosition(null);
          this.nextStep(PAGE_CANVAS);
        }
      });
    },
    setLocalStep(step) {
      this.$set(this, "localStep", step);
    }
  }
};
