import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import uglify from 'gulp-uglify';
import cleanCSS from 'clean-css';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import imagemin from 'gulp-imagemin';

gulp.task("sass", function() {
    return gulp
        .src("app/sass/*.sass")
        .pipe(sass({outputStyle: "compressed"}))
        .pipe(autoprefixer())
        .pipe(concat("style.css"))
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest("build/css"));
});

gulp.task("csslibs", function() {
    return gulp
        .src("node_modules/swiper/css/swiper.css")
        .pipe(cleanCSS())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest("build/libs/css"))
});

gulp.task("jslibs", function() {
    return gulp
        .src(["node_modules/jquery/dist/jquery.min.js", "node_modules/swiper/js/swiper.min.js"])
        .pipe(concat("libs.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("build/libs/js"));
});

gulp.task("mainjs", function() {
    return gulp
        .src("app/js/*.js")
        .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest("build/js"));
});

gulp.task("fonts", function() {
    return gulp
        .src("app/fonts/*")
        .pipe(gulp.dest("build/fonts"));
});

gulp.task("img", function() {
    return gulp
        .src("app/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("build/img"));
});

gulp.task("svg", function() {
    return gulp
        .src("app/svg/*.svg")
        .pipe(gulp.dest("build/svg"));
});

gulp.task("watch", function() {
    gulp.watch("app/sass/*.sass", gulp.parallel("sass"));
    gulp.watch("app/js/*.js", gulp.parallel("mainjs"));
});

gulp.task("default", function() {
    gulp.parallel("watch");
});