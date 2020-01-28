// import socketio from 'socket.io'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import getRouter from './router'
import store from './store'
import '@aeternity/aepp-components/dist/aepp.global.css'
import '@aeternity/aepp-components/dist/aepp.fonts.css'
import '@aeternity/aepp-components/dist/aepp.components.css'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
    router: getRouter(store),
    store,
    render: h => h(App),
    beforeCreate() {
    }
}).$mount('#app')
