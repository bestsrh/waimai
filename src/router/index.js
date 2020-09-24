/*
  引入路由模块文件
*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      views: true
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      views: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      views: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      views: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      views: true
    }
  },
  {
    path: '/login',
    component: Login
  },
]

const router = new VueRouter({
  routes
})

export default router
