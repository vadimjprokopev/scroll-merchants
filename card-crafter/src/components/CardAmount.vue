<template>
  <div>
    <span> {{ card.name }} </span>
    <span>
      <input v-model.number="cardAmount" type="number" />
    </span>
    <span>
      <md-button class="md-accent md-raised md-dense" @click="deleteCardFromDeckAction">Delete card</md-button>
    </span>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["card"],
  computed: {
    cardAmount: {
      get() {
        return this.card.amount;
      },
      set(newAmount) {
        this.setDeckCardAmount({
          deckId: this.$route.params.deckId,
          cardId: this.card.id,
          newAmount
        });
      }
    }
  },
  methods: {
    deleteCardFromDeckAction() {
      this.deleteCardFromDeck({
        deckId: this.$route.params.deckId,
        cardId: this.card.id
      });
    },

    ...mapMutations(["setDeckCardAmount", "deleteCardFromDeck"])
  }
};
</script>
