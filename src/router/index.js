import { createRouter, createWebHistory } from "vue-router";
import IndexView from "@/views/IndexView.vue";
import NotFoundView from "@/views/404.vue";
import { useProjectsStore } from "@/stores/projects";
import { useProjectDetailStore } from "@/stores/projectDetail";

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
      component: () => import("@/views/ProjectView.vue"),
      beforeEnter: (to, from, next) => {
        fetch("https://portfolio.njlab.website/api/project/list")
          .then((response) => response.json())
          .then((data) => {
            const project = useProjectsStore();
            project.list = data.data;
            next();
          })
          .catch((e) => {
            next(false);
          });
      },
    },
    {
      path: "/project/:id",
      name: "project-detail",
      component: () => import("@/views/ProjectDetailView.vue"),
      beforeEnter: (to, from, next) => {
        const projectID = to.params.id;
        fetch(`https://portfolio.njlab.website/api/project/detail/${projectID}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            
            if (!data.success) {
              next({ name: '404' });
            }
            const detail = useProjectDetailStore();
            detail.data = data.data;
            next();
          })
          .catch((e) => {
            next(false);
          });
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("@/views/ContactView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: NotFoundView,
    },
  ],
});

export default router;
