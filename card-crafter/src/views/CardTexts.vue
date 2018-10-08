<template>
	<div>
		<div class='card'>
			<floatingText v-for='cardElement in cardElements' :cardElement='cardElement'/>
		</div>
		<h3> {{ $route.params.flavourName }} </h3>
		<button @click='addCardElement'>Add</button>
		<cardText v-for='cardElement in cardElements' :cardElement='cardElement'/>
	</div>
</template>

<script>
import CardText from '@/components/CardText.vue'
import FloatingText from '@/components/FloatingText.vue'

export default {
	components : {
		CardText,
		FloatingText
	},
	computed : {
		cardElements : {
			get() {
				return this.$root.decks[this.$route.params.deckName].flavours[this.$route.params.flavourName].cardElements
			}
		}
	},
	methods : {
		addCardElement : function() {
			this.cardElements.push({"text":"text", "x": 0, "y" : 0});
		}
	}
}
</script>

<style>
.card {
	position: relative;
	width: 240px;
	height: 320px;
	margin: auto;
	border: black 1px solid;
}
</style>
