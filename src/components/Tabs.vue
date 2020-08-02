<template>
  <div :class="tabClass.wrapper">
    <ul :class="tabClass.inner">
      <li v-for="option of options" :key="option.value">
        <button
          @click.prevent="inputHandler(option)"
          type="button"
          class="tabs-link"
          :disabled="!!option.disable"
          :class="{ 'current-link': value === option.value }"
        >
          {{ option.label }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  model: {
    prop: "value",
    event: "click"
  },
  props: {
    value: {},
    options: { required: () => true },
    type: {
      type: String,
      default: () => "desktop"
    }
  },
  computed: {
    tabClass() {
      return {
        mobile: {
          wrapper: "platform-content-tabs",
          inner: "platform-tabs-nav"
        },
        desktop: {
          wrapper: "learn-content-tabs",
          inner: "content-tabs-nav"
        }
      }[this.type];
    }
  },
  methods: {
    inputHandler(option) {
      if (!option.disable && this.value !== option.value) {
        this.$emit("click", option.value);
      }
    }
  }
};
</script>

<style scoped>
[disabled] {
  opacity: 0.4;
}
.learn-content-tabs .content-tabs-nav:after {
  bottom: 1px;
}
.tabs-link {
  outline: none;
}
</style>
