<template>
  <div class="openSuccess">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">来电显示</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <img src="../../../assets/images/cg.png" alt="">
      <p>开通成功</p>
      <van-button round type="info"  @click="openSuccess">确定</van-button>
    </div>
  </div>
</template>

<script>
import topHead from "../../../components/topHead.vue";
export default {
  name: "openSuccess",
  components: {
    topHead,
  },
  methods:{
    openSuccess(){
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
  margin: px2rem(145) auto 0;
  box-shadow: 0 0 px2rem(10) rgba($color: #000000, $alpha: 0.2);
}
</style>