<template>
  <div class="integral">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">我的积分</h3></topHead>
    <!-- 我的积分轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" v-if="foot == 0">
      <van-swipe-item
        ><img src="../../assets/images/lbt.png" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../../assets/images/lbt.png" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../../assets/images/lbt.png" alt=""
      /></van-swipe-item>
      <van-swipe-item
        ><img src="../../assets/images/lbt.png" alt=""
      /></van-swipe-item>
    </van-swipe>
    
    <!-- 内容 -->
    <div class="main">
      <!-- 积分兑换 -->
      <div class="exchange" v-if="foot == 0">
        <Popup :show="show" @showClick="closeClick(show)">
          <div slot="conter" class="conter">
            <p>您确定使用{{ list[active].jf }}积分</p>
            <p>兑换{{ list[active].hf }}吗？</p>
          </div>
          <div slot="bottom" class="bottom">（当前可用积分：5000分）</div>
          <div slot="btn" class="btn">
            <p class="back" @click="show = false">取消</p>
            <p class="pay" @click="toExchange">确定</p>
          </div>
        </Popup>
        <div class="title">积分换话费</div>
        <ul class="integral_list">
          <li
            v-for="(v, index) in list"
            :key="index"
            :class="{ active: index == active }"
            @click="
              active = index;
              show = true;
            "
          >
            <h5>{{ v.hf }}</h5>
            <p>({{ v.jf }})</p>
          </li>
        </ul>
      </div>
      <!-- 我的积分 -->
      <div class="myIntegral" v-if="foot == 1">
        <div class="head">
          <div class="head_top">
            <div class="face">
              <img src="../../assets/images/face.png" alt="" />
            </div>
            <div class="info">
              <div class="name">张三丰</div>
              <div class="phone">130****5678</div>
            </div>
            <van-button round type="info" :disabled="isDisabled" @click="signIn"
              ><img src="../../assets/images/qd.png" alt="" />{{
                sign
              }}</van-button
            >
          </div>
          <div class="head_bottom">
            <div class="add" @click="goDetails">
              <p>累计积分</p>
              <h4 style="color: #ffcc00">
                {{ total }}分<em :class="{ em: isDisabled == true }">+1</em>
              </h4>
              <span>到期时间：2021.02.02</span>
            </div>
            <div class="usable">
              <p>当前可用积分</p>
              <h4>{{ usable }}分</h4>
            </div>
          </div>
        </div>
        <div class="order">
          <div class="order_title">
            <h3>积分兑换话费</h3>
            <p @click="goMyOrder">查看订单</p>
            <img src="../../assets/images/yjt.png" alt="" />
          </div>
          <ul class="order_list">
            <li>
              <div class="list_left">
                <h4>3000积分兑换30元话费</h4>
                <p>兑换日期：2020.08.04 拷贝</p>
              </div>
              <div class="list_right">
                <img src="../../assets/images/jb.png" alt="" />
                <p>30元</p>
              </div>
            </li>
            <li>
              <div class="list_left">
                <h4>3000积分兑换30元话费</h4>
                <p>兑换日期：2020.08.04 拷贝</p>
              </div>
              <div class="list_right">
                <img src="../../assets/images/jb.png" alt="" />
                <p>30元</p>
              </div>
            </li>
            <li>
              <div class="list_left">
                <h4>3000积分兑换30元话费</h4>
                <p>兑换日期：2020.08.04 拷贝</p>
              </div>
              <div class="list_right">
                <img src="../../assets/images/jb.png" alt="" />
                <p>30元</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="foot">
      <p :class="{ foot_active: foot == 0 }" @click="foot = 0">积分兑换</p>
      <p :class="{ foot_active: foot == 1 }" @click="foot = 1">我的积分</p>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/topHead.vue";
