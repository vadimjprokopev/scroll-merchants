<template>
	<div>
		<h3>Decks:</h3>
		<router-link v-for='(deck, deckName) in this.$root.decks' :to="'deck/' + deckName + '/'" :key="deckName">
		<div> {{ deckName }} </div>
		</router-link>
	</div>
</template>