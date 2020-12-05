const path = require("path");
var webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const dirName = "wwwroot/dist/js";
const partialBundleTemplateFile =
    "./Views/Shared/_ScriptsBundle.template.cshtml";

exports.config = (webpackOptions) => {
  //module.exports = (env, args) => {
  return {
    entry: {
      // home: "./ClientSrc/Scripts/Home/home.js",
      // privacy: "./ClientSrc/Scripts/Privacy/privacy.js",
      // test: "./ClientSrc/Scripts/test.js",
      foo: "./ClientSrc/Scripts/Foo/foo.ts",
      fooSecondary: "./ClientSrc/Scripts/Foo/fooSecondary.ts",
    },
    output: {
      filename: "[name].js",
      devtoolModuleFilenameTemplate: "[absolute-resource-path]", //it makes debuging in VS possible //[absolute-resource-path]
      path: path.resolve(__dirname, dirName),
    },
    mode: webpackOptions.isProduction === true ? "production" : "development",
    devtool: webpackOptions.isProduction ? "source-map" : "eval-source-map",
    watch: webpackOptions.watch === true,

    resolve: {
      extensions: [".ts", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)$/,
          exclude: /node_modules|bower_components/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-typescript"],
              plugins: [
                "@babel/proposal-class-properties",
                "@babel/proposal-object-rest-spread",
              ],
            },
          },
        },
      ],
      },
     plugins: [
         new CleanWebpackPlugin(),
          new ForkTsCheckerWebpackPlugin(),
          new HtmlWebpackPlugin({
                  inject: false,
              template: partialBundleTemplateFile,
                  filename: path.resolve(
                      __dirname,
                      `./Views/Shared/_ScriptsBundleForFoo.cshtml`
                  ),
              chunks: ['foo'],
          }),
      
         ],
    // plugins: [
    //     new CleanWebpackPlugin(),
    //     // https://stackoverflow.com/a/64612964/3793141
    //     new webpack.ProvidePlugin({
    //         process: 'process/browser',
    //       }),
    //    ],
    // resolve: {
    //     fallback: {
    //       util: require.resolve("util/"),
    //       os: require.resolve("os-browserify/browser")
    //     }
    // }
    // package: "dependencies": {
    //     "numeral": "^2.0.6"
    //     //"os-browserify": "^0.3.0",
    //     //"process": "^0.11.10",
    //     //"util": "^0.12.3"
    //   }

    // ,

    //plugins: [new ForkTsCheckerWebpackPlugin()],
    // optimization: {
    //   // usedExports: true,
    //   splitChunks: {
    //     chunks: "all",
    //     minSize: 0,
    //     name: "vendor",
    //     cacheGroups: {
    //       nodeModulesVendors: {
    //         test: /[\\/]node_modules[\\/]/, // https://stackoverflow.com/a/52961891/3793141
    //         name: "nodeModulesVendors",
    //         chunks: "all",
    //         minSize: 0,
    //       },
    //     },
    //   },
    // },

    optimization: {
      splitChunks: {
        chunks: "all",
        minSize: 0,
      },
    },
  };
};
