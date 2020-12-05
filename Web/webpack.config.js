const path = require("path");
var webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const dirName = 'wwwroot/dist/js';
const partialBundleTemplateFile = './Views/Shared/_ScriptsBundle.template.cshtml';

exports.config = (webpackOptions) => {
  // module.exports = (env, args) => {
  return {
    entry: {
      // home: "./ClientSrc/Scripts/Home/home.js",
      // privacy: "./ClientSrc/Scripts/Privacy/privacy.js",
      // test: "./ClientSrc/Scripts/test.js",
      foo: './ClientSrc/Scripts/Foo/foo.ts',
      fooSecondary: './ClientSrc/Scripts/Foo/fooSecondary.ts',
    },
    output: {
      filename: '[name].js',
      devtoolModuleFilenameTemplate: '[absolute-resource-path]', // it makes debuging in VS possible //[absolute-resource-path]
      path: path.resolve(__dirname, dirName),
    },
    mode: webpackOptions.isProduction === true ? 'production' : 'development',
    devtool: webpackOptions.isProduction ? 'source-map' : 'eval-source-map',
    watch: webpackOptions.watch === true,

    resolve: {
      extensions: ['.ts', '.js'],
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)$/,
          exclude: /node_modules|bower_components/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-typescript'],
              plugins: [
                '@babel/proposal-class-properties',
                '@babel/proposal-object-rest-spread',
              ],
            }
          },
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new ForkTsCheckerWebpackPlugin(
        // {
        // eslint: { // uncoment for eslint check
        //   files: './ClientSrc/**/*.{ts,js}' // required - same as command `eslint ./src/**/*.{ts,tsx,js,jsx} --ext .ts,.tsx,.js,.jsx`
        // }}
      ),
      new HtmlWebpackPlugin({
        inject: false,
        template: partialBundleTemplateFile,
        filename: path.resolve(
          __dirname,
          './Views/Shared/_ScriptsBundleForFoo.cshtml',
        ),
        chunks: ['foo'],
      }),

    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 0,
      },
    },
  };
}
