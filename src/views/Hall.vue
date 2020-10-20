<template>
  <div class="Hall">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">营业厅</h3></topHead>
    <!-- 内容区 -->
    <div class="main">
      <!-- 左侧tab -->
      <van-sidebar v-model="activeKey" class="left_tab">
        <van-sidebar-item title="号码充值" />
        <van-sidebar-item title="业务查询" />
        <van-sidebar-item title="业务办理" />
        <van-sidebar-item title="账号绑定" />
      </van-sidebar>
      <!-- 右侧内容 -->
      <div class="content">
        <div style="height: 100vh" v-if="activeKey == 0">
          <tab1 :cost="cost" :dayFlow="dayFlow" :monthFlow="monthFlow"></tab1>
        </div>
        <div class="tab2" style="height: 100vh" v-if="activeKey == 1">
          <div class="personal">
            <div class="personal_top">
              <div class="face">
                <img src="../assets/images/face.png" alt="" />
              </div>
              <div class="mation">
                <h3>王XX</h3>
                <p>12345678901</p>
              </div>
            </div>
            <div class="personal_bottom">
              <div class="charg">
                <p>话费余额</p>
                <span>48.68元</span>
              </div>
              <div class="flow">
                <p>剩余流量</p>
                <span>3.98G</span>
              </div>
            </div>
          </div>
          <ul class="query_list">
            <li @click="goBalance">
              <div class="query_img">
                <img src="../assets/images/cx1.png" alt="" />
              </div>
              <p>查余额</p>
            </li>
            <li @click="goBill">
              <div class="query_img">
                <img src="../assets/images/cx2.png" alt="" />
              </div>
              <p>查账单</p>
            </li>
            <li @click="goSetMeal">
              <div class="query_img">
                <img src="../assets/images/cx3.png" alt="" />
              </div>
              <p>查套餐余量</p>
            </li>
            <li @click="goRecord">
              <div class="query_img">
                <img src="../assets/images/cx4.png" alt="" />
              </div>
              <p>查充值记录</p>
            </li>
            <li @click="goOrderbusine">
              <div class="query_img">
                <img src="../assets/images/cx5.png" alt="" />
              </div>
              <p>查已订购业务</p>
            </li>
            <li @click="goCard">
              <div class="query_img">
                <img src="../assets/images/cx6.png" alt="" />
              </div>
              <p>查名下号卡</p>
            </li>
          </ul>
        </div>
        <div class="tab3" style="height: 100vh" v-if="activeKey == 2">
          <ul class="handle_list">
            <li @click="goRemind">
              <img src="../assets/images/ywbl1.png" alt="" />
              <p>漏电提醒</p>
            </li>
            <li @click="goCaller">
              <img src="../assets/images/ywbl2.png" alt="" />
              <p>来电显示</p>
            </li>
            <li @click="goInvoice">
              <img src="../assets/images/ywbl3.png" alt="" />
              <p>开发票</p>
            </li>
            <li @click="goRealName">
              <img src="../assets/images/ywbl4.png" alt="" />
              <p>实名认证</p>
            </li>
            <li @click="goCancel">
              <img src="../assets/images/ywbl5.png" alt="" />
              <p>销户申请</p>
            </li>
          </ul>
        </div>
        <div class="tab4" style="height: 100vh" v-if="activeKey == 3">
          <!-- 绑定。 -->
          <div class="binding" v-if="bind == false">
            <div class="ipt">
              <p>手机号</p>
              <input
                type="text"
                maxlength="11"
                placeholder="请填写您的手机号"
              />
            </div>
            <div class="ipt">
              <p>验证码</p>
              <input type="text" maxlength="8" placeholder="请输入验证码" />
              <button class="tab4_btn" :disabled="isNone" @click="codeBtn">
                {{ tab4Btn }}
              </button>
            </div>
            <div class="unableCode" @click="goNoCode">无法收到验证码</div>
            <van-button round type="info" @click="isShow = true"
              >绑定</van-button
            >
            <!-- tab4 弹窗 -->
            <van-overlay :show="isShow">
              <div class="wrapper">
                <div class="block" @click.stop>
                  <img src="../assets/images/cg.png" alt="" />
                  <p>绑定成功</p>
                  <van-button
                    round
                    type="info"
                    class="back"
                    @click="isShow = false;bind = true"
                    >确定</van-button
                  >
                </div>
              </div>
            </van-overlay>
          </div>
          <!-- 解绑 -->
          <div class="relieve" v-if="bind == true">
            <ul class="bind_conter">
              <li>
                <p>绑定号码</p>
                <em>150****5678</em>
              </li>
              <li>
                <p>号码状态</p>
                <em>正常服务</em>
              </li>
              <li>
                <p>入网时间</p>
                <em>2020.08.03</em>
              </li>
              <li>
                <p>当前套餐</p>
                <em>神州行畅享套餐</em>
              </li>
              <li>
                <p>网龄</p>
                <em>9年</em>
              </li>
              <li>
                <p>当前积分</p>
                <em>169分</em>
              </li>
              <li>
                <span></span>
                <p>绑定状态</p>
                <em>已绑定</em>
              </li>
              <li>
                <span></span>
                <p>号码归属地</p>
                <em>北京</em>
              </li>
            </ul>
            <van-button round type="info" @click="isBind = true">解除绑定</van-button>
            <van-dialog
              class="dialog"
              confirm-button-text="确认"
              cancel-button-text="取消"
              title="提示"
              show-cancel-button
              v-model="isBind"
              @confirm="dialog"
              v-cloak>您确定要取消绑定吗？
            </van-dialog>
            <!-- tab4 弹窗 -->
            <van-overlay :show="isShow">
              <div class="wrapper">
                <div class="block" @click.stop>
                  <img src="../assets/images/cg.png" alt="" />
                  <p>解除绑定成功</p>
                  <van-button
                    round
                    type="info"
                    class="back"
                    @click="isShow = false;bind = false"
                    >确定</van-button
                  >
                </div>
              </div>
            </van-overlay>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topHead from "../components/topHead.vue";
