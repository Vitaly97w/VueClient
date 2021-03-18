import { createRouter, createWebHistory } from 'vue-router'

import Cards from './components/cards'
import addCard from './components/addCard'
import E404 from './components/E404'

const routes = [
  {
    path: '/',
    redirect: {name: 'card'}
    
  },
  
  {
    path: '/card',
    name: 'card',
    component: Cards,
  },
  {
    path: '/addcard',
    component: addCard,
  },
  {
    path: '/:pathMatch(.*)*',
    component: E404,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
