// 该文件为生产环境
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  devtool: 'inline-cheap-module-source-map',
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
}

// 融合公共的配置文件和当前文件
module.exports = merge(commonConfig, prodConfig);