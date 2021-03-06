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

  gulp.watch(['*.html', 'views/*.html'], ['html', 'rev']);
  gulp.watch('css/*.css', ['css']);
  gulp.watch('js/*.js', ['js']);
});


gulp.task('default', ['watch']);