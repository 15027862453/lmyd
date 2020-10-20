<template>
  <div class="caller">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">来电显示</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <ul class="caller_list">
        <li @click="goOpen">
          <div class="caller_left">
            <h3>来电显示</h3>
            <p>资费：15元/月</p>
          </div>
          <div class="caller_right">
            <img src="../../../assets/images/yjt.png" alt="" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import topHead from "../../../components/topHead.vue";
export default {
  name: "caller",
  components: {
    topHead,
  },
  methods:{
    goOpen(){
      this.$router.push({ path:"openCaller" })
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 px2rem(30);
}
.caller_list {
  margin-top: px2rem(20);
}
.caller_list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: px2rem(120);
  border-radius: px2rem(16);
  background-color: #f6f6f6;
  margin-bottom: px2rem(30);
  padding: 0 px2rem(39);
  box-sizing: border-box;
}
.caller_list .caller_left h3 {
  font-size: px2rem(30);
  color: #336289;
  margin-bottom: px2rem(10);
}
.caller_list .caller_left p {
  font-size: px2rem(24);
  color: #999999;
}
.caller_list .caller_right img {
  width: px2rem(29);
  height: px2rem(24);
  vertical-align: middle;
}
</style>