<template>
  <div :class="getClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ContainerTitleCaption",
  props: {
    small: { type: Boolean, default: () => false }
  },
  computed: {
    getClass() {
      return {
        "create-course-box__body-title-caption": !this.small,
        "profile-box__all-info-content-text": this.small
      };
    }
  }
};
</script>

<style scoped></style>
