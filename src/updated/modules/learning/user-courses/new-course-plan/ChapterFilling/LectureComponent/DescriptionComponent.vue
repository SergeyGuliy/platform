<template>
  <div id="savedDescription" class="content-course-box__description-result">
    <div class="content-course-box__description-result-header">
      <b class="block-title">Описание</b>
      <button type="button" id="changeDescription" class="__clean-btn edit" @click="editDescription">
        <v-icon src="edit"></v-icon>
      </button>
      <button type="button" id="removeDescription" class="__clean-btn delete" @click="removeDescription">
        <v-icon src="delete"></v-icon>
      </button>
    </div>
    <div class="content-course-box__description-result-body" v-html="description"></div>
  </div>
</template>

<script>
export default {
  name: "DescriptionComponent",
  props: ["description"],
  methods: {
    editDescription() {
      this.$emit("emitData", { name: "navigation", to: "v-description" });
    },
    removeDescription() {
      this.$emit("emitData", { name: "remove", target: "description" });
    }
  }
};
</script>

<style lang="scss" scoped>
.learn-course__content-text__title {
  display: flex;
}
</style>
