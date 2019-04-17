import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/matches",
      name: "matches",
      component: () =>
        import("./views/Matches.vue")
    },
    {
      path: "/players",
      name: "players",
      component: () =>
        import("./views/Players.vue")
    },
    {
      path: "/Champions",
      name: "champions",
      component: () =>
        import("./views/Champions.vue")
    }
  ]
});
