const path = require('path');
if (process.env.NODE_ENV === 'development') {
  require(path.resolve('core/compiler/dev.js'));
} else {
  require(path.resolve('core/compiler/build.js'));
}
// const CompressionWebpackPlugin = require('compression-webpack-plugin')
// const productionGzipExtensions = ['js', 'css']
let defaultConfig = {
  pages: {
    index: {
      entry: 'src/core/main.js',
      template: 'public/index.html'
    }
  },
  publicPath: './', // https://cli.vuejs.org/zh/config/#publicpath
  outputDir: 'dist',
  chainWebpack: config => {
    // config.resolve.alias
    // .set('@', path.resolve(__dirname, 'src'))
    config.module
      .rule('ts')
      .test(/\.tsx?$/)
      .use()
      .loader('ts-loader')
      .end();
  },
  css: {
    /*loaderOptions: {
      sass: {
        data: `@import "@/layout/public-css/theme.scss";`
      }
    },*/
    sourceMap: false // true的话会很慢，不过特殊情况需要调试时可以设为true
  },
  configureWebpack: {},
  filenameHashing: true
};
module.exports = {
  // configureWebpack: {
  //     plugins: [
  //         new CompressionWebpackPlugin({
  //             filename: '[path].gz[query]',
  //             algorithm: 'gzip',
  //             test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
  //             threshold: 10240,
  //             minRatio: 0.8
  //         })
  //     ]
  // },
  chainWebpack: config => {
    // config.resolve.alias
    // .set('@', path.resolve(__dirname, 'src'))
    config.module
      .rule('ts')
      .test(/\.tsx?$/)
      .use()
      .loader('ts-loader')
      .end();
  }
};
