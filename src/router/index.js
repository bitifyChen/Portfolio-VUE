import { createRouter, createWebHistory } from "vue-router";
import IndexView from "@/views/IndexView.vue";
import NotFoundView from "@/views/404.vue";
import { useIndexStore } from "@/stores/index";
import { useProjectsStore } from "@/stores/projects";
import { useProjectDetailStore } from "@/stores/projectDetail";
import { useAboutStore } from "@/stores/about";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: IndexView,
      beforeEnter: async (to, from, next) => {
        try {
          const index = useIndexStore();
          const [response1, response2, response3] = await Promise.all([
            fetch("https://portfolio.njlab.website/api/index/design"),
            fetch("https://portfolio.njlab.website/api/index/website"),
            fetch("https://portfolio.njlab.website/api/index/about"),
          ]);
          const data1 = await response1.json();
          const data2 = await response2.json();
          const data3 = await response3.json();
          index.design = data1.data;
          index.website = data2.data;
          index.about = data3.data;
          next();
        } catch (error) {
          console.error(error);
        }
      },
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
              next({ name: "404" });
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
      beforeEnter: (to, from, next) => {
        fetch("https://portfolio.njlab.website/api/about")
          .then((response) => response.json())
          .then((data) => {
            const about = useAboutStore();
            about.data = data.data;
            next();
          })
          .catch((e) => {
            next(false);
          });
      },
    },
    {
      path: "/:pathMatch(.*)*",
      name: "404",
      component: NotFoundView,
    },
  ],
});

export default router;
