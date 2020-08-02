<template>
  <div class="form-group form-group_numeric">
    <div v-if="title" class="builder-input-box__label">
      <div class="input-box-label">{{ title }}</div>
    </div>
    <div class="builder-input-box__input-wrapper">
      <div class="builder-input-box__input">
        <textarea
          :type="type"
          :name="name"
          :placeholder="placeholder"
          :value="value"
          @input="inputHandler($event.target.value)"
          class="numeric-input"
        ></textarea>

        <span v-if="counter" class="numeric-output">{{ max - count }}</span>
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
  name: "Textarea",
  mixins: [input],
  props: {
    type: { type: String, default: () => "text" },
    max: { type: Number },
    placeholder: { type: String },
    title: { type: String },
    counter: { type: Boolean, default: () => false }
  },
  computed: {
    count() {
      return this.value ? String(this.value).length : 0;
    }
  }
};
</script>

<style scoped>
.builder-input-box__input-wrapper {
  position: relative;
}
</style>
