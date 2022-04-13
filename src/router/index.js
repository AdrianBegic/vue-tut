import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import tutorialPage from '../components/tutorialPage.vue'
import Tutorials from '../views/Tutorials.vue'

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
    path: '/tutorial/:id',
    name: 'tutorialPage',
    component: tutorialPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
