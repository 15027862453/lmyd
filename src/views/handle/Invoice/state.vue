<template>
  <div class="state">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">开发票</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <van-tabs v-model="active" >
        <van-tab title="未开票">
          <div class="box">
            <div class="list">
              <div
                class="wrap"
                :class="{ btnImg: arr.indexOf(v.id) != -1 }"
                v-for="(v, index) in notOpen"
                :key="index"
                @click="selectClick(v.id, index)"
              >
                <div class="wrap_btn fl"></div>
                <div class="wrap_left fl">
                  <h3>￥{{ v.money }}</h3>
                  <p>月结发票</p>
                </div>
                <div class="wrap_right fr">
                  <p>{{ v.time }}</p>
                </div>
              </div>
            </div>
            <p class="bottom">最多展示1年内的记录</p>
            <div class="btn">
              <div class="select" @click="selectAll">
                <div
                  class="select_btn"
                  :class="{ select_btn_img: arr.length == notOpen.length }"
                ></div>
                <p>全选</p>
              </div>
              <van-button type="default" to="Invoice">开发票</van-button>
            </div>
          </div>
        </van-tab>
        <van-tab title="已开票">
          <div class="wrap" @click="goInvoiceSuccess">
            <div class="wrap_top">
              <h3>￥100.00</h3>
              <p>2020年4月</p>
            </div>
            <div class="wrap_bottom">
              <p>月结发票</p>
              <p>查看<img src="../../../assets/images/yjt.png" alt="" /></p>
            </div>
          </div>
          <div class="wrap" @click="goInvoiceSuccess">
            <div class="wrap_top">
              <h3>￥100.00</h3>
              <p>2020年4月</p>
            </div>
            <div class="wrap_bottom">
              <p>月结发票</p>
              <p>查看<img src="../../../assets/images/yjt.png" alt="" /></p>
            </div>
          </div>
          <div class="wrap" @click="goInvoiceSuccess">
            <div class="wrap_top">
              <h3>￥100.00</h3>
              <p>2020年4月</p>
            </div>
            <div class="wrap_bottom">
              <p>月结发票</p>
              <p>查看<img src="../../../assets/images/yjt.png" alt="" /></p>
            </div>
          </div>
          <div class="wrap" @click="goInvoiceSuccess">
            <div class="wrap_top">
              <h3>￥100.00</h3>
              <p>2020年4月</p>
            </div>
            <div class="wrap_bottom">
              <p>月结发票</p>
              <p>查看<img src="../../../assets/images/yjt.png" alt="" /></p>
            </div>
          </div>
          <div class="wrap" @click="goInvoiceSuccess">
            <div class="wrap_top">
              <h3>￥100.00</h3>
              <p>2020年4月</p>
            </div>
            <div class="wrap_bottom">
              <p>月结发票</p>
              <p>查看<img src="../../../assets/images/yjt.png" alt="" /></p>
            </div>
          </div>
          <div class="wrap" @click="goInvoiceSuccess">
            <div class="wrap_top">
              <h3>￥100.00</h3>
              <p>2020年4月</p>
            </div>
            <div class="wrap_bottom">
              <p>月结发票</p>
              <p>查看<img src="../../../assets/images/yjt.png" alt="" /></p>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import topHead from "../../../components/topHead.vue";
