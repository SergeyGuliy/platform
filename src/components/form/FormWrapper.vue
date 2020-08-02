<template>
  <div class="profile-box__all-info-wrapper">
    <div class="profile-box__all-info-header">{{ title }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FormWrapper",
  props: {
    title: { type: String, required: true }
  }
};
</script>

<style scoped></style>
