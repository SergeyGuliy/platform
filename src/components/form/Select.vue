<template>
  <div
    class="form-group"
    :class="{
      'has-danger': errors.has(name, scope),
      'has-error': errors.has(name, scope)
    }"
  >
    <label v-if="title" :for="`input-${_uid}-${name}`">{{ title }}</label>
    <VueSelect
      @search="onSearch"
      :name="name"
      :disabled="disabled"
      :multiple="multiple"
      :placeholder="placeholder"
      :options="options"
      :clearable="clearable"
      @input="inputHandlerSelect"
      :value="getValue"
    />
    <div v-show="errors.has(name, scope)" class="help-block form-text with-errors form-control-feedback">
      <ul class="list-unstyled">
        <li>{{ errors.first(name, scope) }}</li>
      </ul>
    </div>

    <div v-if="icon" :class="`pre-icon os-icon os-icon-${icon}`"></div>
  </div>
</template>

<script>
import { VueSelect } from "vue-select";

import input from "../../mixins/input";
import "vue-select/dist/vue-select.css";

export default {
  name: "Select",
  mixins: [input],
  components: { VueSelect },
  props: {
    pongTimeout: { type: Number, default: 700 },
    options: { default: () => [] },
    title: {},
    placeholder: {},
    prepend: {},
    icon: {},
    multiple: { type: Boolean, default: false },
    clearable: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false }
  },
  data() {
    return {
      handler: null
    };
  },
  computed: {
    getValue() {
      if (this.multiple) {
        let value = [];
        this.value.forEach(item => {
          let option = this.options.find(data => data.value === item);
          if (option) {
            value.push(option);
          }
        });
        return value;
      } else {
        return this.options.find(data => data.value === this.value);
      }
    }
  },
  methods: {
    inputHandlerSelect(e) {
      let value;

      if (this.multiple) {
        value = this.collect(e)
          .pluck("value")
          .toArray();
      } else {
        value = e.value;
      }
      this.inputHandler(value);
    },
    onSearch(search) {
      clearTimeout(this.handler);
      this.$set(
        this,
        "handler",
        setTimeout(() => {
          this.$emit("search", search);
        }, this.pongTimeout)
      );
    }
  }
};
</script>

<style lang="scss"></style>
