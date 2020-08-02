<template>
  <div v-show="show" class="course-test__message-answer recommendations">
    <div class="course-test__message-answer-img">
      <v-icon src="warning" />
    </div>
    <div class="course-test__message-answer-content">
      <div v-if="title" class="course-test__message-answer-content-title">{{ title }}</div>
      <div class="course-test__message-answer-content-text">
        <slot></slot>
      </div>
    </div>
    <button @click="hide" type="button" class="close-warning">
      <v-icon src="close" />
    </button>
  </div>
</template>

<script>
export default {
  name: "Warning",
  props: {
    title: {}
  },
  data() {
    return {
      show: true
    };
  },
  methods: {
    hide() {
      this.$set(this, "show", false);
    }
  }
};
</script>

<style scoped></style>
