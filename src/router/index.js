import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import flex from '@/components/flex'
import ciyun from '@/components/ciyun'
import echartsciyun from '@/components/echartsciyun'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/flex',
      name: 'flex',
      component: flex
    },
    {
      path: '/ciyun',
      name: 'ciyun',
      component: ciyun
    },
    {
      path: '/echartsciyun',
      name: 'echartsciyun',
      component: echartsciyun
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
