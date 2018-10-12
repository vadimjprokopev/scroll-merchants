<template>
	<div>
		<card-preview :cardElements='allCardElements'/>
		<input v-model.number='card.number' type='number'>
		<div v-for='flavourIndex in card.flavours'>
				{{ flavours[flavourIndex].name }}
		</div>
		</ul>
	</div>
</template>

<script>
	import CardPreview from '@/components/CardPreview.vue'

	export default {
		components: {
			CardPreview
		},
		computed: {
			card() {
				return this.$store.state.decks[this.$route.params.deckIndex].cards[this.$route.params.cardIndex]
			},
			flavours() {
				return this.$store.state.flavours
			},
			allCardElements() {
				return this.flavours.filter((object, index) => this.card.flavours.includes(index))
														.map((object) => object.cardElements)
														.flat(1)
			}
		}
	}
</script>