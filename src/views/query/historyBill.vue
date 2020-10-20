<template>
  <div class="historyBill">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">历史账单</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <ul class="history_list">
        <li v-for="(itme,index) in history" :key="index" @click="historyClick"><p>{{itme.name}}</p><span>￥{{itme.value}}</span><img src="../../assets/images/yjt.png" alt=""></li>
      </ul>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/topHead.vue";
export default {
  name: "historyBill",
  data () {
    return {
      history:[
        {
          name:'2020年8月份账单',
          value:'100元'
        },
        {
          name:'2020年8月份账单',
          value:'100元'
        },
        {
          name:'2020年8月份账单',
          value:'100元'
        },
        {
          name:'2020年8月份账单',
          value:'100元'
        },
        {
          name:'2020年8月份账单',
          value:'100元'
        },
        {
          name:'2020年8月份账单',
          value:'100元'
        }
      ]
    }
  },
  methods:{
    historyClick(){
      this.$router.push({path:'/billDetails'})
    }
  },
  components: {
    topHead,
  },
};
</script>

<style lang="scss" scoped>
.main{
  padding: 0 px2rem(30);
}
.history_list li{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: px2rem(88);
  line-height: px2rem(88);
  border-bottom: 1px solid #DFE0E7;
}
.history_list li p{
  font-size: px2rem(26);
  color: #333;
}
.history_list li span{
  font-size: px2rem(24);
  color: #FF7505;
  margin-left: auto;
}
.history_list li img{
  height: px2rem(32);
}
</style>