import { createRouter, createWebHistory } from 'vue-router'
import Szakkorok from '../views/Szakkorok.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'szakkorok',
      component: Szakkorok
    }
  ]
})

export default router
