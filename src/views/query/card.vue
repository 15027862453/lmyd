<template>
  <div class="card">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">查名下卡号</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <div class="card_top">
        <div class="name">姓名：张三丰</div>
        <div class="id">身份证号：123456789123456789</div>
      </div>
      <ul class="card_list">
        <li>
          <div class="infor">
            <div class="infor_phone">12345678911</div>
            <div class="infor_meal">神州行畅聊套餐</div>
            <div class="infor_time">入网时间：20200101</div>
            <div class="infor_balance">账户余额：-50元</div>
          </div>
          <div class="state">
            <p>号码状态</p>
            <h3 class="often">正常服务</h3>
            <!-- <h3 class="owe">欠费</h3> -->
          </div>
        </li>
        <li>
          <div class="infor">
            <div class="infor_phone">12345678911</div>
            <div class="infor_meal">神州行畅聊套餐</div>
            <div class="infor_time">入网时间：20200101</div>
            <div class="infor_balance">账户余额：-50元</div>
          </div>
          <div class="state">
            <p>号码状态</p>
            <h3 class="often">正常服务</h3>
            <!-- <h3 class="owe">欠费</h3> -->
          </div>
        </li>
        <li>
          <div class="infor">
            <div class="infor_phone">12345678911</div>
            <div class="infor_meal">神州行畅聊套餐</div>
            <div class="infor_time">入网时间：20200101</div>
            <div class="infor_balance">账户余额：-50元</div>
          </div>
          <div class="state">
            <p>号码状态</p>
            <h3 class="often">正常服务</h3>
            <!-- <h3 class="owe">欠费</h3> -->
          </div>
        </li>
        <li>
          <div class="infor">
            <div class="infor_phone">12345678911</div>
            <div class="infor_meal">神州行畅聊套餐</div>
            <div class="infor_time">入网时间：20200101</div>
            <div class="infor_balance">账户余额：-50元</div>
          </div>
          <div class="state">
            <p>号码状态</p>
            <h3 class="often">正常服务</h3>
            <!-- <h3 class="owe">欠费</h3> -->
          </div>
        </li>
        <li>
          <div class="infor">
            <div class="infor_phone">12345678911</div>
            <div class="infor_meal">神州行畅聊套餐</div>
            <div class="infor_time">入网时间：20200101</div>
            <div class="infor_balance">账户余额：-50元</div>
          </div>
          <div class="state">
            <p>号码状态</p>
            <h3 class="often">正常服务</h3>
            <!-- <h3 class="owe">欠费</h3> -->
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/topHead.vue";
export default {
  name: "card",
  components: {
    topHead,
  },
};
</script>

<style lang="scss" scoped>
.main{
  padding: 0 px2rem(30);
}
.card{
  height: 100%;
}
.card_top{
  width: 100%;
  height: px2rem(150);
  background: url(../../assets/images/cardbj.png) no-repeat center center;
  background-size: cover;
  border-radius: px2rem(22);
  font-size: px2rem(28);
  color: #FFF;
  padding: px2rem(30) 0 0 px2rem(40);
  box-sizing: border-box;
  box-shadow: 0 0 px2rem(20) rgba(0,0,0,.3);
  margin-top: px2rem(18);
  margin-bottom: px2rem(56);
}
.card_top .name{
  margin-bottom: px2rem(30);
}
.card_list{
  border-top: 1px solid #F5F5F5;
  padding-top: px2rem(50);
  width: 100%;
  height: px2rem(232);
}
.card_list li{
  display: flex;
  width: 100%;
  height: px2rem(232);
  margin-bottom: px2rem(30);
}
.card_list .infor{
  width: px2rem(402);
  height: 100%;
  background-color:#F5F5F5;
  border-radius:px2rem(20) px2rem(10) px2rem(10) px2rem(20);
  padding: px2rem(30) 0 0 px2rem(40);
  box-sizing: border-box  ;
}
.card_list .infor_phone{
  font-weight: bold;
  color: #336289;
  margin-bottom: px2rem(10);
  font-size: px2rem(36);
}
.card_list .infor_meal,.card_list .infor_time,.card_list .infor_balance{
  font-size: px2rem(24);
  color: #5D5F64;
}
.card_list .infor_time{
  margin: px2rem(20) 0;
}
.card_list .state{
  width: px2rem(287);
  height: 100%;
  background-color:#F5F5F5;
  border-radius:px2rem(10) px2rem(20) px2rem(20) px2rem(10);
  text-align: center;
  padding-top: px2rem(75);
  box-sizing: border-box;
}
.card_list .state p{
  font-size: px2rem(22);
  color: #5D5F64;
  margin-bottom: px2rem(13);
}
.card_list .state h3{
  font-size: px2rem(32);
  font-weight: bold;
}
.card_list .state .often{
  color: #336289;
}
.card_list .state .owe{
  color: #D04040;
}
</style>