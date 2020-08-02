// import {middleware} from 'vue-router-middleware'

export default [
  // ...middleware('auth', [
  {
    path: "/profile",
    name: "profile",
    component: require("../pages/profile/Profile").default,
    meta: {
      layout: "app"
    }
  },
  {
    path: "/profile/edit",
    name: "profile-edit",
    component: require("../pages/profile/ProfileForm").default,
    meta: {
      layout: "app"
    }
  }
  // ])
];
