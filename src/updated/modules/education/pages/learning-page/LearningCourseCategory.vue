<template>
  <div class="learning-box">
    <div class="learning-box__body all-courses">
      <div class="learning-box__body-head-wrapper">
        <div class="builder-box__start">
          <div class="builder-box__start-nav">
            <div class="learn-course__back">
              <button @click.prevent="$router.push({ name: educationAllCourses })">
                <v-icon src="arrow-back" />
                Все курс11ы
              </button>
            </div>
          </div>
        </div>
        <div class="builder-box__body-title">
          <div class="create-course-box__body-title-name size-sm">Design</div>
        </div>
        <div class="learning-box__courses-content">
          <learning-card
            v-for="(card, index) of courses"
            :key="index"
            :card="card"
            @click="routeToCourseDetails(card.slug)"
          />
        </div>
        <v-button custom-style="secondary">Показать ёще</v-button>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from "../../../../common/components/VButton";
import LearningCard from "../../components/learning-card/LearningCard";

import { getCoursesByCategoryId } from "../../services/education-service";
import { educationAllCourses, educationCourse } from "../../services/routes/education-courses-routes-name";

export default {
  components: {
    VButton,
    LearningCard
  },
  props: ["categoryId"],
  data() {
    return {
      educationAllCourses,
      educationCourse,
      courses: null
    };
  },
  mounted() {
    console.log(this.categoryId);
    getCoursesByCategoryId(this.categoryId).then(({ data }) => {
      console.log(data);
      this.courses = data;
    });
  },
  methods: {
    routeToCourseDetails(slug) {
      this.$router.push({ name: educationCourse, params: { courseSlug: slug } });
    }
  }
};
</script>

<style scoped>
.v-button {
  margin: 0 auto 20px;
}
</style>
