<template>
  <div :class="getClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ContainerTitleName",
  props: {
    small: { type: Boolean, default: () => false }
  },
  computed: {
    getClass() {
      return {
        "create-course-box__body-title-name": !this.small,
        "profile-box__all-info-content-title": this.small
      };
    }
  }
};
</script>

<style scoped></style>
