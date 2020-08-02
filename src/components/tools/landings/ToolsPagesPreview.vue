<template>
  <div>
    <v-container-header @click="backHandler">Назад</v-container-header>

    <div>
      <v-tools-pages-blocks-header-preview :block="request.block_header" :request="request" />

      <component
        v-for="(block, index) in request.blocks"
        :is="getBlockComponent(block)"
        :block="block"
        :request="request"
        :key="`component-${index}`"
      />

      <v-tools-pages-blocks-footer-preview :block="request.block_footer" :request="request" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { getBlockComponent } from "./blocks";

export default {
  name: "ToolsPagesPreview",
  props: {
    request: {}
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions("toolsPages", ["prevStep"]),

    getBlockComponent,

    backHandler() {
      this.prevStep();
    }
  }
};
</script>

<style scoped></style>
