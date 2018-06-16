import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import content from '@/components/content'
import gwc from '@/components/gwc'

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
      path: '/gwc/:gid',
      name: 'gwc',
      component: gwc
    }
  ]
})
