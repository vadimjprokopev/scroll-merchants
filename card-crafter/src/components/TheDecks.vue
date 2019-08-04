<template>
  <div>
    <router-link v-for="deck in decks" :to="'/decks/' + deck.id" :key="deck.id">
      <div>{{ deck.name }}</div>
    </router-link>
    <button @click="createDeck">Create new deck</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["decks"])
  },
  methods: {
    ...mapMutations(["createDeck"])
  }
};
</script>
