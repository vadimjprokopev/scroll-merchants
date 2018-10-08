import Vue from 'vue'
import Router from 'vue-router'
import Decks from './views/Decks.vue'
import Deck from './views/Deck.vue'
import CardTexts from './views/CardTexts.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			component: Decks
		},
		{
			path : '/deck/:deckName',
			component : Deck
		},
		{
			path : '/deck/:deckName/flavour/:flavourName',
			component : CardTexts
		}
	]
})
