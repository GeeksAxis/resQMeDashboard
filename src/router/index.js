import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { auth } from '../firebase'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      showHeader: true,
      requiresAuth: true
    },
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import( "../views/About.vue"),
  },
  {
    path: "/analytics",
    component: () =>
      import( "../views/Analytics.vue"),
      meta: {
        showHeader: true,
        requiresAuth: true
      },
  },
  {
    path: "/dangerzones",
    component: () =>
      import( "../views/Danger.vue"),
      meta: {
        showHeader: true,
        requiresAuth: true
      },
  },
  {
    path: "/report",
    component: () =>
      import( "../views/Report.vue"),
      meta: {
        showHeader: true,
        requiresAuth: true
      },
  },
  
  {
    path: "/accident",
    component: () =>
      import( "../views/Accident.vue"),
      meta: {
        showHeader: true,
        requiresAuth: true
      },
  },
  {
    path: "/robbery",
    component: () =>
      import( "../views/Robery.vue"),
      meta: {
        showHeader: true,
        requiresAuth: true
      },
  },
  {
    path: "/bandit",
    component: () =>
      import( "../views/Bandit.vue"),
      meta: {
        showHeader: true,
        requiresAuth: true
      },
  },
  {
    path: "/map",
    name: "map",
    props: true ,

    component: () =>
      import( "../views/Map.vue"),
      meta: {
        showHeader: true,
        requiresAuth: true
      },
  },
  {
    path: "/fire",
    component: () =>
      import( "../views/Fire.vue"),
      meta: {
        showHeader: true,
        requiresAuth: true
      },
  },
  {
    path: "/login",
    name: "LOgin",
    meta: {
      showHeader: false,
    },

    component: () => import("../views/login.vue"),
    
  },
 
  {
    path: "/users",
    name: "Users",
    meta: {
      showHeader: true,
      requiresAuth: true
    },

    component: () => import("../views/UsersReport.vue"),
  },
 
];



const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    // next('/login')
    next()
  } else {
    next()
  }
});


export default router;
