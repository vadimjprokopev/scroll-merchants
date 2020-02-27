import Vue from "vue";
import Router from "vue-router";
import Deck from "./views/Deck.vue";
import Card from "./views/Card.vue";
import Flavour from "./views/Flavour.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/decks/:deckId",
      component: Deck,
      requiresAuth: true
    },
    {
      path: "/cards/:cardId",
      component: Card,
      requiresAuth: true
    },
    {
      path: "/flavours/:flavourId",
      component: Flavour,
      requiresAuth: true
    },
    {
      path: "/login",
      component: Login,
      requiresAuth: false
    }
  ],
  beforeEach: (to, from, next) => {
    if (to.matched.some(record => record.requiresAuth)) {
      const token = localStorage.getItem("token");
      if (token) {
        next();
      } else {
        next({
          path: "/login",
          params: { nextUrl: to.fullPath }
        });
      }
    } else {
      next();
    }
  }
});
