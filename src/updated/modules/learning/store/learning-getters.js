import get from "lodash/fp/get";

export const learningGetters = {
  createCourse: state => state.createCourse,
  stepsList: (state, getters) => getters.createCourse.stepsList,
  activeStepIndex: (state, getters) => getters.stepsList.findIndex(stepItem => stepItem.isActive),
  activeStep: (state, getters) => getters.stepsList.find(stepItem => stepItem.isActive),
  nextStep: (state, getters) => {
    const activeStepIndex = getters.activeStepIndex;
    return activeStepIndex > -1 ? getters.stepsList[getters.activeStepIndex + 1] : null;
  },
  previousStep: (state, getters) => {
    const activeStepIndex = getters.activeStepIndex;
    return activeStepIndex > 0 ? getters.stepsList[getters.activeStepIndex - 1] : null;
  },
  formFieldValue: (state, getters) => fieldPath => get(fieldPath, getters.createCourse.formData),
  isActiveStepValid: (state, getters) => getters.activeStep?.isValid,
  nextStepRequest: (state, getters) => getters.createCourse.nextStepRequest,
  formFillProgress: (state, getters) => ((getters.activeStepIndex + 1) / getters.stepsList.length) * 100,
  isNextButtonVisible: (state, getters) =>
    getters.activeStepIndex < getters.stepsList.findIndex(item => item.title === "message"),
  isLastStep: (state, getters) => getters.activeStepIndex === getters.stepsList.length - 1,
  currentCourseData: (state, getters) => getters.createCourse.currentCourseData,

  categoriesGetter: state => state.categories.map(el => ({ value: el.id, label: el.name })),
  timesGetter: state => state.times.map(el => ({ value: el.id, label: el.name })),
  levelsGetter: state => state.levels.map(el => ({ value: el.id, label: el.name })),
  langsGetter: state => state.languages.map(el => ({ value: el.id, label: el.name })),

  coursePlanChapters: state => state.createPlan.planChapters,
  activePlanChapterId: state => state.createPlan.activeChapterId,
  getCharterParamValueById: (state, getters) => (field, id) =>
    getters.coursePlanChapters.find(el => el.id === id)[field],
  getLectureResourcesByField: (state, getters) => (chapterId, lectureId, field) => {
    return getters
      .getCharterParamValueById("filler", chapterId)
      .filter(el => el.label === "lecture")
      .find(el => el.id === lectureId)[field];
  },
  getTestValueById: (state, getters) => (chapterId, testId, field) => {
    return getters
      .getCharterParamValueById("filler", chapterId)
      .filter(el => el.label === "test")
      .find(el => el.id === testId)[field];
  },
  lastPlanChapterId: (state, getters) => getters.coursePlanChapters[getters.coursePlanChaptersLength - 1].id,
  coursePlanChaptersLength: (state, getters) => getters.coursePlanChapters.length,
  getAllCourses: state => state.allCourses,
  getAllCourseById: (state, getters) => id => getters.getAllCourses.find(el => el.id === id)
};
