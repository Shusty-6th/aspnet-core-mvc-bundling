const path = require("path");
var webpack = require("webpack");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const dirName = "wwwroot/dist/js";

exports.config = (webpackOptions) => {
  //module.exports = (env, args) => {
  return {
    entry: {
      home: "./ClientSrc/Scripts/Home/home.js",
      privacy: "./ClientSrc/Scripts/Privacy/privacy.js",
      test: "./ClientSrc/Scripts/test.js",
    },

    mode: webpackOptions.isProduction === true ? "production" : "development",
    output: {
      filename: "[name].js",
        // devtoolModuleFilenameTemplate: '[resource-path]', //it makes debuging in VS possible //[absolute-resource-path]
      path: path.resolve(__dirname, dirName),
    },
    watch: webpackOptions.watch === true,
    devtool: "source-map",
    //resolve: {
    //    extensions: [".ts"]
    //},
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules|bower_components/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
      ],
    },
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
    optimization: {
      // usedExports: true,
      splitChunks: {
        chunks: "all",
        minSize: 0,
        name: "vendor",
        cacheGroups: {
          nodeModulesVendors: {
            test: /[\\/]node_modules[\\/]/, // https://stackoverflow.com/a/52961891/3793141
            name: "nodeModulesVendors",
            chunks: "all",
            minSize: 0,
          },
        },
      },
    },
  };
};
