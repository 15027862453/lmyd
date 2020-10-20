<template>
  <div id="myCharts" ref="myCharts"></div>
</template>

<script>
export default {
  name: "echarts",
  props: ["color", "title", "data", "dataVal"],
  mounted() {
    const myCharts = this.$echarts.init(this.$refs.myCharts);
    let options = {
      // 全局调色盘。
      color: this.color,
      title: {
        text: this.title,
        bottom: 150,
        left: 20,
        textStyle: {
          lineHeight: 40,
          fontSize: 30,
          color: "#333",
          fontWeight: "normal",
        },
      },
      legend: {
        //位置至于底部
        bottom: 0,
        width: "100%",
        //按钮宽高
        itemWidth: 60,
        itemHeight: 40,
        textStyle: {
          fontSize: 30,
        },
        //间距
        itemGap: 40,
        align: "left",
        data: this.data,
      },
      series: {
        bottom: 180,
        name: "余额详情",
        type: "pie",
        //直径占整个div高度的多少
        radius: ["50%", "73%"],
        data: this.dataVal,
        label: {
          fontSize: 28,
        },
      },
      lineStyle: {
        color: "#999",
      },
      tooltip: {
        show: true,
        trigger: "item",
        formatter: "{b} : {c} ({d}%)",
        textStyle: {
          fontSize: 28,
        },
      },
    };
    myCharts.setOption(options);
  },
};
</script>

<style lang="scss" scoped>
#myCharts {
  width: px2rem(690);
  height: px2rem(900);
  margin-bottom: px2rem(40);
}
</style>