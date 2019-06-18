import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase'


import Article from '../pages/Article.vue'
import About from '../pages/About.vue'
import Home from '../pages/Home.vue';
import Login from '../pages/Login.vue';
import SignUp from '../pages/Signup.vue';
import Member from '../pages/Member.vue';
import News from '../pages/News.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/member',
      name: 'Member',
      component: Member
    },
    {
      path: '/member/:id',
      name: 'Member',
      component: Member
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/article',
      name: 'Article',
      component: Article
    },

    {
      path: '/home',
      name: 'Home',
      component: Home,
      beforeEach:(to, from, next) => {
        const currentUser = firebase.auth().currentUser;
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
      
        if (requiresAuth && !currentUser) next('login');
        else if (!requiresAuth && currentUser) next('home');
        else next();
      },
      meta: {
        requiresAuth: true
      }
    }
  ]
});



export default router;