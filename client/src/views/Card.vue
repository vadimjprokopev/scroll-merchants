<template>
  <div>
    <card-preview :cardElements="allCardElements" />
    <h3>{{ card.name }}</h3>
    <multiselect
      :multiple="true"
      label="name"
      track-by="id"
      :options="possibleFlavours"
      :value="flavours"
      @input="updateFlavours"
    ></multiselect>
  </div>
</template>

<script>
import CardPreview from "@/components/CardPreview.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    CardPreview
  },
  computed: {
    card() {
      return this.$store.state.cards.find(
        card => card.id === this.$route.params.cardId
      );
    },
    flavours() {
      return this.$store.state.flavours.filter(flavour =>
        this.card.flavours.includes(flavour.id)
      );
    },
    possibleFlavours() {
      return this.$store.state.flavours.filter(
        flavour => !this.card.flavours.includes(flavour.id)
      );
    },
    allCardElements() {
      return this.flavours.map(flavour => flavour.cardElements).flat(1);
    }
  },
  methods: {
    updateFlavours(flavours) {
      this.updateCardFlavours({
        cardId: this.card.id,
        flavours: flavours.map(flavour => flavour.id)
      });
    },
    ...mapMutations(["updateCardFlavours"])
  }
};
</script>
