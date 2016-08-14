
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload');

gulp.task('styles', function() {
    gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(livereload());
});

//Watch task
gulp.task('default',function() {
    livereload.listen();
    gulp.watch('scss/*.scss',['styles']);
});
