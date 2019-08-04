<template>
  <div>
    <router-link v-for="deck in decks" :to="'/decks/' + deck.id" :key="deck.id">
      <div>{{ deck.name }}</div>
    </router-link>
    <md-button class="md-primary md-raised" @click="createDeck">Create new deck</md-button>
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
