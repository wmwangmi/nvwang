import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import content from '@/components/content'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/content/:cid',
      name: 'contenter',
      component: content
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
