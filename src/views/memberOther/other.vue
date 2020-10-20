<template>
  <div class="other">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">其他服务</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <ul class="list">
        <li @click="goStore"><img src="../../assets/images/md.png" alt="" /></li>
        <li @click="goCooperate">
          <img src="../../assets/images/hz.png" alt="" />
        </li>
        <li @click="goComplain">
          <img src="../../assets/images/ts.png" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/topHead.vue";
export default {
  name: "other",
  components: {
    topHead,
  },
  methods: {
    goCooperate() {
      this.$router.push({ path: "cooperate" });
    },
    goComplain() {
      this.$router.push({ path: "complain" });
    },
    goStore(){
      this.$router.push({ path: "store" });
    }
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 px2rem(30);
  text-align: center;
}
.list {
  margin-top: px2rem(20);
}
.list li {
  width: 100%;
  height: px2rem(290);
  border-radius: px2rem(16);
  box-shadow: 0 0 px2rem(20) rgba($color: #000000, $alpha: 0.3);
  margin-bottom: px2rem(30);
  cursor: pointer;
}
.list li img {
  width: 100%;
  height: 100%;
  border-radius: px2rem(16);
}
</style>