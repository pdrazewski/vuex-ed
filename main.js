// main.js

import Vue from 'vue/dist/vue.js'
import store from './vuex/store'
import App from './components/App.vue'

new Vue({ 
  store, // inject store to all children
  el: '#app',
  components: { App }  
})