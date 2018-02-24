import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)

var config = {
  apiKey: 'AIzaSyBzB03pSh6MRhthRs4s-rp0lJqVKaXbpXo',
  authDomain: 'neon-feat-194817.firebaseapp.com',
  databaseURL: 'https://neon-feat-194817.firebaseio.com',
  projectId: 'neon-feat-194817',
  storageBucket: 'neon-feat-194817.appspot.com',
  messagingSenderId: '914534814313'
}
firebase.initializeApp(config)

Vue.prototype.$db = firebase.database()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
