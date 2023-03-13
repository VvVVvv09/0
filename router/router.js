import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/data',
      name: 'data',
      component: Data
    },
    {
      path: '/alert',
      name: 'alert',
      component: Alert
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
