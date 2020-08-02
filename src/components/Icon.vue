<template>
  <svg :class="`svg-icon icon-${src} ${css}`" :fill="fill ? `url(${paintLinear}${fill})` : ''">
    <use :xlink:href="`${symbolDefs}#icon-${src}`"></use>
  </svg>
</template>
<script>
export default {
  name: "Icon",
  props: {
    css: {
      default: ""
    },
    src: {
      required: true
    },
    fill: String
  },
  mounted() {},
  computed: {
    symbolDefs() {
      return require("../assets/new-symbol-defs.svg");
    },
    paintLinear() {
      return require("../assets/paintLinear.svg");
    }
  }
};
</script>

<style lang="scss" scoped>
.icon-builder-start {
  width: 352px;
  height: 258px;
}
</style>
