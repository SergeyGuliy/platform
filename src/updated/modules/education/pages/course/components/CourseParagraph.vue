<template>
  <div class="learn-course__content-text">
    <h5 v-html="title"></h5>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style scoped></style>
