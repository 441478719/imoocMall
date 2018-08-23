import Vue from 'vue'
import Router from 'vue-router'

import goodslist from '@/pages/GoodsList.vue'
import CartList from '@/pages/CartList.vue'
import AddressList from "@/pages/AddressList.vue"
import addressComfirm from '@/pages/addressComfirm'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "goods",
      component: goodslist
    },
    {
      path: "/CartList",
      name: "CartList",
      component: CartList
    },
    {
      path: "/AddressList",
      name: "AddressList",
      component: AddressList
    },
    {
      path:'/addressComfirm',
      name: addressComfirm,
      component: addressComfirm
    }
  ]
});
