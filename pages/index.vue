<template>
	<div class="index">
		<svg-icon icon-class="en" color="#409eff" @click="changes" />
		<div class="box"></div>
	</div>
</template>

<script>
export default {
	name: 'IndexPage',
	methods: {
		changes() {
			console.log('10000')
			const dom = document.getElementsByTagName('html')[0]
			const t = dom.getAttribute('theme')
			t === 'bright' ? dom.setAttribute('theme', 'dark') : dom.setAttribute('theme', 'bright')
		}
	}
}
</script>

<style lang="scss" scoped>
.index{
	height: 1000px;
	font-size: 20px;
	.box{
		background-color: var(--pdd-bg-color);
		width: 200px;
		height: 200px;
		border: 1px solid #cccccc;
	}
}
</style>
