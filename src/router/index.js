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
          component: () => import("~/account/accountinfo.vue"),
          meta: {
            menu: "accoun",
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
