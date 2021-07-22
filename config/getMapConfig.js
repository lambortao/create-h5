const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const setMpa = () => {
  const entry = {};//入口对象
  const htmlWebpackPlugins = [];//html-webpack-plugin配置
  //获取入口文件
  const entryFiles = glob.sync('./src/pages/*/index.js');
  console.log(entryFiles);
  Object.keys(entryFiles).map(index => {
    const entryFil = entryFiles[index];
    //获取文件夹名称
    const match = entryFil.match(/src\/pages\/(.*)\/index\.js/);
    const pathname = match && match[1];
    //配置入口文件对象
    entry[pathname] = entryFil;
    //配置html-webpack-plugin
    htmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        title: [pathname],
        template: `src/pages/${pathname}/index.html`,
        filename: `${pathname}.html`,
        chunks: [pathname]
      })
    )
  });
  
  return {
    entry,
    htmlWebpackPlugins
  }
};

module.exports = setMpa;