import Vue from 'vue'
import VueRouter from 'vue-router'
//营业厅
import Hall from '../views/Hall.vue'
// 查询类
import queryCard from '../views/query/queryCard.vue'
import card from '../views/query/card.vue'
import record from '../views/query/record.vue'
import setMeal from '../views/query/setMeal.vue'
import orderbusine from '../views/query/orderbusine.vue'
import balance from '../views/query/balance.vue'
import historyBill from '../views/query/historyBill.vue'
import bill from '../views/query/bill.vue'
import billDetails from '../views/query/billDetails.vue'
// 开发票
import billing from '../views/handle/Invoice/billing.vue'
import Invoice from '../views/handle/Invoice/Invoice.vue'
import InvoiceSuccess from '../views/handle/Invoice/InvoiceSuccess.vue'
import state from '../views/handle/Invoice/state.vue'
//实名认证
import realName from '../views/handle/realName/realName.vue'
import realFail from '../views/handle/realName/realFail.vue'
import realSuccess from '../views/handle/realName/realSuccess.vue'
//来电显示 
import caller from '../views/handle/Caller/caller.vue'
import openCaller from '../views/handle/Caller/openCaller.vue'
import openSuccess from '../views/handle/Caller/openSuccess.vue'
//漏电提醒
import remind from '../views/handle/remind/remind.vue'
import openRemindSuccess from '../views/handle/remind/openSuccess.vue'
import openRemind from '../views/handle/remind/openRemind.vue'
// 销户申请
import cancel from '../views/handle/cancel/cancel.vue'
import auditCabcel from '../views/handle/cancel/auditCabcel.vue'
import auditFail from '../views/handle/cancel/auditFail.vue'
import cancelForm from '../views/handle/cancel/cancelForm.vue'

// 账号绑定
import noCode from '../views/account/noCode.vue'
import success from '../views/account/success.vue'
import fail from '../views/account/fail.vue'
// 支付
import flowPayFali from '../views/pay/flowPayFali.vue'
import payFail from '../views/pay/payFail.vue'
import paySuccess from '../views/pay/paySuccess.vue'
//会员
// 其他
import other from '../views/memberOther/other.vue'
import cooperate from '../views/memberOther/cooperate.vue'
import complain from '../views/memberOther/complain.vue'
import complainSuccess from '../views/memberOther/complainSuccess.vue'
import store from '../views/memberOther/store.vue'
//个人信息
import personal from '../views/memberPersonal/personal.vue'
import relieve from '../views/memberPersonal/relieve.vue'
import relieveNot from '../views/memberPersonal/relieveNot.vue'
import mealDetails from '../views/memberPersonal/mealDetails.vue'
import setPassword from '../views/memberPersonal/setPassword.vue'
import setSuccess from '../views/memberPersonal/setSuccess.vue'
import setFail from '../views/memberPersonal/setFail.vue'
import notPassword from '../views/memberPersonal/notPassword.vue'
import newPassword from '../views/memberPersonal/newPassword.vue'
//积分兑换
import integral from '../views/memberIntegral/integral.vue'
import exchangeSuccess from '../views/memberIntegral/exchangeSuccess.vue'
import exchangeFail from '../views/memberIntegral/exchangeFail.vue'
import myOrder from '../views/memberIntegral/myOrder.vue'
import integralDetails from '../views/memberIntegral/integralDetails.vue'

