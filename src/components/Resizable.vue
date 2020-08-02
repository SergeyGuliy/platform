<template>
  <v-draggable-resizable
    :draggable="false"
    @resizestop="onResizestop"
    h="auto"
    w="auto"
    :handles="['bm']"
    :min-height="30"
    class-name-handle="resizable-handle"
    :class="{ 'show-resizable': showResizable }"
  >
    <slot></slot>
  </v-draggable-resizable>
</template>

<script>
import VueDraggableResizable from "vue-draggable-resizable";

export default {
  name: "Resizable",
  props: {
    showResizable: { type: Boolean, default: () => false }
  },
  components: { "v-draggable-resizable": VueDraggableResizable },
  methods: {
    onResizestop(x, y, width, height) {
      this.$emit("changeHeight", height);
    }
  }
};
</script>

<style lang="scss">
.show-resizable {
  .resizable-handle {
    display: block !important;
  }
}

.resizable-handle {
  display: none !important;

  &-bm {
    background: red;
    position: absolute;
    bottom: calc(16px - 14px / 2);
    right: 100%;
    width: 18px;
    height: 13px;
    background: url("../assets/resize.svg");
  }
}
</style>
