<template>
  <div class="profile-tabs-block-content-part">
    {{ title }}
    <br />
    <span :class="{ 'yellow-span': yellow }"><slot></slot></span>
  </div>
</template>

<script>
export default {
  name: "BlockItem",
  props: {
    title: { type: String, required: true },
    yellow: { type: Boolean, default: () => false }
  }
};
</script>

<style scoped></style>
