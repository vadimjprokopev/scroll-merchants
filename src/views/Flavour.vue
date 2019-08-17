<template>
  <div>
    <card-preview :cardElements="flavour.cardElements" />
    <h3>{{ flavour.name }}</h3>
    <transition-group name="card-list" class="card-list">
      <card-text
        v-for="cardElement in flavour.cardElements"
        :key="cardElement.id"
        :cardElement="cardElement"
        class="card-list-item"
      />
    </transition-group>
    <div>
      <md-button
        class="md-primary md-raised"
        @click="createCardTextToCurrentFlavour"
        >Create new text</md-button
      >
    </div>
  </div>
</template>

<script>
import CardPreview from "@/components/CardPreview.vue";
import CardText from "@/components/CardText.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    CardPreview,
    CardText
  },
  computed: {
    flavour() {
      return this.$store.state.flavours.find(
        flavour => flavour.id === this.$route.params.flavourId
      );
    }
  },
  methods: {
    createCardTextToCurrentFlavour() {
      this.createCardText(this.$route.params.flavourId);
    },

    ...mapMutations(["createCardText"])
  }
};
</script>

<style>
.card-list {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

.card-list-item {
  transition: all 0.5s;
  flex: 0 0 300px;
  margin: 4px;
}

.card-list-leave-active {
  position: absolute;
}

.card-list-enter,
.card-list-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
</style>
