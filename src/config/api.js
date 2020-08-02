import Vue from "vue";
import Api from "../plugins/api";

Vue.use(Api, {
  options: {
    // domain: process.env.APP_URL + '/api/'
    domain: ""
  },
  routes: {
    ...require("../api/auth").default,
    ...require("../api/files").default,
    ...require("../api/main").default,
    ...require("../api/statistic").default,
    ...require("../api/tools").default
  }
});
