import { ajax } from "../../../../plugins/api";
const baseUrl = "https://platform.dev.vad.pw/api/common/learning";
export const api = {
  learning: {
    tutorial: {
      getTutorial: () => ajax.get(`${baseUrl}?include=lessons`),
      createTutorial: data => ajax.post(`${baseUrl}/?include=sections`, data),
      updateTutorial: data => ajax.put(`${baseUrl}/?include=sections`, data),
      enableTutorial: () => ajax.patch(`${baseUrl}/enable?include=sections`),
      disableTutorial: () => ajax.patch(`${baseUrl}/disable?include=sections`)
    },
    sections: {
      getSections: () => ajax.get(`${baseUrl}/sections?include=lessons`),
      createSection: data => ajax.post(`${baseUrl}/section?include=lessons`, data),
      changeSection: (sectionId, data) => ajax.put(`${baseUrl}/section/${sectionId}`, data),

      deleteSection: sectionId => ajax.delete(`${baseUrl}/section/${sectionId}`),
      enableSection: sectionId => ajax.patch(`${baseUrl}/section/${sectionId}/enable`),
      disableSection: sectionId => ajax.patch(`${baseUrl}/section/${sectionId}/disable`),
      setAccessSections: data => ajax.patch(`${baseUrl}/access`, data),
      reorderSections: data => ajax.patch(`${baseUrl}/sections/reorder`, data)
    },
    lessons: {
      getLessons: sectionId => ajax.get(`${baseUrl}/section/${sectionId}/lessons?include=contents`),
      getLessonById: (sectionId, lessonId) =>
        ajax.get(`${baseUrl}/learning/section/${sectionId}/lesson/${lessonId}?include=contents`),
      createLesson: (sectionId, data) => ajax.post(`${baseUrl}/section/${sectionId}/lesson`, data),
      changeLesson: (sectionId, lessonId, data) =>
        ajax.put(`${baseUrl}/section/${sectionId}/lesson/${lessonId}?include=contents`, data),
      deleteLesson: (sectionId, lessonId) => ajax.delete(`${baseUrl}/section/${sectionId}/lesson/${lessonId}`),
      enableLesson: (sectionId, lessonId) => ajax.patch(`${baseUrl}/section/${sectionId}/lesson/${lessonId}/enable`),
      disableLesson: (sectionId, lessonId) => ajax.patch(`${baseUrl}/section/${sectionId}/lesson/${lessonId}/disable`),
      reorderLessons: (sectionId, data) => ajax.patch(`${baseUrl}/section/${sectionId}/lessons/reorder`, data)
    }
  }
};
