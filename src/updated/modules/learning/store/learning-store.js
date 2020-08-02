import { learningActions } from "./learning-actions";
import { learningGetters } from "./learning-getters";
import { learningMutations } from "./learning-mutations";
import { learningState } from "./learning-state";

export const learningStore = {
  state: learningState,
  mutations: learningMutations,
  getters: learningGetters,
  actions: learningActions,
  namespaced: true
};
