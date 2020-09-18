import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/recommend',
    children:[
      {
        path: 'recommend',
        name: 'recommend',
        component: ()=>import(/* webpackChunkName: "recommend" */'../views/Recommend')
      },
      {
        path: 'singers',
        name: 'singers',
        component: ()=>import(/* webpackChunkName: "singers" */'../views/Singers'),
        children:[{
            path: ':id',
            name: 'singerList',
            component: ()=>import(/* webpackChunkName: "singerList" */'../views/singerList'),
          }]
      },
      {
        path: 'rank',
        name: 'rank',
        component: ()=>import(/* webpackChunkName: "rank" */'../views/Rank'),
        children:[{
          path: ':id',
          name: 'offic',
          component: ()=>import(/* webpackChunkName: "offic" */'../views/offic'),
        }]
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
