// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var config = {
  apiKey: "AIzaSyD6JDuDrkjfrcD6L6ouZfcbfxlA9fqc54U",
  authDomain: "login-register-be1e6.firebaseapp.com",
  databaseURL: "https://login-register-be1e6.firebaseio.com",
  projectId: "login-register-be1e6",
  storageBucket: "",
  messagingSenderId: "469407353949"
};
firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
