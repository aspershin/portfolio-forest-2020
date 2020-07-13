const { src, dest } = require('gulp');
const gulp = require("gulp");

// плагины галпа, объявлять не нужно, используем как $gp.имяПлагина (без приставки gulp-)
const $gp = require("gulp-load-plugins")();

const browsersync = require("browser-sync").create();
const reload = browsersync.reload;
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const webpack = require("webpack");
const webpackConfig = require("./webpack.config.js");
const gulpWebpack = require('webpack-stream');
const moduleImporter = require("sass-module-importer");
const del = require("del");
const svgmin = require("gulp-svgmin");
const cheerio = require("cheerio");
const gulpPug = require("gulp-pug");
const pugLoader = require("pug-loader");
const loader = require('sass-loader');
const plumber = ("gulp-plumber");
const gulpCandged = require("gulp-changed");

const SRC_DIR = "src";
const DIST_DIR = "dist";
const ROOT_PATH = `./${DIST_DIR}/`;

// пути
const paths = {
  build: {
    pug: DIST_DIR + "/",
    css: DIST_DIR + "/assets/styles/",
    js: DIST_DIR + "/assets/scripts/",
    img: DIST_DIR + "/assets/img/",
    fonts: DIST_DIR + "/assets/fonts",
  },
  src: {
    pug: `${SRC_DIR}/views/**/*.pug`,
    css: SRC_DIR + "/assets/styles/**/*.scss",
    js: SRC_DIR + "/assets/scripts/*.js",
    img: SRC_DIR + "/assets/img/**/*.{jpg,png,svg,gif,ico,webp}",
    fonts: SRC_DIR + "/assets/fonts/*.ttf",
  },
  watch: {
    html: SRC_DIR + "/**/*.html",
    css: SRC_DIR + "/assets/styles/**/*.scss",
    js: SRC_DIR + "/assets/scripts/*.js",
    img: SRC_DIR + "/assets/img/**/*.{jpg,png,svg,gif,ico,webp}"
  },
  clean: ROOT_PATH
}

// Таски галпа

// dev сервер вариант 2
// function browserSync() {
//   browsersync.init({
//     baseDir: "ROOT_PATH",
//     proxy: "http://localhost:3000",
//     noInfo: false,
//     port: 8080,
//     open: true,
//     notify: false
//   })
// }

// gulp.task('pug', function () {
//   return gulp.src(paths.src.pug)
//     .pipe(pug({
//       pretty: true
//     }))
//     .pipe(gulp.dest(paths.build.pug))
// })

// function html() {
//   return src(paths.src.pug)
//   .pipe(dest(paths.build.pug))
//   .pipe(browsersync.stream())
// }

// function pug() {
//   return src(paths.src.pug)
//   .pipe(dest(paths.build.pug))
//   .pipe(gulpPug({
//     pretty: true
//   }))
//   .pipe(browsersync.stream())
// }

// gulp.task('pug', function () {
//   return gulp.src(paths.src.pug)
//     .pipe(plumber())
//     .pipe(gulpPug({
//       pretty: true
//     }))
//     .pipe(gulp.dest(paths.build.pug))
// });

// dev сервер вариант 3
// function browserSync() {
//   browsersync.init({
//     baseDir: ROOT_PATH,
//     port: 3000,
//     notify: false,
//     noInfo: false
//   })
// }

// сервер node.js
gulp.task("nodemon", done => {
  let started = false;
  $gp
    .nodemon({
      script: "server.js",
      env: { NODE_ENV: "development" },
      watch: "server.js"
    })
    .on("start", () => {
      if (started) return;
      done();
      started = true;
    });
});

// dev сервер + livereload (встроенный) вариант 1
gulp.task(
  "server",
  gulp.series("nodemon", done => {
    browserSync.init({
      proxy: "http://localhost:3000",
      noInfo: false,
      port: 8080,
      open: true
    });
  })
);

// Очистка папки dist
// function clean() {
//   return del(paths.global);
// }

// стили scss
// function styles() {
//   return gulp.src(paths.styles.main)
//     .pipe(sourcemaps.init())
//     .pipe(postcss(require("./postcss.config")))
//     .pipe(sourcemaps.write())
//     .pipe(rename("main.min.css"))
//     .pipe(gulp.dest(paths.styles.dest))
// }

// переносим шрифты
// gulp.task("fonts", () => {
//   return gulp.src(paths.fonts.src).pipe(gulp.dest(paths.fonts.dest));
// });

// очистка

// собираем скрипты webpack

// function scripts() {
//   return gulp.src(paths.scripts.src)
//     .pipe(gulpWebpack(webpackConfig, webpack))
//     .pipe(gulp.dest(paths.scripts.dest));
// }

// gulp.task("scripts", () => {
//   return gulp
//     .src(`${SRC_DIR}/scripts/main.js`)
//     .pipe($gp.plumber())
//     .pipe($gp.webpack(webpackConfig, webpack))
//     .pipe(gulp.dest(`${DIST_DIR}/scripts`))
//     .pipe(reload({ stream: true }));
// });

// просто переносим картинки
// gulp.task("images", () => {
//   return gulp
//     .src([`${paths.images.src}/images/**/*.*`, `!${paths.images.src}/images/icons/*.*`])
//     .pipe(gulp.dest(`${paths.images.dest}`));
// });

// галповский вотчер
// gulp.task("watch", () => {
//   gulp.watch(`${SRC_DIR}/styles/**/*.scss`, gulp.series("styles"));
//   gulp.watch(`${SRC_DIR}/images/**/*.*`, gulp.series("images"));
//   gulp.watch(`${SRC_DIR}/scripts/**/*.js`, gulp.series("scripts"));
//   gulp.watch(`${SRC_DIR}/fonts/*`, gulp.series("fonts"));
//   gulp.watch(`views/pages/*`).on('change', reload);
// });

// GULP:RUN
// gulp.task(
//   "default",
//   gulp.series(
//     clean,
//     gulp.parallel(styles, "images", "fonts", scripts),
//     gulp.parallel("watch", "server")
//   )
// );

// GULP:RUN
// const build = gulp.series(html, pug);
// const watch = gulp.parallel(build, browserSync);

// exports.html = html;
// exports.pug = pug;
// exports.build = build;
// exports.watch = watch;
// exports.default = watch;

gulp.task(
  "default",
  gulp.series(
    gulp.parallel("nodemon", "server")
  )
);