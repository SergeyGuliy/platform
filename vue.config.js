module.exports = {
  devServer: {
    "/api": "http://new.platform.veskod.com/"

    // proxy: "http://new.platform.veskod.com/api/"
    // proxy: "http://new.platform.veskod.com/api/"
    // proxy: {
    //   "/api": {
    //     target: "http://new.platform.veskod.com",
    //     changeOrigin: true,
    //     router: {
    //       "localhost:8080": `http://new.platform.veskod.com`
    //     }
    //   }
    // }
  }
};
