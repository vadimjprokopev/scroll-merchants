<template>
	<div>
		<label>Text</label>
		<input v-model='cardElement.text'>
		<label>x</label>
		<input v-model.number='cardElement.x' type='number'>
		<label>y</label>
		<input v-model.number='cardElement.y' type='number'>
	</div>
</template>

<script>
	export default {
		props: {
			cardElement: Object
		}
	}
</script>
