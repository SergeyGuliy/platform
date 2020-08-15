export const paymentsRoutes = [
  {
    path: "/payments",
    name: "Payments",
    component: () => import("./../../pages/Payments"),
    meta: {
      layout: "app"
    }
  }
];
