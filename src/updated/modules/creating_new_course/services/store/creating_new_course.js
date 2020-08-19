export const newCourse = {
  namespaced: true,
  state: {
    previewData: null
  },
  mutations: {
    SET_PREVIEW_DATA(state, data) {
      state.previewData = data;
    }
  }
};
