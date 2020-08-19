import {
  educationNewPlatform,
  educationNewPlatformSettings,
  educationNewPlatformMainInfo,
  educationNewPlatformPreview,
  educationNewPlatformNewLesson,
  educationMyPlatforms
} from "./creating_new_course-routes-name";

export const creatingNewCourseRoutes = [
  {
    path: "my-platform",
    name: educationMyPlatforms,
    component: () => import("../../pages/LearningMyPlatforms"),
    meta: {
      layout: "app"
    }
  },
  {
    path: "platform-new",
    name: educationNewPlatform,
    component: () => import("../../pages/LearningMyNewPlatform"),
    meta: {
      layout: "app"
    }
  },
  {
    path: "platform-new/:id",
    name: educationNewPlatformNewLesson,
    component: () => import("../../pages/LearningMyNewPlatformNewLesson"),
    meta: {
      layout: "app"
    }
  },
  {
    path: "platform-settings",
    name: educationNewPlatformSettings,
    component: () => import("../../pages/LearningMyPlatformSettings"),
    meta: {
      layout: "app"
    }
  },
  {
    path: "platform-main-info",
    name: educationNewPlatformMainInfo,
    component: () => import("../../pages/LearningMyPlatformMainInfo"),
    meta: {
      layout: "app"
    }
  },
  {
    path: "platform-preview",
    name: educationNewPlatformPreview,
    component: () => import("../../pages/LearningMyNewPlatformPreview"),
    meta: {
      layout: "app"
    }
  }
];
