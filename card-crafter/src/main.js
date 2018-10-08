import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
	data : {
		decks : {
			"elements" : {
				flavours : {
					"flavourName1" : {
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
					"flavourName2" : {
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
					}
				},
				cards : [
					{
						number : 2,
						flavours : [
							"flavourName1"
						]
					},
					{
						number : 3,
						flavours : [
							"flavourName1",
							"flavourName2"
						]
					},
				]
			},
			"customers" : {
				flavours : {
					"flavourName3" : {
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
					"flavourName4" : {
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
					}
				},
				cards : [
					{
						number : 2,
						flavours : [
							"flavourName1"
						]
					},
					{
						number : 3,
						flavours : [
							"flavourName1",
							"flavourName2"
						]
					},
				]
			}
		}
	}
}).$mount('#app')
