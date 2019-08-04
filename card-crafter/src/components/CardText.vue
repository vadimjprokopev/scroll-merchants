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
  props: ["cardElement"],
  computed: {
    cardText: {
      get() {
        return this.cardElement.text;
      },
      set(newText) {
        this.editCardText({
          flavourId: this.$route.params.flavourId,
          cardElementId: this.cardElement.id,
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
          cardElementId: this.cardElement.id,
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
          cardElementId: this.cardElement.id,
          y: newY
        });
      }
    }
  },
  methods: {
    deleteCurrentCardText() {
      this.deleteCardText({
        flavourId: this.$route.params.flavourId,
        cardElementId: this.cardElement.id
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
