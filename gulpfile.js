var gulp = require('gulp')
, minifyHtml = require('gulp-minify-html');

gulp.task('minify-html', function () {
    gulp.src('*.html')
    .pipe(minifyHtml())
    .pipe(gulp.dest('dist'));
});