var gulp       = require('gulp');
var livereload = require('gulp-livereload');

// TASKS FOR LIVE RELOADING ==========
gulp.task('css', function() {
  gulp.src('css/*.css').pipe(livereload());
});

gulp.task('js', function() {
  gulp.src('js/*.js').pipe(livereload());
});

gulp.task('html', function() {
  gulp.src(['*.html', 'views/*.html']).pipe(livereload())
});

// WATCH TASK =========================
gulp.task('watch', function() {
  livereload.listen();

  gulp.watch(['*.html'], ['html']);
  gulp.watch('css/*.css', ['css']);
  gulp.watch('js/*.js', ['js']);
});


gulp.task('default', ['watch']);