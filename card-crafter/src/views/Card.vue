<template>
	<div>
		<card-preview :cardElements='allCardElements'/>
		<input v-model.number='cardNumber' type='number'>
		<div v-for='flavourIndex in card.flavours'>
				{{ flavours[flavourIndex].name }}
		</div>
	</div>
</template>

<script>
	import CardPreview from '@/components/CardPreview.vue'
	import { mapMutations } from 'vuex'

	export default {
		components: {
			CardPreview
		},
		computed: {
			card() {
				return this.$store.state.decks[this.$route.params.deckIndex].cards[this.$route.params.cardIndex]
			},
			cardNumber: {
				get() {
						return this.card.number
				},
				set(newNumber) {
					this.setCardNumber({deckIndex: this.$route.params.deckIndex, cardIndex: this.$route.params.cardIndex, number: newNumber})
				}
			},
			flavours() {
				return this.$store.state.flavours
			},
			allCardElements() {
				return this.flavours.filter((object, index) => this.card.flavours.includes(index))
														.map((object) => object.cardElements)
														.flat(1)
			}
		},
		methods: {
			...mapMutations(['setCardNumber'])
		}
	}
</script>
