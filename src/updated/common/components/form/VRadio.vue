<template>
  <div class="radio-box" :class="{ disabled }">
    <label>
      <input type="radio" :value="config.value" :checked="shouldBeChecked" @change="update" />
      <span>{{ config.label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  model: {
    prop: "modelValue",
    event: "change"
  },
  props: {
    config: {
      type: Object,
      required: true
    },
    modelValue: {
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    shouldBeChecked() {
      return this.modelValue === this.config.value;
    }
  },
  methods: {
    update() {
      this.$emit("change", this.config.value);
    }
  }
};
</script>

<style scoped></style>
