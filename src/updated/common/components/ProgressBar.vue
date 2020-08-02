<template>
  <div class="platform-progress-bar">
    <div :style="{ width: `${progress}%` }" class="platform-progress-bar__progress-line"></div>
  </div>
</template>

<script>
export default {
  props: {
    progress: { type: Number, required: true }
  }
};
</script>

<style scoped lang="scss">
.platform-progress-bar {
  height: 2px;

  &__progress-line {
    background-color: #ffc107;
    height: 100%;
  }
}
</style>
