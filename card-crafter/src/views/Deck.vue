<template>
	<div>
		<div v-for='(flavour, flavourName) in $root.decks[$route.params.deckName].flavours' :key='flavourName'>
			<p> {{ flavourName }} </p>
			<router-link :to="'flavour/' + flavourName + '/'">
				<p> Edit </p>
			</router-link>
		</div>
	</div>
</template>
