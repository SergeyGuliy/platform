<template>
  <div class="course-test__buttons-block">
    <div class="course-test__buttons-block-counter">Вопрос 1 из 3</div>
    <div class="course-test__buttons-block-buttons">
      <v-button class="all-btn third-btn test-btn">Пропустить</v-button>
      <v-button class="btn disabled-btn">Проверить ответ </v-button>
    </div>
  </div>
</template>

<script>
import VButton from "../../../../../../../common/components/VButton";
export default {
  components: {
    VButton
  }
};
</script>

<style scoped></style>
