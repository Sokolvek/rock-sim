import { createWebHistory, createRouter } from 'vue-router'

import App from './App.vue'
import Rock from './pages/Rock.vue'
import Shop from './pages/Shop.vue'


const routes = [
  { path: '/', component: Rock },
  { path:"/shop", component: Shop}
]

export const router = createRouter({
  history: createWebHistory("rock-sim"),
  routes,
})