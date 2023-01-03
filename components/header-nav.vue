<template>
	<div id="header">
		<div class="header_pc">
			<div class="header_l">
				<div class="logo_box">
					<nuxt-link v-slot="{ navigate }" to="/" custom>
						<img :src="logo" alt="logo" @click="navigate" />
					</nuxt-link>
				</div>
				<div class="menu_box">
					<nuxt-link v-for="item in navMenu" :key="item.path" v-slot="{ navigate }" to="/" custom>
						<div class="menu_item" @click="navigate">{{ item.title }}</div>
					</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import logo from '~/static/images/logo.png'

export default {
	name: 'HeaderNav',
	data() {
		return {
			logo,
			navMenu: [
				{ title: '前端宝库', path: '', icon: '' },
				{ title: '每日金句', path: '', icon: '' },
				{ title: '我的菜谱', path: '', icon: '' }
			]
		}
	}
}
</script>

<style lang="scss" scoped>
#header {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	width: 100%;
	height: 84px;
	.header_pc {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 20px;
		width: 100%;
		height: 100%;
		background-color: var(--pdd-bg-color);
		border-bottom: 1px solid var(--pdd-border-color);
		.header_l {
			.logo_box {
				width: 64px;
				height: 64px;
			}
			.menu_box {
				display: flex;
				align-items: center;
				justify-content: center;
				.menu_item {
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 0px 20px;
				}
			}
		}
		.header_r {
			height: 100%;
		}
	}
}
</style>
