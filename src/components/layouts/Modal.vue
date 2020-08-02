<template>
  <div @click="close()" class="modal-window open cloud-drive">
    <div @click.stop class="modal-window__cloud-drive" :class="{ 'adaptive-window__content': medium }">
      <div class="modal-window__cloud-drive-wrapper">
        <div v-if="text === 'center'" class="adaptive-window__header">
          <button @click="close()" type="button" class="close">
            <v-icon src="close" />
          </button>
          <div class="adaptive-window__title">{{ title }}</div>
        </div>
        <div v-else class="modal-window__cloud-drive__header">
          <div class="modal-window__cloud-drive__header-wrapper">
            <div class="modal-window__cloud-drive__header-title">{{ title }}</div>
            <div class="modal-window__cloud-drive__header-button-exit">
              <button @click="close()" type="button" class="close-modal __clean-btn">
                <v-icon src="close" />
              </button>
            </div>
            <div class="modal-window__cloud-drive__header-close-line"></div>
          </div>
          <div class="modal-window__cloud-drive__tabs">
            <slot name="header"></slot>
          </div>
        </div>

        <div class="learn-courses block">
          <slot></slot>
        </div>
      </div>
      <div class="modal-window__cloud-drive__buttons-block">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import modal from "../../mixins/modal";

export default {
  name: "Modal",
  mixins: [modal],
  props: {
    title: {},
    text: { type: String, default: () => "center" },
    medium: { type: Boolean, default: () => false }
  }
};
</script>

<style lang="scss" scoped></style>
