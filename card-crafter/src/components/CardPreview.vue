<template>
	<div class='card'>
		<floatingText v-for='cardElement in cardElements' :cardElement='cardElement' :key='cardElement.index'/>
	</div>
</template>

<script>
	import FloatingText from '@/components/FloatingText.vue'

	export default {
		components: {
			FloatingText
		},
		props: {
			cardElements: Array
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