//活动
import activity from '../views/activity/activity.vue'
import activityDetails from '../views/activity/activityDetails.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Hall',
    component: Hall,
    meta: {
      keepAlive: true, //此组件需要被缓存
    },
  },
  {
    path: '/queryCard',
    name: 'queryCard',
    component: queryCard
  },
  {
    path: '/card',
    name: 'card',
    component: card
  },
  {
    path: '/record',
    name: 'record',
    component: record
  },
  {
    path: '/orderbusine',
    name: 'orderbusine',
    component: orderbusine
  },
  {
    path: '/setMeal',
    name: 'setMeal',
    component: setMeal
  },
  {
    path: '/balance',
    name: 'balance',
    component: balance
  },
  {
    path: '/historyBill',
    name: 'historyBill',
    component: historyBill
  },
  {
    path: '/bill',
    name: 'bill',
    component: bill
  },
  {
    path: '/billDetails',
    name: 'billDetails',
    component: billDetails
  },
  {
    path: '/billing',
    name: 'billing',
    component: billing
  },
  {
    path: '/Invoice',
    name: 'Invoice',
    component: Invoice
  },
  {
    path: '/noCode',
    name: 'noCode',
    component: noCode
  },
  {
    path: '/success',
    name: 'success',
    component: success
  },
  {
    path: '/fail',
    name: 'fail',
    component: fail
  },
  {
    path: '/payFail',
    name: 'payFail',
    component: payFail
  },
  {
    path: '/paySuccess',
    name: 'paySuccess',
    component: paySuccess
  },
  {
    path: '/flowPayFali',
    name: 'flowPayFali',
    component: flowPayFali
  },
  {
    path: '/realName',
    name: 'realName',
    component: realName
  },
  {
    path: '/realFail',
    name: 'realFail',
    component: realFail
  },
  {
    path: '/realSuccess',
    name: 'realSuccess',
    component: realSuccess
  },
  {
    path: '/caller',
    name: 'caller',
    component: caller
  },
  {
    path: '/openCaller',
    name: 'openCaller',
    component: openCaller
  },
  {
    path: '/openSuccess',
    name: 'openSuccess',
    component: openSuccess
  },
  {
    path: '/remind',
    name: 'remind',
    component: remind
  },
  {
    path: '/openRemindSuccess',
    name: 'openRemindSuccess',
    component: openRemindSuccess
  },
  {
    path: '/openRemind',
    name: 'openRemind',
    component: openRemind
  },
  {
    path: '/cancel',
    name: 'cancel',
    component: cancel
  },
  {
    path: '/auditCabcel',
    name: 'auditCabcel',
    component: auditCabcel
  },
  {
    path: '/auditFail',
    name: 'auditFail',
    component: auditFail
  },
  {
    path: '/cancelForm',
    name: 'cancelForm',
    component: cancelForm
  },
  {
    path: '/InvoiceSuccess',
    name: 'InvoiceSuccess',
    component: InvoiceSuccess
  },
  {
    path: '/state',
    name: 'state',
    component: state
  },
  {
    path: '/other',
    name: 'other',
    component: other
  },
  {
    path: '/cooperate',
    name: 'cooperate',
    component: cooperate
  },
  {
    path: '/complain',
    name: 'complain',
    component: complain
  },
  {
    path: '/complainSuccess',
    name: 'complainSuccess',
    component: complainSuccess
  },
  {
    path: '/store',
    name: 'store',
    component: store
  },
  {
    path: '/personal',
    name: 'personal',
    component: personal
  },
  {
    path: '/relieve',
    name: 'relieve',
    component: relieve
  },
  {
    path: '/relieveNot',
    name: 'relieveNot',
    component: relieveNot
  },
  {
    path: '/mealDetails',
    name: 'mealDetails',
    component: mealDetails
  },
  {
    path: '/setPassword',
    name: 'setPassword',
    component: setPassword
  },
  {
    path: '/setSuccess',
    name: 'setSuccess',
    component: setSuccess
  },
  {
    path: '/setFail',
    name: 'setFail',
    component: setFail
  },
  {
    path: '/notPassword',
    name: 'notPassword',
    component: notPassword
  },
  {
    path: '/newPassword',
    name: 'newPassword',
    component: newPassword
  },
  {
    path: '/integral',
    name: 'integral',
    component: integral
  },
  {
    path: '/exchangeFail',
    name: 'exchangeFail',
    component: exchangeFail
  },
  {
    path: '/exchangeSuccess',
    name: 'exchangeSuccess',
    component: exchangeSuccess
  },
  {
    path: '/activity',
    name: 'activity',
    component: activity
  },
  {
    path: '/activityDetails',
    name: 'activityDetails',
    component: activityDetails
  },
  {
    path: '/myOrder',
    name: 'myOrder',
    component: myOrder
  },
  {
    path: '/integralDetails',
    name: 'integralDetails',
    component: integralDetails
  },
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
