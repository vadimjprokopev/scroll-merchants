<template>
	<div>
		<card-preview :cardElements='flavour.cardElements'/>
		<h3> {{ flavour.name }} </h3>
		<card-text v-for='(element, index) in flavour.cardElements' :key='index' :cardElementIndex='index'/>
		<button @click='createCardTextToCurrentFlavour'>Create new text</button>
	</div>
</template>

<script>
	import CardPreview from '@/components/CardPreview.vue'
	import CardText from '@/components/CardText.vue'
	import { mapMutations } from 'vuex'

	export default {
		components: {
			CardPreview,
			CardText
		},
		computed: {
			flavour() {
				return this.$store.state.flavours.find(flavour => flavour.id === this.$route.params.flavourId)
			}
		},
		methods: {
			createCardTextToCurrentFlavour() {
				this.createCardText(this.$route.params.flavourId)
			},

			...mapMutations(['createCardText'])
		}
	}
</script>
