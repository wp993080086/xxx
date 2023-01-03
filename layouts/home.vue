<template>
	<div id="container">
		<nuxt />
		<footer-nav />
	</div>
</template>

<script>
import footerNav from '../components/footer-nav.vue'

export default {
	name: 'HomeLayout',
	components: {
		footerNav
	},
	beforeMount() {
		const a = localStorage.getItem('theme')
		console.log(a)
		const dom = document.getElementsByTagName('html')[0]
		console.log(dom)
	}
}
</script>

<style lang="scss" scoped>
#container {
	width: 100%;
	overflow: hidden;
}
</style>
