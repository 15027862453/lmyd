<template>
  <div class="billing">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">开发票</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <div class="img">
        <img src="../../../assets/images/kp.png" alt="" />
        <h4>开票中</h4>
        <p>预计1-3个工作日开票成功，请耐心等待</p>
      </div>
      <van-button round type="info" @click="back()">继续开票</van-button>
    </div>
  </div>
</template>

<script>
import topHead from "../../../components/topHead.vue";
export default {
  name: "billing",
  components: {
    topHead,
  },
  methods:{
    back(){
      this.$router.go(-2);//返回上一层
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 px2rem(30);
}
.img{
  margin-top: px2rem(50);
  text-align: center;
}
.img img{
  width: px2rem(100);
  height: px2rem(100);
}
.img h4{
  margin-top: px2rem(60);
  font-size: px2rem(30);
}
.img p{
  font-size: px2rem(26);
  color: #999999;
  margin-top: px2rem(20);
}
.van-button {
  display: flex;
  justify-content: center;
  width: px2rem(540);
  height: px2rem(80);
  line-height: px2rem(80);
  color: #fff;
  font-weight: bold;
  font-size: px2rem(28);
  background-color: #336289;
  margin: px2rem(180) auto 0;
}
</style>