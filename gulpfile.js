// File written by Hassan Mirza
// twitter: https://twitter.com/HassanmWork
// twitterId: @HassanmWork
// github: https://github.com/HassanmBY
// githubId: @HassanmBY
import pkg from "gulp";
const { src, dest, watch, series } = pkg;
import imagemin from "gulp-imagemin";
import gulpSass from "gulp-sass";
import sassModule from "sass";
const sass = gulpSass(sassModule);
import postcss from "gulp-postcss";
import cssnano from "cssnano";
import terser from "gulp-terser";
import rename from "gulp-rename";
import browserSync from "browser-sync";
const browsersync = browserSync.create();

function browsersyncReload(reload) {
    browsersync.reload();
    reload();
}

function htmlTsk() {
    return src("./src/*.html").pipe(dest("./dist/")).pipe(browserSync.stream());
}

function styleTsk() {
    return src("./src/**/**/*.scss", { sourcemaps: true })
        .pipe(sass())
        .pipe(dest("./dist/", { sourcemaps: "." }))
        .pipe(browserSync.stream());
}

function imageTsk() {
    return src("./src/assets/**/*.{jpg,jpeg,png,gif}")
        .pipe(imagemin())
        .pipe(dest("./dist/assets/"));
}

function videoTsk() {
    return src("./src/assets/**/*.{mp4,webm,ogg,mp3,wav,flac,MP4}").pipe(
        dest("./dist/assets/")
    );
}

function scriptsTsk() {
    return (
        src("./src/**/libs/**.{mjs,js}", { sourcemaps: true })
        .pipe(
            terser({
                toplevel: false,
                keep_fnames: true,
            })
        )
        .pipe(rename({ suffix: ".min" }))
        .pipe(dest("./dist/", { sourcemaps: "." }))
        .pipe(browserSync.stream()) &&
        src("./src/**/prod_**.js", { sourcemaps: false })
        .pipe(
            rename(opt => {
                opt.basename = opt.basename.replace("prod_", "");
            })
        )
        .pipe(dest("./dist/", { sourcemaps: "." }))
        .pipe(browserSync.stream())
    );
}

function loadTsk(reload) {
    browserSync.init({
        server: {
            baseDir: "./dist",
        },
    });
    reload();
}

function reloadTsk() {
    browserSync.reload();
}

function watchTsk() {
    watch("./src/*.html").on("change", series(htmlTsk, reloadTsk));
    watch("./src/**/*.scss").on("change", series(styleTsk, scriptsTsk, reloadTsk));
    watch("./src/**/*.js").on("change", series(styleTsk, scriptsTsk, reloadTsk));
}

export let htmlTask = htmlTsk;
export let styleTask = styleTsk;
export let imageTask = imageTsk;
export let videoTask = videoTsk;
export let scriptsTask = scriptsTsk;
export let loadTask = loadTsk;
export let reloadTask = reloadTsk;
export let watchTask = watchTsk;

export default series(
    htmlTsk,
    styleTsk,
    imageTsk,
    videoTsk,
    scriptsTsk,
    loadTsk,
    watchTsk
);