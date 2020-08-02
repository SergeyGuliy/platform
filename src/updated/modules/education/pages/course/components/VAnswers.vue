<template>
  <div class="content-text__answer">
    <div class="content-text__answer-item" v-for="({ name }, index) of answers.data" :key="index">
      <v-icon src="ok-yellow" />
      {{ name }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    answers: Object
  }
};
</script>

<style scoped></style>
