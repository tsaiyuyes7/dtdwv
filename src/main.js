import "./firebase"
import firebase from 'firebase/app'
import Vue from 'vue';
import VueFirestore from 'vue-firestore'
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueFirestore);

let app = '';


firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});
