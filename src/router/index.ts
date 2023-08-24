import { createRouter, createWebHistory } from "vue-router";
import routerConfig from "./routerConfig";

const router = createRouter({
  history: createWebHistory(),
  routes: Object.values(routerConfig),
});

export default router;
