<template>
  <div class="record">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">充值记录</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <ul class="record_list">
        <li>
          <div class="record_left">
            <div class="record_time">2020年08月24日 16:23</div>
            <div class="record_type">
              15012361234<span>话费</span>
            </div>
          </div>
          <div class="record_right">
            <div class="record_state middle">充值中</div>
            <!-- <div class="record_state">充值成功</div>
            <div class="record_state fail">充值失败</div> -->
            <div class="record_money">￥100</div>
          </div>
        </li>
        <li>
          <div class="record_left">
            <div class="record_time">2020年08月24日 16:23</div>
            <div class="record_type">
              15012361234<span>话费</span>
            </div>
          </div>
          <div class="record_right">
            <!-- <div class="record_state middle">充值中</div> -->
            <!-- <div class="record_state">充值成功</div> -->
            <div class="record_state fail">充值失败</div>
            <div class="record_money">￥100</div>
          </div>
        </li>
        <li>
          <div class="record_left">
            <div class="record_time">2020年08月24日 16:23</div>
            <div class="record_type">
              15012361234<span>话费</span>
            </div>
          </div>
          <div class="record_right">
            <!-- <div class="record_state middle">充值中</div> -->
            <div class="record_state">充值成功</div>
            <!-- <div class="record_state fail">充值失败</div> -->
            <div class="record_money">￥100</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/topHead.vue";
export default {
  name: "record",
  components: {
    topHead,
  },
};
</script>

<style lang="scss" scoped>
.main{
  padding: px2rem(20) px2rem(30) 0;
}
.record_list li{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: px2rem(148);
  background-color: #F5F5F5;
  border-radius: px2rem(20);
  margin-bottom: px2rem(30);
  padding: px2rem(33) px2rem(35) 0;
  box-sizing: border-box;
}
.record_time{
  font-size: px2rem(24);
  color: #666666;
  margin-bottom: px2rem(30);
}
.record_type{
  font-size: px2rem(26);
  color: #333333;
}
.record_type span{
  margin-left: px2rem(20);
}
.record_right{
  text-align: right;
}
.record_state{
  font-size: px2rem(24);
  color: #D04040;
  font-weight: bold;
  margin-bottom: px2rem(30);
}
.record_money{
  font-size: px2rem(26);
  color: #FF7505;
}
.fail{
  color: #666666;
}
.middle{
  color: #336289;
}
</style>