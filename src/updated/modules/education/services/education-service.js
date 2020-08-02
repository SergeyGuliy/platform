import { ajax } from "../../../../plugins/api";

function get(url) {
  return ajax.get(url).then(response => response.data);
}
export async function getAllCourses() {
  return get("/courses?include=preview,category");
}
export async function getCourseBySlug(slug) {
  return get(
    `/courses/${slug}?include=category,level,language,targets,audiences,requirements,preview,video,sections,lectures`
  );
}
export async function getCourseLessonPlanSections(courseId) {
  return get(`/courses/${courseId}/sections`);
}
export async function getCourseLessonsPlanSection(slug) {
  return get(`/courses/sections/${slug}`);
}
export async function getCourseLessons(sectionId) {
  return get(`/courses/${sectionId}/lectures`);
}
export async function getCourseLesson(slug) {
  return get(`/courses/lectures/${slug}?include=video,preview,resources`);
}
export async function getAllCoursesCategory() {
  return get("/courses/categories");
}
export async function getCoursesByCategoryId(courseId) {
  return get(`/courses/categories/${courseId}?include=category,preview`);
}
