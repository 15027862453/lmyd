<template>
  <div class="success">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">营业厅</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <img src="../../assets/images/sb.png" alt="">
      <p>充值失败，当前账户可用余额不足 请充值话费</p>
      <van-button round type="info" @click="goHall">返回</van-button>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/topHead.vue";
export default {
  name: "success",
  components: {
    topHead,
  },
  methods:{
    goHall(){      
      self.location=document.referrer;
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
  width: px2rem(147);
  height: px2rem(118);
  margin: px2rem(50) 0 px2rem(40);
}
p{
  width: px2rem(500);
  line-height: px2rem(60);
  font-size: px2rem(32);
  font-weight: 700;
  margin:0 auto ; 
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