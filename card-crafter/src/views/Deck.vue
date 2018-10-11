<template>
	<div>
		<div v-for='(card, index) in cards' :key='card.name'>
			<p> {{ card.name }} </p>
		</div>
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
