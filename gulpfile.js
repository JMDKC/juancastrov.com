var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var rev        = require('gulp-rev-append');

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

gulp.task('rev', function() {
  gulp.src('./index.html')
    .pipe(rev())
    .pipe(gulp.dest('.'));
});

// WATCH TASK =========================
gulp.task('watch', function() {
  livereload.listen();

  gulp.watch(['*.html', 'views/*.html'], ['html']);
  gulp.watch('css/*.css', ['css', 'rev']);
  gulp.watch('js/*.js', ['js', 'rev']);
});


gulp.task('default', ['watch']);