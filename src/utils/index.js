import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'/index',
        name:'index',
        component: () => import('../views/Index.vue')
      },
      {
        path:'/setting',
        name:'setting',
        component: () => import('../views/Setting.vue')
      },
      {
        path:'/acount',
        name:'acount',
        component: () => import('../views/Acount.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
