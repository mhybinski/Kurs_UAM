var concat = require('gulp-concat');
var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('files', function() {
  return gulp.src('*.txt')
    .pipe(concat('result.txt'))
    .pipe(gulp.dest('build/'));
});

gulp.task('js', function() {
  return gulp.src('js/program.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
    .pipe(concat('result.js'))
    .pipe(gulp.dest('build/'));
});

gulp.task('watch', function() {
  gulp.watch('js/program.js', ['js']);
  gulp.watch('*.txt', ['files']);
});

gulp.task('default', ['files', 'js', 'watch']);