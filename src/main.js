import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
