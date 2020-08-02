<template>
  <div class="v-notification" :class="`v-notification--${type}`">
    <span v-if="closable" @click="$emit('close', $event)" class="v-notification-close">
      <v-icon src="close" />
    </span>
    <span class="v-notification-icon">
      <v-icon :src="icon" />
    </span>
    <div class="v-notification-inner">
      <div v-if="slotPassed.title" class="v-notification-title v-notification-inner__item">
        <slot name="title"></slot>
      </div>
      <div v-if="slotPassed.description" class="v-notification-description v-notification-inner__item">
        <slot name="description"></slot>
      </div>
      <div v-if="slotPassed.footer" class="v-notification-footer v-notification-inner__item">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VNotification",
  props: {
    type: {
      type: String,
      default: "success",
      required: true
    },
    closable: Boolean
  },
  computed: {
    slotPassed() {
      return {
        title: !!this.$slots?.title,
        description: !!this.$slots?.description,
        footer: !!this.$slots?.footer
      };
    },
    icon() {
      return {
        success: "success",
        error: "error",
        warning: "warning",
        info: "info"
      }[this.type];
    }
  }
};
</script>

<style lang="scss" scoped>
$success: #28cc6c;
$warning: #ffac15;
$info: #2c69f4;
$error: #f65844;

.v-notification {
  position: relative;
  background: #fff;
  padding: 16px 40px 16px 48px;
  border: 1px solid;
  border-radius: 2px;

  &-close {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    top: 12px;
    right: 12px;
    cursor: pointer;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &-icon {
    position: absolute;
    top: 20px;
    left: 16px;
    display: flex;
  }

  &-inner {
    display: flex;
    flex-direction: column;

    &__item {
      margin-bottom: 8px;
      line-height: 24px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  &-title {
    font-size: 18px;
    font-weight: bold;
    color: #1d2228;
    text-transform: capitalize;
  }

  &-description {
    font-size: 14px;
    color: #58606e;
  }

  &-footer {
    font-size: 16px;
    font-weight: 500;
    color: #ffc107;
  }

  &--success {
    border-color: $success;
    box-shadow: 0 0 24px rgba(40, 204, 108, 0.16);
  }

  &--error {
    border-color: $error;
    box-shadow: 0 0 24px rgba(246, 88, 68, 0.16);
  }

  &--warning {
    border-color: $warning;
  }

  &--info {
    border-color: $info;
  }
}
</style>
