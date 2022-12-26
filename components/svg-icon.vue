<template>
	<svg :class="svgClass" aria-hidden="true" :color="color" v-on="$listeners">
		<use :xlink:href="iconName" />
	</svg>
</template>

<script>
export default {
	name: 'SvgIcon',
	props: {
		iconClass: {
			type: String,
			required: true
		},
		className: {
			type: String,
			default: ''
		},
		color: {
			type: String,
			default: '#a1a1a1'
		}
	},
	computed: {
		iconName() {
			return `#icon-${this.iconClass}`
		},
		svgClass() {
			return this.className ? `svg-icon${this.className}` : 'svg_icon'
		}
	}
}
</script>

<style scoped>
.svg_icon {
	width: 1em;
	height: 1em;
	font-size: 1.2em;
	vertical-align: -0.15em;
	overflow: hidden;
	fill: currentColor !important;
}
</style>
