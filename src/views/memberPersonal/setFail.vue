<template>
  <div class="success">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">更改服务密码</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <img src="../../assets/images/sb.png" alt="" />
      <p>更改失败</p>
      <van-button round type="info" @click="goPersonal">返回</van-button>
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
  methods: {
    goPersonal() {
      this.$router.go(-2);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 px2rem(30);
  text-align: center;
}
img {
  width: px2rem(147);
  height: px2rem(118);
  margin: px2rem(50) 0 px2rem(40);
}
p {
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
</style>