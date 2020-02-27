import Vue from "vue";
import Vuex from "vuex";
import uuid from "uuidv4";
import axios from "axios";

Vue.use(Vuex);

const login = {
  state: [],
  actions: {
    login(context, credentials) {
      axios.post("/login", credentials).then(response => {
        console.log(response);
        // localStorage.setItem("token", response.token);
      });
    },
    register(context, credentials) {
      axios.post("/register", credentials).then(response => {
        console.log(response);
        // localStorage.setItem("token", response.token);
      });
    }
  }
};

const decks = {
  state: [],
  mutations: {
    createDeck(state) {
      state.push({ id: uuid(), name: "New Deck", cards: [] });
    },
    addCardToDeck(state, { deckId, cardId }) {
      state
        .find(deck => deck.id === deckId)
        .cards.push({ id: cardId, amount: 1 });
    },
    setDeckCardAmount(state, { deckId, cardId, newAmount }) {
      state
        .find(deck => deck.id === deckId)
        .cards.find(card => card.id === cardId).amount = newAmount;
    },
    deleteCardFromDeck(state, { deckId, cardId }) {
      state.find(deck => deck.id === deckId).cards = state
        .find(deck => deck.id === deckId)
        .cards.filter(card => card.id !== cardId);
    }
  }
};

const cards = {
  state: [],
  mutations: {
    createCard(state) {
      state.push({ id: uuid(), name: "New Card", flavours: [] });
    },
    updateCardFlavours(state, { cardId, flavours }) {
      state.find(card => card.id === cardId).flavours = flavours;
    }
  }
};

const flavours = {
  state: [],
  mutations: {
    createFlavour(state) {
      state.push({ id: uuid(), name: "New Flavour", cardElements: [] });
    },
    editCardText(state, { flavourId, cardElementId, text }) {
      state
        .find(flavour => flavour.id === flavourId)
        .cardElements.find(
          cardElement => cardElement.id === cardElementId
        ).text = text;
    },
    editCardX(state, { flavourId, cardElementId, x }) {
      state
        .find(flavour => flavour.id === flavourId)
        .cardElements.find(
          cardElement => cardElement.id === cardElementId
        ).x = x;
    },
    editCardY(state, { flavourId, cardElementId, y }) {
      state
        .find(flavour => flavour.id === flavourId)
        .cardElements.find(
          cardElement => cardElement.id === cardElementId
        ).y = y;
    },
    deleteCardText(state, { flavourId, cardElementId }) {
      state.find(flavour => flavour.id === flavourId).cardElements = state
        .find(flavour => flavour.id === flavourId)
        .cardElements.filter(cardElement => cardElement.id !== cardElementId);
    },
    createCardText(state, flavourId) {
      state
        .find(flavour => flavour.id === flavourId)
        .cardElements.push({ id: uuid(), text: "Text", x: 0, y: 0 });
    }
  }
};

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    decks,
    cards,
    flavours,
    login
  }
});
