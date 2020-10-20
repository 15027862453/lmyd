<template>
  <div class="integralDetails">
    <!-- 导航栏 -->
    <topHead>
      <img
        slot="head"
        @click="backBefor()"
        src="../../assets/images/fhb.png"
        alt=""
      />
      <h3 slot="header">积分详情</h3>
    </topHead>
    <!-- 背景 -->
    <div class="back"></div>
    <!-- 内容 -->
    <div class="main">
      <div class="tab_title">
        <p v-for="(v, index) in title" :key="index" @click="active = index">
          {{ v }}
        </p>
        <span :class="active == 0 ? 'active1' : 'active2'"></span>
      </div>
      <div class="tab_content">
        <div class="content1" v-if="active == 0">
          <div class="content1_tab">
            <div
              class="tabs"
              v-for="(o, index) in tabs"
              :key="index"
              @click="current = index"
            >
              <p :class="{ current: current == index }">
                {{ o }}
              </p>
            </div>
          </div>
          <ul class="content1_conter" v-if="current == 0">
            <li>
              <div class="conter_title">
                <h3>兑换话费</h3>
                <p>2020.08.03</p>
              </div>
              <div class="conter_num add">+100</div>
            </li>
            <li>
              <div class="conter_title">
                <h3>兑换话费</h3>
                <p>2020.08.03</p>
              </div>
              <div class="conter_num  add">+100</div>
            </li>
            <li>
              <div class="conter_title">
                <h3>兑换话费</h3>
                <p>2020.08.03</p>
              </div>
              <div class="conter_num cut">-100</div>
            </li>
          </ul>
          <ul class="content1_conter" v-if="current == 1">
            <li>
              <div class="conter_title">
                <h3>兑换话费</h3>
                <p>2020.08.03</p>
              </div>
              <div class="conter_num add">+100</div>
            </li>
            <li>
              <div class="conter_title">
                <h3>兑换话费</h3>
                <p>2020.08.03</p>
              </div>
              <div class="conter_num add">+100</div>
            </li>
            <li>
              <div class="conter_title">
                <h3>兑换话费</h3>
                <p>2020.08.03</p>
              </div>
              <div class="conter_num add">+100</div>
            </li>
          </ul>
          <ul class="content1_conter" v-if="current == 2">
            <li>
              <div class="conter_title">
                <h3>兑换话费</h3>
                <p>2020.08.03</p>
              </div>
              <div class="conter_num cut">-100</div>
            </li>
            <li>
              <div class="conter_title">
                <h3>兑换话费</h3>
                <p>2020.08.03</p>
              </div>
              <div class="conter_num cut">-100</div>
            </li>
            <li>
              <div class="conter_title">
                <h3>兑换话费</h3>
                <p>2020.08.03</p>
              </div>
              <div class="conter_num cut">-100</div>
            </li>
          </ul>
        </div>
        <div class="content2" v-if="active == 1">
          <div class="conter_title">签到领积分</div>
          <p><span></span> 每日签到均可获赠 1 积分。</p>
          <p><span></span> 连续签到一周，可获赠 3 奖励积分。</p>
          <p><span></span> 连续签到一个月，可获赠 10 奖励积分。 每日</p>
          <p><span></span> 每日只能签到一次，多次重复签到不再获赠积分。</p>
          <p>
            <span></span>
            若您的手机号处于非正常服务状态，则当日只能签到但无法获赠积分。
          </p>
          <div class="conter_title">充值得积分</div>
          <p><span></span> 每充值 1 元，可得 1 积分。</p>
          <p><span></span> 成功充值后，对应获赠积分会自动发放至用户账户。</p>
          <p>
            <span></span>
            积分数值一般为整数，核算积分时，小数点后的数值自动舍去。
          </p>
          <p>
            <span></span>
            只有通过本公众号充值，才能获赠积分，通过其他渠道充值，不能获赠积分。
          </p>
          <div class="conter_title">积分说明</div>
          <p><span></span> 积分有效期：获取日至第二年年底，逾期自动清零。</p>
          <p><span></span> 积分在有效期内可累计。</p>
          <p><span></span> 积分不可兑现、退换或转增。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/topHead.vue";
export default {
  name: "integralDetails",
  data() {
    return {
      active: 0,
      current: 0,
      title: ["积分明细", "积分规则"],
      tabs: ["全部", "获得", "使用"],
    };
  },
  components: {
    topHead,
  },
  methods: {
    backBefor(){
      this.$router.back();
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
  height: px2rem(200);
  background: url(../../assets/images/jfbj.png) no-repeat center center;
  background-size: cover;
  z-index: 4;
}
.tab_title {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: px2rem(112);
  color: #fff;
  font-size: px2rem(26);
}
.tab_title p {
  width: 50%;
  height: px2rem(112);
  line-height: px2rem(112);
  text-align: center;
}
.tab_title span {
  position: absolute;
  bottom: px2rem(22);
  display: block;
  width: px2rem(61);
  height: px2rem(4);
  background-color: #fff;
  transition: 0.2s linear;
}
.tab_title .active1 {
  right: px2rem(485);
}
.tab_title .active2 {
  right: px2rem(140);
}
// 积分明细
.content1 .content1_tab {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: px2rem(100);
  box-shadow: 0 0 px2rem(20) rgba($color: #000000, $alpha: 0.3);
  border-radius: px2rem(18);
  margin-top: px2rem(30);
  color: #999999;
  font-size: px2rem(26);
}
.content1 .content1_tab .tabs {
  width: 33.33%;
  height: px2rem(100);
}
.content1 .content1_tab p {
  width: 100%;
  height: px2rem(32);
  text-align: center;
  border-right: 1px solid #999;
  margin-top: px2rem(34);
}
.content1_tab .tabs:nth-child(3) p {
  border: none;
}
.content1 .content1_tab .current {
  color: #336289;
  font-size: px2rem(30);
  font-weight: bold;
}
.content1_conter li{
  display: flex;
  justify-content: space-between;
  height: px2rem(60);
  margin-top: px2rem(38);
  overflow: hidden;
}
.content1_conter .conter_title h3{
  font-size: px2rem(28);
  color: #333;
  margin-bottom: px2rem(7);
}
.content1_conter .conter_title p{
  font-size: px2rem(24);
  color: #999;
}
.content1_conter .conter_num{
  font-size: px2rem(28);
  font-weight: bold;
}
// 加
.content1_conter .add{
  color: #FF7505;
}
// 减
.content1_conter .cut{
  color: #336289;
}
//积分规则
.content2 .conter_title {
  font-size: px2rem(30);
  color: #333;
  font-weight: bold;
  line-height: px2rem(96);
}
.content2 p {
  color: #333;
  font-size: px2rem(26);
  line-height: px2rem(50);
}
.content2 p span {
  display: inline-block;
  width: px2rem(14);
  height: px2rem(14);
  border-radius: 50%;
  background-color: #336289;
  margin-right: px2rem(18);
}
</style>