"use strict";

const gulp = require("gulp");

const log = require("fancy-log");
const notifier = require("node-notifier");
const PluginError = require("plugin-error");

const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js").config;

const webpackOptions = {
  isProduction: true,
  watch: false,
  testParam: 'wut',
};

const webpackTask = (done) => {
  webpack(webpackConfig(webpackOptions), (err, stats) => {
    log('[webpackOptions]', webpackOptions);
    // log("[webpack stats]", stats.toString({ colors: true }));

    if (stats.hasErrors()) {
      const errorMessage = stats.compilation.errors[0] != null
        ? stats.compilation.errors[0].message

        : stats.compilation.errors;

      log('============================================================');
      log(errorMessage);
      log('============================================================');

      if (webpackOptions.watch) {
        notifier.notify({
          title: 'Error',
          message: errorMessage,
          wait: true,
          open: `file://${stats.compilation.errors[0].module.resource}`,
        });
      }

      const pErr = new PluginError('[webpack]', errorMessage);
      log.error("[webpack]", stats.toString({ colors: true }));

      done(pErr);
    } else {
      done();
    }
  });
};

const setProdOptions = (done) => {
  webpackOptions.isProduction = true;
  webpackOptions.testParam = 'prod';
  done();
};

const setDevOptions = (done) => {
  webpackOptions.isProduction = false;
  webpackOptions.testParam = 'dev';
  done();
};

const enableWatchOptions = (done) => {
  webpackOptions.watch = true;
  done();
};

gulp.task("build-dev", gulp.series([setDevOptions, webpackTask]));
gulp.task("build-dev:watch", gulp.series([setDevOptions, enableWatchOptions, webpackTask]));
gulp.task("build-prod", gulp.series([setProdOptions, webpackTask]));

// gulp.task('build', () => {
//    gulp.src('Scripts/Privacy/privacy.js')
//        .pipe(babel())
//        .pipe(gulp.dest('./dev'))
// });

// gulp.task('scripts', function () {
//    return gulp.src(
//        [
//            'node_modules/babel-polyfill/dist/polyfill.js',
//            'js/*.js'
//        ])
//        .pipe(babel({ presets: ['es2015'] }))
//        .pipe(gulp.dest('compiled'))
// });

/// //////////////////

// var gulp = require('gulp'),
//    concat = require('gulp-concat'),
//    cssmin = require('gulp-cssmin'),
//    htmlmin = require('gulp-htmlmin'),
//    uglify = require('gulp-uglify'),
//    merge = require('merge-stream'),
//    del = require('del');
//    //bundleconfig = require('./bundleconfig.json');

// const regex = {
//    css: /\.css$/,
//    html: /\.(html|htm)$/,
//    js: /\.js$/
// };

/// /gulp.task('min:js', async function () {
/// /    merge(getBundles(regex.js).map(bundle => {
/// /        return gulp.src(bundle.inputFiles, { base: '.' })
/// /            .pipe(concat(bundle.outputFileName))
/// /            .pipe(uglify())
/// /            .pipe(gulp.dest('.'));
/// /    }))
/// /});

// gulp.task('min:css', async function () {
//    merge(getBundles(regex.css).map(bundle => {
//        return gulp.src(bundle.inputFiles, { base: '.' })
//            .pipe(concat(bundle.outputFileName))
//            .pipe(cssmin())
//            .pipe(gulp.dest('.'));
//    }))
// });

/// /gulp.task('min:html', async function () {
/// /    merge(getBundles(regex.html).map(bundle => {
/// /        return gulp.src(bundle.inputFiles, { base: '.' })
/// /            .pipe(concat(bundle.outputFileName))
/// /            .pipe(htmlmin({ collapseWhitespace: true, minifyCSS: true, minifyJS: true }))
/// /            .pipe(gulp.dest('.'));
/// /    }))
/// /});

// gulp.task('min', gulp.series(['min:css',]));

// gulp.task('default', gulp.series("min"));
