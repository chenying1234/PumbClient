import Vue from 'vue'
import Router from 'vue-router'


// 首页
import home from '@/view/home'
// 错误页
import Err404 from '@/view/Err404'
// 报名
import apply from '@/view/apply/apply'
import applySignUp from '@/view/apply/applySignUp'
import applySignIn from '@/view/apply/applySignIn'
// 经销商登录
import DealerLogin from '@/view/Dealer/DealerLogin'
import DealerIndex from '@/view/Dealer/DealerIndex'
import DealerClientList from '@/view/Dealer/DealerClientList'


Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    redirect: '/home',
    hidden: true
},
  {
    path: '/home',
    component: home,
    name: '首页',
  }, 
  {
    path: '/404',
    component: Err404,
    hidden: true
  },
  { path: '*', redirect: '/404', hidden: true }
];
export const asyncRouterMap = [
  {
    path: '/applySignUp',
    component: apply,
    // name: '报名',
    // redirect: '/apply/index',
    meta:{
      role: ['车主','经销商'],
    },
    children:[
      {
      path: '',
      component: applySignUp,
      name:'我要报名',
      meta:{
        role: ['车主','经销商'],
      }
    }
  ]
  },
  {
    path: '/applySignIn',
    component: apply,
    // name: '报名',
    // redirect: '/apply/index',
    meta:{
      role: ['车主','经销商'],
    },
    children:[
      {
      path: '',
      component: applySignIn,
      name:'我的报名',
      meta:{
        role: ['车主','经销商'],
      }
    }
  ]
  },
  {
    path:'/DealerLogin',
    component: DealerLogin,
    name: '经销商登录',
    meta:{
      role: ['经销商'],
    },
  },
  {
    path:'/DealerIndex',
    component: DealerIndex,
    name: '经销商首页',
    meta:{
      role: ['经销商'],
    },
  },
  {
    path:'/DealerClientList',
    component: DealerClientList,
    name: '经销商客户列表',
    meta:{
      role: ['经销商'],
    },
  }


]
var dd = constantRouterMap.concat(asyncRouterMap);
console.log(dd)
export default new Router({
  scrollBehavior: () => ({y: 0}),
  routes: dd
})
