<template>
  <van-overlay :show="show" @click="isShowClick(show)">
    <div class="wrapper">
      <div class="block" @click.stop>
        <slot name="conter"></slot>
        <slot name="bottom"></slot>
        <slot name="btn">
          <div class="btn">
            <van-button
              round
              type="info"
              class="back"
              @click="isShowClick(show)"
              >返回修改</van-button
            >
            <van-button round type="info" class="pay" @click="charges"
              >继续支付</van-button
            >
          </div>
        </slot>
      </div>
    </div>
  </van-overlay>
</template>

<script>
export default {
  name: "Popup",
  props: ["show"],
  methods: {
    charges() {
      this.$emit("payCharges");
      this.$emit("payFlow");
      this.$emit("Invoice");
    },
    isShowClick(show) {
      this.show = JSON.parse(this.show);
      this.$emit("showClick", show);
    },
  },
};
</script>

<style lang='scss' scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: px2rem(600);
  padding: px2rem(50) 0 px2rem(40);
  box-sizing: border-box;
  background-color: #fff;
  border-radius: px2rem(10);
}
.btn {
  display: flex;
  justify-content: space-between;
  padding: 0 px2rem(60);
}
.van-button {
  width: px2rem(210);
  height: px2rem(70);
  line-height: px2rem(70);
  text-align: center;
  font-size: px2rem(30);
  font-weight: bold;
  border: none;
}
.back {
  color: #336289;
  background-color: #bdcbd0;
}
.pay {
  color: #fff;
  background-color: #336289;
}
</style>