<template>
	<div id="container">
		<header-nav />
		<nuxt />
		<footer-nav />
	</div>
</template>

<script>
import headerNav from '../components/header-nav.vue'
import footerNav from '../components/footer-nav.vue'

export default {
	name: 'DefaultLayout',
	components: {
		footerNav,
		headerNav
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
