import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import store from './store/index'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify)

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
