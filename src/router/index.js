import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '../pages/IndexPage'
import LoginPage from '../pages/LoginPage'
import Register from '../pages/RegisterPage'
import Setting from '../pages/SettingPage'
import MealManagePage from '../pages/MealManagePage'
import MealEdit from '../components/mealManage/MealEdit'
import TableManagePage from '../pages/TableManagePage'
import WorkerManagePage from '../pages/WorkerManagePage'
import PaywayManagePage from '../pages/PaywayManagePage'
import PrinterManagePage from '../pages/PrinterManagePage'
import UserInfosPage from '../pages/UserInfosPage'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'IndexPage',component: IndexPage},
    {path: '/login',name: 'LoginPage',component: LoginPage},
    {path: '/reg',name: 'Register',component: Register},
    {path: '/setting',name: 'Setting',component: Setting},
    {path: '/meal',name: 'Meal',component: MealManagePage},
    {path: '/mealEdit',name: 'MealEdit',component: MealEdit},
    {path: '/tableManage',name: 'MealEdit',component: TableManagePage},
    {path: '/worker',name: 'Worker',component: WorkerManagePage},
    {path: '/payway',name: 'Payway',component: PaywayManagePage},
    {path: '/printer',name: 'Printer',component: PrinterManagePage},
    {path: '/userInfos',name: 'UserInfos',component: UserInfosPage}
  ]
})
