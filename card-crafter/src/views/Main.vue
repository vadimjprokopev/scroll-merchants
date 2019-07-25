<template>
	<div>
		<h3>Decks:</h3>
		<router-link v-for='deck in decks' :to="'deck/' + deck.id + '/'" :key="deck.id">
			<div> {{ deck.name }} </div>
		</router-link>
		<button @click='createDeck'>Create new deck</button>
		<h3>Cards:</h3>
		<router-link v-for='(card, index) in cards' :to="'card/' + index + '/'" :key="card.name">
			<div> {{ card.name }} </div>
		</router-link>
		<h3>Flavours:</h3>
		<router-link v-for='(flavour, index) in flavours' :to="'flavour/' + index + '/'" :key="flavour.name">
			<div> {{ flavour.name }} </div>
		</router-link>
	</div>
</template>

<script>
	import { mapState, mapMutations } from 'vuex'

	export default {
		computed: {
			...mapState(['decks', 'cards', 'flavours'])
		},
		methods: {
			...mapMutations(['createDeck'])
		}
	}
</script>