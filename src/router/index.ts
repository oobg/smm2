import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import { defineAsyncComponent } from "vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/popular",
      name: "인기 랭킹",
      component: defineAsyncComponent(() => import("@/views/MapListView.vue")),
    },
  ],
})

export default router
