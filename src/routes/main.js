export default [
  // ...middleware('auth', [
  {
    path: "/home",
    name: "home",
    component: require("../pages/Home").default,
    meta: {
      layout: "app"
    }
  },
  {
    path: "/marketing-plan",
    name: "marketing-plan",
    component: require("../pages/MarketingPlan").default,
    meta: {
      layout: "app"
    }
  },
  {
    path: "/documents",
    name: "documents",
    component: require("../pages/Documents").default,
    meta: {
      layout: "app"
    }
  },
  {
    path: "/standards",
    name: "standards",
    component: require("../pages/Standards").default,
    meta: {
      layout: "app"
    }
  },

  {
    path: "/structure",
    name: "structure",
    component: require("../pages/Structure").default,
    meta: {
      layout: "app"
    }
  },
  {
    path: "/messages",
    name: "messages",
    component: require("../pages/Messages").default,
    meta: {
      layout: "app"
    }
  }
  // ])
];
