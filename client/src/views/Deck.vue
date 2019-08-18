<template>
  <div>
    <h3>{{ deck.name }}</h3>
    <card-amount v-for="card in deckCards" :key="card.id" :card="card" />
    <h4>Possible cards</h4>
    <multiselect
      :multiple="true"
      label="name"
      track-by="id"
      :options="possibleCards"
      @input="updateDeckCard"
    ></multiselect>
  </div>
</template>

<script>
import CardAmount from "@/components/CardAmount.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    CardAmount
  },
  computed: {
    deck() {
      return this.$store.state.decks.find(
        deck => deck.id === this.$route.params.deckId
      );
    },
    possibleCards() {
      return this.$store.state.cards.filter(
        card => !this.deck.cards.find(deckCard => deckCard.id === card.id)
      );
    },
    deckCards() {
      return this.deck.cards.map(deckCard => {
        return {
          ...deckCard,
          ...this.$store.state.cards.find(card => card.id === deckCard.id)
        };
      });
    }
  },
  methods: {
    updateDeckCard(card) {
      this.addCardToDeck({
        deckId: this.$route.params.deckId,
        cardId: card[0].id
      });
    },
    ...mapMutations(["addCardToDeck"])
  }
};
</script>
