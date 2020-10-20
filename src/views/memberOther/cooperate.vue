<template>
  <div class="cooperate">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">商务合作</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <div class="img"><img src="../../assets/images/swhz.png" alt=""></div>
      <div class="content">
        <p>商务合作内容，由后台管理，商务合作内容，由后台管理，商务合作内容，由后台管理，商务合作内容，由后台管理，商务合作内容，由后台管</p>
        <p>商务合作内容，由后台管理，商务合作内容，由后台管理，商务合作内容，由后台管理，商务合作内容，由后台管理，商务合作内容，由后台管</p>
      </div>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/topHead.vue";
export default {
  name: "cooperate",
  components: {
    topHead,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.main {
  padding: px2rem(20) px2rem(30) 0;
  box-sizing: border-box;
}
.img,.img img{
  width: 100%;
  height: px2rem(320);
  margin-bottom: px2rem(30);
}
.content p{
  font-size: px2rem(26);
  color: #333;
  line-height: px2rem(48);
  margin-bottom: px2rem(20);
}
</style>