<template>
  <v-accordion-stick v-for="item in config" :config="item" :key="item.id" @emitDataFromChild="emitDataFromChild" />
</template>

<script>
import AccordionStick from "./AccordionStick";

export default {
  name: "Accordion",
  props: {
    config: {
      type: Object,
      require: true
    }
  },
  components: {
    "v-accordion-stick": AccordionStick
  },
  methods: {
    emitDataFromChild(data) {
      this.$emit("emitDataFromAccordion", data);
    }
  }
};
</script>

<style lang="scss" scoped></style>
