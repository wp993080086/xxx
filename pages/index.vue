<template>
	<div class="index">
		<!-- <svg-icon icon-class="en" color="#409eff" @click="changes" /> -->
		<div class="banner_box">
      <div class="motto">天道酬勤 功不唐捐</div>
		</div>
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
	height: 1500px;
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
	.banner_box {
    position: relative;
    width: 100vw;
    height: 100vh;
    // background-image: url('~/static/images/seabed.png');
    // background-attachment: fixed;
    // background-repeat: no-repeat;
    // background-position: center;
    // background-size: cover;
    .motto {
      position: absolute;
      top: calc(50% - 50px);
      left: 0;
      width: 100%;
      height: 100px;
      font-size: 24px;
      color: #ffffff;
      font-family: cursive;
      text-align: center;
    }
  }
}
</style>
