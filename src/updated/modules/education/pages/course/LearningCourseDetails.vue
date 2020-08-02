<template>
  <div class="page-learning-wrapper grey" v-if="show">
    <div class="learn-course__wrapper">
      <div class="learn-course__header-wrapper lg">
        <course-header-back title="Обучение" @click="$router.push({ name: 'educationAllCourses' })" />
        <learning-page-header :header-data="header" @click="startCourse">
          <template #video>
            <video :poster="header.video.preview"></video>
          </template>
        </learning-page-header>
      </div>
      <div class="learn-course__content-wrapper">
        <div class="learn-course__content">
          <learning-course-paragraph title="Что мы будем изучать в курсе?">
            <v-answers :answers="GETTER_COURSE_DATA.targets" />
          </learning-course-paragraph>
          <learning-course-paragraph title="Описание">
            <div class="content-text__answer mt20" v-html="GETTER_COURSE_DATA.description"></div>
            <a href="#" class="yellow-link mob">Читать все описание</a>
          </learning-course-paragraph>
          <learning-course-paragraph title="Для кого этот курс">
            <course-audience :audience="GETTER_COURSE_DATA.audiences" />
          </learning-course-paragraph>
          <learning-course-paragraph title="Требования">
            <v-answers :answers="GETTER_COURSE_DATA.requirements" />
          </learning-course-paragraph>
          <learning-course-paragraph title="Учебный план">
            <test-accordion :accordion-data="GETTER_COURSE_DATA.sections" />
          </learning-course-paragraph>
        </div>
        <div class="learn-cours__video">
          <course-side-card
            :title="header.title"
            :sub-title="header.subTitle"
            :class="{ 'video-card-fixed': scrollY >= 600 }"
            @click="startCourse"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LearningPageHeader from "../../components/LearningPageHeader";
import LearningCourseParagraph from "./components/CourseParagraph";
import CourseSideCard from "./components/CourseSideCard";
import VAnswers from "./components/VAnswers";
import CourseHeaderBack from "../../components/CourseHeaderBack";
import CourseAudience from "../CourseAudience";

import TestAccordion from "../../components/TestAccordion";

import { educationCourse } from "../../services/routes/education-courses-routes-name";
import { getCourseBySlug } from "../../services/education-service";
import { mapActions, mapGetters } from "vuex";
import { ACTION_GET_COURSE_DATA } from "../../services/store/store-course-essences-name";

export default {
  props: ["courseSlug"],
  components: {
    LearningPageHeader,
    LearningCourseParagraph,
    CourseSideCard,
    VAnswers,
    CourseHeaderBack,
    CourseAudience,
    TestAccordion
  },
  data() {
    return {
      educationCourse,
      header: null,
      scrollY: 0,
      show: false
    };
  },
  created() {
    this.getPageData();
  },
  mounted() {
    window.addEventListener("scroll", this.pageOffset);
  },
  computed: {
    ...mapGetters("course", ["GETTER_COURSE_DATA"])
  },
  methods: {
    ...mapActions("course", [ACTION_GET_COURSE_DATA]),
    startCourse() {
      this.$router.push({
        name: educationCourse,
        params: { courseSlug: this.courseSlug }
      });
    },
    getPageData() {
      console.log(this.courseSlug);
      getCourseBySlug(this.courseSlug)
        .then(({ data }) => {
          this[ACTION_GET_COURSE_DATA](data);
          console.log(this.GETTER_COURSE_DATA);
        })
        .then(() => {
          this.createHeaderData(this.GETTER_COURSE_DATA);
        })
        .then(() => (this.show = true));
    },
    createHeaderData(data) {
      this.header = {
        title: data.name,
        subTitle: data.sub_title,
        topicData: {
          category: data.category.data.name,
          level: data.level.data.name,
          language: data.language.data.name
        },
        video: {
          preview: data.preview.data.preview,
          src: ""
        },
        buttonText: "Начать курс"
      };
    },
    pageOffset() {
      this.scrollY = window.pageYOffset;
    }
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.pageOffset);
  }
};
</script>

<style scoped></style>
