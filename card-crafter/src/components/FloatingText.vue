<template>
	<p :style='style'> {{ cardElement.text }} </p>
</template>

<script>
	export default {
		props: {
			cardElement: Object
		},
		computed : {
			style () {
				return 'left: ' + this.cardElement.x + 'px; top: ' + this.cardElement.y + 'px;'; 
			}
		},
	}
</script>

<style scoped>
	p {
		position: absolute;
	}
</style>