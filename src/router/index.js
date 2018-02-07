import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/indexPage'
import orderManagement from '../pages/orderManagement'
import orderFoods from '../pages/orderFoods'
import noTableOrder from '../pages/noTableOrder'
import addMeal from '../pages/addMeal'
import changeShifts from '../pages/changeShifts'
import changeShiftsDetails from '../pages/changeShiftsDetails'
import changeShiftsAllRecordsDetails from '../pages/changeShiftsAllRecordsDetails'
import dayStatistics from '../pages/dayStatistics'
import orderDetails from '../pages/orderDetails'
import finishOrderDetails from '../pages/finishOrderDetails'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'IndexPage',component: IndexPage},
    {path: '/orderManagement',name: 'orderManagement',component: orderManagement},
    {path: '/orderFoods',name: 'orderFoods',component: orderFoods},
    {path: '/noTableOrder',name: 'noTableOrder',component: noTableOrder},
    {path: '/addMeal',name: 'addMeal',component: addMeal},
    {path: '/changeShifts',name: 'changeShifts',component: changeShifts},
    {path: '/changeShiftsDetails',name: 'changeShiftsDetails',component: changeShiftsDetails},
    {path: '/dayStatistics',name: 'dayStatistics',component: dayStatistics},
    {path: '/orderDetails',name: 'orderDetails',component: orderDetails},
    {path: '/finishOrderDetails',name: 'finishOrderDetails',component: finishOrderDetails},
    {path: '/changeShiftsAllRecordsDetails',name: 'changeShiftsAllRecordsDetails',component: changeShiftsAllRecordsDetails},
  ]
})
