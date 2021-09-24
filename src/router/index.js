import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import Create from '@/views/Create'
import Product from '@/views/Product'
import Register from '@/views/Register'
import Login from '@/views/Login'
import Item from '@/views/Item'
Vue.use(Router)

const routes=[
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

const router = new Router({
  routes
});

export default router;
