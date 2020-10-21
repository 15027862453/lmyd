<template>
  <div class="activity">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">特惠活动</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <ul class="main_list">
        <li @click="goDetails">
          <div class="img">
            <img src="../../assets/images/thhd.png" alt="" />
          </div>
          <div class="title">活动名称活动名称活动名称</div>
          <p>
            这里是活动简介这里是活动简介这里是活动简介这里是活动简介
            这里是活动简介这里是活动简介这里是活动简介
          </p>
        </li>
        <li @click="goDetails">
          <div class="img">
            <img src="../../assets/images/thhd.png" alt="" />
          </div>
          <div class="title">活动名称活动名称活动名称</div>
          <p>
            这里是活动简介这里是活动简介这里是活动简介这里是活动简介
            这里是活动简介这里是活动简介这里是活动简介
          </p>
        </li>
        <li @click="goDetails">
          <div class="img">
            <img src="../../assets/images/thhd.png" alt="" />
          </div>
          <div class="title">活动名称活动名称活动名称</div>
          <p>
            这里是活动简介这里是活动简介这里是活动简介这里是活动简介
            这里是活动简介这里是活动简介这里是活动简介
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/topHead.vue";
export default {
  name: "activity",
  components: {
    topHead,
  },
  methods: {
     goDetails(){
      this.$router.push({ path: 'activityDetails' })
    }
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 px2rem(30);
}
.main_list {
  margin-top: px2rem(20);
}
.main_list li {
  margin-bottom: px2rem(30);
}
.main_list .img,
.main_list .img img {
  width: 100%;
  height: px2rem(290);
  border-radius: px2rem(20);
}
.main_list .title {
  font-size: px2rem(30);
  font-weight: bold;
  color: #333;
  margin: px2rem(25) 0 px2rem(10);
  white-space: nowrap;
  /*内容超宽后禁止换行显示*/
  overflow: hidden;
  /*超出部分隐藏*/
  text-overflow: ellipsis;
}
.main_list p {
  font-size: px2rem(22);
  color: #999999;
  line-height: px2rem(46);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
</style>