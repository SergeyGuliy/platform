import { validationMixin } from "vuelidate";

const AbstractLectureBinder = ({ formData, formValidation }) => ({
  mixins: [validationMixin],
  computed: {
    formData() {
      return this[formData];
    }
  },
  validations: {
    formData: formValidation
  },
  methods: {
    prevDescriptionMethod() {
      this.prevDescription = this.config.description;
    },
    resetDescription() {
      this.config.description = this.isEdit ? this.prevDescription : "";
      this.$emit("emitData", { name: "navigation", to: "v-add-materials" });
    },
    saveDescription() {
      this.$emit("emitData", { name: "saveDesc", text: this.config.description });
    }
  }
});

export default AbstractLectureBinder;
