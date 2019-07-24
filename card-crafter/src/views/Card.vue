<template>
	<div>
		<card-preview :cardElements='allCardElements'/>
		<div v-for='flavourIndex in card.flavours' :key='flavourIndex'>
				{{ flavours[flavourIndex].name }}
		</div>
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
				return this.$store.state.cards[this.$route.params.cardIndex]
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
