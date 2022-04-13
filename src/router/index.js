/* eslint-disable */
import { createRouter, createWebHistory } from 'vue-router'
import firebase from 'firebase';
import Home from '../views/Home.vue'
import tutorialPage from '../components/tutorialPage.vue'
import Tutorials from '../views/Tutorials.vue'
import Login from '../components/Login.vue'
import Dashboard from '../components/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Tutorials',
    name: 'Tutorials',
    component: Tutorials
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      authRequired: true
    }
  },
  {
    path: '/tutorial/:id',
    name: 'tutorialPage',
    component: tutorialPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
      if (firebase.auth().currentUser) {
          next();
      } else {
          alert('You must be logged in to see this page');
          next({
              path: '/',
          });
      }
  } else {
      next();
  }
});

export default router