export default {
  name: "state",
  data() {
    return {
      arr: [],
      active: 0,
      notOpen: [
        {
          id: 1,
          money: 100,
          time: "2020年1月",
        },
        {
          id: 2,
          money: 100,
          time: "2020年2月",
        },
        {
          id: 3,
          money: 100,
          time: "2020年3月",
        },
        {
          id: 4,
          money: 100,
          time: "2020年4月",
        },
        {
          id: 5,
          money: 100,
          time: "2020年5月",
        },
        {
          id: 6,
          money: 100,
          time: "2020年6月",
        },
        {
          id: 7,
          money: 100,
          time: "2020年7月",
        },
        {
          id: 8,
          money: 100,
          time: "2020年8月",
        },
        {
          id: 9,
          money: 100,
          time: "2020年9月",
        },
        {
          id: 10,
          money: 100,
          time: "2020年10月",
        },
        {
          id: 11,
          money: 100,
          time: "2020年11月",
        },
        {
          id: 12,
          money: 100,
          time: "2020年12月",
        },
      ],
    };
  },
  methods: {
    goInvoiceSuccess() {
      this.$router.push({ path: "InvoiceSuccess" });
    },

    selectClick(id, index) {
      var seek = this.arr.indexOf(id);
      if (seek == -1) {
        this.arr.push(id);
      } else {
        this.arr.splice(seek, 1);
      }
    },
    selectAll() {
      // 判断是否全选
      if (this.arr.length == this.notOpen.length) {
        // 如果全选就清空
        this.arr.splice(0, this.arr.length);
      } else {
        // 否则先清空
        this.arr.splice(0, this.arr.length);
        // 再循环数据添加
        for (let index = 0; index < this.notOpen.length; index++) {
          var all = this.notOpen[index].id;
          this.arr.push(all);
        }
      }
    },
  },
  components: {
    topHead,
  },
};
</script>

<style lang="scss" scoped>
.topHead{
  position: fixed !important;
  left: 0;top: 0;
  z-index: 9999;
  background-color: #fff;
}
.state {
  position: relative;
  height: 100vh;
}
.main {
  height: 100vh;
  overflow-x: auto;
  background-color: #f5f5f5;
}
.wrap {
  width: px2rem(690);
  height: px2rem(124);
  border-radius: px2rem(20);
  background-color: #fff;
  margin-top: px2rem(30);
  padding: px2rem(20) px2rem(37);
  box-sizing: border-box;
  font-size: px2rem(24);
  color: #5d5f64;
}
.wrap_top,
.wrap_bottom {
  display: flex;
  justify-content: space-between;
}
.wrap_top {
  margin-bottom: px2rem(18);
}
.wrap_top h3,
.wrap_left h3 {
  font-size: px2rem(30);
  color: #336289;
}
.wrap_bottom p img {
  width: px2rem(24);
  vertical-align: middle;
  margin-top: px2rem(-5);
}
.btnImg .wrap_btn {
  background: url(../../../assets/images/xz.png) no-repeat center center;
  background-size: cover;
}
.wrap_btn,
.select_btn {
  width: px2rem(38);
  height: px2rem(38);
  border-radius: 50%;
  background-color: #d0d0d0;
  margin-right: px2rem(22);
  margin-top: px2rem(23);
}
.wrap_left h3 {
  margin-bottom: px2rem(16);
}
.wrap_right {
  line-height: px2rem(84);
}
.box {
  width: 100%;
  height: 100%;
}
.list {
  margin:px2rem(220) 0 px2rem(200);
}
.bottom {
  position: fixed;
  left: 0;
  bottom: px2rem(98);
  width: 100%;
  height: px2rem(81);
  line-height: px2rem(81);
  font-size: px2rem(24);
  color: #999999;
  text-align: center;
  background-color: #f5f5f5;
}
.btn {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: px2rem(98);
  line-height: px2rem(98);
  background-color: #336289;
  padding: 0 px2rem(30) 0 px2rem(56);
  box-sizing: border-box;
}
.btn .van-button {
  width: px2rem(165);
  height: px2rem(60);
  line-height: px2rem(60);
  font-size: px2rem(24);
  font-weight: bold;
  color: #336289;
  border-radius: px2rem(10);
}
.select {
  display: flex;
  color: #fff;
  font-size: px2rem(24);
}
.select_btn {
  margin: px2rem(30) px2rem(15) 0 0;
}
.select_btn_img {
  background: url(../../../assets/images/qx.png) no-repeat center center;
  background-size: cover;
}
</style>