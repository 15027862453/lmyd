<template>
  <div class="mealDetails">
    <!-- 导航栏 -->
    <topHead>
      <img
        slot="head"
        @click="backBefor()"
        src="../../assets/images/fhb.png"
        alt=""
      />
      <h3 slot="header">套餐详情</h3>
    </topHead>
    <!-- 背景 -->
    <div class="back"></div>
    <!-- 内容 -->
    <div class="main">
      <div class="main_top">
        <div class="face">
          <img v-if="login == 0" src="../../assets/images/face.png" alt="" />
        </div>
        <div class="info">
          <div class="name">
            <div class="title fl">张三丰</div>
            <div class="Star fl">
              <img src="../../assets/images/xjyh.png" alt="" />
              <p>二星用户</p>
            </div>
          </div>
          <div class="phone">130****5678</div>
        </div>
        <div class="change">更改服务密码</div>
      </div>
    </div>
    <div class="foot">
      <ul class="details_list">
        <li>
          <span></span>
          <p>当前套餐</p>
          <em>神州行畅享套餐</em>
        </li>
        <li>
          <span></span>
          <p>套餐月费</p>
          <em>69元</em>
        </li>
        <li>
          <span></span>
          <p>短信费用</p>
          <em>5元</em>
        </li>
        <li>
          <span></span>
          <p>国内通话</p>
          <em>160分钟</em>
        </li>
        <li>
          <span></span>
          <p>国内流量</p>
          <em>10G</em>
        </li>
        <li>
          <span></span>
          <p>接听免费范围</p>
          <em>这里是接听免费范围</em>
        </li>
        <li>
          <span></span>
          <p>超出套餐国内通话收费标准</p>
          <em>0.2元/分钟</em>
        </li>
        <li>
          <span></span>
          <p>超出套餐国内流量收费标准</p>
          <em>20元/G</em>
        </li>
      </ul>
      <div class="explain">
        <div class="explain_title">业务规则：</div>
        <p>月功能费9.8元包含6元来显、60分钟通话</p>
        <p>套餐内60分钟通话超出后每分钟语音0.12元</p>
        <p>来显必选，不可取消</p>
      </div>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/topHead.vue";
export default {
  name: "mealDetails",
  data() {
    return {
      login: 0,
    };
  },
  components: {
    topHead,
  },
  methods: {
    backBefor() {
      this.$router.back();
    },
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
.foot {
  position: absolute;
  left: 0;
  top: px2rem(250);
  z-index: 6;
  width: 100%;
}
.details_list {
  width: 100%;
  background-color: #fff;
  margin-top: px2rem(70);
  padding: 0 px2rem(40);
  box-sizing: border-box;
  padding-top: px2rem(20);
}
.details_list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: px2rem(66);
}
.details_list li span {
  width: px2rem(14);
  height: px2rem(14);
  border-radius: 50%;
  background-color: #336289;
  margin-right: px2rem(17);
}
.details_list li p {
  margin-right: auto;
  font-size: px2rem(26);
  color: #333;
}
.details_list li em {
  font-size: px2rem(26);
  color: #999999;
}
.details_list li:nth-child(1) em {
  color: #4182ef;
}
.explain {
  position: absolute;
  width: px2rem(690);
  margin-left: px2rem(30);
  border-radius: px2rem(18);
  background-color: #e5eaed;
  padding: px2rem(28);
  box-sizing: border-box;
  margin-top: px2rem(30);
}
.explain_title {
  font-weight: bold;
  margin-bottom: px2rem(15);
  font-size: px2rem(26);
  color: #336289;
}
.explain p {
  font-size: px2rem(22);
  color: #333;
  line-height: px2rem(44);
}
</style>