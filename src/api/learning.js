import { ajax } from "../plugins/api";

export default {
  learning: {
    tutorial: {
      getTutorial: () => ajax.get(`https://platform.dev.vad.pw/api/common/learning?include=lessons`),
      createTutorial: data => ajax.post("https://platform.dev.vad.pw/api/common/learning/?include=sections", data),
      updateTutorial: data => ajax.put("https://platform.dev.vad.pw/api/common/learning/?include=sections", data),
      enableTutorial: () => ajax.patch(`https://platform.dev.vad.pw/api/common/learning/enable?include=sections`),
      disableTutorial: () => ajax.patch(`https://platform.dev.vad.pw/api/common/learning/disable?include=sections`)
    },
    sections: {
      getSections: () => ajax.get(`https://platform.dev.vad.pw/api/common/learning/sections?include=lessons`),
      createSection: data => ajax.post(`https://platform.dev.vad.pw/api/common/learning/section?include=lessons`, data),
      changeSection: (sectionId, data) =>
        ajax.put(`https://platform.dev.vad.pw/api/common/learning/section/${sectionId}`, data),

      deleteSection: sectionId => ajax.delete(`https://platform.dev.vad.pw/api/common/learning/section/${sectionId}`),
      enableSection: sectionId =>
        ajax.patch(`https://platform.dev.vad.pw/api/common/learning/section/${sectionId}/enable`),
      disableSection: sectionId =>
        ajax.patch(`https://platform.dev.vad.pw/api/common/learning/section/${sectionId}/disable`),
      setAccessSections: data => ajax.patch(`https://platform.dev.vad.pw/api/common/learning/access`, data),
      reorderSections: data => ajax.patch(`https://platform.dev.vad.pw/api/common/learning/sections/reorder`, data)
    },
    lessons: {
      // blocks: {
      //   setVideo: (sectionId, lessonId, data) =>
      //     ajax.post(
      //       `http://185.22.233.61/api/common/learning/section/${sectionId}/lessons/${lessonId}/content/video`,
      //       data
      //     ),
      //   setPhoto: (sectionId, lessonId, data) =>
      //     ajax.post(
      //       `http://185.22.233.61/api/common/learning/section/${sectionId}/lessons/${lessonId}/content/image`,
      //       data
      //     ),
      //   setText: (sectionId, lessonId, data) =>
      //     ajax.post(
      //       `http://185.22.233.61/api/common/learning/section/${sectionId}/lessons/${lessonId}/content/html`,
      //       data
      //     )
      // },
      getLessons: sectionId =>
        ajax.get(`https://platform.dev.vad.pw/api/common/learning/section/${sectionId}/lessons?include=contents`),
      getLessonById: (sectionId, lessonId) =>
        ajax.get(
          `https://platform.dev.vad.pw/api/common/learning/section/${sectionId}/lesson/${lessonId}?include=contents`
        ),
      createLesson: (sectionId, data) =>
        ajax.post(`https://platform.dev.vad.pw/api/common/learning/section/${sectionId}/lesson`, data),
      changeLesson: (sectionId, lessonId, data) =>
        ajax.put(
          `https://platform.dev.vad.pw/api/common/learning/section/${sectionId}/lesson/${lessonId}?include=contents`,
          data
        ),
      deleteLesson: (sectionId, lessonId) =>
        ajax.delete(`https://platform.dev.vad.pw/api/common/learning/section/${sectionId}/lesson/${lessonId}`),
      enableLesson: (sectionId, lessonId) =>
        ajax.patch(`https://platform.dev.vad.pw/api/common/learning/section/${sectionId}/lesson/${lessonId}/enable`),
      disableLesson: (sectionId, lessonId) =>
        ajax.patch(`https://platform.dev.vad.pw/api/common/learning/section/${sectionId}/lesson/${lessonId}/disable`),
      reorderLessons: (sectionId, data) =>
        ajax.patch(`https://platform.dev.vad.pw/api/common/learning/section/${sectionId}/lessons/reorder`, data)
    }
  }
};
