const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production'
console.log(process.env.NODE_ENV);
module.exports = {
  entry: {
    main: './src/index.js'
  },
  module : {
    rules: [
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[hash:8].[ext]',
            outputPath: 'images',
            limit: 20480
          }
        }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { useBuiltIns: 'usage' }]]
          }
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src', 'img:data-src', 'audio:src'],
            minimize: true
          }
        }
      },
      {
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]'
          }
        }
      }
    ]
  },
  optimization: {
    // 代码分割 - 其实 splitChunks 里面只需要配置一个 chunks 为 all 就行了，别的使用默认配置没什么问题
    splitChunks: {
      // 不管是异步还是同步的引入都分割代码
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    },
    usedExports: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[hash].css'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin()
  ],
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, '../dist')
  }
}