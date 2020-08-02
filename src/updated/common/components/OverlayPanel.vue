<template>
  <Overlay class="overlay-panel" ref="op" :appendTo="appendTo">
    <slot></slot>
  </Overlay>
</template>

<script>
import Overlay from "primevue/overlaypanel";

export default {
  components: {
    Overlay
  },
  props: {
    targetEvent: {},
    appendTo: {
      type: String,
      default: null
    }
  },
  watch: {
    targetEvent() {
      this.$refs.op.toggle(this.targetEvent);
    }
  }
};
</script>

<style lang="scss" scoped>
.p-overlaypanel {
  background: #fff;
  box-shadow: 0 0 70px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 6px 18px;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #58606e;
  white-space: nowrap;

  & > * {
    margin: 0;
    height: 32px;
    padding: 4px 0;
    display: flex;
    align-items: center;

    &:not(:first-child) {
      margin-top: 12px;
    }
  }
}
</style>
