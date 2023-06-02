import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Layout from "@/views/home.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Layout,
      children: [
        {
          path: "/",
          name: "accoun",
          component: () => import("@/views/account.vue"),
          meta: {
            menu: "accoun",
          },
        },
        {
          path: "/management",
          name: "management",
          component: () => import("@/views/management.vue"),
          meta: {
            menu: "management",
          },
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("~/login/index.vue"),
    },
  ],
});
export default router;
