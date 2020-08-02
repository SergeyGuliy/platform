<template>
  <div class="curriculum__item">
    <component :is="config.headerComponent" :config="config" @emitDataFromHeader="emitDataToParent"></component>
    <component
      v-show="config.isActive"
      v-for="contentStick in config.contentSticks"
      :is="contentStick.bodyComponent"
      :key="contentStick.id"
      :stickConfig="contentStick"
      @emitDataFromContent="emitDataToParent"
    ></component>
  </div>
</template>

<script>
export default {
  name: "AccordionStick",
  props: {
    config: {
      type: Object,
      require: true
    }
  },
  methods: {
    emitDataToParent(data) {
      this.$emit("emitDataFromChild", data);
    }
  }
};
</script>

<style lang="scss" scoped></style>
