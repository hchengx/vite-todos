import { createRouter, createWebHistory, RouteRecordRaw, Router } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    { path: "/", 
      name: "Home",
      component: () => import("@/components/todoLayout.vue") },
]

const router: Router = createRouter({
    history: createWebHistory(),
    routes
})

export default router