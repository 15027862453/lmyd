import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入hotcss
import './lib/hotcss/hotcss.js'
//全局引用echarts图表
import echarts from "echarts";

//引入vant
import {
  Sidebar, SidebarItem, TreeSelect, Tab, Tabs, Field, Button,
  Overlay, Uploader, Toast, RadioGroup, Radio, CountDown,
  Progress, Area, Checkbox, Popup, Empty, Swipe, SwipeItem,
  Tabbar, TabbarItem, DropdownMenu, DropdownItem, Dialog 
} from 'vant';
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(TreeSelect);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Field);
Vue.use(Button);
Vue.use(Overlay);
Vue.use(Uploader);
Vue.use(Toast);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(CountDown);
Vue.use(Progress);
Vue.use(Checkbox);
Vue.use(Area);
Vue.use(Popup);
Vue.use(Empty);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Dialog);


Vue.prototype.$echarts = echarts;

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

