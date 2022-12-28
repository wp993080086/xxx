<template>
	<div class="index">
		<svg-icon icon-class="en" color="#409eff" @click="changes" />
		<div class="box">123456789
			<p class="xxxxx">123456789</p>
		</div>
		<div class="grid"></div>
	</div>
</template>

<script>
export default {
	name: 'IndexPage',
	methods: {
		changes() {
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
		color: var(--pdd-text-primary);
		width: 200px;
		height: 200px;
		border: 1px solid #cccccc;
		.xxxxx{
			color: var(--pdd-text-placeholder);
		}
	}
	.grid{
		width: 200px;
		height: 200px;
		background: linear-gradient(135deg,#9cecfb,#65c7f7,#0052d4);
	}
}
</style>
