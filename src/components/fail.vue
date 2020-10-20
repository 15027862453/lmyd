<template>
  <van-overlay :show="fail">
    <div class="wrapper" @click="fail = false">
      <div class="block" @click.stop>
        <div class="img">
          <img src="../assets/images/ztsb.png" alt="" />
          <p>sorry，操作失败</p>
          <van-button round type="info" @click="fail = false">确定</van-button>
        </div>
      </div>
    </div>
  </van-overlay>
</template>

<script>
export default {
  name: "fail",
  data () {
    return {
      fail:true  
    }
  },
  methods: {},
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
  width: px2rem(440);
  height: px2rem(500);
  box-sizing: border-box;
  background-color: #fff;
  border-radius: px2rem(12);
}
.img,img{
  width: 100%;
  height: 100%;
}
.img{
  position: relative;
}
.img img{
  position: absolute;
  left: 0;top: 0;
}
p{
  position: absolute;
  bottom: px2rem(170);
  width: 100%;
  text-align: center;
  font-size: px2rem(30);
  color: #333;
  font-weight: bold;
}
.van-button {
  position: absolute;
  left: 50%;bottom: px2rem(40);
  margin-left: px2rem(-105);
  width: px2rem(210);
  height: px2rem(70);
  line-height: px2rem(70);
  text-align: center;
  font-size: px2rem(30);
  font-weight: bold;
  border: none;
  background-color: #336189;
}
</style>