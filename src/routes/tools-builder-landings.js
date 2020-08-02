// import {middleware} from 'vue-router-middleware'

export default [
  // ...middleware('auth', [
  {
    path: "/tools/builder/landings",
    name: "tools.landings",
    component: require("../pages/tools/builder/landings/ToolsBuilderLandings").default,
    meta: {
      layout: "app"
    }
  },
  {
    path: "/tools/builder/landings/create",
    name: "tools.landings.create",
    component: require("../pages/tools/builder/landings/ToolsBuilderLandingsCreate").default,
    meta: {
      layout: "app"
    }
  },
  {
    path: "/tools/builder/landings/:id",
    name: "tools.landings.show",
    component: require("../pages/tools/builder/landings/ToolsBuilderLandingsShow").default,
    meta: {
      layout: "app"
    }
  },
  {
    path: "/tools/builder/landings/:id/edit",
    name: "tools.landings.edit",
    component: require("../pages/tools/builder/landings/ToolsBuilderLandingsEdit").default,
    meta: {
      layout: "app"
    }
  }
  // ])
];
