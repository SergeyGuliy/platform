import Vue from "vue";
import Vuex from "vuex";

import { learningStore } from "../updated/modules/learning/store/learning-store";
import { courseStore } from "../updated/modules/education/services/store/course-store";
import { newCourse } from "../updated/modules/creating_new_course/services/store/creating_new_course";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    general: {
      namespaced: true,
      state: require("../store/general").state,
      getters: require("../store/general").getters,
      mutations: require("../store/general").mutations,
      actions: require("../store/general").actions
    },
    auth: {
      namespaced: true,
      state: require("../store/auth").state,
      getters: require("../store/auth").getters,
      mutations: require("../store/auth").mutations,
      actions: require("../store/auth").actions
    },
    modal: {
      namespaced: true,
      state: require("../store/modal").state,
      getters: require("../store/modal").getters,
      mutations: require("../store/modal").mutations,
      actions: require("../store/modal").actions
    },
    toolsPages: {
      namespaced: true,
      state: require("../store/tools-pages").state,
      getters: require("../store/tools-pages").getters,
      mutations: require("../store/tools-pages").mutations,
      actions: require("../store/tools-pages").actions
    },
    learning: learningStore,
    course: courseStore,
    newCourse: newCourse
  }
});

export default store;
