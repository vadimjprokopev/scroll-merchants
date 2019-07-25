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

const flavours = {
	state: [],
	mutations: {
		editCardText(state, {flavourIndex, cardElementIndex, text}) {
			state[flavourIndex].cardElements[cardElementIndex].text = text;
		},
		editCardX(state, {flavourIndex, cardElementIndex, x}) {
			state[flavourIndex].cardElements[cardElementIndex].x = x;
		},
		editCardY(state, {flavourIndex, cardElementIndex, y}) {
			state[flavourIndex].cardElements[cardElementIndex].y = y;
		},
		deleteCardText(state, {flavourIndex, cardElementIndex}) {
			state[flavourIndex].cardElements.splice(cardElementIndex, 1)
		},
		createCardText(state, flavourIndex) {
			state[flavourIndex].cardElements.push({text: '', x: 0, y: 0})
		}
	}
}

export default new Vuex.Store({
	strict: process.env.NODE_ENV !== 'production',
	modules: {
		decks,
		flavours
	}
})
