<template>
  <div class="relieve">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">更改服务密码</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <div class="ipt">
        <p>手机号</p>
        <input type="text" maxlength="11" placeholder="请填写您的手机号" />
      </div>
      <div class="ipt">
        <p>验证码</p>
        <input type="text" maxlength="8" placeholder="请输入验证码" />
        <button class="tab4_btn" :disabled="isNone" @click="codeBtn">
          {{ tab4Btn }}
        </button>
      </div>
      <div class="ipt">
        <p>原密码</p>
        <input type="text" maxlength="20" placeholder="请输入原密码" />
      </div>
      <div class="unableCode" @click="goNot">忘记原密码？</div>
      <van-button round type="info" @click="goNewPassword">下一步</van-button>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/topHead.vue";
import Popup from "../../components/Popup.vue";
export default {
  name: "relieve",
  data() {
    return {
      show: false,
      isShow: false,
      isNone: false,
      tab4Btn: "获取验证码",
    };
  },
  components: {
    topHead,
    Popup,
  },
  methods: {
    goNot() {
      this.$router.replace({ path: "notPassword" });
    },
    goNewPassword(){
      this.$router.replace({ path: "newPassword" });
    },
    codeBtn() {
      var that = this;
      var time = 60;
      var index = null;
      index = setInterval(function () {
        that.tab4Btn = time--;
        if (time == -1) {
          clearTimeout(index);
          time = 60;
          that.tab4Btn = "获取验证码";
          that.isNone = false;
        } else {
          that.isNone = true;
        }
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 px2rem(30);
}
//账号绑定
.tab4 {
  padding: 0 px2rem(30);
  box-sizing: border-box;
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
.ipt:nth-child(1) input,
.ipt:nth-child(3) input {
  text-align: right;
}
.ipt input {
  width: 100%;
  height: px2rem(100);
  box-sizing: border-box;
}
.ipt:nth-child(2) input {
  padding: 0 px2rem(120);
}
.ipt p {
  position: absolute;
  left: px2rem(30);
  top: 0;
  height: px2rem(100);
  line-height: px2rem(100);
}
.unableCode {
  font-size: px2rem(26);
  color: #999;
  text-align: right;
  margin-top: px2rem(30);
}
.tab4_btn {
  position: absolute;
  right: px2rem(30);
  top: px2rem(28);
  padding: 0 px2rem(20);
  height: px2rem(44);
  line-height: px2rem(44);
  color: #fff;
  font-size: px2rem(24);
  background-color: #336289;
  text-align: center;
  border-radius: px2rem(20);
}
.van-button {
  display: flex;
  justify-content: center;
  width: px2rem(540);
  height: px2rem(80);
  line-height: px2rem(80);
  color: #fff;
  font-weight: bold;
  font-size: px2rem(28);
  background-color: #336289;
  margin: px2rem(100) auto 0;
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