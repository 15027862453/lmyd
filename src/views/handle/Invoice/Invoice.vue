<template>
  <div class="Invoice">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">开发票</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <!-- 顶部 -->
      <div class="main_top">
        <h3>尊敬的XXX:</h3>
        <p>请填写您要申请的发票信息</p>
      </div>
      <ul class="invoice_list">
        <li>
          <div class="list_title">
            <p>手机号码</p>
            <span>仅受理实名制号码发票申请</span>
          </div>
          <div class="ipt">
            <input type="text" placeholder="请输入您的手机号码" />
          </div>
        </li>
        <li>
          <div class="list_title">
            <p>手机验证码</p>
          </div>
          <div class="ipt">
            <input
              style="width: 65%; padding: 0"
              type="text"
              maxlength="8"
              placeholder="请输入验证码"
            />
            <button class="tab4_btn" :disabled="isNone" @click="codeBtn">
              {{ code }}
            </button>
          </div>
        </li>
        <li>
          <div class="list_title">
            <p>发票月份</p>
            <span>非本月近6个月的消费</span>
          </div>
          <div class="ipt">
            <p @click="show = true">{{ startTime }}</p>
            <span>-</span>
            <p @click="show = true">{{ endTime }}</p>
          </div>
        </li>
        <li>
          <div class="list_title"><p>发票类型</p></div>
          <div class="ipt">
            <van-radio-group v-model="radio">
              <van-radio name="1">个人</van-radio>
              <van-radio name="2">单位</van-radio>
            </van-radio-group>
          </div>
        </li>
        <li>
          <div class="list_title"><p>发票抬头名称</p></div>
          <div class="ipt">
            <input type="text" placeholder="请输入发票抬头" />
          </div>
        </li>
        <li v-if="radio != 1">
          <div class="list_title">
            <p>纳税人识别号 <span>15-20位</span></p>
          </div>
          <div class="ipt">
            <input type="text" placeholder="请输入识别号" />
          </div>
        </li>
        <li>
          <div class="list_title"><p>申请人姓名</p></div>
          <div class="ipt"><input type="text" placeholder="请输入姓名" /></div>
        </li>
        <li>
          <div class="list_title"><p>申请人联系电话</p></div>
          <div class="ipt">
            <input type="number" placeholder="请输入联系电话" />
          </div>
        </li>
        <li>
          <div class="list_title"><p>申请人邮箱</p></div>
          <div class="ipt">
            <input type="text" placeholder="请输入邮箱地址" />
          </div>
        </li>
        <li v-if="radio != 1">
          <div class="list_title"><p>营业执照照片</p></div>
          <van-uploader v-model="fileList" :max-count="1">
            <img src="../../../assets/images/kpyyzz.png" alt="" />
          </van-uploader>
        </li>
        <li v-if="radio != 2">
          <div class="list_title"><p>身份证正面照片</p></div>
          <van-uploader v-model="fileList" :max-count="1">
            <img src="../../../assets/images/sfzzm.png" alt="" />
          </van-uploader>
        </li>
        <li v-if="radio != 2">
          <div class="list_title"><p>身份证反面照片</p></div>
          <van-uploader v-model="fileList" :max-count="1">
            <img src="../../../assets/images/sfzfm.png" alt="" />
          </van-uploader>
        </li>
        <li v-if="radio != 2">
          <div class="list_title"><p>本人半身人像照</p></div>
          <van-uploader v-model="fileList" :max-count="1">
            <img src="../../../assets/images/brbsz.png" alt="" />
          </van-uploader>
        </li>
      </ul>
    </div>
    <!-- 弹出框 -->
    <Popup :show="show" @showClick="closeClick(show)">
      <div slot="conter" class="conter">
        <p>请您仔细核对开票信息</p>
        <p>发票开具后不可撤销</p>
      </div>
      <div class="bottom" slot="bottom">
        <p>发票抬头：张三丰</p>
        <p v-if="radio == 2">纳税人识别号：123456789012345</p>
        <p>发票类型：电子发票</p>
        <p>发票内容：话费</p>
        <p>发票金额：28.00元</p>
      </div>
      <div class="btn" slot="btn">
        <van-button round type="info" class="back" @click="show = false">返回修改</van-button>
        <van-button round type="info" class="pay" @click="Invoice">确认开通</van-button>
      </div>
    </Popup>
    <!-- 底部按钮 -->
    <div class="bottom_btn">
      <van-button @click="show = true">申请开票</van-button>
    </div>
  </div>
</template>

