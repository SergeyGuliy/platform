import {
  LEARNING_ADD_CHAPTER_TO_PLAN,
  LEARNING_CREATE_COURSE_ACTIVE_STEP,
  LEARNING_CREATE_COURSE_FILL_FORM_FIELD,
  // LEARNING_CREATE_COURSE_FILL_PLAN_FIELD,
  LEARNING_CREATE_COURSE_NEXT_STEP_REQUEST,
  LEARNING_CREATE_COURSE_STEP_VALIDITY,
  LEARNING_SET_ACTIVE_PLAN_ID,
  LEARNING_SET_CURRENT_COURSE_DATA,
  LEARNING_SET_CATEGORIES,
  LEARNING_SET_TIMES,
  LEARNING_SET_LEVELS,
  LEARNING_SET_LANGS,
  LEARNING_ADD_LECTURE_TO_CHAPTER,
  LEARNING_LECTURE_VIDEO_SAVE,
  LEARNING_LECTURE_RESOURCE_ADD,
  LEARNING_LECTURE_DESCRIPTION_SAVE,
  LEARNING_ADD_TEST_TO_CHAPTER,
  LEARNING_ADD_QUESTION_TO_TEST,
  LEARNING_REMOVE_QUESTION_FROM_TEST,
  LEARNING_SET_CORRECT_ANSWER,
  LEARNING_REMOVE_ANSWER
} from "./mutation-types";
import {
  // LEARNING_CHANGE_ORDER_AFTER_DRAG,
  LEARNING_LECTURE_REMOVE_FILLER,
  LEARNING_LECTURE_RESOURCE_REMOVE,
  LEARNING_SAVE_QUESTION_TO_TEST,
  LEARNING_SET_ALL_COURSE_DATA
} from "@/updated/modules/learning/store/mutation-types";

