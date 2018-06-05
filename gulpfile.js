'use strict';

var gulp = require('gulp');
var gulpIf = require('gulp-if');
var gulpRev = require('gulp-rev');
var gulpRevReplace = require('gulp-rev-replace');
var gulpUglify = require('gulp-uglify');
var gulpUniqueFiles = require('gulp-unique-files');
var gulpUseRef = require('gulp-useref');
var gulpCleanCSS = require('gulp-clean-css');

gulp.task('useref', ['image'], function() {
  var assets = gulpUseRef.assets({
    searchPath: 'public'
  });

  return gulp.src('public/**/*.html')
    .pipe(assets)
    .pipe(gulpUniqueFiles())
    .pipe(gulpIf('*.css', gulpCleanCSS()))
    .pipe(gulpIf('*.js', gulpUglify()))
    .pipe(gulpRev())
    .pipe(assets.restore())
    .pipe(gulpUseRef())
    .pipe(gulpRevReplace({
      prefix: '/'
    }))
    .pipe(gulp.dest('public'));
});

gulp.task('default', ['useref']);

function replaceBackSlash(str) {
  return str.replace(/\\/g, '/');
}
