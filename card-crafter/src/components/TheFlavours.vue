<template>
  <div>
    <router-link
      v-for="flavour in flavours"
      :to="'/flavours/' + flavour.id"
      :key="flavour.id"
    >
      <div>{{ flavour.name }}</div>
    </router-link>
    <button @click="createFlavour">Create new flavour</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["flavours"])
  },
  methods: {
    ...mapMutations(["createFlavour"])
  }
};
</script>
