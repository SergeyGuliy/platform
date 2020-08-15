import Vue from "vue";
import Router from "vue-router";
import VueRouterMiddleware from "vue-router-middleware";

import { learningRoutes } from "../updated/modules/learning/learning-router";
import { educationRoutes } from "../updated/modules/education/services/routes/education-router";
import { paymentsRoutes } from "../updated/modules/payments/services/routes/payments-router.js";

let routes = [
  { path: "", redirect: { name: "educationMyCourses" } },

  ...require("../routes/main").default,
  ...require("../routes/profile").default,
  ...require("../routes/tools").default,
  ...require("../routes/tools-builder").default,
  ...require("../routes/tools-builder-landings").default,
  ...learningRoutes,
  ...educationRoutes,
  ...paymentsRoutes,

  {
    path: "*",
    name: "oops",
    component: require("../pages/Oops").default,
    meta: {
      title: "Oops..."
    }
  }
];

let router = new Router({
  mode: "history",
  base: "",
  routes
});

Vue.use(Router);

Vue.use(VueRouterMiddleware, {
  router,
  middlewares: {
    auth: require("../middlewares/auth").default,
    guest: require("../middlewares/auth").default,
    admin: require("../middlewares/auth").default,
    permissions: require("../middlewares/auth").default
  }
});

// eslint-disable-next-line no-unused-vars
/*router.afterEach((to, from) => {
    window.scrollTo(0, 0)
})*/

export default router;
