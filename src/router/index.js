import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "~/home/index.vue";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Layout,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("~/login/index.vue"),
    },
  ],
});
export default router;
