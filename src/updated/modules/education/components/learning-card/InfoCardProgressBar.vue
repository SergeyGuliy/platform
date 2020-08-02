<template>
  <div class="progress-wrap">
    <slot></slot>
    <span class="progress-bar" v-if="progress">
      <span class="progress-bar__inner" :style="{ width: progress + '%' }"></span>
    </span>
  </div>
</template>

<script>
export default {
  props: ["progress"]
};
</script>

<style lang="scss" scoped>
.progress-wrap {
  position: relative;
  margin-bottom: 12px;
}
.progress-bar {
  display: flex;
  height: 2px;
  width: 100%;
  background: #ebeff5;
  border-radius: 8px;

  &__inner {
    transition: 0.3s ease;
    background: #ffc107;
  }
}
</style>
