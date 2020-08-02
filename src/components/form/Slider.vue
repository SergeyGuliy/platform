<template>
  <div class="range-box">
    <div class="range-box__detail">
      <span>{{ title }}</span>
      <i>{{ value }}%</i>
    </div>

    <div class="range-box__input">
      <v-vue-slider class="default-slider" :min="min" :max="max" :value="value" @change="changeHandler" />
    </div>
  </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import input from "../../mixins/input";

export default {
  name: "Slider",
  mixins: [input],
  components: { "v-vue-slider": VueSlider },
  props: {
    title: { type: String },
    min: { type: Number, default: () => 0 },
    max: { type: Number, default: () => 100 }
  },
  methods: {
    changeHandler(value) {
      this.inputHandler(value);
    }
  }
};
</script>

<style lang="scss">
.default-slider {
  .vue-slider-dot {
    width: 28px !important;
    height: 28px !important;
  }

  .vue-slider-process {
    background-color: #ffc107 !important;
  }

  .vue-slider-dot-tooltip {
    display: none;
  }

  .vue-slider-dot-handle-focus {
    box-shadow: 0px 0px 1px 2px rgba(255, 193, 7, 0.36) !important;
  }
}
</style>

<style lang="scss" scoped>
.range-box {
  width: 100%;
}
</style>
