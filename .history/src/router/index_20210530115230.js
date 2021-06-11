import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      showHeader: true,
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/",
    name: "LOgin",
    meta: {
      showHeader: false,
    },

    component: () => import("../views/login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      showHeader: false,
    },

    component: () => import("../views/register.vue"),
  },
  {
    path: "/users",
    name: "Users",
    meta: {
      showHeader: true,
    },

    component: () => import("../views/users.vue"),
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
