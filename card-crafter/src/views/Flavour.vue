<template>
	<div>
		<card-preview :cardElements='flavour.cardElements'/>
		<h3> {{ flavour.name }} </h3>
		<!-- <button @click='addCardElement'>Add</button> -->
		<card-text v-for='cardElement in flavour.cardElements' :cardElement='cardElement'/>
	</div>
</template>

<script>
	import CardPreview from '@/components/CardPreview.vue'
	import CardText from '@/components/CardText.vue'

	export default {
		components : {
			CardPreview,
			CardText
		},
		computed : {
			flavour() {
				return this.$store.state.flavours[this.$route.params.flavourIndex]
			}
		}
	}
</script>
