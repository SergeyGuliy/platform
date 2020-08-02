import { MUTATION_ADD_COURSE_DATA_TO_STATE } from "./store-course-essences-name";

export const courseMutations = {
  [MUTATION_ADD_COURSE_DATA_TO_STATE](state, data) {
    state.courseData = data;
  }
};
