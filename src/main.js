// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// cmd模块使用方法
import ccPrivateUtils from '@ccprivate/utils/bundle'
Vue.prototype.$ccPrivateUtils = ccPrivateUtils
// 然后在单页面vue文件里，用this.$ccPrivateUtils,直接调用就行
// this.$ccPrivateUtils().format.numberSplitWithComma(12312312321)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// ADM模块使用方法,AMD是required.js在推广使用过程中对模块定义规范化的产物，在需要时引入required.js
// let ccPrivateUtils = require('@ccprivate/utils/amd')
// console.log(ccPrivateUtils().format.numberSplitWithComma(12313123))
