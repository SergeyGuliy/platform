<template>
  <div v-if="kind === 'list'" class="list-options">
    <div v-if="title" class="create-course-box__body-content-name">{{ title }}</div>

    <div v-for="option in options" class="list-options-item" :key="`background_type-${option.value}`">
      <button type="button" @click="inputHandler(option.value)" class="list-options-item-content" :class="option.class">
        {{ option.label }}
        <div v-if="value === option.value" class="cheked-font cheked-font-visible">
          <v-icon src="success" />
        </div>
      </button>
    </div>

    <label v-if="errors.has(name, scope)" class="input-error">
      {{ errors.first(name, scope) }}
    </label>
  </div>

  <div v-else-if="kind === 'custom'">
    <div
      v-for="(option, index) in options"
      @click="inputHandler(option.value)"
      :key="`option-${_uid}-${option.value}`"
      style="width: 100%;"
    >
      <slot v-bind="option" :index="index"></slot>
    </div>

    <label v-if="errors.has(name, scope)" class="input-error">
      {{ errors.first(name, scope) }}
    </label>
  </div>

  <div v-else class="radio-checker-box">
    <!--<div v-if="title" class="create-course-box__body-content-name">{{title}}</div>-->
    <div v-if="title" class="builder-input-box__label">
      <div class="input-box-label">{{ title }}</div>
    </div>

    <ul class="list">
      <li v-for="option in options" :key="`background_type-${option.value}`">
        <div @click="inputHandler(option.value)" class="radio-box">
          <label>
            <input type="radio" :checked="value === option.value" />
            <span>{{ option.label }}</span>
          </label>
        </div>
      </li>
    </ul>

    <label v-if="errors.has(name, scope)" class="input-error">
      {{ errors.first(name, scope) }}
    </label>
  </div>
</template>

<script>
import input from "../../mixins/input";

export default {
  name: "Radio",
  mixins: [input],
  props: {
    title: { type: String },
    options: { default: () => [] },
    kind: {}
  }
};
</script>

<style scoped></style>
