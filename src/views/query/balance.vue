<template>
  <div class="balance">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">余额详情</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <div class="balance_top">
        <p>您好，截至目前为止，您的账户余额为:</p>
        <p>11元</p>
      </div>

      <Echarts :color="color" :title="title"
      :data="data" :dataVal="dataVal"></Echarts>

      <div class="explain">
        <div class="explain_title">说明</div>
        <p>
          1.
          实时话费：指截至目前，您本月所消费的金额，含月租费/通话费/流量费/短彩信费/功能费/长途漫游费等。
        </p>
        <p>2. 冻结金额：含待结转金额。</p>
        <p>3. 查询结果仅供参考，实际余额以出账账单为准。</p>
      </div>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/topHead.vue";
import Echarts from "../../components/echarts.vue";
export default {
  name: "balance",
  data () {
    return {
      color:["#336189", "#F9C75B", "#4FABFB", "#F1C935", "#FF7743"],
      title:['其中:'],
      data:['实时话费','账户可用余额','冻结金额'],
      dataVal:[
        {
          name:'实时话费',
          value:25
        },
        {
          name:'账户可用余额',
          value:50
        },
        {
          name:'冻结金额',
          value:20
        }
      ],
    }
  },
  components: {
    topHead,
    Echarts
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 px2rem(30);
}
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
  box-shadow: 0 0 px2rem(20) rgba($color: #000000, $alpha: .2);
  font-weight: bold;
}
.balance_top p:nth-child(2) {
  font-weight: bold;
  font-size: px2rem(36);
}

.explain {
  width: 100%;
  border-radius: px2rem(18);
  background-color: #e5eaed;
  padding: px2rem(28);
  box-sizing: border-box;
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