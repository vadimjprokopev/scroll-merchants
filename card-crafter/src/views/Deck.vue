<template>
	<div>
		<h3>{{ deck.name }}</h3>
		<router-link v-for='(card, index) in deck.cards' :key='card.name' :to='"/deck/" + $route.params.deckId + "/card/" + index'>
			<div> {{ card.name }} </div>
		</router-link>
	</div>
</template>

<script>
	export default {
		computed: {
			deck() {
				return this.$store.state.decks.find(deck => deck.id === this.$route.params.deckId)
			},
			cards() {
				return this.$store.state.cards.filter(card => this.deck.cards.include(card.id))
			}
		}
	}
</script>
