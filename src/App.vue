<template>
  <div id="app">
    <!-- 设置判断是否需要缓存 -->
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>
 
<script>
import "./assets/css/common.css";
import API from "./common/api/api"
export default {
  // mounted(){
   
  //    let token = localStorage.getItem('token');
  //   //用户未登录进行登录
  //    if(!token){
  //         console.log(this.$route);
  //         if(this.$route.query.code){
  //           //code存在请求 请求接口code换取token
  //           API.getJson('LOGIN',{code:this.$route.query.code}).then((res)=>{

  //           })
  //         }else{
  //           //code不存在 跳转到微信侧换取code
  //           let pageUrl = window.location.href;
  //           let wechatAuth2URL = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx92a886f02d51378d&redirect_uri='+encodeURIComponent(pageUrl)+'&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect';
  //           window.location.href=wechatAuth2URL;
  //         }
         
  //    }
  // }
};
</script>


<style lang="scss">
//按钮
.van-button {
  box-shadow: 0 0 px2rem(20) rgba(0, 0, 0, 0.3);
  border:none;
}

.van-overlay {
  z-index: 999;
}
.van-tab {
  line-height: px2rem(100);
  font-size: px2rem(30);
  border-bottom: 1px solid #dfe0e7;
}
.van-tabs--line .van-tabs__wrap {
  height: px2rem(100);
}


.state .van-tabs .van-tabs__wrap{
  position: fixed;
  left: 0;top: px2rem(87);
  width: 100vw;
}
// 底部边框的颜色
.van-tabs__line {
  bottom: px2rem(25);
  width: px2rem(60);
  height: px2rem(4);
  background-color: #336189 !important;
}

// 选中的颜色
.van-tab--active {
  color: #336189;
}
.van-tabs__content {
  padding: 0 px2rem(30);
}
.van-tabs__nav--card .van-tab {
  height: px2rem(60);
  color: #336289;
  border: none;
}
.van-tabs__nav--card {
  width: px2rem(355);
  border-radius: 10px;
  height: px2rem(60);
  border: 2px solid #336289;
  overflow: hidden;
  font-size: px2rem(28);
}
.van-tabs__nav--card .van-tab.van-tab--active {
  background-color: #336289;
}
.van-tabs--card .van-tabs__content {
  padding: 0;
}
//弹窗样式
.van-toast {
  height: px2rem(60);
  font-size: px2rem(20);
  bottom: 10%;
  padding: 0 px2rem(30);
}

// 单选框
.van-radio__icon {
  height: 2em;
}
.van-radio .van-icon {
  width: 2.5em;
  height: 2.5em;
  line-height: 2.5em;
}
.van-radio__label {
  font-size: px2rem(26);
}
//上传
.van-uploader__upload {
  width: px2rem(330);
  height: px2rem(200);
  margin-top: px2rem(97);
  border-radius: px2rem(10);
}
.van-uploader__upload-icon {
  font-size: px2rem(80);
}

.van-uploader__preview-image,
.van-uploader__preview{
  width: 100%;
  height: 100%;
}
.van-uploader__preview-delete{
  width: 30px;
  height: 30px;
}
.van-uploader__preview-delete-icon{
  font-size: 32px;
}

//选择时间
.van-picker__toolbar{
  height: px2rem(70);
  line-height: px2rem(70);
}
.van-picker__cancel, .van-picker__confirm,.van-picker__title{
  font-size: px2rem(32);
  line-height: normal;
}
.van-ellipsis{
  font-size: px2rem(32);
}
.van-hairline-unset--top-bottom .van-picker__frame{
  height:100px !important;
}

.van-picker-column__item{  
  height:100px !important;
}

//空状态
.van-empty__image{
  width: px2rem(400);
  height: px2rem(400);
}
.van-empty__description{
  font-size: px2rem(32);
  font-weight: bold;
}
// 轮播图
.van-swipe__indicators{
  bottom: px2rem(0);
}
.van-swipe__indicators .van-swipe__indicator{
  width: px2rem(18);
  height: px2rem(18);
  background-color:#BBBBBB ;
  margin-right: px2rem(18);
  opacity: 1;
}
.van-swipe__indicator--active{
  width: px2rem(28) !important;
  height: px2rem(18) !important;
  border-radius: px2rem(8) !important;
  background-color: #336289 !important;
}
//下拉菜单
.van-dropdown-menu__title{
  line-height: px2rem(60);
}
.van-dropdown-menu__bar{
  width: px2rem(220);
  height: px2rem(60);
  line-height: px2rem(60);
  background-color: #336289;
  color: #FFF;
  border-radius: px2rem(30);
}
.van-dropdown-menu__title{
  color: #FFF;
  padding-right: px2rem(30);
}
.van-dropdown-menu__title::after{
  border:px2rem(10) solid;
  border-color: transparent transparent #dcdee0 #dcdee0;
  margin-top: px2rem(-12);
}
.van-cell{
  line-height: px2rem(80);
  font-size: px2rem(28);
}
.van-dropdown-item__option--active{
  color: #336289;
}
.van-dropdown-item__option--active .van-dropdown-item__icon{
  color: #336289;
}
// 对话框
.van-dialog__header{
  font-size: px2rem(34);
  color: #333;
  font-weight: 700;
  margin-bottom: px2rem(50);
}
.van-dialog .van-button{
  font-size: px2rem(30);
}
.van-dialog__cancel, .van-dialog__confirm{
  height: px2rem(60);
  line-height: px2rem(60);
  margin-top: px2rem(110);
}
</style>
