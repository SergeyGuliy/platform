export default {
  inject: ["$validator"],
  props: {
    value: {},
    name: { type: String, required: () => true },
    rules: { default: () => "" },
    scope: { type: String, default: () => "form" }
  },
  mounted() {
    this.attachValidator();
  },
  beforeDestroy() {
    this.detachValidator();
  },
  methods: {
    attachValidator() {
      let self = this;
      this.$validator.attach({
        name: this.name,
        scope: this.scope,
        rules: this.getRules ? this.getRules : this.rules,
        getter() {
          return self.value;
        }
      });
    },
    detachValidator() {
      this.$validator.detach(this.name, this.scope);
    },
    inputHandler(value) {
      this.$emit("input", value);
      this.$validator.errors.remove(this.name, this.scope);
    }
  },
  watch: {
    rules: {
      handler: function() {
        this.detachValidator();
        this.attachValidator();
      },
      deep: true
    },
    getRules: {
      handler: function() {
        this.detachValidator();
        this.attachValidator();
      },
      deep: true
    }
  }
};
