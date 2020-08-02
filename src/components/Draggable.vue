<template>
  <v-draggable-provider :value="value" :handle="handle" @input="$emit('input', $event)" :tag="tag">
    <template #header>
      <slot name="header"></slot>
    </template>

    <slot v-for="(item, index) in value" v-bind="item" :index="index + 1" />

    <template #footer>
      <slot name="footer"></slot>
    </template>
  </v-draggable-provider>
</template>

<script>
import Draggable from "vuedraggable";

export default {
  name: "Draggable",
  components: { "v-draggable-provider": Draggable },
  props: {
    value: { type: Array, required: true },
    tag: { type: String, default: "div" },
    handle: { type: String }
  }
};
</script>

<style scoped></style>
