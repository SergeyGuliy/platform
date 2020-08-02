import {
  createCourse,
  myCourses,
  newCourseCategory,
  newCourseCover,
  newCourseCreated,
  newCourseDescription,
  newCourseMessage,
  newCourseName,
  newCourseRequirements,
  newCourseTime,
  newCourseVideo,
  newCoursePlan,
  newCourseLecture,
  newCourseChapterList,
  newCourseQuestion,
  courseDetails
} from "@/updated/modules/learning/models/learning-courses-router-names";

export const learningRoutes = [
  {
    path: "/my-courses",
    name: myCourses,
    meta: { layout: "app" },
    component: () => import("./user-courses/user-courses-list/UserCoursesList.vue")
  },
  {
    path: "/details/:courseId",
    name: courseDetails,
    meta: { stepTitle: "details", layout: "app" },
    component: () => import("./user-courses/user-courses-list/UserCourseDetails/UserCourseDetailsPage.vue")
  },
  {
    path: "/create-course",
    name: createCourse,
    meta: { layout: "app" },
    redirect: { name: newCourseName },
    component: () => import("./user-courses/new-user-course/NewUserCourse.vue"),
    children: [
      {
        path: "name",
        name: newCourseName,
        meta: { stepTitle: "name", layout: "app" },
        component: () => import("./user-courses/new-user-course/NewUserCourseName.vue")
      },
      {
        path: "category",
        name: newCourseCategory,
        meta: { stepTitle: "category", layout: "app" },
        component: () => import("./user-courses/new-user-course/NewUserCourseCategory.vue")
      },
      {
        path: "time",
        name: newCourseTime,
        meta: { stepTitle: "time", layout: "app" },
        component: () => import("./user-courses/new-user-course/NewUserCourseTime.vue")
      },
      {
        path: "description",
        name: newCourseDescription,
        meta: { stepTitle: "description", layout: "app" },
        component: () => import("./user-courses/new-user-course/NewUserCourseDescription.vue")
      },
      {
        path: "requirements",
        name: newCourseRequirements,
        meta: { stepTitle: "requirements", layout: "app" },
        component: () => import("./user-courses/new-user-course/requirements/NewUserCourseRequirements.vue")
      },
      {
        path: "cover",
        name: newCourseCover,
        meta: { stepTitle: "cover", layout: "app" },
        component: () => import("./user-courses/new-user-course/NewUserCourseCover.vue")
      },
      {
        path: "video",
        name: newCourseVideo,
        meta: { stepTitle: "video", layout: "app" },
        component: () => import("./user-courses/new-user-course/NewUserCourseVideo.vue")
      },
      {
        path: "message",
        name: newCourseMessage,
        meta: { stepTitle: "message", layout: "app" },
        component: () => import("./user-courses/new-user-course/NewUserCourseMessage.vue")
      },
      {
        path: "created",
        name: newCourseCreated,
        meta: { stepTitle: "final", layout: "app" },
        component: () => import("./user-courses/new-user-course/NewUserCourseCreated.vue")
      },
      {
        path: "chapter",
        name: newCourseChapterList,
        meta: { stepTitle: "chapters", layout: "app" },
        component: () => import("./user-courses/new-course-plan/LearningPlanPage.vue"),
        redirect: { name: newCoursePlan },
        children: [
          {
            path: "list",
            name: newCoursePlan,
            meta: { stepTitle: "plan", layout: "app" },
            component: () => import("./user-courses/new-course-plan/Chapter/ChaptersList.vue")
          },
          {
            path: ":chapterId/filler",
            name: newCourseLecture,
            meta: { stepTitle: "lecture", layout: "app" },
            component: () => import("./user-courses/new-course-plan/ChapterFilling/CharterFillerPage.vue")
          },
          {
            path: ":chapterId/filler/:testId/question/:questionId",
            name: newCourseQuestion,
            meta: { stepTitle: "question", layout: "app" },
            component: () =>
              import("./user-courses/new-course-plan/ChapterFilling/TestComponent/Questions/QuestionPage.vue")
          }
        ]
      }
    ]
  }
];
