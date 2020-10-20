<template>
  <van-overlay :show="load">
    <div class="wrapper" @click="load = false">
      <div class="block" @click.stop>
        <div class="img">
          <img class="back" src="../assets/images/ztjz.png" alt="" />
          <img src="../assets/images/jzfj.png" alt="" class="hj">
          <p>加载中，请耐心等待...</p>
          <van-button round type="info" @click="load = false">确定</van-button>
        </div>
      </div>
    </div>
  </van-overlay>
</template>

<script>
export default {
  name: "load",
  data() {
    return {
      load: true,
    };
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
.img,
.back {
  width: 100%;
  height: 100%;
}
.img {
  position: relative;
}
.img .back {
  position: absolute;
  left: 0;
  top: 0;
}
p {
  position: absolute;
  bottom: px2rem(170);
  width: 100%;
  text-align: center;
  font-size: px2rem(30);
  color: #333;
  font-weight: bold;
}
.hj{
  position: absolute;
  left: 50%;top: px2rem(60);
  margin-left: px2rem(-60);
  width: px2rem(120);
  height: px2rem(192);
  animation:mymove 1.5s infinite;
  -moz-animation:mymove 1.5s infinite; /*Firefox*/
  -webkit-animation:mymove 1.5s infinite; /*Safari and Chrome*/
}
@keyframes mymove{
    0% {top:px2rem(60)}
    50% {top: px2rem(10);}
    100%{top:px2rem(60)}
}
@-moz-keyframes mymove { /*Firefox*/
    0% {top:px2rem(60)}
    50% {top: px2rem(10);}
    100%{top:px2rem(60)}
}
@-webkit-keyframes mymove{ /*Safari and Chrome*/
    0% {top:px2rem(60)}
    50% {top: px2rem(10);}
    100%{top:px2rem(60)}
}
.van-button {
  position: absolute;
  left: 50%;
  bottom: px2rem(40);
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