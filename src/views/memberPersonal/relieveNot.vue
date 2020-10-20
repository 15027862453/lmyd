<template>
  <div class="relieveNot">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">解除绑定</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <div class="ipt">
        <p>身份证号</p>
        <input type="text" maxlength="18" placeholder="请输入身份证后" />
      </div>
      <div class="ipt">
        <p>姓名</p>
        <input type="text" maxlength="10" placeholder="请输入您的姓名" />
      </div>
      <van-button round type="info" @click="show = true">完成</van-button>
    </div>
    <Popup :show="show">
      <div class="conter" slot="conter">
        <img src="../../assets/images/cg.png" alt="" />
      </div>
      <div class="bottom" slot="bottom">解除成功</div>
      <div class="btn" slot="btn">
        <van-button round type="info" class="pay" @click="back"
          >确定</van-button
        >
      </div>
    </Popup>
  </div>
</template>

<script>
import topHead from "../../components/topHead.vue";
import Popup from "../../components/Popup.vue";
export default {
  name: "relieveNot",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    back() {
      this.$router.go(-2);
    }
  },
  components: {
    topHead,
    Popup,
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
  margin-top: px2rem(40);
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

.conter {
  display: flex;
  justify-content: center;
}
.conter img {
  width: px2rem(147);
  height: px2rem(118);
}
.bottom {
  font-size: px2rem(30);
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-top: px2rem(50);
}
.pay {
  width: px2rem(210);
  height: px2rem(70);
  line-height: px2rem(70);
}
</style>