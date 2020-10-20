<template>
  <div class="relieve">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">更改服务密码</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <div class="ipt">
        <p>新密码</p>
        <input type="text" maxlength="11" placeholder="请输入新密码" />
      </div>
      <div class="ipt">
        <p>确认新密码</p>
        <input type="text" maxlength="20" placeholder="请再次输入新密码" />
      </div>
      <van-button round type="info" @click="setSuccess">确定</van-button>
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
    };
  },
  components: {
    topHead,
    Popup,
  },
  methods: {
    setSuccess(){
      this.$router.replace({ path: "setSuccess" });
    }
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
.ipt input {
  width: 100%;
  height: px2rem(100);
  text-align: right;
  box-sizing: border-box;
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
</style>