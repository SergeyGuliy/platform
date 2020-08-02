<template>
  <div class="course__rating-progress-stars">
    <div class="course__rating-progress">
      <span><i :style="styles"></i></span>
    </div>
    <div class="course__rating-stars">
      <span v-for="index in 5" :key="index"><v-icon :src="setIcon(index)"></v-icon></span>
      <span>{{ config.value }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RatingStick",
  props: ["config"],
  data() {
    return {
      styles: {
        width: this.config.value + "%"
      }
    };
  },
  methods: {
    setIcon(i) {
      return i <= this.config.ratingStick ? "star-yellow" : "star-grey";
    }
  }
};
</script>

<style scoped></style>
