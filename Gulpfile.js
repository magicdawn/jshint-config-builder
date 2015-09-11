'use strict';

global.Promise = require('bluebird');
var co = require('co');
var gulp = require('gulp');
var gutil = require('gulp-util');
var pathFn = require('path');
var fs = require('fs-extra');
var glob = require('glob');

/**
 * rev map
 */
var rev = {};

/**
 * build Task
 */
gulp.task('build', function() {
  process.env.NODE_ENV = 'production';
  var app = require('./app');
  var rev = {};

  /**
   * predator as global
   *
   * all glob with cwd `app/`
   */

  /* globals predator */

  // just do copy
  predator.buildCopy([
    '*/fonts/**/*'
  ]);

  // name_hash.ext
  predator.buildStatic([
    '*/img/**/*.*',
    '*/assets/**/*.*'
  ], rev);

  // gulp.task could return a Promise
  return co(function*() {

    // less -> css
    yield predator.buildLessAsync([
      '*/css/main/**/*.less'
    ], rev);

    // js
    yield predator.buildJsAsync([
      '*/js/main/**/*.js',
      'global/js/main/index.json'
    ], rev);

    // 其他 js css
    // 上面只处理了 带有main的
    predator.buildOtherJsCss([
      '*/js/*.*',
      '*/js/!(main)/**/*.*',
      '*/css/*.*',
      '*/css/!(main)/**/*.*'
    ], rev);

    // 替换 view, 复制到 view_build 文件夹
    predator.buildView([
      '*/view/**/*.*'
    ], rev);

    fs.writeFileSync(__dirname + '/rev.json', JSON.stringify(rev, null, '  '), 'utf8');
    gutil.log('predator', 'rev.json writed');
  });
});

/**
 * do clean stuff
 */
gulp.task('clean', ['clean-public', 'clean-view']);

/**
 * ./public
 */
gulp.task('clean-public', function() {
  fs.removeSync(__dirname + '/public');
});

/**
 * view_build
 */
gulp.task('clean-view', function() {
  var dirs = glob.sync('app/*/view_build');
  dirs.forEach(function(d) {
    fs.removeSync(__dirname + '/' + d);
  });
});