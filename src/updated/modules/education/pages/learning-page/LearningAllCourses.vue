<template>
  <div class="builder-tabs-block block">
    <div class="learning-box__body-content">
      <section class="learning-box__courses">
        <div class="learning-box__courses-title">Топ курсы 🔥</div>
        <v-carousel v-if="courses.length">
          <learning-card v-for="(card, index) of courses" :key="index" :card="card" />
        </v-carousel>
      </section>
      <section class="learning-box__courses">
        <div class="learning-box__courses-title">Курсы в процессе</div>
        <v-carousel v-if="courses.length">
          <learning-card v-for="(card, index) of courses" :key="index" :card="card" />
        </v-carousel>
      </section>
      <section class="learning-box__courses">
        <div class="learning-box__courses-title">Категории</div>
        <!--<div class="learn-selects">
                    <v-select :options="categoryOptions"
                              placeholder="Дизайн"
                              v-model="value"
                    />
                    <v-select :options="byDateOptions"
                              placeholder="Сначала новые"
                    />
                </div>-->
        <div class="learning-box__courses-content">
          <learning-card v-for="(card, index) of courses" :key="index" :card="card" />
        </div>
        <div class="learning-box__courses-button">
          <v-button custom-style="secondary">Показать еще</v-button>
        </div>
      </section>
      <div class="cabinet-course-box__main-info">
        <div class="cabinet-course-box__main-info-nav">
          <course-category-link-list />
        </div>
      </div>
    </div>
    <div class="create-course-box__head-actions">
      <div class="create-course-box__head-action">
        <v-button>Опубликовать свой курс</v-button>
      </div>
    </div>
  </div>
</template>

<script>
import LearningCard from "../../components/learning-card/LearningCard";
import VCarousel from "../../../../common/components/VCarousel";
import CourseCategoryLinkList from "../../../../common/components/CourseCategoryLinkList";
import VButton from "../../../../common/components/VButton";
// import VSelect from "../../../../common/components/VSelect";

import { preloaderDirective } from "../../../../directives/preloader";

import { educationCourseDetails } from "../../services/routes/education-courses-routes-name";
import { getAllCourses } from "../../services/education-service";

export default {
  name: "EducationCourses",
  directives: {
    preloader: preloaderDirective
  },
  components: {
    LearningCard,
    VCarousel,
    CourseCategoryLinkList,
    VButton
    // VSelect
  },
  data() {
    return {
      loading: false,
      value: "",
      categoryOptions: [
        { id: 1, title: "option1" },
        { id: 2, title: "option2" },
        { id: 3, title: "option3" },
        { id: 4, title: "option4" }
      ],
      byDateOptions: [
        { id: 1, title: "option1" },
        { id: 2, title: "option2" },
        { id: 3, title: "option3" },
        { id: 4, title: "option4" }
      ],
      courses: [],
      categoryLinkList: [
        {
          title: "Marketing",
          to: "education.category",
          coursesList: [],
          icon: "back",
          id: 1
        },
        {
          title: "Design",
          to: "education.category",
          coursesList: [],
          icon: "back",
          id: 2
        },
        {
          title: "Business",
          to: "education.category",
          coursesList: [],
          icon: "back",
          id: 3
        }
      ]
    };
  },
  created() {
    this.getCourses();
  },
  methods: {
    getCourses() {
      getAllCourses().then(({ data }) => {
        console.log(data);
        this.courses = data;
      });
    },
    showDetails(id) {
      this.$router.push({ name: educationCourseDetails, params: { courseSlug: id } });
    }
  }
};
</script>
<style lang="scss" scoped>
.learning-box__body-content {
  margin-bottom: 0;
  padding-bottom: 0;
  box-shadow: none;
}

.learning-box__courses-title {
  margin-bottom: 24px;
}

.learning-box__courses-content {
  @media only screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media only screen and (min-width: 1440px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media only screen and (min-width: 769px) {
  .create-course-box__head-actions {
    position: absolute;
    top: 40px;
    right: 32px;
  }
}
</style>
