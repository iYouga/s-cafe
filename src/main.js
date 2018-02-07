// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

fastclick.attach(document.body); //解决移动端点击事件200ms延迟

Vue.config.productionTip = false;

Vue.use(VueLazyLoad, {                //懒加载声明错误图和占位图
  preLoad: 1.3,
  //error: './static/images/loading.gif',
  loading: './static/images/loading.gif'
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
