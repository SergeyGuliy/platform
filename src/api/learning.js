import { ajax } from "../plugins/api";

export default {
  learning: {
    tutorial: {
      getTutorial: () => ajax.get(`http://185.22.233.61/api/common/learning?include=lessons`),
      createTutorial: data => ajax.post("http://185.22.233.61/api/common/learning/?include=sections", data),
      updateTutorial: data => ajax.put("http://185.22.233.61/api/common/learning/?include=sections", data),
      enableTutorial: () => ajax.patch(`http://185.22.233.61/api/common/learning/enable?include=sections`),
      disableTutorial: () => ajax.patch(`http://185.22.233.61/api/common/learning/disable?include=sections`)
    },
    sections: {
      getSections: () => ajax.get(`http://185.22.233.61/api/common/learning/sections?include=lessons`),
      createSection: data => ajax.post(`http://185.22.233.61/api/common/learning/section?include=lessons`, data),
      changeLesson: (data, sectionId) =>
        ajax.put(`http://185.22.233.61/api/common/learning/section/${sectionId}`, data),

      deleteSection: sectionId => ajax.delete(`http://185.22.233.61/api/common/learning/section/${sectionId}/delete`),
      enableSection: sectionId => ajax.patch(`http://185.22.233.61/api/common/learning/section/${sectionId}/enable`),
      disableSection: sectionId => ajax.patch(`http://185.22.233.61/api/common/learning/section/${sectionId}/disable`)
    },
    lessons: {
      blocks: {
        setVideo: (sectionId, lessonId, data) =>
          ajax.post(
            `http://185.22.233.61/api/common/learning/section/${sectionId}/lessons/${lessonId}/content/video`,
            data
          ),
        setPhoto: (sectionId, lessonId, data) =>
          ajax.post(
            `http://185.22.233.61/api/common/learning/section/${sectionId}/lessons/${lessonId}/content/image`,
            data
          ),
        setText: (sectionId, lessonId, data) =>
          ajax.post(
            `http://185.22.233.61/api/common/learning/section/${sectionId}/lessons/${lessonId}/content/html`,
            data
          )
      },
      getLessons: sectionId =>
        ajax.get(`http://185.22.233.61/api/common/learning/section/${sectionId}/lessons?include=contents`),
      getLessonBtId: (sectionId, lessonId) =>
        ajax.get(`http://185.22.233.61/api/common/learning/section/${sectionId}/lesson/${lessonId}?include=contents`),
      createLesson: (sectionId, data) =>
        ajax.post(`http://185.22.233.61/api/common/learning/section/${sectionId}/lessons`, data),
      changeLesson: (data, sectionId, lessonId) =>
        ajax.put(
          `http://185.22.233.61/api/common/learning/section/${sectionId}/lessons/${lessonId}?include=contents`,
          data
        ),
      deleteLesson: (sectionId, lessonId) =>
        ajax.delete(`http://185.22.233.61/api/common/learning/section/${sectionId}/lessons/${lessonId}`),
      enableLesson: (sectionId, lessonId) =>
        ajax.patch(`http://185.22.233.61/api/common/learning/section/${sectionId}/lessons/${lessonId}/enable`),
      disableLesson: (sectionId, lessonId) =>
        ajax.patch(`http://185.22.233.61/api/common/learning/section/${sectionId}/lessons/${lessonId}/disable`)
    }
  }
};
