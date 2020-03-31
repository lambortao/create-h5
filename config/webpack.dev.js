// 该文件为开发环境
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  // 本地服务
  devServer: {
    contentBase: path.join(__dirname, '../src'),
    open: true,
    hot: true,
    watchContentBase: true,
    host: '0.0.0.0'
  },
  plugins: [
    // 热更新 HMR
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    usedExports: true
  }
}

module.exports = merge(commonConfig, devConfig);