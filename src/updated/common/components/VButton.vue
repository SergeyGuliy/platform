<template>
  <button
    class="v-button"
    :type="type"
    :class="computedClass"
    :disabled="disabled"
    @click.prevent="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "VButton",
  props: {
    type: String,
    customType: {
      type: String,
      default: "regular"
    },
    customStyle: {
      type: String,
      default: "primary"
    },
    disabled: Boolean
  },
  computed: {
    computedClass() {
      return {
        text: `v-button-text v-button-text--${this.customStyle}`,
        icon: `v-button-icon v-button-icon--${this.customStyle}`,
        regular: `v-button-regular v-button-regular--${this.customStyle}`,
        label: `v-button-label`
      }[this.customType];
    }
  }
};
</script>

<style lang="scss">
$primary: #ffc107;
$primary-darken: #faac15;
$text-disabled: #f9d99c;
$text-primary: #1d2228;
$text-primary-disabled: #c18e2a;
$text-secondary: #8b5c00;
$bg-primary: $primary;
$bg-primary-hover: $primary-darken;
$bg-primary-disabled: #fff3cd;
$bg-secondary-hover: #fffcf2;
$text-secondary-disabled: $text-disabled;
$btn-text-disabled: $text-disabled;
$btn-icon-secondary: #f5f7fa;
$btn-icon-secondary-hover: #ebeff5;
$shadow: 0 0 8px rgba(255, 193, 7, 0.28);
$darken-shadow: 0 0 8px rgba(250, 172, 21, 0.28);
@mixin box-shadow($shadow) {
  box-shadow: $shadow;
}

.v-button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  padding: 0;
  font-family: "Roboto", sans-serif;
  border: none;
  background: none;
  border-radius: 6px;
  transition: 0.3s ease;

  &:focus,
  &:active {
    outline: none;
  }

  &-regular {
    padding: 12px 32px;

    &--primary {
      color: $text-primary;
    }

    &--secondary {
      background: #fff;
      border: 1px solid $primary;
      color: $text-secondary;

      &:hover {
        background: $bg-secondary-hover;
      }

      &:focus {
        @include box-shadow($shadow);
      }

      &:active {
        @include box-shadow($darken-shadow);
      }

      &:disabled {
        background: #fff;
        color: $text-secondary-disabled;
        border-color: #ffe083;
      }
    }
  }

  &-icon {
    height: 40px;
    padding: 0 13px;

    svg {
      fill: $text-primary;
    }

    &--primary:disabled {
      .v-button__icon path {
        fill: $text-primary-disabled;
      }
    }

    &--secondary {
      background: $btn-icon-secondary;

      &:hover {
        background: $btn-icon-secondary-hover;
      }
    }
  }

  &-regular--primary,
  &-icon--primary {
    background: $bg-primary;

    &:hover {
      background: $bg-primary-hover;
    }

    &:focus {
      @include box-shadow($shadow);
    }

    &:active {
      @include box-shadow($darken-shadow);
    }

    &:disabled {
      background: $bg-primary-disabled;
      color: $text-primary-disabled;
    }
  }

  &-text--primary,
  &-label {
    color: #faac15;
    &:hover {
      color: $primary;
      text-shadow: $shadow;
    }

    &:focus {
      color: $primary-darken;
      text-shadow: $shadow;
    }

    &:active {
      color: $primary;
    }

    &:disabled {
      color: $text-disabled;
      .v-button__icon {
        fill: $text-disabled;
      }
    }
  }
  &-text {
    &--secondary {
      color: #58606e;
      &:hover {
        color: $text-primary;
      }
    }
    .v-button__icon path {
      fill: $primary;
    }
  }
  &-label {
    padding: 2px 12px;
    border: 1px solid $primary;
    border-radius: 24px;
    font-weight: 500;
  }
}
</style>
