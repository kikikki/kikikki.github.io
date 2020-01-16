var gulp = require('gulp');
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename'); 



gulp.task('less', function() {
    return gulp.src('app/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('app/css'))
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) 
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({stream: true}));
        
});
gulp.task('browser-sync', function() { 
    browserSync({ 
        server: { 
            baseDir: 'app' 
        },
        notify: false 
    });
});

gulp.task('css-min',function(){
    return gulp.src('app/css/*.css')
        .pipe(cssnano())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('app/css'));

});

gulp.task('watch', function() {
    gulp.watch('app/less/*.less', gulp.parallel('less'));
});
gulp.task('default', gulp.parallel('css-min', 'less', 'browser-sync', 'watch'));