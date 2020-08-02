<template>
  <div>
    <div v-if="title" class="create-course-box__body-content-name">{{ title }}</div>

    <div class="add-color-box__colors-content">
      <div v-for="color in colors" @click="inputHandler(color)" class="add-color-box__colors-item">
        <div class="color-radio-box">
          <input type="radio" name="color" :checked="value === color" />
          <span :style="`background-color: ${color}`"></span>
        </div>
      </div>

      <div v-if="customColor" class="add-color-box__colors-item">
        <div class="color-radio-box">
          <input type="radio" name="color" checked="true" />
          <span :style="`background-color: ${value}`"></span>
        </div>
      </div>

      <div class="add-color-box__colors-item">
        <button @click="chooseColor" type="button" class="btn btn_plus">
          <v-icon src="plus" />
        </button>
      </div>
    </div>

    <label v-if="errors.has(name, scope)" class="input-error">
      {{ errors.first(name, scope) }}
    </label>
  </div>
</template>

<script>
import input from "../../mixins/input";

export default {
  name: "Color",
  mixins: [input],
  props: {
    title: {}
  },
  data() {
    return {
      colors: [
        "#FFFFFF",
        "#FFFBEE",
        "#F7F9EF",
        "#F5F7FB",
        "#D3DFE6",
        "#F2E6D7",
        "#D0D6CD",
        "#6F131E",
        "#1B5A94",
        "#325851",
        "#32314D",
        "#1F2223"
      ]
    };
  },
  computed: {
    customColor() {
      return this.value && this.colors.every(item => item !== this.value);
    }
  },
  methods: {
    chooseColor() {
      this.openModal("CustomColor", {
        value: this.value
      }).then(data => {
        this.inputHandler(data);
      });
    }
  }
};
</script>

<style scoped></style>
