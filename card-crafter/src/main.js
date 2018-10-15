import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
		router,
		store,
		render: h => h(App),
		created() {
			let savedData = localStorage.getItem('cards');
			if (savedData !== null) {
				store.replaceState(JSON.parse(savedData))
			}
		},
		mounted() {
			store.subscribe((mutation, state) => {localStorage.setItem('cards', JSON.stringify(state))})
		}
}).$mount('#app')
