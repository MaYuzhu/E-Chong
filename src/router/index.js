import Vue from 'vue'
import Router from 'vue-router'

import one from '../pages/one/page-one.vue'
import classified from '../pages/classified/classified.vue'
import cart from '../pages/cart/cart.vue'
import mine from '../pages/mine/mine.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/one'
    },
    {
      path: '/one',
      component: one
    },
    {
      path: '/classified',
      component: classified
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/mine',
      component: mine
    },
  ]
})
