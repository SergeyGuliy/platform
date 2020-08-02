<template>
  <div>
    <button v-click-outside="close" @click="toggleShow" class="focus" type="button">
      <v-icon src="more" />
    </button>
    <div v-if="show" class="info-card__small-modal">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  data() {
    return {
      show: false
    };
  },
  methods: {
    close() {
      this.$set(this, "show", false);
    },
    toggleShow() {
      this.$set(this, "show", !this.show);
    }
  }
};
</script>

<style lang="scss" scoped>
.info-card__small-modal {
  z-index: 2;
  opacity: 1;

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

  button {
    outline: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
  }
}
</style>
