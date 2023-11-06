import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue";
import Author from "./components/Author.vue";
import Comment from "./components/Comment.vue";

const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },

  // {
  //   404 page ( 순서 주의)
  //   path: "/:anything(.*)",
  //   component: Home,
  // },

  {
    path: "/detail/:id",
    // url parameter 문법 /:~
    component: Detail,
    children: [
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
