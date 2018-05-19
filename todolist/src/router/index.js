import Vue from 'vue'
import Router from 'vue-router'
import todolist from '@/components/todolist'
import PlanList from '@/components/PlanList'
import Shop from '@/components/Shop'
import GoodsDetail from '@/components/Shop/GoodsDetail'
import Buy from '@/components/Shop/Buy'
import ShopMall from '@/components/Shop/ShopMall'
import Cart from '@/components/Shop/Cart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todolist',
      component: todolist
    },
    {
      path: '/PlanList',
      name: 'PlanList',
      component: PlanList
    },
    {
      path: '/Shop',
      component: Shop,
      children:[
         {
            path:'/Shop/',
            component:ShopMall
          },
         {
          path:'/Shop/ShopMall',
          component:ShopMall
        },
        {
          path:'/Shop/GoodsDetail/:id',
          name:'GoodsDetail',
          component:GoodsDetail
        },
        {
          path:'/Shop/Buy',
            component:Buy
        },
        {
          path:'/Shop/Cart',
          component:Cart
        }
      ]
    }
  ]
})
