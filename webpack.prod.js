/**
 * webpack.server.config.js
 * babel-register 插件，会自动编译转换使用 require 关键字加载的文件
 */
require("babel-register")({ presets: ["es2015", "react"] });
// Provide custom regenerator runtime and core-js
require("babel-polyfill");

// Css required hook
require("css-modules-require-hook")({
  extensions: [".less"],
  camelCase: true,
  generateScopedName: "[name]__[local]__[hash:base64:8]"
});

// Image required hook
require("asset-require-hook")({
  extensions: ["jpg", "png", "gif", "svg", "mp4"],
  publicPath: "/",
  limit: 8000
});

const webpack = require("webpack");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const env = process.env.NODE_ENV;

/**
 * 将模块与静态数据导入
 */
const Item = require(`./src/app.js`);
/**
 * 工厂方法，将类转换为函数(React Element)
 */
const itemList = React.createFactory(Item);
/**
 * 结合数据渲染组件
 */
const reactString = ReactDOMServer.renderToStaticMarkup(itemList());

module.exports = {
  entry: ["./src/index.js"],
  output: {
    filename: "index.js",
    path: __dirname + "/dist"
  },
  resolve: {
    extensions: [".js"],
    alias: {
      web_modules: path.resolve(__dirname, "src/web_modules/")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: "html-loader?attrs[]=video:src"
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: { limit: 8192 }
          }
          // 'file-loader',
          // 'image-webpack-loader'
        ]
      },
      {
        test: /\.mp4$/,
        loader: "url-loader?limit=10000&mimetype=video/mp4"
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          }
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader"
          },
          {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(env)
    }),
    new HtmlWebpackPlugin({
      title: "贝纳特",
      chunksSortMode: "dependency",
      body: reactString,
      template: path.resolve(__dirname, "./src/index.ejs")
    })
  ]
};
