<template>
	<div>
		<router-link v-for='(card, index) in cards' :key='card.name' :to='"/deck/" + $route.params.deckIndex + "/card/" + index'>
			<div> {{ card.name }} </div>
		</router-link>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	export default {
		computed: {
			cards() {
				return this.$store.state.decks[this.$route.params.deckIndex].cards
			}
		}
	}
</script>
