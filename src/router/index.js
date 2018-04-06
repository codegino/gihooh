import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/modules/home/HomeIndex'
import Profile from '@/modules/profile/routes'

Vue.use(Router)

export default new Router({
  routes: [
    ...Profile,
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
