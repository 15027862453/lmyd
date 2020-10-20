<template>
  <div class="personal">
    <!-- 导航栏 -->
    <topHead>
      <img
        slot="head"
        @click="backBefor()"
        src="../../assets/images/fhb.png"
        alt=""
      />
      <h3 slot="header">个人信息</h3>
    </topHead>
    <!-- 背景 -->
    <div class="back"></div>
    <!-- 内容 -->
    <div class="main">
      <div class="main_top">
        <div class="face">
          <img v-if="login == 0" src="../../assets/images/face.png" alt="" />
          <img v-if="login != 0" src="../../assets/images/face1.png" alt="" />
        </div>
        <div class="info">
          <div class="name">
            <div class="title fl" v-if="login == 0">张三丰</div>
            <div class="Star fl" v-if="login == 0">
              <img src="../../assets/images/xjyh.png" alt="" />
              <p>二星用户</p>
            </div>
            <div class="login" v-if="login != 0" @click="login = 0">登录</div>
          </div>
          <div v-if="login == 0" class="phone">130****5678</div>
          <div v-if="login != 0" class="phone">登录后可查看更多信息</div>
        </div>
        <div class="change" @click="goPassword">更改服务密码</div>
      </div>
      <ul class="main_bottom">
        <li>
          <span></span>
          <p>号码状态</p>
          <em v-if="login == 0">正常服务</em>
        </li>
        <li>
          <span></span>
          <p>入网时间</p>
          <em v-if="login == 0">2010.01.01</em>
        </li>
        <li @click="goMealDetails">
          <span></span>
          <p>当前套餐</p>
          <em v-if="login == 0">神州行畅享套餐</em>
          <img src="../../assets/images/yjt.png" alt="" />
        </li>
        <li>
          <span></span>
          <p>网龄</p>
          <em v-if="login == 0">9年</em>
        </li>
        <li>
          <span></span>
          <p>当前积分</p>
          <em v-if="login == 0">169分</em>
        </li>
        <li>
          <span></span>
          <p>绑定状态</p>
          <em v-if="login == 0">已绑定</em>
          <em v-if="login != 0">未绑定</em>
        </li>
        <li>
          <span></span>
          <p>号码归属地</p>
          <em v-if="login == 0">北京</em>
        </li>
      </ul>
      <van-button round type="info" v-if="login == 0" to="relieve"
        >解除绑定</van-button
      >
    </div>
  </div>
</template>

<script>
import topHead from "../../components/topHead.vue";
export default {
  name: "personal",
  data() {
    return {
      login: 1,
    };
  },
  components: {
    topHead,
  },
  methods: {
    backBefor() {
      this.$router.back();
    },
    goMealDetails() {
      this.$router.push({ path: "mealDetails" });
    },
    goPassword(){
      this.$router.push({ path: "setPassword" });
    }
  },
};
</script>

<style lang="scss" scoped>
.main {
  position: absolute;
  left: 0;
  top: px2rem(88);
  padding: 0 px2rem(30);
  z-index: 5;
  width: 100%;
  box-sizing: border-box;
}
.topHead h3 {
  color: #fff;
}
.topHead {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5;
}
.topHead img {
  width: px2rem(32);
  height: px2rem(27);
}
.back {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: px2rem(400);
  background: url(../../assets/images/grzxbj.png) no-repeat center center;
  background-size: cover;
  z-index: 4;
}
.main_top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: px2rem(52);
  color: #fff;
}
.main_top .face,
.main_top .face img {
  width: px2rem(100);
  height: px2rem(100);
  border-radius: 50%;
}
.main_top .change {
  width: px2rem(190);
  height: px2rem(60);
  line-height: px2rem(60);
  background-color: #234f73;
  color: #6f8fa8;
  border-radius: px2rem(28);
  font-size: px2rem(24);
  text-align: center;
  margin-top: px2rem(20);
}
.info {
  margin-right: auto;
  margin-top: px2rem(15);
  margin-left: px2rem(20);
}
.info .name .title {
  font-size: px2rem(34);
  font-weight: bold;
  margin-bottom: px2rem(10);
  margin-right: px2rem(30);
}
.info .name .Star {
  position: relative;
  width: px2rem(124);
  height: px2rem(35);
}
.info .name .Star img {
  width: 100%;
  height: 100%;
}
.info .name .Star p {
  font-size: px2rem(20);
  height: px2rem(35);
  line-height: px2rem(35);
  position: absolute;
  right: px2rem(8);
  top: 0;
}
.info .phone {
  font-size: px2rem(28);
}
.main_bottom {
  width: 100%;
  height: px2rem(502);
  background-color: #fff;
  border-radius: px2rem(20);
  margin-top: px2rem(70);
  box-shadow: 0 0 px2rem(20) rgba($color: #000000, $alpha: 0.2);
  padding: 0 px2rem(40);
  box-sizing: border-box;
  padding-top: px2rem(20);
}
.main_bottom li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: px2rem(66);
}
.main_bottom li span {
  width: px2rem(14);
  height: px2rem(14);
  border-radius: 50%;
  background-color: #336289;
  margin-right: px2rem(17);
}
.main_bottom li p {
  margin-right: auto;
  font-size: px2rem(26);
  color: #333;
}
.main_bottom li em {
  font-size: px2rem(26);
  color: #999999;
}
.main_bottom li:nth-child(1) em {
  color: #ff7505;
}
.main_bottom li:nth-child(3) em {
  color: #4182ef;
}
.van-button {
  display: flex;
  justify-content: center;
  text-align: center;
  width: px2rem(550);
  height: px2rem(80);
  line-height: px2rem(80);
  color: #999999;
  font-weight: bold;
  font-size: px2rem(28);
  background-color: #d6d6d6;
  margin: px2rem(78) auto 0;
  box-shadow: 0 0 px2rem(10) rgba($color: #000000, $alpha: 0.2);
  border: none;
}
.login {
  width: px2rem(124);
  height: px2rem(42);
  line-height: px2rem(42);
  text-align: center;
  font-size: px2rem(26);
  background-color: #85b9de;
  border-radius: px2rem(20);
  margin-bottom: px2rem(8);
}
</style>