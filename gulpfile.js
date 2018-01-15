var gulp = require('gulp');
var log = require('fancy-log');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();
var options = require('./tasks/modules/options');
const DEV = 'dev';
const PROD = 'prod';

function getTask(task, options) {
    return require('./tasks/' + task)(gulp, plugins, options, browserSync);
}

/* Build task */
gulp.task('build', function () {
    var copyHtmlFilesTask = getTask('copy-html-files-to-out', options.html(PROD));
    var processJs = getTask('process-js', options.js(PROD));
    var sassTask = getTask('sass', options.sass(PROD));
    var imgTask = getTask('process-img', options.img(PROD));

    log("Generating HTML files");
    copyHtmlFilesTask();

    log("Generating JS files");
    processJs();

    log("Compiling SASS and minifying CSS output");
    sassTask();

    log("Processing and optimizing images");
    imgTask();
});

/* Tasks */
var sassTask = getTask('sass', options.sass(DEV));
gulp.task('sass', sassTask);

var copyJsTask = getTask('copy-bootstrap-js', options.bootstrap_js(DEV));
gulp.task('js', copyJsTask);

var initBrowserSyncTask = getTask('init-browser-sync', null);
gulp.task('serve', ['sass', 'js'], function() {
    initBrowserSyncTask();
    
    gulp.watch(options.sass(DEV).watch, ['sass']);
    gulp.watch(options.bootstrap_js(DEV).watch).on('change', browserSync.reload);
    gulp.watch(options.html(DEV).watch).on('change', browserSync.reload);
    gulp.watch(options.img(DEV)).watch.on('change', browserSync.reload);
});

gulp.task('default', ['serve']);