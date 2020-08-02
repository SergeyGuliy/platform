<template>
  <div class="learn-courses block" v-if="loaded">
    <div class="learn-course__content-wrapper">
      <div class="learn-course__content">
        <div class="learn-course__header-text">
          <div class="learn-course__header-text-title">
            {{ pageData.name }}
          </div>
          <div class="learn-course__header-text-subtitle">
            {{ pageData.sub_title }}
          </div>
          <course-info-labels :topic-data="topicData" />
        </div>
        <learning-course-paragraph title="Что мы будем изучать?">
          <v-answers :answers="pageData.targets" />
        </learning-course-paragraph>
        <learning-course-paragraph title="Описание">
          <div class="content-text__answer mt20" v-html="pageData.description"></div>
          <a href="#" class="yellow-link mob">Читать все описание</a>
        </learning-course-paragraph>
        <learning-course-paragraph title="Для кого этот курс">
          <course-audience :audience="pageData.audiences" />
        </learning-course-paragraph>
        <learning-course-paragraph title="Требования">
          <v-answers :answers="pageData.requirements" />
        </learning-course-paragraph>
      </div>
    </div>
  </div>
</template>
<script>
import CourseInfoLabels from "../../../CourseInfoLabels";
import LearningCourseParagraph from "../../course/components/CourseParagraph";
import VAnswers from "../../course/components/VAnswers";
import CourseAudience from "../../CourseAudience";

import { getCourseBySlug } from "../../../services/education-service";

import { mapGetters } from "vuex";

export default {
  components: {
    CourseInfoLabels,
    LearningCourseParagraph,
    VAnswers,
    CourseAudience
  },
  props: ["courseSlug"],
  data() {
    return {
      topicData: null,
      pageData: null,
      loaded: false
    };
  },
  mounted() {
    this.onSetup();
  },
  computed: {
    ...mapGetters("course", ["GETTER_COURSE_DATA"])
  },
  methods: {
    onSetup() {
      this.createPageData()
        .then(data => {
          this.topicData = {
            category: data.category.data.name,
            level: data.level.data.name,
            language: data.language.data.name
          };
        })
        .then(() => (this.loaded = true));
    },
    getCourse() {
      return getCourseBySlug(this.courseSlug).then(({ data }) => data);
    },
    async createPageData() {
      return (this.pageData = this.GETTER_COURSE_DATA ? this.GETTER_COURSE_DATA : await this.getCourse());
    }
  }
};
</script>

<style scoped></style>
