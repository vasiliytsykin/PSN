var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();


function sassToCss(inPath, outPath) {
    return gulp.src(inPath)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(outPath));
}

gulp.task('sass', function () {
    return sassToCss('src/sass/*.sass', 'src/css')
});


gulp.task('watch', ['sass'], function () {
    var sassInPath = 'src/sass/*.sass',
        allPath = 'src/**/*';

    browserSync.init({
        proxy: 'psn.loc',
        notify: false
    });

    gulp.watch(sassInPath, ['sass']).on('change', browserSync.reload);
    gulp.watch(allPath).on('change', browserSync.reload)
});