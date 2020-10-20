<template>
  <div class="myOrder">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">我的订单</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <!-- 我的积分 -->
      <div class="order">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
        <ul class="order_list">
          <li>
            <div class="list_left">
              <h4>3000积分兑换30元话费</h4>
              <p>兑换日期：2020.08.04 拷贝</p>
            </div>
            <div class="list_right">
              <img src="../../assets/images/jb.png" alt="" />
              <p>30元</p>
            </div>
          </li>
          <li>
            <div class="list_left">
              <h4>3000积分兑换30元话费</h4>
              <p>兑换日期：2020.08.04 拷贝</p>
            </div>
            <div class="list_right">
              <img src="../../assets/images/jb.png" alt="" />
              <p>30元</p>
            </div>
          </li>
          <li>
            <div class="list_left">
              <h4>3000积分兑换30元话费</h4>
              <p>兑换日期：2020.08.04 拷贝</p>
            </div>
            <div class="list_right">
              <img src="../../assets/images/jb.png" alt="" />
              <p>30元</p>
            </div>
          </li>
          <li>
            <div class="list_left">
              <h4>3000积分兑换30元话费</h4>
              <p>兑换日期：2020.08.04 拷贝</p>
            </div>
            <div class="list_right">
              <img src="../../assets/images/jb.png" alt="" />
              <p>30元</p>
            </div>
          </li>
          <li>
            <div class="list_left">
              <h4>3000积分兑换30元话费</h4>
              <p>兑换日期：2020.08.04 拷贝</p>
            </div>
            <div class="list_right">
              <img src="../../assets/images/jb.png" alt="" />
              <p>30元</p>
            </div>
          </li>
          <li>
            <div class="list_left">
              <h4>3000积分兑换30元话费</h4>
              <p>兑换日期：2020.08.04 拷贝</p>
            </div>
            <div class="list_right">
              <img src="../../assets/images/jb.png" alt="" />
              <p>30元</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/topHead.vue";
export default {
  name: "myOrder",
  data() {
    return {
      value1: 0,
      option1: [
        { text: "六个月内", value: 0 },
        { text: "一年内", value: 1 },
        { text: "两年内", value: 2 },
      ],
    };
  },
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
.order{
  padding-top: px2rem(20);
}
.order .order_list{
  margin-top: px2rem(30);
}
.order .order_list li {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: px2rem(128);
  border-radius: px2rem(18);
  background-color: #f6f6f6;
  margin-bottom: px2rem(30);
  padding: px2rem(30) px2rem(40) 0;
  box-sizing: border-box;
}
.order .list_left h4 {
  font-size: px2rem(26);
  color: #333;
  margin-bottom: px2rem(20);
}
.order .list_left p {
  font-size: px2rem(22);
  color: #999999;
}
.order .list_right {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: px2rem(18);
}
.order .list_right img {
  width: px2rem(42);
  height: px2rem(42);
  margin-right: px2rem(8);
  vertical-align: middle;
}
.order .list_right p {
  font-size: px2rem(30);
  color: #fca10f;
}
.van-dropdown-menu{
  width: px2rem(160);
  height: px2rem(60);
  line-height: px2rem(60);
  background-color: #336289;
  color: #FFF;
  border-radius: px2rem(30);
}

</style>