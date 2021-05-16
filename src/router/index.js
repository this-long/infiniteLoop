import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/rumen',
    name: 'Rumen',
    component: () => import('../views/Rumen.vue')
  },
  {
    path: '/longapi',
    name: 'LongApi',
    component: () => import('../views/LongApi.vue')
  },
  {
    path: '/landup',
    name: 'LandUp',
    component: () => import('../views/LandUp.vue')
  },
  {
    path: '/topic/create',
    component: () => import('../views/TopicCreate.vue')
  },
  {
    path: '/my/message',
    component: () => import('../views/UnreadMessage.vue')
  },
  {
    path: '/topic/:id',
    component: () => import('../views/TopicLong.vue')
  },
  {
    path: '/user/:authorname',
    component: () => import('../views/AuthorNews.vue')
  },
  {
    path: '/user/:authorname/collections',
    component: () => import('../views/AuthorCollections.vue')
  },
  {
    path: '/:tag',
    component: Home,
  },
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  //这是一个自适应的基地址，
  base: process.env.BASE_URL,
  routes
})

export default router
