import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Create from '@/components/Create'
import Product from '@/components/Product'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Item from '@/components/Item'
Vue.use(Router)

export default new Router({ 
routes:[
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: `/product/:id`,
    name: 'item',
    props: true,
    component: Item
  }
          
]  
})
