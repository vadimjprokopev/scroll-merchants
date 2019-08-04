<template>
  <div class="cardText">
    <md-field>
      <label>Text</label>
      <md-input v-model="cardText"></md-input>
    </md-field>

    <md-field>
      <label>x</label>
      <md-input v-model.number="cardX" type="number" />
    </md-field>

    <md-field>
      <label>y</label>
      <md-input v-model.number="cardY" type="number" />
    </md-field>

    <md-button
      class="md-accent md-raised md-dense"
      @click="deleteCurrentCardText"
      >Delete</md-button
    >
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: {
    flavourId: Number,
    cardElementIndex: Number
  },
  computed: {
    cardElement() {
      return this.$store.state.flavours.find(
        flavour => flavour.id === this.$route.params.flavourId
      ).cardElements[this.cardElementIndex];
    },
    cardText: {
      get() {
        return this.cardElement.text;
      },
      set(newText) {
        this.editCardText({
          flavourId: this.$route.params.flavourId,
          cardElementIndex: this.cardElementIndex,
          text: newText
        });
      }
    },
    cardX: {
      get() {
        return this.cardElement.x;
      },
      set(newX) {
        this.editCardX({
          flavourId: this.$route.params.flavourId,
          cardElementIndex: this.cardElementIndex,
          x: newX
        });
      }
    },
    cardY: {
      get() {
        return this.cardElement.y;
      },
      set(newY) {
        this.editCardY({
          flavourId: this.$route.params.flavourId,
          cardElementIndex: this.cardElementIndex,
          y: newY
        });
      }
    }
  },
  methods: {
    deleteCurrentCardText() {
      this.deleteCardText({
        flavourId: this.$route.params.flavourId,
        cardElementIndex: this.cardElementIndex
      });
    },

    ...mapMutations([
      "editCardText",
      "editCardX",
      "editCardY",
      "deleteCardText"
    ])
  }
};
</script>

<style scoped>
.cardText {
  width: 240px;
  margin: auto;
}
</style>
