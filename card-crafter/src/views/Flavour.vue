<template>
	<div>
		<card-preview :cardElements='flavour.cardElements'/>
		<h3> {{ flavour.name }} </h3>
		<card-text v-for='(element, index) in flavour.cardElements' :key='index' :flavourIndex='Number($route.params.flavourIndex)' :cardElementIndex='index'/>
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
				return this.$store.state.flavours[this.$route.params.flavourIndex]
			}
		},
		methods: {
			createCardTextToCurrentFlavour() {
				this.createCardText(this.$route.params.flavourIndex)
			},

			...mapMutations(['createCardText'])
		}
	}
</script>
