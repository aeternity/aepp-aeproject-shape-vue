import '@aeternity/aepp-components/dist/aepp.global.css'
import '@aeternity/aepp-components/dist/aepp.fonts.css'
import '@aeternity/aepp-components/dist/aepp.components.css'
import Components from '@aeternity/aepp-components'
import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

Vue.use(Components)

Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')
