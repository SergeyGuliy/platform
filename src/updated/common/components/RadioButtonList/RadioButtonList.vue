<template>
  <div class="create-course-box__body-content">
    <div class="radio-checker-box">
      <ul class="list">
        <li v-for="radio in config" :key="radio.value">
          <radio-button :config="radio" @change="changeValue" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import RadioButton from "./RadioButton";

export default {
  name: "RadioButtonList",
  components: { RadioButton },
  props: ["config"],
  methods: {
    changeValue(value) {
      this.$emit("value", value);
    }
  }
};
</script>

<style scoped></style>
