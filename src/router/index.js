import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import content from '@/components/content'
import gwc from '@/components/gwc'
import wd from '@/components/wd'
import wdkj from '@/components/wdkj'
import scj from '@/components/scj'
import wddz from '@/components/wddz'

Vue.use(Router)

let router=new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta:{
        title:'首页'
      }
    },
    {
      path: '/content/:id',
      name: 'contenter',
      component: content,
      meta:{
        title:'内容页'
      }
    },
    {
      path: '/gwc/:id',
      name: 'gwc',
      component: gwc,
      meta:{
        title:'购物车'
      }
    },
    {
      path: '/wd/:id',
      name: 'wd',
      component: wd,
      meta:{
        title:'我的'
      }
    },
    {
      path: '/wdkj',
      name: 'wdkj',
      component: wdkj,
      meta:{
        title:'我的砍价'
      }
    },
    {
      path: '/scj',
      name: 'scj',
      component: scj,
      meta:{
        title:'收藏夹'
      }
    },
    {
      path: '/wddz',
      name: 'wddz',
      component: wddz,
      meta:{
        title:'我的地址'
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router;
