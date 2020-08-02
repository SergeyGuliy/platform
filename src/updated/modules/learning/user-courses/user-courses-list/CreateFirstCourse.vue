<template>
  <div class="create-course-box">
    <div class="create-course-box__wrapper">
      <div class="create-course-box__start">
        <div class="create-course-box__start-nav">
          <a href="#" class="btn-link" @click="goToEducation()">
            <v-icon src="back"></v-icon>
            <span>Обучение</span></a
          >
        </div>
        <div class="create-course-box__start-title">Вы еще не создали ни одного курса</div>
        <div class="create-course-box__start-pic">
          <img src="./start.svg" alt="dsdda" />
        </div>
        <div class="create-course-box__start-action">
          <button type="button" class="btn btn-w352 h48" @click="createCourse()">Создать свой курс</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import {
  LEARNING_CREATE_COURSE,
  LEARNING_GET_ALL_COURSES,
  LEARNING_GET_CATEGORIES,
  LEARNING_GET_LANGS,
  LEARNING_GET_LEVELS,
  LEARNING_GET_TIMES
} from "../../store/mutation-types";
import router from "../../../../../config/router";

export default {
  name: "CreateFirstCourse",
  methods: {
    ...mapActions("learning", [
      LEARNING_CREATE_COURSE,
      LEARNING_GET_ALL_COURSES,
      LEARNING_GET_CATEGORIES,
      LEARNING_GET_TIMES,
      LEARNING_GET_LEVELS,
      LEARNING_GET_LANGS
    ]),
    createCourse() {
      this[LEARNING_CREATE_COURSE]();
    },
    goToEducation() {
      router.push({ name: "education" });
    }
  }
};
</script>
