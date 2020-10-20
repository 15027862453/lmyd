<template>
  <div class="fail">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">账号绑定</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <img src="../../assets/images/sb.png" alt="">
      <p>人像验证失败，图像不清晰</p>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/topHead.vue";
export default {
  name: "fail",
  components: {
    topHead,
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 px2rem(30);
  text-align: center;
}
img{
  width: px2rem(144);
  height: px2rem(114);
  margin: px2rem(50) 0 px2rem(40);
}
p{
  font-size: px2rem(32);
  font-weight: 700;
}
</style>