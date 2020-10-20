<template>
  <div class="orderbusine">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">已订购业务</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <van-tabs v-model="active">
        <van-tab title="基础套餐">
          <div class="wrap">
            <div class="wrap_title">神州行畅聊套餐</div>
            <div class="wrap_time">
              <div class="start">
                <p>生效时间</p>
                <p>2014年03月01日</p>
              </div>
              <div class="end">
                <p>失效时间</p>
                <p>2014年03月01日 00:00:88</p>
              </div>
            </div>
            <div class="start_time">订购时间：2014年03月01日 00:00:00</div>
          </div>
          <div class="wrap">
            <div class="wrap_title">神州行畅聊套餐</div>
            <div class="wrap_time">
              <div class="start">
                <p>生效时间</p>
                <p>2014年03月01日</p>
              </div>
              <div class="end">
                <p>失效时间</p>
                <p>2014年03月01日 00:00:88</p>
              </div>
            </div>
            <div class="start_time">订购时间：2014年03月01日 00:00:00</div>
          </div>
          <div class="wrap">
            <div class="wrap_title">神州行畅聊套餐</div>
            <div class="wrap_time">
              <div class="start">
                <p>生效时间</p>
                <p>2014年03月01日</p>
              </div>
              <div class="end">
                <p>失效时间</p>
                <p>2014年03月01日 00:00:88</p>
              </div>
            </div>
            <div class="start_time">订购时间：2014年03月01日 00:00:00</div>
          </div>
        </van-tab>
        <van-tab title="流量包套餐">
          <div class="wrap">
            <div class="wrap_title">神州行畅聊套餐</div>
            <div class="wrap_time">
              <div class="start">
                <p>生效时间</p>
                <p>2014年03月01日</p>
              </div>
              <div class="end">
                <p>失效时间</p>
                <p>2014年03月01日 00:00:88</p>
              </div>
            </div>
            <div class="start_time">订购时间：2014年03月01日 00:00:00</div>
          </div>
          <div class="wrap">
            <div class="wrap_title">神州行畅聊套餐</div>
            <div class="wrap_time">
              <div class="start">
                <p>生效时间</p>
                <p>2014年03月01日</p>
              </div>
              <div class="end">
                <p>失效时间</p>
                <p>2014年03月01日 00:00:88</p>
              </div>
            </div>
            <div class="start_time">订购时间：2014年03月01日 00:00:00</div>
          </div>
          <div class="wrap">
            <div class="wrap_title">神州行畅聊套餐</div>
            <div class="wrap_time">
              <div class="start">
                <p>生效时间</p>
                <p>2014年03月01日</p>
              </div>
              <div class="end">
                <p>失效时间</p>
                <p>2014年03月01日 00:00:88</p>
              </div>
            </div>
            <div class="start_time">订购时间：2014年03月01日 00:00:00</div>
          </div>
        </van-tab>
        <van-tab title="增值业务">
          <div class="wrap">
            <div class="wrap_title">神州行畅聊套餐</div>
            <div class="wrap_time">
              <div class="start">
                <p>生效时间</p>
                <p>2014年03月01日</p>
              </div>
              <div class="end">
                <p>失效时间</p>
                <p>2014年03月01日 00:00:88</p>
              </div>
            </div>
            <div class="start_time">订购时间：2014年03月01日 00:00:00</div>
          </div>
          <div class="wrap">
            <div class="wrap_title">神州行畅聊套餐</div>
            <div class="wrap_time">
              <div class="start">
                <p>生效时间</p>
                <p>2014年03月01日</p>
              </div>
              <div class="end">
                <p>失效时间</p>
                <p>2014年03月01日 00:00:88</p>
              </div>
            </div>
            <div class="start_time">订购时间：2014年03月01日 00:00:00</div>
          </div>
          <div class="wrap">
            <div class="wrap_title">神州行畅聊套餐</div>
            <div class="wrap_time">
              <div class="start">
                <p>生效时间</p>
                <p>2014年03月01日</p>
              </div>
              <div class="end">
                <p>失效时间</p>
                <p>2014年03月01日 00:00:88</p>
              </div>
            </div>
            <div class="start_time">订购时间：2014年03月01日 00:00:00</div>
          </div>
          <div class="wrap">
            <div class="wrap_title">神州行畅聊套餐</div>
            <div class="wrap_time">
              <div class="start">
                <p>生效时间</p>
                <p>2014年03月01日</p>
              </div>
              <div class="end">
                <p>失效时间</p>
                <p>2014年03月01日 00:00:88</p>
              </div>
            </div>
            <div class="start_time">订购时间：2014年03月01日 00:00:00</div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import topHead from "../../components/topHead.vue";
export default {
  name: "orderbusine",
  data() {
    return {
      active: 0,
    };
  },
  components: {
    topHead,
  },
};
</script>

<style lang="scss" scoped>
.main {
  height: 100vh;
  overflow-x: auto;
  background-color: #f5f5f5;
}
.wrap {
  width: px2rem(690);
  height: px2rem(250);
  border-radius: px2rem(20);
  background-color: #fff;
  margin-bottom: px2rem(30);
  margin-top: px2rem(30);
  padding-top: px2rem(30);
  box-sizing: border-box;
}
.wrap_title {
  font-size: px2rem(30);
  color: #336289;
  font-weight: bold;
  margin-left: px2rem(40);
  margin-bottom: px2rem(28);
}
.wrap_time {
  display: flex;
  height: px2rem(58);
  margin-bottom: px2rem(30);
}
.start {
  border-right: 1px solid #d9d9d9;
}
.start p:nth-child(1),
.end p:nth-child(1) {
  margin-bottom: px2rem(15);
}
.start,
.end {
  padding: 0 px2rem(40);
  width: 50%;
  color: #5d5f64;
  font-size: px2rem(22);
}
.start_time {
  height: px2rem(74);
  line-height: px2rem(74);
  border-top: 1px solid #d9d9d9;
  background: url(../../assets/images/sj.png) no-repeat px2rem(40) center;
  font-size: px2rem(22);
  color: #999;
  padding-left: px2rem(70);
  box-sizing: border-box;
}
</style>