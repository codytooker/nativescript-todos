import Vue from 'vue'
import Router from 'vue-router'
import Home from '~/views/Home.vue'

Vue.use(Router)

export const options = {
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ],
}
export default new Router(options)
