import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import './assets/scss/app.scss'
import Blur from '@/directives/blur'
import MsToMm from '@/filters/ms-to-mm'

// dependencies injection
Vue.use(Buefy)
Vue.use(Blur)
Vue.use(MsToMm) // global filter

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
