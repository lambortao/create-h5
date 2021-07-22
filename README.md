## 初次使用
推荐使用 `yarn` 代替 `npm` 进行包管理
``` bash
npm i 
# 或者 
yarn
```

#### 启动本地服务
``` bash
npm run start

# or

yarn start
```

#### 生成线上代码
> 打包好的文件在 dist 目录下


``` bash
npm run build

# or 

yarn build
```

## 新建页面 
如果要新建页面的话就在 `src/pages/` 目录里面创建。目录里面要有一个 `index.html` 和 `index.js` 文件。

## 公共 `css` 文件
- `src/sass/index.scss` 入口文件
- `src/sass/reset.scss` css重置文件
- `src/sass/_fun.scss` 公共方法文件
- `src/sass/_device.scss` 媒体查询的机型文件库

## 如果运行的时候有报错

### sass 相关的报错
先确认一下`node`版本和`node-sass`以及`sass-loader`版本是否对应 [版本查询](https://github.com/sass/node-sass#node-version-support-policy)
## 更新
### 2021-05-26
- 升级 `node-sass` 到 `4.14.1`，`sass-loader` 版本到 `7.3.1`。 对应支持的 `node` 版本是 `LES 14.17.X`