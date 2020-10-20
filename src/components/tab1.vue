<template>
  <van-tabs v-model="active" :color="'#5D5F63'">
    <van-tab title="交话费">
      <Popup :show="show" @showClick="closeClick(show)" @payCharges="payCharges">
        <div slot="conter" class="conter">
          <p class="conter_phone">
            <span>充值手机号:</span><em>{{ phone }}</em>
          </p>
          <p class="conter_money">
            <span>充值金额:</span>
            <em v-if="rechar_li != null">{{ cost[rechar_li] }}</em>
            <em v-if="rechar_li == null">{{ iptMoney + "元" }}</em>
          </p>
        </div>
      </Popup>
      <div class="input">
        <input
          class="ipt"
          type="text"
          id="ipt"
          maxlength="11"
          placeholder="请输入手机号"
          oninput="value=value.replace(/[^\d]/g,'')"
          v-model="phone"
        />
        <span>请仔细核对充值号码，充错号将无法退款</span>
        <p>账户可用余额：<em>60.15元</em></p>
      </div>
      <ul class="rechar_list">
        <li
          v-for="(vo, index) in cost"
          :class="{ rechar_active: rechar_li == index }"
          :key="vo"
          @click="rechar(index)"
        >
          {{ vo }}
        </li>
        <li>
          <input
            @blur="iptBlur()"
            @focus="iptFocus()"
            v-model="iptMoney"
            type="number"
            oninput="value=value.replace(/[^\d]/g,'')"
          />
          <span id="placeholder">{{ placeholder }}</span>
        </li>
      </ul>
      <van-button round type="info" @click="payment">立即充值</van-button>
    </van-tab>
    <van-tab title="充流量">
      <div class="input">
        <input
          class="ipt"
          type="text"
          id="ipt"
          maxlength="11"
          placeholder="请输入手机号"
          oninput="value=value.replace(/[^\d]/g,'')"
          v-model="phone"
        />
      </div>
      <van-tabs type="card">
        <van-tab title="流量日包">
          <Popup :show="show" @showClick="closeClick(show)" @payFlow="payFlow">
            <div slot="conter" class="conter">
              <p class="conter_phone">
                <span>充值手机号:</span><em>{{ phone }}</em>
              </p>
              <p class="conter_flow">
                <span>流量包名称:</span><em>{{ dayFlow[dayFlow_li].flow }}</em>
              </p>
              <p class="conter_money">
                <span>支付金额:</span><em>{{ dayFlow[dayFlow_li].money }}</em>
              </p>
            </div>
            <div class="bottom" slot="bottom">
              流量包费用将在您当前可用余额中直接扣除
            </div>
          </Popup>
          <ul class="rechar_list">
            <li
              v-for="(item, index) in dayFlow"
              :class="{ rechar_active: dayFlow_li == index }"
              :key="index"
              @click="dayFlowClick(index)"
            >
              <p>{{ item.flow }}</p>
              <p>{{ item.money }}</p>
            </li>
          </ul>
          <ul class="describe">
            <li>1.流量日包订购，立即生效，当日清零且不可退订；</li>
            <li>2.只有开通过基础流量包的用户才能开通流量日包；</li>
            <li>
              3.订购流量日包后，计费规则优先走流量日包的资费，超过后按照原有的流量资费计费。
            </li>
            <li>
              4.流量包充值费用将在您的当前可用余额中扣除，请确保余额充足。
            </li>
          </ul>
          <van-button round type="info" @click="chargeClick"
            >立即充值</van-button
          >
        </van-tab>
        <van-tab title="流量月包">
          <Popup :show="show" @showClick="closeClick(show)" @payFlow="payFlow">
            <div slot="conter" class="conter">
              <p class="conter_phone">
                <span>充值手机号:</span><em>{{ phone }}</em>
              </p>
              <p class="conter_flow">
                <span>流量包名称:</span
                ><em>{{ monthFlow[monthFlow_li].flow }}</em>
              </p>
              <p class="conter_money">
                <span>支付金额:</span
                ><em>{{ monthFlow[monthFlow_li].money }}</em>
              </p>
            </div>
            <div class="bottom" slot="bottom">
              流量包费用将在您当前可用余额中直接扣除
            </div>
          </Popup>
          <ul class="rechar_list">
            <li
              v-for="(item, index) in monthFlow"
              :class="{ rechar_active: monthFlow_li == index }"
              :key="index"
              @click="monthFlowClick(index)"
            >
              <p>{{ item.flow }}</p>
              <p>{{ item.money }}</p>
            </li>
          </ul>
          <ul class="describe">
            <li>
              1.流量包开通首月，不会扣整月费用，按天折算扣费，资源按天折算提供，计算公式：包月费用/30天（或31天）*剩余天数。
            </li>
            <li>
              2.订购成功以收到业务办理成功短信提醒为准，或拨打400-180-6789咨询。
            </li>
            <li>
              3.流量包充值费用将在您的当前可用余额中扣除，请确保余额充足。
            </li>
          </ul>
          <van-button round type="info" @click="chargeClick"
            >立即充值</van-button
          >
        </van-tab>
      </van-tabs>
    </van-tab>
  </van-tabs>
</template>

