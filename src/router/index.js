import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import Section from '@/components/Section'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({ 
routes:[
  {
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/section',
    name: 'section',
    component: Section
  },
  {
    path: '/helloworld',
    name: 'helloworld',
    component: HelloWorld
  }     
]  
})
