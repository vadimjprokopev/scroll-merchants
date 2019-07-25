import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'
import Deck from './views/Deck.vue'
import Card from './views/Card.vue'
import Flavour from './views/Flavour.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: Main
		},
		{
			path : '/deck/:deckId',
			component : Deck
		},
		{
			path : '/card/:cardIndex',
			component : Card
		},
		{
			path : '/flavour/:flavourId',
			component : Flavour
		}
	]
})