<script>
import topHead from "../../../components/topHead.vue";
import Popup from "../../../components/Popup.vue";
export default {
  name: "Invoice",
  data() {
    return {
      radio: "1",
      fileList: [],
      code: "获取验证码",
      isNone: false,
      startTime: "2020年6月",
      endTime: "2020年8月",
      show: false,
    };
  },
  methods: {
    codeBtn() {
      var that = this;
      var time = 60;
      var index = null;
      index = setInterval(function () {
        that.code = time--;
        if (time == -1) {
          clearTimeout(index);
          time = 60;
          that.code = "获取验证码";
          that.isNone = false;
        } else {
          that.isNone = true;
        }
      }, 1000);
    },
    closeClick(show) {
      this.show = !show;
    },
    Invoice() {
      this.$router.push({ path: "/billing" });
    },
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
.main_top {
  display: flex;
  width: 100%;
  height: px2rem(90);
  line-height: px2rem(90);
  border-radius: px2rem(18);
  box-shadow: 0 0 px2rem(20) rgba($color: #000000, $alpha: 0.1);
  margin-top: px2rem(20);
  padding: 0 px2rem(25) 0;
  box-sizing: border-box;
}
.main_top h3 {
  font-size: px2rem(30);
  color: #336289;
}
.main_top p {
  font-size: px2rem(26);
  color: #999999;
  margin-left: px2rem(20);
}
.invoice_list {
  margin-top: px2rem(20);
}
.invoice_list li {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  line-height: px2rem(97);
  font-size: px2rem(26);
  border-bottom: 1px solid #dfe0e7;
}
.invoice_list li:nth-last-child(1) {
  height: auto;
  border: none;
}
.invoice_list li:nth-child(1) .list_title {
  height: px2rem(120);
  line-height: px2rem(120);
}
.invoice_list li:nth-child(1) .list_title p {
  position: absolute;
  left: 0;
  top: px2rem(-30);
}
.invoice_list li:nth-child(3) {
  margin-top: px2rem(20);
}
.invoice_list li:nth-child(3) .list_title {
  line-height: normal;
}
.invoice_list li:nth-child(3) .ipt {
  display: flex;
  justify-content: flex-end;
}
.invoice_list li:nth-child(3) .ipt span {
  margin: 0 px2rem(10);
}
.invoice_list li:nth-child(3) .ipt p {
  font-size: px2rem(26);
  color: #333;
}
.invoice_list .list_title {
  position: absolute;
  left: 0;
  top: 0;
  height: px2rem(97);
  line-height: px2rem(97);
}
.invoice_list .list_title span {
  font-size: px2rem(20);
  color: #999;
}
.invoice_list .ipt {
  width: 100%;
}
.invoice_list input {
  width: 100%;
  text-align: right;
  padding-left: px2rem(300);
  box-sizing: border-box;
}
.tab4_btn {
  position: absolute;
  right: 0;
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
// 单选框
.van-radio {
  width: 20%;
  display: flex;
  justify-content: flex-end;
}
.van-radio-group {
  display: flex;
  justify-content: flex-end;
  height: px2rem(97);
}

// 上传文件
.van-uploader {
  margin-top: px2rem(96);
}
.van-uploader,
.van-uploader img {
  width: px2rem(330);
  height: px2rem(200);
  border-radius: px2rem(8);
  overflow: hidden;
}
// 底部按钮
.bottom_btn .van-button {
  width: 100%;
  height: px2rem(98);
  line-height: px2rem(98);
  color: #fff;
  font-weight: bold;
  font-size: px2rem(28);
  background-color: #336289;
  margin: px2rem(100) auto 0;
  box-shadow: 0 px2rem(-10) px2rem(20) rgba($color: #000000, $alpha: 0.2);
}
// 弹窗
.conter {
  text-align: center;
  border-bottom: 1px solid #dfe0e7;
}
.conter p {
  font-size: px2rem(30);
  color: #336289;
  font-weight: bold;
  margin-bottom: px2rem(30);
}
.bottom {
  margin: px2rem(40) px2rem(80);
}
.bottom p {
  color: #999;
  font-size: px2rem(24);
  line-height: px2rem(42);
}
.btn {
  display: flex;
  justify-content: space-between;
  padding: 0 px2rem(60);
}
.van-button {
  width: px2rem(210);
  height: px2rem(70);
  line-height: px2rem(70);
  text-align: center;
  font-size: px2rem(30);
  font-weight: bold;
  border: none;
}
.back {
  color: #336289;
  background-color: #bdcbd0;
}
.pay {
  color: #fff;
  background-color: #336289;
}
</style>