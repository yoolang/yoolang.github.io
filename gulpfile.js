var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');

var imagemin = require('gulp-imagemin');

gulp.task('minify-css' , function () {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./public'));
});

gulp.task('minify-html' , function () {
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeEmptyAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyJS: true,
            minifyCSS: true
        }))
        .on('error', function (err) {
            console.log('html Error!', err.message);
            this.end();
        })
        .pipe(gulp.dest('./public'));
});

gulp.task('minify-js', function () {
    return gulp.src('./public/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});

gulp.task('images', function () {
    gulp.src('./public/images/*.*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('./public'))
});

gulp.task('build', [
    'minify-html', 'minify-css', 'minify-js', 'images'
]);