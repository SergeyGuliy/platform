export const learningState = {
  createCourse: {
    stepsList: [
      { title: "name", isActive: false, isValid: false },
      { title: "category", isActive: false, isValid: false },
      { title: "time", isActive: false, isValid: false },
      { title: "description", isActive: false, isValid: false },
      { title: "requirements", isActive: false, isValid: false },
      { title: "cover", isActive: false, isValid: true },
      { title: "video", isActive: false, isValid: true },
      { title: "message", isActive: false, isValid: true },
      { title: "final", isActive: false, isValid: true },

      { title: "plan", isActive: false, isValid: false }
    ],
    currentCourseData: null,
    formData: {
      name: { name: null },
      category: { category: null },
      time: { time: null },
      description: {
        title: null,
        subtitle: null,
        extendedDescription: null,
        subject: null,
        category: null,
        level: null,
        language: null
      },
      requirements: {
        learningPlan: [{ value: null }],
        preliminaryRequirements: [{ value: null }],
        targetAudience: [{ value: null }]
      },
      message: { greetings: null, congratulations: null },
      cover: {
        id: null,
        url: null,
        name: null
      },
      video: {
        video: {
          src: null,
          name: null,
          id: null
        },
        poster: {
          src: null,
          name: null,
          id: null
        },
        track: {
          src: null,
          name: null,
          id: null
        },
        trackLabel: "english",
        size: 576,
        trackLang: "en"
      }
    },
    nextStepRequest: false
  },
  allCourses: [],
  categories: [],
  times: [],
  levels: [],
  languages: [],

  createPlan: {
    planChapters: [
      {
        id: 1,
        name: null,
        filler: []
      }
    ]
  }
};
