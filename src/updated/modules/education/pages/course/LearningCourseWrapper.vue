<template>
  <div class="small-menu mob-menu-invisible">
    <div class="course-open__wrapper">
      <course-header-back :title="title" @click="$router.push({ name: educationCourseDetails })" />
      <div class="course-open__content-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import CourseHeaderBack from "../../components/CourseHeaderBack";
import { educationCourseDetails } from "../../services/routes/education-courses-routes-name";

export default {
  components: {
    CourseHeaderBack
  },
  props: {
    courseSlug: String,
    title: {
      type: String,
      default: "Course"
    }
  },
  data() {
    return {
      educationCourseDetails
    };
  }
};
</script>

<style lang="scss">
.course-open__wrapper .content-tabs-nav {
  padding: 0;
}
</style>
