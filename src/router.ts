import Vue from "vue";
import store from "./store";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  linkExactActiveClass: "is-active",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/matches",
      name: "matches",
      component: () => import("./views/Matches.vue")
    },
    {
      path: "/players",
      name: "players",
      component: () => import("./views/Players.vue")
    },
    {
      path: "/Champions",
      name: "champions",
      component: () => import("./views/Champions.vue")
    },
    {
      path: "/players/:id",
      name: "player",
      component: () => import("./views/PlayerDetail.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAdmin)) {
    if (!store.getters.loggedIn || !store.getters.user.is_admin)
      console.log("log");
  }

  next();
});

export default router;
