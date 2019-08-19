

const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const minify = require('gulp-minify');
const del = require('del');

sass.compiler = require('node-sass');

// Sass 使用內建壓縮
function sassToCSS() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed', // 這邊就可以壓縮
    }).on('error', sass.logError)) // 有錯誤會 log 出來
    .pipe(gulp.dest('./dist/css')); //
}

// Babel 搭配 minify-js
function runBabel(done) {
  gulp.src('./lib/*.js')
    .pipe(babel())
    .pipe(minify())
    .pipe(gulp.dest('./dist/js'));
  done();
}

// 清空檔案
function clean() {
  return del(['dist']);
}

const test = gulp.series(clean, sassToCSS, runBabel);
gulp.task('default', test);
