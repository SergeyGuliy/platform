<template>
  <div>
    <div class="course-test__content-assessment" v-for="(item, index) of list" :key="index">
      <div class="course-test__content-assessment-img">
        <v-icon :src="computedIcon[item.status]" />
      </div>
      <div class="course-test__content-assessment-content">
        <div class="course-test__content-assessment-content-title">{{ item.title }}</div>
        <div class="course-test__content-assessment-content-text">
          <p v-for="(paragraph, index) of item.text" :key="index">
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    status: String
  },
  computed: {
    computedIcon() {
      return {
        success: "check-in-circle",
        error: "error"
      };
    }
  }
};
</script>

<style scoped></style>
