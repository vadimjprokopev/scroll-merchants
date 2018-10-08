<template>
	<div>
		<input v-model.number='card.number' type='number'>
		<ul>
			<li v-for='flavour in card.flavours'>
				{{ flavour.name }}
			</li>
		</ul>
	</div>
</template>