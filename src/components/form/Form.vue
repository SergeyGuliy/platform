<template>
  <form @submit.prevent="submitHandler" :data-vv-scope="dataVvScope">
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "Form",
  props: {
    dataVvScope: {
      default: "form"
    }
  },
  methods: {
    submitHandler(e) {
      this.$emit("submit", e);
    }
  }
};
</script>

<style scoped></style>
