import Vue from "vue";
import Router from "vue-router";
import Deck from "./views/Deck.vue";
import Card from "./views/Card.vue";
import Flavour from "./views/Flavour.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/decks/:deckId",
      component: Deck
    },
    {
      path: "/cards/:cardId",
      component: Card
    },
    {
      path: "/flavours/:flavourId",
      component: Flavour
    }
  ]
});
