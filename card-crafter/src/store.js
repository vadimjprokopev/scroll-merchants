import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const decks = {
	state: [
		{
			name: "deck1",
			cards: [
				{
					name: "card1",
					number : 2,
					flavours : [
						0
					]
				},
				{
					name: "card2",
					number : 3,
					flavours : [
						0,
						1
					]
				}
			]
		},
		{
			name: "deck2",
			cards: [
				{
					name: "card3",
					number : 2,
					flavours : [
						1
					]
				},
				{
					name: "card4",
					number : 1,
					flavours : [
						1,
						2
					]
				},
			]
		}
	]
}

const flavours = {
	state: [
		{
			name: "flavour1",
			cardElements : [
				{
					text : "text1",
					x : 100,
					y : 100
				},
				{
					text : "text2",
					x : 200,
					y : 100
				}
			]
		},
		{
			name: "flavour2",
			cardElements : [
				{
					text : "text3",
					x : 200,
					y : 150
				},
				{
					text : "text4",
					x : 200,
					y : 50
				}
			]
		},
		{
			name: "flavour3",
			cardElements : [
				{
					text : "text5",
					x : 50,
					y : 50
				},
				{
					text : "text6",
					x : 50,
					y : 100
				}
			]
		}
	]
}

export default new Vuex.Store({
	modules: {
		decks,
		flavours
	}
})
