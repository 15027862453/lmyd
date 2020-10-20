<template>
  <div class="activityDetails">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">特惠活动</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <div class="title">活动名称活动名称活动名称</div>
      <div class="time">蓝猫移动 2020.08.20</div>
      <p>
        这里是活动简介这里是活动简介这里是活动简介这里是活动简介
        这里是活动简介这里是活动简介这里是活动简介
      </p>
      <p>
        这里是活动简介这里是活动简介这里是活动简介这里是活动简介
        这里是活动简介这里是活动简介这里是活动简介
      </p>
      <img src="../../assets/images/hdxq.png" alt="" />
      <p>
        这里是活动简介这里是活动简介这里是活动简介这里是活动简介
        这里是活动简介这里是活动简介这里是活动简介
      </p>
      <p>
        这里是活动简介这里是活动简介这里是活动简介这里是活动简介
        这里是活动简介这里是活动简介这里是活动简介
      </p>
      <p>
        这里是活动简介这里是活动简介这里是活动简介这里是活动简介
        这里是活动简介这里是活动简介这里是活动简介
      </p>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/topHead.vue";
export default {
  name: "activityDetails",
  components: {
    topHead,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 px2rem(30);
} 
.title {
  font-size: px2rem(30);
  font-weight: bold;
  color: #333;
  line-height: px2rem(70);
}
.time{
  font-size: px2rem(24);
  color: #999999;
  margin-bottom: px2rem(20);
}
p{
  font-size: px2rem(26);
  color: #333;
  line-height: px2rem(50);
}
img{
  width: 100%;
  height: px2rem(290);
  margin: px2rem(20) 0;
}
</style>