<template>
  <div class="cancelForm">
    <!-- 导航栏 -->
    <topHead><h3 slot="header">销户申请</h3></topHead>
    <!-- 内容 -->
    <div class="main">
      <div class="wrap">
        <div class="title"><h4>拆机原因</h4></div>
        <textarea placeholder="请填写拆机原因" cols="30" rows="10"></textarea>
      </div>
      <div class="wrap">
        <div class="title"><h4>上传照片</h4></div>
        <div class="upImg">
          <van-uploader v-model="fileList.imgPath1" :max-count="1">
            <img src="../../../assets/images/sfz.png" alt="" />
          </van-uploader>
          <van-uploader v-model="fileList.imgPath2" :max-count="1">
            <img src="../../../assets/images/fmsfz.png" alt="" />
          </van-uploader>
          <van-uploader v-model="fileList.imgPath3" :max-count="1">
            <img src="../../../assets/images/scsfz.png" alt="" />
          </van-uploader>
        </div>
      </div>
      <div class="wrap">
        <div class="title"><h4>其他信息</h4></div>
        <div class="ipt">
          <div class="text">拆机号码</div>
          <input type="text" maxlength="11" placeholder="请输入拆机号码" />
        </div>
        <div class="ipt">
          <div class="text">服务密码</div>
          <input type="text" maxlength="20" placeholder="请输入服务密码" />
        </div>
        <div class="ipt" style="margin-top: 30px">
          <div class="text">
            <p>主叫通话记录</p>
            <span>3-5条主叫通话记录</span>
          </div>
          <input type="text" placeholder="请输入第一条" />
        </div>
        <div class="ipt" style="width: 50%; margin-left: auto">
          <input type="text" placeholder="请输入第二条" />
        </div>
        <div class="ipt" style="width: 50%; margin-left: auto">
          <input type="text" placeholder="请输入第三条" />
        </div>
        <div class="ipt" style="width: 50%; margin-left: auto">
          <input type="text" placeholder="请输入第四条" />
        </div>
        <div class="ipt">
          <input type="text" placeholder="请输入第五条" />
        </div>
      </div>
      <div class="wrap">
        <div class="title"><h4>其他信息</h4></div>
        <div class="ipt" style="margin-top: 30px">
          <div class="text">
            <p>账户名称</p>
            <span>账户名称必须与机主一致</span>
          </div>
          <input type="text" placeholder="请输入账号名称" />
        </div>
        <div class="ipt">
          <div class="text">开户行</div>
          <input type="text" maxlength="11" placeholder="请输入开户行" />
        </div>
        <div class="ipt">
          <div class="text">账号</div>
          <input type="text" maxlength="20" placeholder="请输入账号" />
        </div>
      </div>
      <div class="wrap">
        <div class="title"><h4>备用联系方式</h4></div>
        <div class="ipt">
          <div class="text">其它手机号码</div>
          <input type="text" maxlength="11" placeholder="请输入手机号码" />
        </div>
      </div>
    </div>
    <!-- 底部按钮 -->
    <div class="bottom_btn">
      <van-button to="auditCabcel">提交</van-button>
    </div>
  </div>
</template>

<script>
import topHead from "../../../components/topHead.vue";
export default {
  name: "cancelForm",
  data() {
    return {
      fileList: {
        imgPath1: [],
        imgPath2: [],
        imgPath3: [],
      },
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
.wrap .title h4 {
  font-size: px2rem(30);
  color: #333333;
  margin-top: px2rem(35);
}
.wrap textarea {
  width: 100%;
  height: px2rem(210);
  background-color: #f6f6f6;
  border-radius: px2rem(8);
  font-size: px2rem(28);
  padding: px2rem(40) px2rem(30);
  box-sizing: border-box;
}
.wrap .upImg {
  display: flex;
  justify-content: space-between;
}
.wrap .van-uploader,
.wrap .van-uploader img {
  width: px2rem(220);
  height: px2rem(160);
  border-radius: px2rem(8);
  overflow: hidden;
}
.wrap .ipt {
  width: 100%;
  position: relative;
  font-size: px2rem(28);
  border-bottom: 1px solid #dfe0e7;
}
.wrap .ipt .text {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  left: 0;
  top: 0;
  height: px2rem(97);
}
.wrap .ipt .text span {
  flex: 0 0 100%;
  font-size: px2rem(28);
  color: #999999;
  margin-top: px2rem(-20);
}
.wrap .ipt input {
  width: 100%;
  height: px2rem(97);
  text-align: right;
}
// 底部按钮
.bottom_btn .van-button {
  width: 100%;
  height: px2rem(98);
  line-height: px2rem(98);
  color: #fff;
  font-weight: bold;
  font-size: px2rem(28);
  background-color: #336289;
  margin: px2rem(50) auto 0;
  box-shadow: 0 px2rem(-10) px2rem(20) rgba($color: #000000, $alpha: 0.2);
}
</style>