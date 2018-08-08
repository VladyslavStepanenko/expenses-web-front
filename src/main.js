import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store/index'

Vue.use(Vuetify)

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
