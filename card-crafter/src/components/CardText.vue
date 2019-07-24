<template>
	<div>
		<label>Text</label>
		<input v-model='cardText'>
		<label>x</label>
		<input v-model.number='cardX' type='number'>
		<label>y</label>
		<input v-model.number='cardY' type='number'>
		<button @click='deleteCurrentCardText'>Delete</button>
	</div>
</template>

<script>
	import { mapMutations } from 'vuex'

	export default {
		props: {
			flavourIndex: Number,
			cardElementIndex: Number
		},
		computed: {
			cardElement() {
					return this.$store.state.flavours[this.flavourIndex].cardElements[this.cardElementIndex]
			},
			cardText: {
				get() {
					return this.cardElement.text
				},
				set (newText) {
					this.editCardText({flavourIndex: this.flavourIndex, cardElementIndex: this.cardElementIndex, text: newText})
				}
			},
			cardX: {
				get() {
					return this.cardElement.x
				},
				set (newX) {
					this.editCardX({flavourIndex: this.flavourIndex, cardElementIndex: this.cardElementIndex, x: newX})
				}
			},
			cardY: {
				get() {
					return this.cardElement.y
				},
				set (newY) {
					this.editCardY({flavourIndex: this.flavourIndex, cardElementIndex: this.cardElementIndex, y: newY})
				}
			}
		},
		methods: {
			deleteCurrentCardText() {
				this.deleteCardText({flavourIndex: this.flavourIndex, cardElementIndex: this.cardElementIndex})
			},

			...mapMutations(['editCardText', 'editCardX', 'editCardY', 'deleteCardText'])
		}
	}
</script>
