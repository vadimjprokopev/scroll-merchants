<template>
  <div>
    <router-link v-for="card in cards" :to="'/cards/' + card.id" :key="card.id">
      <div>{{ card.name }}</div>
    </router-link>
    <button @click="createCard">Create new card</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["cards"])
  },
  methods: {
    ...mapMutations(["createCard"])
  }
};
</script>
