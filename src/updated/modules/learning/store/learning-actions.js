import router from "../../../../config/router";

import {
  LEARNING_CREATE_COURSE_FINAL_CREATE_REQUEST,
  LEARNING_GET_ALL_COURSES,
  LEARNING_GET_CURRENT_COURSE_DATA,
  LEARNING_SET_CURRENT_COURSE_DATA,
  LEARNING_GET_CATEGORIES,
  LEARNING_SET_CATEGORIES,
  LEARNING_GET_TIMES,
  LEARNING_SET_TIMES,
  LEARNING_GET_LEVELS,
  LEARNING_SET_LEVELS,
  LEARNING_SET_LANGS,
  LEARNING_GET_LANGS,
  LEARNING_SAVE,
  LEARNING_SET_ALL_COURSE_DATA
} from "./mutation-types";

import { newCourseCreated } from "../models/learning-courses-router-names";
import {
  getAllCourses,
  getCategories,
  getCourseById,
  getLanguages,
  getLevels,
  getTimes,
  saveCourse
} from "@/updated/modules/learning/services/learning-service";

export const learningActions = {
  [LEARNING_CREATE_COURSE_FINAL_CREATE_REQUEST]() {
    router.push({ name: newCourseCreated });
  },
  async [LEARNING_GET_ALL_COURSES]({ commit }) {
    const coursesData = await getAllCourses();
    commit(LEARNING_SET_ALL_COURSE_DATA, coursesData.data);
  },
  async [LEARNING_GET_CATEGORIES]({ commit }) {
    const courseCategories = await getCategories();
    commit(LEARNING_SET_CATEGORIES, courseCategories);
  },
  async [LEARNING_GET_TIMES]({ commit }) {
    const courseTimes = await getTimes();
    commit(LEARNING_SET_TIMES, courseTimes);
  },
  async [LEARNING_GET_LEVELS]({ commit }) {
    const courseLevels = await getLevels();
    commit(LEARNING_SET_LEVELS, courseLevels);
  },
  async [LEARNING_GET_LANGS]({ commit }) {
    const courseLangs = await getLanguages();
    commit(LEARNING_SET_LANGS, courseLangs);
  },
  async [LEARNING_SAVE]({ state }) {
    await saveCourse(state.createCourse.formData);
  },
  async [LEARNING_GET_CURRENT_COURSE_DATA]({ commit }, { courseId }) {
    const courseData = await getCourseById(courseId);

    commit(LEARNING_SET_CURRENT_COURSE_DATA, courseData);
  }
};
