module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/lib/hotcss/px2rem.scss";
        `
      }
    }
  }
}

