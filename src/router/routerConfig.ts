const routerConfig = {
  home: {
    path: "/",
    name: "home",
    component: () => import("../views/home.vue"),
  },
  detail: {
    path: "/detail",
    name: "detail",
    component: () => import("../views/detail.vue"),
  },
  history: {
    path: "/history",
    name: "history",
    component: () => import("../views/history.vue"),
  },
};

export default routerConfig;
