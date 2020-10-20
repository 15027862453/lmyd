<template>
  <div class="cooperate">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">举报投诉</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <textarea placeholder="请输入您要反馈的内容"  cols="30" rows="10"></textarea>
      <van-button round type="info" to="complainSuccess">投诉</van-button>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/topHead.vue";
export default {
  name: "cooperate",
  components: {
    topHead,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 px2rem(30);
  box-sizing: border-box;
}
textarea{
  width: 100%;
  height: px2rem(320);
  background-color: #F5F5F5;
  border-radius: px2rem(20);
  padding: px2rem(30) px2rem(40);
  box-sizing: border-box;
  font-size: px2rem(26);
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
  margin: px2rem(55) auto 0;
  box-shadow: 0 0 px2rem(10) rgba($color: #000000, $alpha: 0.2);
}
</style>