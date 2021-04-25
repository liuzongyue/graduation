import Vue from 'vue'
import VueRouter from 'vue-router'
import login from './../components/login.vue'
// import for_movie from './../components/for_movie.vue'
// import register from './../components/register.vue'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'home',
    redirect: '/login',
    component: login,
    children:[
      {
        path:'/login',//登录
        name:'login',
        component: () => import('@/components/login')
      },
    ]
  },
  // {
  //   path:'/for_movie',//上层旋转
  //   name:'for_movie',
  //   component: () => import('@/components/for_movie')
  // },
  {
    path:'/register',//注册
    name:'register',
    component: () => import('@/components/register')
  },
  {
    path:'/playPage/try_flex',//首页
    name:'try_flex',
    component: () => import('@/views/playPage/try_flex'),
  },
  {
    path:'/seevideo/index',//播放页面
    name:'seevideo',
    component: () => import('@/views/playPage/seevideo/index')
  },{
    path:'/personal_edit',//个人中心
    name:'personal_edit',
    component: () => import('@/components/personal_edit')
  },{
    path:'/main_play/edit_container',//富文本
    name:'edit_container',
    component: () => import('@/views/main_play/edit_container')
  }
]

const router = new VueRouter({
  routes
})

export default router
