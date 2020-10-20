<template>
  <div class="setMeal">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">套餐余量</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <!-- 头部 -->
      <div class="balance_top">
        <p>您好，您当前的【标准卡 A-9.8 元套餐】使用情况为</p>
      </div>
      <!-- 列表 -->
      <ul class="set_meal_list">
        <li>
          <div class="setMeal_title">上网流量</div>
          <div class="setMeal_contet">
            <div class="setMeal_contet_top">
              <h5><span></span>月租流量</h5>
              <p>总量:2G</p>
            </div>
            <div class="setMeal_contet_middle">
              <van-progress pivot-text="" color="#F07541" :percentage="1 / 2 * 100"  stroke-width="8"/>
            </div>
            <div class="setMeal_contet_bottom">
              <p>已用：1G</p>
              <p>剩余：1G</p>
            </div>
          </div>
          <div class="setMeal_contet">
            <div class="setMeal_contet_top">
              <h5><span></span>流量日包</h5>
              <p>总量:2G</p>
            </div>
            <div class="setMeal_contet_middle">
              <van-progress pivot-text="" color="#F07541" :percentage="1 / 2 * 100"  stroke-width="8"/>
            </div>
            <div class="setMeal_contet_bottom">
              <p>已用：1G</p>
              <p>剩余：1G</p>
            </div>
          </div>
          <div class="setMeal_contet">
            <div class="setMeal_contet_top">
              <h5><span></span>流量月包</h5>
              <p>总量:2G</p>
            </div>
            <div class="setMeal_contet_middle">
              <van-progress pivot-text="" color="#F07541" :percentage="1 / 2 * 100"  stroke-width="8"/>
            </div>
            <div class="setMeal_contet_bottom">
              <p>已用：1G</p>
              <p>剩余：1G</p>
            </div>
          </div>
        </li>
        <li>
          <div class="setMeal_title">语音通话</div>
          <div class="setMeal_contet">
            <div class="setMeal_contet_top">
              <h5><span></span>套餐内</h5>
              <p style="color:#336289">总量:60分钟</p>
            </div>
            <div class="setMeal_contet_middle">
              <van-progress pivot-text="" color="#336289" :percentage="60 / 60 * 100"  stroke-width="8"/>
            </div>
            <div class="setMeal_contet_bottom">
              <p>已用：60分钟</p>
              <p>剩余：0分钟</p>
            </div>
          </div>
          <div class="setMeal_contet">
            <div class="setMeal_contet_top">
              <h5><span></span>套餐外</h5>
            </div>
            <div class="setMeal_contet_bottom">
              <p>已用：10分钟</p>
            </div>
          </div>
        </li>
        <li>
          <div class="setMeal_title">短彩信</div>
          <div class="setMeal_contet">
            <div class="setMeal_contet_top">
              <h5><span></span>短信</h5>
            </div>
            <div class="setMeal_contet_bottom">
              <p>已用：2条</p>
            </div>
          </div>
          <div class="setMeal_contet">
            <div class="setMeal_contet_top">
              <h5><span></span>彩信</h5>
            </div>
            <div class="setMeal_contet_bottom">
              <p>已用：0条</p>
            </div>
          </div>
        </li>
      </ul>
      <!-- 底部 -->
      <div class="explain">
        <div class="explain_title">说明</div>
        <p>1. 月租/日包/月包所含流量月底无结转，自动清零。</p>
        <p>2. 除特别说明，以上均为国内业务，不含港澳台地区。</p>
        <p>3. 查询结果仅供参考,实际结果以出账账单为准。</p>
      </div>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/topHead.vue";
export default {
  name: "setMeal",
  components: {
    topHead,
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 px2rem(30);
}
// 头部
.balance_top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: px2rem(90);
  line-height: px2rem(90);
  background-color: #336189;
  border-radius: px2rem(18);
  color: #fff;
  font-size: px2rem(26);
  padding: 0 px2rem(20);
  box-sizing: border-box;
  margin-top: px2rem(20);
  font-weight: bold;
  box-shadow: 0 0 px2rem(20) rgba($color: #000000, $alpha: .2);
  margin-bottom: px2rem(36);
}
// 列表

.set_meal_list .setMeal_title{
  height: px2rem(78);
  line-height: px2rem(78);
  border-bottom: 1px solid #DFE0E7;
  font-size: px2rem(30);
  color: #333;
  font-weight: bold;
  margin-bottom: px2rem(30);
}
.set_meal_list .setMeal_contet{
  margin-bottom: px2rem(50);
}
.setMeal_contet_top{
  display: flex;
  justify-content: space-between;
  margin-bottom: px2rem(25);
}
.setMeal_contet_top h5{
  font-size: px2rem(26);
  color: #333;
}
.setMeal_contet_top h5 span{
  display:inline-block;
  width: px2rem(10);
  height: px2rem(10);
  background-color: #336289;
  vertical-align: top;
  margin-top:px2rem(8);
  margin-right: px2rem(16);
}
.setMeal_contet_top p{
  font-size: px2rem(26);
  color: #F07541;
}
.setMeal_contet_bottom{
  font-size:px2rem(22) ;
  color: #999999;
  display: flex;
  justify-content: space-between;
  margin-top: px2rem(16);
  padding-left: px2rem(25);
  box-sizing: border-box;
}
// 底部
.explain {
  width: 100%;
  border-radius: px2rem(18);
  background-color: #e5eaed;
  padding: px2rem(28);
  box-sizing: border-box;
  margin-bottom: px2rem(20);
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