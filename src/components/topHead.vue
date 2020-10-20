<template>
  <div class="topHead">
    <slot name="head">
      <img src="../assets/images/fh.png" alt="" @click="backBefor()" />
    </slot>
    <slot name="header"></slot>
  </div>
</template>

<script>
export default {
  name: "topHead",
  data() {
    return {};
  },
  methods: {
    backBefor() {
      this.$router.back();
    },
  },
};
</script>

<style lang="scss" scoped>
.topHead {
  position: relative;
  width: px2rem(750);
  height: px2rem(88);
  line-height: px2rem(88);
  font-size: px2rem(30);
  color: #fff;
  text-align: center;
}
.topHead h3 {
  font-size: px2rem(38);
  color: #333;
}
.topHead img {
  position: absolute;
  left: 5%;
  top: 50%;
  width: px2rem(32);
  height: px2rem(27);
  margin-top: px2rem(-27/2);
}
</style>