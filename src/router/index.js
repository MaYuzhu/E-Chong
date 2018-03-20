import Vue from 'vue'
import Router from 'vue-router'

import one from '../pages/one/page-one.vue'
import classified from '../pages/classified/classified.vue'
import cart from '../pages/cart/cart.vue'
import mine from '../pages/mine/mine.vue'

import all from '../pages/all_brand/all_brand.vue'

import class_one from '../pages/classified/class_one/class_one.vue'
import class_two from '../pages/classified/class_two/class_two.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/one'
    },
    {
      path: '/one',
      component: one,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/classified',
      component: classified,
      meta:{
        showFooter:true
      },
      children:[
        {
          path:'class_one',
          component:class_one,
          meta:{
            showFooter:true
          },
        },
        {
          path:'class_two',
          component:class_two,
          meta:{
            showFooter:true
          },
        },
        {
          path:'',
          redirect:'class_one'
        },
      ]
    },
    {
      path: '/cart',
      component: cart,
      meta:{
        showFooter:true
      },
    },

    {
      path: '/mine',
      component: mine
    },
    {
      path: '/all',
      component: all
    },
  ]
})
