// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Claims from '@/views/Claims.vue'
import Payments from '@/views/Payments.vue'

const routes = [
  { path: '/', component: Dashboard },
  { path: '/claims', component: Claims },
  { path: '/payments', component: Payments }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
