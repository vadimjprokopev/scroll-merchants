import Vue from 'vue'
import Vuex from 'vuex'
import uuid from 'uuidv4'

Vue.use(Vuex)

const decks = {
	state: [],
	mutations: {
		createDeck(state) {
			state.push({id: uuid(), name: 'New Deck', cards: []})
		},
		setCardNumber(state, {deckIndex, cardIndex, number}) {
			state[deckIndex].cards[cardIndex].number = number
		}
	}
}

const cards = {
	state: [],
	mutations: {
		createCard(state) {
			state.push({id: uuid(), name: 'New Card', flavours: []})
		}
	}
}
const flavours = {
	state: [],
	mutations: {
		createFlavour(state) {
			state.push({id: uuid(), name: 'New Flavour', cardElements: []})
		},
		editCardText(state, {flavourId, cardElementIndex, text}) {
			state.find(flavour => flavour.id === flavourId).cardElements[cardElementIndex].text = text;
		},
		editCardX(state, {flavourId, cardElementIndex, x}) {
			state.find(flavour => flavour.id === flavourId).cardElements[cardElementIndex].x = x;
		},
		editCardY(state, {flavourId, cardElementIndex, y}) {
			state.find(flavour => flavour.id === flavourId).cardElements[cardElementIndex].y = y;
		},
		deleteCardText(state, {flavourId, cardElementIndex}) {
			state.find(flavour => flavour.id === flavourId).cardElements.splice(cardElementIndex, 1)
		},
		createCardText(state, flavourId) {
			state.find(flavour => flavour.id === flavourId).cardElements.push({text: '', x: 0, y: 0})
		}
	}
}

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	modules: {
		decks,
		cards,
		flavours
	}
})