import Popup from "../../components/Popup.vue";
export default {
  name: "integral",
  data() {
    return {
      isDisabled: false,
      total: 169,
      usable: 69,
      sign: "签到",
      show: false,
      foot: 0,
      active: 0,
      list: [
        {
          hf: "15元话费",
          jf: "1500积分",
        },
        {
          hf: "20元话费",
          jf: "2000积分",
        },
        {
          hf: "25元话费",
          jf: "2500积分",
        },
        {
          hf: "35元话费",
          jf: "3500积分",
        },
        {
          hf: "40元话费",
          jf: "4000积分",
        },
        {
          hf: "55元话费",
          jf: "5000积分",
        },
      ],
    };
  },
  components: {
    topHead,
    Popup,
  },
  methods: {
    signIn() {
      var myDate = new Date();
      var time = myDate.getHours(); //获取当前小时数(0-23)
      // 积分++
      this.total++;
      //按钮禁止点击
      this.isDisabled = true;
      //已签到
      this.sign = "已签到";
      if ((time = 0)) {
        this.isDisabled = false;
        this.sign = "签到";
      }
    },
    goMyOrder() {
      this.$router.push({ path: "myOrder" });
    },
    goDetails() {
      this.$router.push({ path: "integralDetails" });
    },
    closeClick(show) {
      this.show = !show;
    },
    toExchange() {
      //成功
      // this.$router.push({  path: 'exchangeSuccess' })
      // 失败
      this.$router.push({ path: "exchangeFail" });
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 px2rem(30);
}
// 轮播图
.my-swipe {
  position: relative;
  left: 0;
  width: 100vw;
  height: px2rem(350);
  border-radius: px2rem(20);
  margin-top: px2rem(20);
  margin-bottom: px2rem(90);
  text-align: center;
}
.van-swipe-item img {
  width: px2rem(690);
  height: px2rem(290);
  color: #fff;
  border-radius: px2rem(20);
  box-shadow: 0 0 px2rem(20) rgba($color: #000000, $alpha: .5);
  margin-top: px2rem(20);
}
.title {
  font-weight: bold;
  font-size: px2rem(30);
  color: #333333;
}
// 弹窗
.conter {
  text-align: center;
  color: #333333;
  font-size: px2rem(30);
  font-weight: bold;
  line-height: px2rem(58);
  border-bottom: 1px solid #dfe0e7;
}
.bottom {
  line-height: px2rem(80);
  font-size: px2rem(24);
  color: #909198;
  text-align: center;
}
.btn {
  display: flex;
  justify-content: space-around;
}
.btn p {
  width: px2rem(210);
  height: px2rem(70);
  line-height: px2rem(70);
  font-size: px2rem(28);
  font-weight: bold;
  color: #336289;
  box-shadow: 0 0 px2rem(10) rgba($color: #000000, $alpha: 0.2);
  border-radius: px2rem(30);
  text-align: center;
  background-color: #bdcbd0;
}
.btn .pay {
  background-color: #336289;
  color: #fff;
}
//列表
.integral_list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: px2rem(15);
}
.integral_list li {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: px2rem(212);
  height: px2rem(84);
  font-size: px2rem(26);
  border: 2px solid #abacb1;
  border-radius: px2rem(9);
  margin-top: px2rem(20);
  color: #5d5f64;
  font-weight: 600;
}
.integral_list h5 {
  font-size: px2rem(26);
  color: #5d5f64;
}
.integral_list p {
  font-size: px2rem(24);
  color: #999999;
  margin-top: px2rem(-20);
}
.integral_list .active {
  background-color: #336289;
  box-shadow: 0 0 px2rem(20) rgba(0, 0, 0, 0.5);
}
.active h5,
.active p {
  color: #fff !important;
}

// 我的积分
.head {
  width: 100%;
  height: px2rem(362);
  background-color: #336289;
  border-radius: px2rem(18);
  margin-top: px2rem(18);
  box-shadow: 0 0 px2rem(20) rgba($color: #000000, $alpha: 0.3);
  margin-bottom: px2rem(30);
}
.head_top {
  display: flex;
  justify-content: space-between;
  padding: px2rem(40);
  box-sizing: border-box;
}
.face,
.face img {
  width: px2rem(100);
  height: px2rem(100);
  border-radius: 50%;
  margin-right: px2rem(25);
}
.info {
  margin-right: auto;
}
.info .name {
  font-size: px2rem(32);
  font-weight: bold;
  margin: px2rem(15) 0 px2rem(10);
  color: #fff;
}
.info .phone {
  font-size: px2rem(26);
  color: #fff;
}
.head_top .van-button {
  width: px2rem(160);
  height: px2rem(60);
  background-color: #417baa;
  color: #fff;
  font-size: px2rem(26);
  font-weight: bold;
  margin-top: px2rem(20);
}
.head_top .van-button img {
  width: px2rem(36);
  height: px2rem(36);
  margin-right: px2rem(15);
  margin-top: px2rem(-5);
}
.head_bottom {
  display: flex;
  border-top: 1px solid #92b7d4;
}
.head_bottom .add {
  border-right: 1px solid #92b7d4;
}
.head_bottom .add,
.head_bottom .usable {
  height: px2rem(100);
  margin-top: px2rem(40);
  width: 50%;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
}
.head_bottom p {
  font-size: px2rem(24);
}
.head_bottom h4 {
  position: relative;
  font-size: px2rem(34);
  line-height: px2rem(60);
  overflow: hidden;
}
.head_bottom .add em {
  position: absolute;
  right: px2rem(90);
  bottom: px2rem(-50);
  font-size: px2rem(26);
}
.head_bottom .add .em {
  animation: em1 2s linear;
}
@keyframes em1 {
  from {
    bottom: px2rem(-20);
  }
  to {
    bottom: px2rem(30);
    opacity: 0;
  }
}

.head_bottom span {
  display: block;
  font-size: px2rem(20);
}
.order .order_title {
  height: px2rem(92);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.order .order_title h3 {
  font-size: px2rem(30);
  color: #333;
}
.order .order_title p {
  font-size: px2rem(26);
  color: #999999;
  margin-left: auto;
}
.order .order_title img {
  height: px2rem(24);
}
.order .order_list li {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: px2rem(128);
  border-radius: px2rem(18);
  background-color: #f6f6f6;
  margin-bottom: px2rem(30);
  padding: px2rem(30) px2rem(40) 0;
  box-sizing: border-box;
}
.order .list_left h4 {
  font-size: px2rem(26);
  color: #333;
  margin-bottom: px2rem(20);
}
.order .list_left p {
  font-size: px2rem(22);
  color: #999999;
}
.order .list_right {
  display: flex;
  justify-content: space-around;
  margin-top: px2rem(18);
}
.order .list_right img {
  width: px2rem(42);
  height: px2rem(42);
  margin-top: px2rem(-5);
  margin-right: px2rem(8);
}
.order .list_right p {
  font-size: px2rem(30);
  color: #fca10f;
}
.foot {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: px2rem(98);
  line-height: px2rem(98);
  font-size: px2rem(28);
  color: #333;
  background-color: #d3d4d4;
}
.foot p {
  width: 50%;
  text-align: center;
}
.foot_active {
  color: #fff;
  background-color: #336289;
}
</style>