<template>
  <div class="auditCabcel">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">销户申请</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <img src="../../../assets/images/sb.png" alt="">
      <p>销户失败</p>
      <em>失败原因：身份证图片不清晰</em>
      <van-button round type="info" @click="goHall">返回</van-button>
    </div>
  </div>
</template>

<script>
import topHead from "../../../components/topHead.vue";
export default {
  name: "auditCabcel",
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
  font-size: px2rem(32);
  font-weight: 700;
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
em{
  color: #999999;
  font-size: px2rem(24);
}
</style>