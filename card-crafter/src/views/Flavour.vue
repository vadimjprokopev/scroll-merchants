<template>
	<div>
		<card-preview :cardElements='flavour.cardElements'/>
		<h3> {{ flavour.name }} </h3>
		<card-text v-for='(element, index) in flavour.cardElements' :flavourIndex='Number($route.params.flavourIndex)' :cardElementIndex='index'/>
	</div>
</template>

<script>
	import CardPreview from '@/components/CardPreview.vue'
	import CardText from '@/components/CardText.vue'

	export default {
		components: {
			CardPreview,
			CardText
		},
		computed: {
			flavour() {
				return this.$store.state.flavours[this.$route.params.flavourIndex]
			}
		}
	}
</script>
