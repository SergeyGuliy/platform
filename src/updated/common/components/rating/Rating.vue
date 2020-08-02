<template>
  <div class="course__rating">
    <div class="course__rating-all">
      <div class="course__rating-all-assessment">{{ rating.value }}</div>
      <div class="course__rating-all-stars">
        <span v-for="index in 5" :key="index">
          <v-icon :src="ratingStars(rating.value, index)"></v-icon>
        </span>
        <span>средний рейтинг</span>
      </div>
    </div>
    <div class="course__rating-line-stars">
      <RatingStick v-for="config in rating.sticks" :config="config" :key="config.ratingStick"></RatingStick>
    </div>
  </div>
</template>

<script>
import Icon from "../../../../components/Icon";
import RatingStick from "./RatingStick";

export default {
  name: "Rating",
  props: ["rating"],
  components: { "v-icon": Icon, RatingStick },
  methods: {
    ratingStars(value, index) {
      const roundLowNumber = Math.floor(value);
      const roundHeightNumber = Math.ceil(value);
      const restNumber = value - roundLowNumber;
      return index <= roundLowNumber
        ? "star-yellow"
        : restNumber * 10 > 4 && index === roundHeightNumber
        ? "star-half"
        : "";
    }
  }
};
</script>

<style scoped></style>
