// import {middleware} from 'vue-router-middleware'

export default [
  // ...middleware('auth', [
  {
    path: "/tools",
    name: "tools",
    component: require("../pages/tools/Tools").default,
    meta: {
      layout: "app"
    }
  }
  // ])
];
