<template>
  <div class="InvoiceSuccess">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">开发票</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <!-- 顶部 -->
      <div class="main_top">
        <h3>尊敬的XXX:</h3>
        <p>您的发票已开好，请及时查看邮箱！</p>
      </div>
      <!-- 标题 -->
      <div class="title">以下为开票申请信息</div>
      <!-- 内容 -->
      <div class="content">
        <p>手机号码：13688888888</p>
        <p>发票月份：2020年8月-2020年10月</p>
        <p v-if="radio == 1">抬头类型：个人</p>  <!--个人-->
        <p v-if="radio == 2">抬头类型：企业</p> <!--企业-->
        <p v-if="radio == 1">发票抬头名称：张三</p><!--个人-->
        <p v-if="radio == 2">发票抬头名称：XXXXX公司</p> <!--企业-->
        <p v-if="radio == 2">纳税人识别号：28937898324MN000</p> <!--企业-->
        <p>申请人姓名：张三</p>
        <p>申请人联系电话：13688888888</p>
        <p>申请人邮箱：abc@123.com</p>
        <p v-if="radio == 2">营业执照照片：已上传</p> <!--企业-->
        <p v-if="radio == 1">身份证正面照片：已上传</p><!--个人-->
        <p v-if="radio == 1">身份证反面照片：已上传</p><!--个人-->
        <p v-if="radio == 1">本人半身人像照：已上传</p><!--个人-->
      </div>
      <!-- 按钮 -->
      <van-button round type="info" @click="back()">继续开票</van-button>
    </div>
  </div>
</template>

<script>
import topHead from "../../../components/topHead.vue";
export default {
  name: "InvoiceSuccess",
  data () {
    return {
      radio:'2'  
    }
  },
  methods:{
    back(){
      this.$router.back();
    }
  },
  components: {
    topHead,
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 px2rem(30);
}
.main_top {
  display: flex;
  width: 100%;
  height: px2rem(90);
  line-height: px2rem(90);
  border-radius: px2rem(18);
  box-shadow: 0 0 px2rem(20) rgba($color: #000000, $alpha: 0.1);
  margin-top: px2rem(20);
  padding: 0 px2rem(25) 0;
  box-sizing: border-box;
}
.main_top h3 {
  font-size: px2rem(30);
  color: #336289;
}
.main_top p {
  font-size: px2rem(26);
  color: #999999;
  margin-left: px2rem(20);
}
.title{
  line-height: px2rem(128);
  font-size: px2rem(30);
  font-weight: bold;
  color: #333;
}
.content p{
  font-size: px2rem(28);
  color: #333;
  line-height: px2rem(58);
}
.van-button {
  display: flex;
  justify-content: center;
  text-align: center;
  width: px2rem(550);
  height: px2rem(80);
  line-height: px2rem(80);
  color: #fff;
  font-weight: bold;
  font-size: px2rem(28);
  background-color: #336289;
  margin: px2rem(90) auto 0;
  box-shadow: 0 0 px2rem(10) rgba($color: #000000, $alpha: 0.2);
}
</style>