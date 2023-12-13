let gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    browserSync = require('browser-sync'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
    return gulp.src('layout/scss/**/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        // .pipe(sass({outputStyle: 'compressed'}))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 8 versions']
        }))
        .pipe(gulp.dest('layout/css'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function(){
    return gulp.src('layout/*.html')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('js', function(){
    return gulp.src('layout/js/*.js')
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "layout/"
        }
    });
});

gulp.task('watch', function(){
    gulp.watch('layout/scss/**/*.scss', gulp.parallel('sass'))
    gulp.watch('layout/*.html', gulp.parallel('html'))
    gulp.watch('layout/js/*.js', gulp.parallel('js'))
});

gulp.task('default', gulp.parallel('sass', 'watch', 'browser-sync'))