<script>
import Popup from "./Popup.vue";
import Vue from "vue";
import { Toast } from "vant";

Vue.use(Toast);
export default {
  name: "tab1",
  props: ["cost", "dayFlow", "monthFlow"],
  data() {
    return {
      iptMoney: "",
      activeKey: 0,
      active: 2,
      placeholder: "请输入10元及以上的金额",
      rechar_active: "rechar_active",
      rechar_li: null,
      dayFlow_li: 0,
      monthFlow_li: 0,
      show: false,
      phone: null,
    };
  },
  components: {
    Popup,
  },
  methods: {
    payFlow(){
      // 冲流量 有成功和失败  需要一个参数来判断
      this.$router.push({ path: "/flowPayFali" });
      // this.$router.push({ path: "/paySuccess" });
    },
    payCharges(){
      // 交话费 只有失败
      this.$router.push({ path: "/payFail" });
    },
    closeClick(show) {
      this.show = !show;
    },
    payment() {
      if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        Toast({
          message: "请输入正确的手机号",
          position: "bottom",
        });
      }else if(this.rechar_li == null && this.placeholder == "请输入10元及以上的金额"){
        Toast({
          message: "请选择您要充值的金额",
          position: "bottom",
        });
      }else {
        this.show = true;
      }
    },
    chargeClick() {
      if (!/^1[3456789]\d{9}$/.test(this.phone)) {
        Toast({
          message: "请输入正确的手机号",
          position: "bottom",
        });
      } else {
        this.show = true;
      }
    },
    rechar(index) {
      this.rechar_li = index;
    },
    dayFlowClick(index) {
      this.dayFlow_li = index;
    },
    monthFlowClick(index) {
      this.monthFlow_li = index;
    },
    iptBlur() {
      if (this.iptMoney == "") {
        this.placeholder = "请输入10元及以上的金额";
      } else {
        this.placeholder = "";
      }
    },
    iptFocus() {
      this.placeholder = "";
      this.rechar_li = null;
      console.log(this.rechar_li);
    },
  },
};
</script>

<style lang="scss" scoped>
.ipt {
  width: 100%;
  height: px2rem(100);
  line-height: px2rem(100);
  font-size: px2rem(50);
  font-weight: bold;
  color: #333333;
  border-bottom: 1px solid #dfe0e7;
  letter-spacing: px2rem(2);
}
.ipt::placeholder {
  color: #333;
  font-size: px2rem(30);
  font-weight: normal;
}
.input span {
  font-size: px2rem(24);
  color: #909198;
}
.input p {
  font-size: px2rem(24);
  color: #333;
  line-height: px2rem(62);
  margin-bottom: px2rem(32);
}
.input p em {
  font-size: px2rem(26);
  color: #ff7505;
}
.rechar_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.rechar_list li {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  width: px2rem(170);
  height: px2rem(88);
  font-size: px2rem(26);
  border: 2px solid #abacb1;
  border-radius: px2rem(9);
  margin-bottom: px2rem(15);
  color: #5d5f64;
  font-weight: 600;
  margin-right: px2rem(15);
  box-sizing: border-box;
}
.rechar_list li:nth-child(3n) {
  margin-right: 0;
}
.rechar_list li input {
  position: absolute;
  width: px2rem(170);
  height: px2rem(88);
  font-size: px2rem(26);
  text-align: center;
  z-index: 9;
}
.rechar_list li #placeholder {
  position: absolute;
  width: px2rem(160);
  font-size: px2rem(24);
  color: #999;
  z-index: 8;
}
.rechar_list p {
  flex: 0 0 100%;
  line-height: 0.8rem;
}
.rechar_list p:nth-child(1) {
  margin-top: px2rem(5);
}
.rechar_list p:nth-child(2) {
  color: #ff7505;
  margin-top: px2rem(-20);
}
.van-button {
  width: 100%;
  height: px2rem(80);
  line-height: px2rem(80);
  color: #fff;
  font-weight: bold;
  font-size: px2rem(28);
  background-color: #336289;
  margin-top: px2rem(65);
}
.van-tabs--card {
  margin-top: px2rem(30);
}
.describe {
  margin-top: px2rem(32);
}
.describe li {
  font-size: px2rem(22);
  color: #8f9197;
  line-height: px2rem(48);
}
.rechar_active {
  color: #fff !important;
  background-color: #336289;
  box-shadow: 0 0 px2rem(20) rgba(0, 0, 0, 0.5);
}
.rechar_list .rechar_active p {
  color: #fff;
}
.conter {
  margin-bottom: px2rem(30);
}
.conter p {
  display: flex;
  justify-content: space-between;
  padding: 0 px2rem(80);
  line-height: px2rem(56);
}
.conter p span {
  width: 50%;
  font-size: px2rem(26);
  color: #909198;
}
.conter p em {
  width: 50%;
  text-align: left;
  font-size: px2rem(28);
  color: #333;
  font-weight: 600;
}
.conter .conter_money em {
  color: #ff7505;
}
.conter .conter_flow em {
  color: #336289;
}
.bottom {
  width: 100%;
  height: px2rem(80);
  line-height: px2rem(80);
  font-size: px2rem(24);
  color: #909198;
  border-top: 1px solid #909198;
  text-align: center;
}
</style>