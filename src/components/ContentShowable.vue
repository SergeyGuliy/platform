<template>
  <v-field-wrapper :class="{ 'no-border': noBorder }">
    <div class="builder-input-box-title">
      {{ title }}
      <slot name="title"></slot>
      <div v-if="showable" class="builder-switch">
        <div class="switch">
          <input type="checkbox" :checked="value" @input="inputHandler" />
        </div>
      </div>
    </div>

    <template v-if="!showable || value">
      <slot></slot>
    </template>
  </v-field-wrapper>
</template>

<script>
export default {
  name: "ContentShowable",
  props: {
    value: {},
    title: {},
    showable: { type: Boolean, default: () => false },
    noBorder: { type: Boolean, default: () => false }
  },
  methods: {
    inputHandler(e) {
      this.$emit("input", e.target.checked);
    }
  }
};
</script>

<style lang="scss" scoped>
.no-border {
  border-bottom: none;
}
</style>
