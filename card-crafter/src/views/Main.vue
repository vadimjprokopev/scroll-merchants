<template>
	<div>
		<h3>Decks:</h3>
		<router-link v-for='(deck, index) in decks' :to="'deck/' + index + '/'" :key="deck.name">
			<div> {{ deck.name }} </div>
		</router-link>
		<h3>Flavours:</h3>
		<router-link v-for='(flavour, index) in flavours' :to="'flavour/' + index + '/'" :key="flavour.name">
			<div> {{ flavour.name }} </div>
		</router-link>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		computed: {
			...mapState(['decks', 'flavours'])
		}
	}
</script>