<template>
  <div class="create-course-box__start-nav">
    <router-link v-if="to" :to="to" class="btn-link">
      <v-icon src="back" />
      <span>
        <slot></slot>
      </span>
    </router-link>
    <button v-else @click="clickHandler" type="button" class="btn-link">
      <v-icon src="back" />
      <span>
        <slot></slot>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: "ContainerHeader",
  props: {
    to: {},
    back: { type: Function }
  },
  methods: {
    clickHandler(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style scoped></style>
