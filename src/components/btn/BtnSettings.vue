<template>
  <div>
    <v-container-title-name>Add link to button</v-container-title-name>

    <v-radio
      ref="radio"
      name="button.type"
      :options="types"
      :scope="scope"
      @input="inputType"
      v-model="initValue.type"
    />

    <v-input
      v-if="showLink"
      name="button.link"
      title="Веб-Адрес"
      rules="required|url"
      :scope="scope"
      v-model="initValue.link"
    />
  </div>
</template>

<script>
import { mapWatch } from "../tools/landings/blocks";

const TYPE_DEFAULT = null;
const TYPE_SITE = "site";
const TYPE_FILE = "file";

export default {
  name: "BtnSettings",
  props: {
    value: {},
    scope: { type: String, default: () => "form" }
  },
  mounted() {
    this.$set(this, "initValue", JSON.parse(JSON.stringify(this.value)));
    window.addEventListener(`validate-${this.scope}`, this.validateHandler);
  },
  beforeDestroy() {
    window.removeEventListener(`validate-${this.scope}`, this.validateHandler);
  },
  data() {
    return {
      initValue: {},
      form: null,
      type: TYPE_SITE,
      types: [
        { label: "Без ссылки", value: TYPE_DEFAULT },
        { label: "Веб-Адрес", value: TYPE_SITE },
        { label: "Документ", value: TYPE_FILE }
      ]
    };
  },
  computed: {
    showLink() {
      return [TYPE_SITE, TYPE_FILE].indexOf(this.initValue.type) !== -1;
    }
  },
  methods: {
    inputType() {
      this.$set(this.initValue, "link", null);
    },
    clickHandler(e) {
      this.$emit("click", e);
    },
    validateHandler() {
      this.$emit("input", this.initValue);
    }
  }
};
</script>

<style scoped></style>