import tab1 from "../components/tab1.vue";
export default {
  name: "Hall",
  data() {
    return {
      isBind: false,
      // 是否绑定
      bind: true,
      isShow: false,
      isNone: false,
      tab4Btn: "获取验证码",
      activeKey: 0,
      cost: ["10元", "20元", "30元", "50元", "100元", "500元", "1000元"],
      dayFlow: [
        {
          flow: "1MB日包",
          money: "2元",
        },
        {
          flow: "10MB日包",
          money: "15元",
        },
        {
          flow: "100MB日包",
          money: "30元",
        },
      ],
      monthFlow: [
        {
          flow: "1G月包",
          money: "20元",
        },
        {
          flow: "10G月包",
          money: "50元",
        },
        {
          flow: "100G月包",
          money: "100元",
        },
        {
          flow: "1G月包",
          money: "10元",
        },
        {
          flow: "10G月包",
          money: "20元",
        },
        {
          flow: "100G月包",
          money: "300元",
        },
      ],
    };
  },
  components: {
    topHead,
    tab1,
  },
  methods: {
    dialog() {
      this.isBind = false;
      this.isShow = true;
    },
    goCard() {
      //指定跳转的路由的名字下 this.$router.replace({name:'menu'})
      this.$router.push({ path: "/queryCard" });
    },
    goRecord() {
      this.$router.push({ path: "/record" });
    },
    goOrderbusine() {
      this.$router.push({ path: "/orderbusine" });
    },
    goBalance() {
      this.$router.push({ path: "/balance" });
    },
    goBill() {
      this.$router.push({ path: "/bill" });
    },
    goBill() {
      this.$router.push({ path: "/bill" });
    },
    goNoCode() {
      this.$router.push({ path: "/noCode" });
    },
    goSetMeal() {
      this.$router.push({ path: "/setMeal" });
    },
    goRealName() {
      this.$router.push({ path: "/realName" });
    },
    goCaller() {
      this.$router.push({ path: "/caller" });
    },
    goRemind() {
      this.$router.push({ path: "/remind" });
    },
    goCancel() {
      this.$router.push({ path: "/cancel" });
    },
    goInvoice() {
      this.$router.push({ path: "/state" });
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
  display: flex;
}
// 左侧菜单
.left_tab {
  width: px2rem(150);
  height: 100vh;
  background-color: #edeef6;
}
.left_tab .van-sidebar-item {
  width: px2rem(151);
  height: px2rem(100);
  line-height: px2rem(100);
  font-size: px2rem(26);
  background-color: #edeef6;
  padding: 0 0 0 px2rem(15);
}
.left_tab .van-sidebar-item--select {
  background-color: #fff;
  color: #336289;
}
.van-sidebar-item--select::before {
  position: absolute;
  top: 50%;
  left: 0;
  width: px2rem(6);
  height: px2rem(36);
  background-color: #336189;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  content: "";
}
.content {
  width: px2rem(600);
}
//tab2
.tab2 {
  padding: 0 px2rem(30);
}
.personal {
  width: px2rem(540);
  height: px2rem(270);
  border-radius: px2rem(20);
  background-color: #336189;
  margin-top: px2rem(37);
  box-shadow: 0 0 px2rem(30) rgba(0, 0, 0, 0.3);
  margin-bottom: px2rem(70);
}
.personal_top {
  display: flex;
  height: px2rem(137);
  border-bottom: 1px solid #48789f;
  overflow: hidden;
}
.face {
  margin: px2rem(23) px2rem(24) 0 px2rem(20);
}
.face,
.face img {
  width: px2rem(90);
  height: px2rem(90);
  border-radius: 50%;
}
.mation {
  margin-top: px2rem(30);
}
.mation h3 {
  font-size: px2rem(30);
  color: #fff;
  font-weight: bold;
  margin-bottom: px2rem(10);
}
.mation p {
  font-size: px2rem(26);
  color: #fff;
}
.personal_bottom {
  display: flex;
  color: #fff;
}
.charg,
.flow {
  width: 50%;
  height: px2rem(78);
  text-align: center;
  margin-top: px2rem(26);
  padding-top: px2rem(5);
}
.charg {
  border-right: 2px solid #47779f;
}
.charg p,
.flow p {
  font-size: px2rem(24);
  margin-bottom: px2rem(10);
}
.charg span,
.flow span {
  display: block;
  font-size: px2rem(28);
  font-weight: 600;
}
.query_list {
  display: flex;
  flex-wrap: wrap;
}
.query_list li {
  flex: 0 0 33%;
  text-align: center;
  margin-bottom: px2rem(50);
}
.query_list .query_img {
  width: px2rem(48);
  height: px2rem(48);
  margin: 0 auto px2rem(20);
}
.query_list .query_img img {
  width: 100%;
  height: 100%;
}
.query_list p {
  font-size: px2rem(24);
  color: #333;
}
// 业务办理
.handle_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
  margin-top: px2rem(40);
}
.handle_list li {
  flex: 0 0 50%;
  margin-bottom: px2rem(60);
  text-align: center;
}
.handle_list li img {
  width: px2rem(48);
  height: px2rem(48);
}
.handle_list li p {
  font-size: px2rem(26);
  color: #333;
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
  margin-bottom: px2rem(30);
  font-size: px2rem(26);
  padding: 0 px2rem(30);
  box-sizing: border-box;
}
.ipt:nth-child(1) input {
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
  width: 100%;
  height: px2rem(80);
  line-height: px2rem(80);
  color: #fff;
  font-weight: bold;
  font-size: px2rem(28);
  background-color: #336289;
  margin: px2rem(90) auto 0;
  box-shadow: 0 0 px2rem(10) rgba($color: #000000, $alpha: 0.2);
}
// 弹窗
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.block {
  width: px2rem(600);
  padding: px2rem(50) 0 px2rem(40);
  box-sizing: border-box;
  background-color: #fff;
  border-radius: px2rem(10);
  text-align: center;
}
.block img {
  width: px2rem(147);
  height: px2rem(118);
  margin-bottom: px2rem(40);
}
.block p {
  font-size: px2rem(30);
  color: #333;
  margin-bottom: px2rem(60);
}
.wrapper .van-button {
  width: px2rem(210);
  height: px2rem(70);
  line-height: px2rem(70);
  text-align: center;
  font-size: px2rem(30);
  font-weight: bold;
  border: none;
  margin: px2rem(0);
}
.back {
  color: #ffffff;
  background-color: #336289;
}

//已绑定
.bind_conter {
  width: 100%;
  background-color: #fff;
  border-radius: px2rem(20);
  margin-top: px2rem(70);
  padding: px2rem(20) px2rem(40);
  background-color: #f6f6f6;
  box-sizing: border-box;
}
.bind_conter li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: px2rem(66);
}
.bind_conter li p {
  margin-right: auto;
  font-size: px2rem(28);
  color: #333;
}
.bind_conter li em {
  font-size: px2rem(26);
  color: #999999;
}
.bind_conter li:nth-child(4) em {
  color: #4182ef;
}
//对话框
.dialog{
  width: px2rem(500);
  height: px2rem(300);
  text-align: center;
  font-size: px2rem(30);
  padding-top: px2rem(20);
}

</style>