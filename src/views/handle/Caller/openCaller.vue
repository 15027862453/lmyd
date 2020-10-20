<template>
  <div class="openCaller">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">来电显示</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <div class="title"><h3>来电显示</h3></div>
      <p>
        来电显示详情介绍来电显示详情介绍来电显示详情介绍来电显示详情介绍来电显示详情介绍来电显示详情介绍来电显示详情介绍来电显示详情介
      </p>
      <p>
        来电显示详情介绍来电显示详情介绍来电显示详情介绍来电显示详情介绍来电显示详情介绍来电显示详情介绍来电显示详情介绍来电显示详情介
      </p>
      <p>
        来电显示详情介绍来电显示详情介绍来电显示详情介绍来电显示详情介绍来电显示详情介绍来电显示详情介绍来电显示详情介绍来电显示详情介
      </p>
      <van-button round type="info" @click="show = true">立即开通</van-button>

      <Popup :show="show" @showClick="closeClick(show)">
        <div class="conter" slot="conter">
          <p class="up">您即将开通来电显示业务</p>
          <p class="low">每月资费￥5</p>
        </div>
        <div class="bottom" slot="bottom">
          业务资费将在您的当前可用余额中扣除
        </div>
        <div class="btn" slot="btn">
          <van-button round type="info" class="back" @click="show = false"
            >取消</van-button
          >
          <van-button round type="info" class="pay" @click="goPay"
            >确定</van-button
          >
        </div>
      </Popup>
    </div>
  </div>
</template>

<script>
import topHead from "../../../components/topHead.vue";
import Popup from "../../../components/Popup.vue";
export default {
  name: "openCaller",
  data() {
    return {
      show: false,
    };
  },
  components: {
    topHead,
    Popup,
  },
  methods: {
    closeClick(show) {
      this.show = !show;
    },
    goPay() {
      this.$router.push({ path: "openSuccess" });
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 px2rem(30);
}
.title {
  line-height: px2rem(75);
  font-size: px2rem(30);
  color: #336289;
}
.main p {
  font-size: px2rem(26);
  color: #333333;
  line-height: px2rem(48);
  margin-bottom: px2rem(15);
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
.conter {
  font-size: px2rem(30);
  font-weight: 700;
  text-align: center;
}
.conter .up {
  color: #333;
}
.conter .low {
  color: #ff7505;
}
.bottom {
  border-top: 1px solid #909198;
  font-size: px2rem(24);
  color: #909198;
  line-height: px2rem(80);
  text-align: center;
  margin-top: px2rem(40);
}
.btn {
  display: flex;
  justify-content: space-around;
}
.btn .van-button {
  width: px2rem(210);
  margin: 0;
}
.btn .back {
  background-color: #bdcbd0;
  color: #336289;
}
</style>