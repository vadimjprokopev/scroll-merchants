<template>
  <div>
    <div class="card-amount-row">
      <p class="card-name">{{ card.name }}</p>
      <md-field class="card-amount">
        <label> Card amount </label>
        <md-input v-model.number="cardAmount" type="number"></md-input>
      </md-field>
    </div>
    <md-button
      class="md-accent md-raised md-dense"
      @click="deleteCardFromDeckAction"
      >Delete card</md-button
    >
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

<style scoped>
.card-amount-row {
  display: flex;
  width: 480px;
  margin: auto;
}

.card-amount-row > * {
  flex: 1 100%;
}

.card-name {
  text-align: left;
}
</style>
