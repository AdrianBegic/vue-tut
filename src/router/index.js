import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import tutorialPage from '../components/tutorialPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
