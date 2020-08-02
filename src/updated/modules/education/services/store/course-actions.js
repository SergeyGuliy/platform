import { ACTION_GET_COURSE_DATA, MUTATION_ADD_COURSE_DATA_TO_STATE } from "./store-course-essences-name";

export const courseActions = {
  [ACTION_GET_COURSE_DATA]({ commit }, course) {
    commit(MUTATION_ADD_COURSE_DATA_TO_STATE, course);
  }
};
