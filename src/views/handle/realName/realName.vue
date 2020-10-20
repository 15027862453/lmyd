<template>
  <div class="realName">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">实名认证</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <img src="../../../assets/images/smrz.png" alt="">
      <p>账号绑定成功</p>
      <van-button round type="info"  @click="goRealStart">开始</van-button>
    </div>
  </div>
</template>

<script>
import topHead from "../../../components/topHead.vue";
export default {
  name: "realName",
  components: {
    topHead,
  },
  methods:{
    goRealStart(){
      // 跳转第三方

      // 测试
      this.$router.push({ path: "/realFail" });
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 px2rem(30);
  text-align: center;
}
img{
  width: px2rem(160);
  height: px2rem(160);
  margin: px2rem(65) 0 px2rem(50);
  border-radius: 50%;
}
p{
  font-size: px2rem(32);
  font-weight: 700;
  color: #333;
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
  margin: px2rem(180) auto 0;
  box-shadow: 0 0 px2rem(10) rgba($color: #000000, $alpha: 0.2);
}
</style>