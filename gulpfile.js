const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'public/scss/*.scss'])
      .pipe(sass())
      .pipe(gulp.dest("public/css"))
      .pipe(browserSync.stream());
});

// Move JS Files to public/js
gulp.task('js', function() {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js'])
      .pipe(gulp.dest("public/js"))
      .pipe(browserSync.stream());
});

// Watch Sass & Serve
gulp.task('serve', ['sass'], function() {
  browserSync.init({
      server: "./public",
      browser: "chrome"
  });
  gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'public/scss/*.scss'], ['sass']);
  gulp.watch("public/*.html").on('change', browserSync.reload);
});

// Move Fonts to public/fonts
gulp.task('fonts', function() {
return gulp.src('node_modules/font-awesome/fonts/*')
  .pipe(gulp.dest('public/fonts'))
})

// Move Font Awesome CSS to public/css
gulp.task('fa', function() {
return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
  .pipe(gulp.dest('public/css'))
})

gulp.task('default', ['js','serve', 'fa', 'fonts']);