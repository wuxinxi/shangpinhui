import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/pages/home/typenav/TypeNav.vue'
import store from '@/store'

Vue.component(TypeNav.name, TypeNav)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
