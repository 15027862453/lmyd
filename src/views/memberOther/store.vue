<template>
  <div class="store">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">附近门店</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <!-- top -->
      <div class="area" @click="bindShow">
        <div v-for="(area,index) in arrArea" :key="index"  class="area_item">{{area.name}}<span></span></div>
      </div>
      <!-- 弹窗 -->
      <van-popup v-model="showArea" position="bottom" :style="{ height: '40%' }">
        <van-area :item-height="100" :area-list="areaList" @confirm="onAreaConfirm" @cancel="bindCancel"/>
      </van-popup>
      <!-- 列表 -->
      <ul class="area_list" v-if="valueArea != ''">
         <li>
          <div class="img">
            <img src="../../assets/images/dw.png" alt="">
          </div>
          <div class="text">
            <p>门店：北京市朝阳区大望路店</p>
            <p>地址：北京市朝阳区大望路</p>
          </div>
        </li>
         <li>
          <div class="img">
            <img src="../../assets/images/dw.png" alt="">
          </div>
          <div class="text">
            <p>门店：北京市朝阳区大望路店</p>
            <p>地址：北京市朝阳区大望路</p>
          </div>
        </li>
        <li>
          <div class="img">
            <img src="../../assets/images/dw.png" alt="">
          </div>
          <div class="text">
            <p>门店：北京市朝阳区大望路店</p>
            <p>地址：北京市朝阳区大望路</p>
          </div>
        </li>
      </ul>
      <van-empty  description="请选择地址" v-if="valueArea == ''"/>
    </div>
  </div>
</template>

<script>
import AeraInfo from "../../common/area.js";
import topHead from "../../components/topHead.vue";
export default {
  name: "store",
  data() {
    return {
      areaList: AeraInfo, //引用地区信息
      showArea: false,
      valueArea: "", //地区值
      arrArea: [
        {
          code: 0,
          name: "请选择",
        },
        {
          code: 0,
          name: "请选择",
        },
        {
          code: 0,
          name: "请选择",
        },
      ], //存放地区数组
    };
  },
  components: {
    topHead,
  },
  methods: {
    bindShow() {
      this.showArea = true;
    },
    bindCancel() {
      this.showArea = false;
    },
    //地区选择
    onAreaConfirm(val) {
      this.showArea = false;
      this.arrArea = val;
      this.valueArea = val[0].name + "-" + val[1].name + "-" + val[2].name;
      console.log(this.valueArea);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 px2rem(30);
}
.area{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: px2rem(90);
  line-height: px2rem(90);
  background-color: #336189;
  border-radius: px2rem(16);
  font-size: px2rem(26);
  color: #fff;
}
.area_item{
  display: flex;
}
.area span {
  display: block;
  border: px2rem(10) solid;
  border-color: #fff transparent transparent transparent;
  margin: px2rem(38) 0 0 px2rem(10);
}
.area_list {
  margin-top: px2rem(20);
}
.area_list li{
  display: flex;
  border-bottom: 1px solid #DFDFE7;
}
.area_list li .img,
.area_list li .img img{
  width: px2rem(33);
  height: px2rem(40);
  margin-top: px2rem(15);
  margin-right: px2rem(20);
}
.area_list li .text{
  padding: px2rem(20) 0;
}
.area_list li p{
  color: #333;
  font-size: px2rem(26);
  line-height: px2rem(54);
}

</style>