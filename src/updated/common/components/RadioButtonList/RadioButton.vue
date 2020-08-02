<template>
  <div class="radio-box">
    <label>
      <input type="radio" name="radio" v-model="radioButtonValue" />
      <span>{{ config.label }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  computed: {
    radioButtonValue: {
      get() {
        return this.config.value;
      },
      set() {
        this.$emit("change", this.config.value);
      }
    }
  }
};
</script>

<style scoped></style>
