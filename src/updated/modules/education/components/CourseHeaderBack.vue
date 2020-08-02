<template>
  <div class="learn-course__back">
    <button @click.prevent="actionHandler">
      <v-icon src="arrow-back" />
      <span>{{ title }}</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  methods: {
    actionHandler(event) {
      this.$emit("click", event);
    }
  }
};
</script>

<style scoped></style>
