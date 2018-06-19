import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import content from '@/components/content'
import gwc from '@/components/gwc'
import wd from '@/components/wd'
import wdkj from '@/components/wdkj'
import scj from '@/components/scj'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/content/:id',
      name: 'contenter',
      component: content
    },
    {
      path: '/gwc/:id',
      name: 'gwc',
      component: gwc
    },
    {
      path: '/wd/:id',
      name: 'wd',
      component: wd
    },
    {
      path: '/wdkj',
      name: 'wdkj',
      component: wdkj
    },
    {
      path: '/scj',
      name: 'scj',
      component: scj
    }
  ]
})
