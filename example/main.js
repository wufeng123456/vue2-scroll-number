import Vue from 'vue'
import App from './App.vue'
import Vue2ScrollNumber from 'vue2-scroll-number'
import 'vue2-scroll-number/lib/vue2-scroll-number.css'

// console.log(Vue2ScrollNumber)

Vue.config.productionTip = false
Vue.use(Vue2ScrollNumber)
new Vue({
  render: h => h(App),
}).$mount('#app')
