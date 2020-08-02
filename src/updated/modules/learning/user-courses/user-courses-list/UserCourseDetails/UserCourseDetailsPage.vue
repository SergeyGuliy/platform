<template>
  <div class="cabinet-course-box">
    <div class="cabinet-course-box__wrapper">
      <div class="cabinet-course-box__header">
        <div class="cabinet-course-box__header-back">
          <button type="button" class="__clean-btn btn-back"><v-icon src="back" /><span>Мои курсы</span></button>
        </div>
        <div class="cabinet-course-box__header-title">
          <div class="cabinet-course-box__header-title-name">
            {{ currentCourse.name }}<span class="label">Черновик</span>
          </div>
          <div class="cabinet-course-box__header-title-action">
            <button type="button" class="btn h48">Опубликовать курс</button>
          </div>
        </div>
        <div class="cabinet-course-box__header-nav">
          <ul class="list">
            <li class="active"><a href="#">Основная информация</a></li>
            <li><a href="#">Учебный план</a></li>
          </ul>
        </div>
      </div>
      <div class="cabinet-course-box__body">
        <div class="cabinet-course-box__main-info">
          <div class="cabinet-course-box__main-info-title">Основная информация</div>
          <div class="cabinet-course-box__main-info-nav">
            <ul class="list">
              <li>
                <button type="button" data-id="id1" class="__clean-btn btn-info-nav">
                  <span>Описание курса</span>
                  <v-icon src="back" />
                </button>
              </li>
              <li>
                <button type="button" data-id="id2" class="__clean-btn btn-info-nav">
                  <span>Задача и требования</span>
                  <v-icon src="back" />
                </button>
              </li>
              <li>
                <button type="button" data-id="id3" class="__clean-btn btn-info-nav">
                  <span>Обложка курса</span>
                  <v-icon src="back" />
                </button>
              </li>
              <li class="active">
                <button type="button" data-id="id4" class="__clean-btn btn-info-nav">
                  <span>Рекламное видео</span>
                  <v-icon src="back" />
                </button>
              </li>
              <li>
                <button type="button" data-id="id5" class="__clean-btn btn-info-nav">
                  <span>Сообщение курса</span>
                  <v-icon src="back" />
                </button>
              </li>
            </ul>
          </div>

          <div class="cabinet-course-box__main-info-content">
            <component :is="'v-video-data'" :config="currentCourse"></component>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoDataComponent from "./VideoDataComponent";
import { mapGetters } from "vuex";
export default {
  name: "UserCourseDetailsPage",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    "v-video-data": VideoDataComponent
  },
  computed: {
    ...mapGetters("learning", ["getAllCourseById"]),
    currentCourse() {
      return this.getAllCourseById(this.$route.params.courseId);
    }
  }
};
</script>

<style scoped></style>
