import Vue from 'vue'
import VueRouter from 'vue-router'
import login from './../components/login.vue'
// import register from './../components/register.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'home',
    component: login,
    redirect: '/login',
    children:[
      {
        path:'/login',
        name:'login',
        component: () => import('@/components/login')
      },
    ]
  },
  {
    path:'/register',
    name:'register',
    component: () => import('@/components/register')
  },
  {
    path:'/playPage/try_flex',
    name:'try_flex',
    component: () => import('@/views/playPage/try_flex'),
  }
]

const router = new VueRouter({
  routes
})

export default router
