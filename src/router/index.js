import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Account from '../views/Account.vue'
import Setup from '../views/Setup.vue'
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
    	component:()=>import('../views/Index.vue')
    },
     {
    	path:'/account',
    	name:'account',
    	component:()=>import('../views/Account.vue')
    },
     {
    	path:'/setup',
    	name:'setup',
    	component:()=>import('../views/Setup.vue')
    }
    ]
  },
  {
  	path:'/login',
  	name:'login',
  	component:()=>import('../views/Login.vue')
  }
]



const router = new VueRouter({
  routes
})

export default router
