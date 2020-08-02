// import {middleware} from 'vue-router-middleware'

export default [
  // ...middleware('auth', [
  {
    path: "/tools/builder",
    name: "tools.builder",
    component: require("../pages/tools/builder/ToolsBuilder").default,
    meta: {
      layout: "app"
    }
  }
  // ])
];
