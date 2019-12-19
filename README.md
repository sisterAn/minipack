作为一个前端开发人员，我们花费大量的时间去处理 webpack、gulp 等打包工具，将高级  JavaScript 项目打包成更复杂、更难以解读的文件包，运行在浏览器中，那么理解 JavaScript 打包机制就很必要，它帮助你更好的调试项目、更快的定位问题产生的问题，并且帮助你更好的理解、使用 webpack 等打包工具。

### 一、运行

1. 安装依赖

   ```shell
   npm install
   ```

2. 打包

   ```shell
   npm run build
   ```

3. 运行

   ```shell
   npm start
   ```

### 二、原理

打包不过是，从入口文件开始，将所有模块及依赖的模块输出到包文件中，并且可以在浏览器中运行。那么它就分为四步：

- 获取入口文件内容，及其所有依赖
- 依次获取所有的依赖模块内容，及其依赖的依赖，…，获取整个依赖图
- 将依赖图包装进一个能够在所有浏览器运行的立即执行函数
- 输出到 `./dist/bundle.js` 

完整打包代码及解释详见：[index.js](https://github.com/sisterAn/minipack/blob/master/index.js)

示例代码详见：[src](https://github.com/sisterAn/minipack/tree/master/src)

打包后的文件详见：[bundle.js](https://github.com/sisterAn/minipack/blob/master/dist/bundle.js)

