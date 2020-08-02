<template>
  <div class="cabinet-course-box">
    <div class="cabinet-course-box__wrapper">
      <div class="cabinet-course-box__header cabinet-course-box__header_cabinet">
        <div class="cabinet-course-box__header-title">
          <div class="cabinet-course-box__header-title-name">Кабинет преподавателя</div>
          <div class="cabinet-course-box__header-title-action">
            <button type="button" class="btn btn_add h40" @click="onCreateNewCourse">
              <v-icon src="plus" />
              <span class="fs16">Новый курс</span>
            </button>
          </div>
        </div>
        <div class="cabinet-course-box__header-nav">
          <ul class="list">
            <li class="active"><a href="#">Мои курси</a></li>
            <li><a href="#">Взаимодействие</a></li>
            <li><a href="#">Статистика</a></li>
          </ul>
        </div>
      </div>
      <MyCoursesComponent :config="config" />
    </div>
  </div>
</template>

<script>
import MyCoursesComponent from "./MyCoursesComponent";
import router from "@/config/router";
import { createCourse } from "@/updated/modules/learning/models/learning-courses-router-names";
export default {
  name: "TeacherCabinet",
  props: ["config"],
  components: {
    MyCoursesComponent
  },
  methods: {
    onCreateNewCourse() {
      router.push({ name: createCourse });
    }
  }
};
</script>

<style scoped></style>
