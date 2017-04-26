import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import './assets/style/common'
import './config/rem'

import 'mint-ui/lib/style.css'

import App from './App'

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')