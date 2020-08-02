<template>
  <div @click="close()" class="modal-window open">
    <div @click.stop class="modal-window__wrapper">
      <div class="modal-window__exit">
        <button @click="close()" type="button" class="close-modal __clean-btn">
          <v-icon src="close" />
        </button>
      </div>
      <div class="modal-window__content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import modal from "../../mixins/modal";

export default {
  name: "ModalWindow",
  mixins: [modal],
  props: {}
};
</script>

<style lang="scss" scoped></style>
