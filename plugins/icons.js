import Vue from 'vue'
// 引用组件
import SvgIcon from '@/components/svg-icon.vue'

// 注册全局组件，组建名为SvgIcon
Vue.component('SvgIcon', SvgIcon)

// 引用svg图标
const requireAll = requireContext => requireContext.keys().map(requireContext)
// 如果第二个参数为true 程序将会遍历assets/svg目录下的子目录，并引用其中的.svg文件
const req = require.context('@/assets/svg', false, /\.svg$/)
requireAll(req)

