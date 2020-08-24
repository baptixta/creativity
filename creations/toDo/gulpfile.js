const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
// const watch = require('gulp-watch');


gulp.task('sass', function () {
  return gulp.src('./assets/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('css', async function () {
  gulp.src('./css/*.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/'));
});
