import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/howToUse",
    name: "HowToUse",
    component: () =>
    import(/* webpackChunkName: "howToUse" */ "../views/howToUse.vue")
  },
  {
    path: "/community",
    name: "Community",
    component: () =>
    import(/* webpackChunkName: "community" */ "../views/Community.vue")
  },
  {
    path: "/tryNewBag",
    name: "TryNewBag",
    component: () =>
    import(/* webpackChunkName: "tryNewBag" */ "../views/TryNewBag.vue")
  },
  {
    path: "/myJournal",
    name: "MyJournal",
    component: () =>
    import(/* webpackChunkName: "myJournal" */ "../views/MyJournal.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
