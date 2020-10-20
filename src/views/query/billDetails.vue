<template>
  <div class="balance">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">查账单</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <div class="balance_top">
        <p>您好，截止目前，您的账户余额为：</p>
        <p></p>
      </div>

      <Echarts :color="color" :title="title"
      :data="data" :dataVal="dataVal"></Echarts>

      <div class="explain">
        <p>a、除特别说明，以上均为国内业务，不含港澳台地区</p>
        <p>b、查询结果仅供参考，实际费用以出账账单为准</p>
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
      title:['总费用：19元'],
      data:['月租','语音通话','上网流量','短彩信','增值服务'],
      dataVal:[
        {
          name:'月租',
          value:25
        },
        {
          name:'语音通话',
          value:50
        },
        {
          name:'上网流量',
          value:20
        },
        {
          name:'短彩信',
          value:50
        },
        {
          name:'增值服务',
          value:50
        }
      ],
    }
  },
  methods:{
    
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
.main .balance_bottom{
  background-color: #C9976D;
}
.balance_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
.balance_top img{
  height: px2rem(38);
  vertical-align: middle;
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