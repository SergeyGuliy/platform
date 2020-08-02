<template>
  <div class="form-group form-group_numeric">
    <div v-if="title" class="builder-input-box__label">
      <div class="input-box-label">{{ title }}</div>
    </div>
    <div class="builder-input-box__input-wrapper">
      <div class="builder-input-box__input">
        <input
          ref="input"
          :type="type"
          :name="name"
          :placeholder="placeholder"
          :value="value"
          @input="onInput($event.target.value)"
          class="numeric-input"
          :disabled="disabled"
        />

        <span v-if="counter" class="numeric-output">{{ count }}</span>
      </div>
      <slot></slot>
    </div>
    <label v-if="errors.has(name, scope)" class="input-error">
      {{ errors.first(name, scope) }}
    </label>
  </div>
</template>

<script>
import input from "../../mixins/input";

export default {
  name: "Input",
  mixins: [input],
  props: {
    type: { type: String, default: () => "text" },
    placeholder: { type: String },
    title: { type: String },
    counter: { type: Boolean, default: () => false },
    disabled: { type: Boolean, default: () => false },
    max: { type: Number }
  },
  computed: {
    count() {
      if (this.max) {
        return this.max - (this.value ? String(this.value).length : 0);
      }
      return this.value ? String(this.value).length : 0;
    }
  },
  methods: {
    onInput(value) {
      if (this.max) {
        value = String(value).substring(0, this.max);
      }
      this.inputHandler(value);
      this.$refs.input.value = value;
    }
  }
};
</script>

<style lang="scss" scoped>
.builder-input-box {
  &__input-wrapper {
    position: relative;
  }
}
</style>
