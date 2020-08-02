import { ajax } from "@/plugins/api";

export async function createCourseRequest() {
  return Promise.resolve({ id: 1 });
}

export async function getCategories() {
  return ajax.get("/courses/categories").then(data => data.data.data);
}

export async function getTimes() {
  return ajax.get("/courses/times").then(data => data.data.data);
}

export async function getLevels() {
  return ajax.get("/courses/levels").then(data => data.data.data);
}

export async function getLanguages() {
  return ajax.get("/courses/languages").then(data => data.data.data);
}

export async function uploadFile(file, func) {
  return ajax.post("/user-files", file, null, "form", func);
}

export async function saveCourse(data) {
  const course = {
    name: data.name.name,
    sub_title: data.description.subtitle,
    description: data.description.extendedDescription,
    subject: data.description.subject,
    category_id: data.category.category,
    time_id: data.time.time,
    language_id: data.description.language,
    level_id: data.description.level,
    welcome: data.message.greetings,
    congratulation: data.message.congratulations,
    targets: data.requirements.learningPlan.map(el => el.value),
    requirements: data.requirements.preliminaryRequirements.map(el => el.value),
    audiences: data.requirements.targetAudience.map(el => el.value),
    image_cover_id: data.cover.id,
    promo_video_id: data.video.video.id
  };

  return ajax.post("/courses", course);
}

export async function getAllCourses() {
  return ajax.get("/courses?include=preview,video").then(res => res.data);
}

export async function getCourseById(courseId = 1) {
  return Promise.resolve({ id: courseId });
}