export const learningMutations = {
  [LEARNING_CREATE_COURSE_STEP_VALIDITY](state, { isValid }) {
    state.createCourse.stepsList = state.createCourse.stepsList.map(item => ({
      ...item,
      isValid: item.isActive ? isValid : item.isValid
    }));
  },
  [LEARNING_CREATE_COURSE_ACTIVE_STEP](state, { stepTitle }) {
    state.createCourse.stepsList = state.createCourse.stepsList.map(stepItem => ({
      ...stepItem,
      isActive: stepItem.title === stepTitle
    }));
  },
  [LEARNING_CREATE_COURSE_FILL_FORM_FIELD](state, { name, value }) {
    state.createCourse.formData[name] = value;
  },
  [LEARNING_CREATE_COURSE_NEXT_STEP_REQUEST](state, { isActive }) {
    state.createCourse.nextStepRequest = isActive;
  },
  [LEARNING_SET_CURRENT_COURSE_DATA](state, data) {
    state.createCourse.currentCourseData = data;
  },
  [LEARNING_SET_ALL_COURSE_DATA](state, data) {
    state.allCourses = data;
  },

  [LEARNING_SET_ACTIVE_PLAN_ID](state, { id }) {
    state.createPlan.activeChapterId = id;
  },
  [LEARNING_ADD_CHAPTER_TO_PLAN](state, chapter) {
    state.createPlan.planChapters = [...state.createPlan.planChapters, chapter];
  },
  [LEARNING_ADD_LECTURE_TO_CHAPTER](state, { chapterId, payload }) {
    state.createPlan.planChapters = state.createPlan.planChapters.map(el => {
      if (el.id === chapterId) {
        el.filler = [...el.filler, payload];
      }
      return el;
    });
  },
  // [LEARNING_CHANGE_ORDER_AFTER_DRAG](state, { chapterId, payload }) {
  //     state.createPlan.planChapters = state.createPlan.planChapters.map(el => {
  //         if (el.id === chapterId) {
  //             el.filler = [...payload];
  //         }
  //         return el;
  //     });
  // },
  [LEARNING_ADD_TEST_TO_CHAPTER](state, { chapterId, payload }) {
    state.createPlan.planChapters = state.createPlan.planChapters.map(el => {
      if (el.id === chapterId) {
        el.filler = [...el.filler, payload];
      }
      return el;
    });
  },
  [LEARNING_SET_CATEGORIES](state, data) {
    state.categories = [...data];
  },
  [LEARNING_SET_TIMES](state, data) {
    state.times = [...data];
  },
  [LEARNING_SET_LEVELS](state, data) {
    state.levels = [...data];
  },
  [LEARNING_SET_LANGS](state, data) {
    state.languages = [...data];
  },
  [LEARNING_LECTURE_DESCRIPTION_SAVE](state, { chapterId, lectureId, data }) {
    state.createPlan.planChapters = state.createPlan.planChapters.map(chapter => {
      chapter.filler = chapter.filler.map(lecture => {
        if (chapter.id === chapterId && lecture.id === lectureId && lecture.label === "lecture") {
          lecture = { ...lecture, description: data };
        }
        return lecture;
      });
      return chapter;
    });
  },
  [LEARNING_LECTURE_REMOVE_FILLER](state, { chapterId, fillerId, label }) {
    state.createPlan.planChapters = state.createPlan.planChapters.map(chapter => {
      if (chapter.id === chapterId) {
        chapter.filler = chapter.filler.filter(el => el.id !== fillerId || (el.id === fillerId && el.label !== label));
      }
      return chapter;
    });
  },

  [LEARNING_LECTURE_RESOURCE_ADD](state, { chapterId, lectureId, data }) {
    console.log(state);
    state.createPlan.planChapters = state.createPlan.planChapters.map(chapter => {
      chapter.filler = chapter.filler.map(lecture => {
        if (chapter.id === chapterId && lecture.id === lectureId && lecture.label === "lecture") {
          lecture = { ...lecture, resources: [...lecture.resources, { ...data }] };
        }
        return lecture;
      });
      return chapter;
    });
  },
  [LEARNING_LECTURE_RESOURCE_REMOVE](state, { chapterId, lectureId, idx }) {
    console.log({ chapterId, lectureId, idx });
    state.createPlan.planChapters = state.createPlan.planChapters.map(chapter => {
      chapter.filler = chapter.filler.map(lecture => {
        if (chapter.id === chapterId && lecture.id === lectureId && lecture.label === "lecture") {
          lecture.resources = lecture.resources.filter((el, index) => index !== idx);
        }
        return lecture;
      });
      return chapter;
    });
  },
  [LEARNING_LECTURE_VIDEO_SAVE](state, { chapterId, lectureId, videoData }) {
    state.createPlan.planChapters = state.createPlan.planChapters.map(chapter => {
      chapter.filler = chapter.filler.map(lecture => {
        if (chapter.id === chapterId && lecture.id === lectureId && lecture.label === "lecture") {
          lecture = { ...lecture, videoData: { ...videoData } };
        }
        return lecture;
      });
      return chapter;
    });
  },
  [LEARNING_ADD_QUESTION_TO_TEST](state, { chapterId, lectureId, data }) {
    state.createPlan.planChapters = state.createPlan.planChapters.map(chapter => {
      chapter.filler = chapter.filler.map(lecture => {
        if (chapter.id === chapterId && lecture.id === lectureId && lecture.label === "test") {
          lecture = { ...lecture, questions: [...lecture.questions, { ...data }] };
        }
        return lecture;
      });
      return chapter;
    });
  },
  [LEARNING_SAVE_QUESTION_TO_TEST](state, { chapterId, lectureId, questionId, data }) {
    state.createPlan.planChapters = state.createPlan.planChapters.map(chapter => {
      chapter.filler = chapter.filler.map(lecture => {
        if (chapter.id === chapterId && lecture.id === lectureId && lecture.label === "test") {
          lecture.questions = lecture.questions.map(question => {
            if (question.id === questionId) {
              return data;
            }
            return question;
          });
        }
        return lecture;
      });
      return chapter;
    });
  },
  [LEARNING_REMOVE_QUESTION_FROM_TEST](state, { chapterId, lectureId, id }) {
    state.createPlan.planChapters = state.createPlan.planChapters.map(chapter => {
      chapter.filler = chapter.filler.map(lecture => {
        if (chapter.id === chapterId && lecture.id === lectureId && lecture.label === "test") {
          lecture.questions = lecture.questions.filter(el => el.id !== id);
        }
        return lecture;
      });
      return chapter;
    });
  },
  [LEARNING_SET_CORRECT_ANSWER](state, { chapterId, testId, questionId, id }) {
    state.createPlan.planChapters = state.createPlan.planChapters.map(chapter => {
      chapter.filler = chapter.filler.map(lecture => {
        if (chapter.id === chapterId && lecture.id === testId && lecture.label === "test") {
          lecture.questions = lecture.questions.map(question => {
            if (question.id === questionId) {
              question.answers = question.answers.map((answer, index) => {
                answer.isCorrect = index === id;
                return answer;
              });
            }
            return question;
          });
        }
        return lecture;
      });
      return chapter;
    });
  },
  [LEARNING_REMOVE_ANSWER](state, { chapterId, testId, questionId, id }) {
    state.createPlan.planChapters = state.createPlan.planChapters.map(chapter => {
      chapter.filler = chapter.filler.map(lecture => {
        if (chapter.id === chapterId && lecture.id === testId && lecture.label === "test") {
          lecture.questions = lecture.questions.map(question => {
            if (question.id === questionId) {
              question.answers = question.answers.filter((el, i) => i !== id);
            }
            return question;
          });
        }
        return lecture;
      });
      return chapter;
    });
  }
};
