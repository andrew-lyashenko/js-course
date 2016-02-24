var gulp    = require('gulp')
  , connect = require('gulp-connect');

gulp.task('connect', function() {
  return connect.server({
    port: 8000,
    livereload: true,
    root: './'
  });
});

gulp.task('livereload', function() {
  return gulp.src('./*.js').pipe(connect.reload());
});

gulp.task('watch', function() {
  return gulp.watch('./*.js', ['livereload']);
});

gulp.task('default', ['connect', 'watch']);