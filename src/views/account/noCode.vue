<template>
  <div class="noCode">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">账号绑定</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <div class="ipt">
        <p>身份证号</p>
        <input type="text" maxlength="6" placeholder="请输入身份证后六位" />
      </div>
      <div class="ipt">
        <p>姓名</p>
        <input type="text" maxlength="10" placeholder="请输入您的姓名" />
      </div>
      <van-button round type="info" to="fail">下一步</van-button>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/topHead.vue";
export default {
  name: "noCode",
  components: {
    topHead,
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 px2rem(30);
}
.ipt {
  position: relative;
  width: 100%;
  height: px2rem(100);
  background-color: #f6f6f6;
  border-radius: px2rem(18);
  margin-top: px2rem(30);
  font-size: px2rem(26);
  padding: 0 px2rem(30);
  box-sizing: border-box;
}
.ipt input {
  width: 100%;
  height: px2rem(100);
  text-align: right;
}
.ipt p {
  position: absolute;
  left: px2rem(30);
  top: 0;
  height: px2rem(100);
  line-height: px2rem(100);
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