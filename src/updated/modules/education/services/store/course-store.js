import { courseState } from "./course-state";
import { courseMutations } from "./course-mutations";
import { courseActions } from "./course-actions";
import { courseGetters } from "./course-getters";

export const courseStore = {
  state: courseState,
  mutations: courseMutations,
  actions: courseActions,
  getters: courseGetters,
  namespaced: true
};
