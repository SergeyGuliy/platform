import { getClasses, getStyle } from "../components/tools/landings/blocks";

export default {
  $_veeValidate: {
    validator: "new"
  },
  props: {
    block: {},
    layout: {},
    request: {}
  },
  mounted() {
    if (this.block.min_height !== null && this.$parent.$options._componentTag === "v-draggable-resizable") {
      this.$parent.$el.style.height = `${this.block.min_height}px`;
    }
  },
  computed: {
    getClasses,
    getStyle,
    getLayout() {
      return this.layout ? this.layout : this.block.layout;
    },
    getOpacity() {
      return (this.block.opacity !== null ? this.block.opacity : 100) / 100;
    }
  }
};
