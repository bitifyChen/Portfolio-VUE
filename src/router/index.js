import { createRouter, createWebHistory } from "vue-router";
import IndexView from "../views/IndexView.vue";
import { useProjectsStore } from '@/stores/projects'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: IndexView,
    },
    {
      path: "/project",
      name: "project",
      component: () => import("../views/ProjectView.vue"),
      beforeEnter: (to, from, next) => {
        fetch("https://portfolio.njlab.website/project/api/")
          .then((response) => response.json())
          .then((data) =>
          {
            const project = useProjectsStore();
            project.list = data.data ;
            next();
          })
          .catch((e) =>
          {  
            next(false);
          });
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../views/ContactView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
