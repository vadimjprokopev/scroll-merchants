<template>
	<div>
		<card-preview :cardElements='allCardElements'/>
		<div v-for='flavour in flavours' :key='flavour.id'>
			{{ flavour.name }}
		</div>
		<h3> {{ card.name }} </h3>
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
				return this.$store.state.cards.find(card => card.id === this.$route.params.cardId)
			},
			flavours() {
				return this.$store.state.flavours.filter(flavour => this.card.flavours.includes(flavour.id))
			},
			allCardElements() {
				return this.flavours.map(flavour => flavour.cardElements).flat(1)
			}
		}
	}
</script>
