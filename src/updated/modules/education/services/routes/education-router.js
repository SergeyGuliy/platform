import {
  educationCategory,
  educationCourse,
  educationCourseDetails,
  educationCourseFullscreen,
  educationAllCourses,
  educationPlatform,
  educationTeam,
  educationCourseContent,
  courseResource,
  courseLearningPlan,
  courseAbout
} from "./education-courses-routes-name";

const baseCourseUrl = "/education/courses";
export const educationRoutes = [
  {
    path: "/education",
    name: "education",
    component: () => import("./../../pages/learning-page/Learning"),
    redirect: { name: educationPlatform },
    meta: {
      layout: "app"
    },
    children: [
      {
        path: "team",
        name: educationTeam,
        component: () => import("../../pages/learning-page/LearningTeamCourses"),
        meta: {
          layout: "app"
        }
      },
      {
        path: "platform",
        name: educationPlatform,
        component: () => import("../../pages/learning-page/LearningPlatform"),
        meta: {
          layout: "app"
        }
      },
      {
        path: "courses",
        name: educationAllCourses,
        component: () => import("../../pages/learning-page/LearningAllCourses"),
        meta: {
          layout: "app"
        }
      }
    ]
  },
  {
    path: `${baseCourseUrl}/:courseSlug`,
    name: educationCourse,
    redirect: { name: educationCourseContent },
    props: true,
    component: () => import("../../pages/course/LearningCourseWrapper"),
    meta: {
      layout: "app"
    },
    children: [
      {
        path: "description",
        name: educationCourseContent,
        component: () => import("./../../pages/course-description/CourseContent"),
        redirect: { name: courseResource },
        props: true,
        meta: {
          layout: "app"
        },
        children: [
          {
            path: "",
            name: courseResource,
            props: true,
            component: () => import("../../pages/course-description/tab-content/CourseResource"),
            meta: {
              layout: "app"
            }
          },
          {
            path: "",
            name: courseLearningPlan,
            props: true,
            component: () => import("../../pages/course-description/tab-content/CourseLearningPlan"),
            meta: {
              layout: "app"
            }
          },
          {
            path: "",
            name: courseAbout,
            props: true,
            component: () => import("../../pages/course-description/tab-content/CourseAbout"),
            meta: {
              layout: "app"
            }
          }
        ]
      },
      {
        path: "article",
        name: educationCourseFullscreen,
        component: () => import("./../../pages/course-description/CourseArticleFullScreen"),
        meta: {
          layout: "app"
        }
      }
    ]
  },
  {
    path: `${baseCourseUrl}/:courseSlug/details`,
    name: educationCourseDetails,
    component: () => import("../../pages/course/LearningCourseDetails"),
    props: true,
    meta: {
      layout: "app"
    }
  },
  {
    path: `${baseCourseUrl}/category/:categoryId`,
    name: educationCategory,
    props: true,
    component: () => import("../../pages/learning-page/LearningCourseCategory"),
    meta: {
      layout: "app"
    }
  }
];
