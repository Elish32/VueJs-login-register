import Vue from 'vue'
import Router from 'vue-router'
import Countries from '@/components/Countries'
import Register from '@/Register'
import Login from '@/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/Login'
    },
    {
      path: '/',
      redirect: '/Login'
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ],
  mode: 'history'
})
