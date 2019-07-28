<template>
  <div>
    <h3>Decks:</h3>
    <router-link
      v-for="deck in decks"
      :to="'deck/' + deck.id + '/'"
      :key="deck.id"
    >
      <div>{{ deck.name }}</div>
    </router-link>
    <button @click="createDeck">Create new deck</button>

    <h3>Cards:</h3>
    <router-link
      v-for="card in cards"
      :to="'card/' + card.id + '/'"
      :key="card.id"
    >
      <div>{{ card.name }}</div>
    </router-link>
    <button @click="createCard">Create new card</button>

    <h3>Flavours:</h3>
    <router-link
      v-for="flavour in flavours"
      :to="'flavour/' + flavour.id + '/'"
      :key="flavour.id"
    >
      <div>{{ flavour.name }}</div>
    </router-link>
    <button @click="createFlavour">Create new flavour</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["decks", "cards", "flavours"])
  },
  methods: {
    ...mapMutations(["createDeck", "createCard", "createFlavour"])
  }
};
</script>
