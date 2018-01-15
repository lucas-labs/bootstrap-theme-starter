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

/* Tasks */
var sassTask = getTask('sass', options.sass(DEV))
gulp.task('sass', sassTask);

var copyJsTask = getTask('copy-js', options.js(DEV))
gulp.task('js', copyJsTask);

var initBrowserSyncTask = getTask('init-browser-sync', null);
gulp.task('serve', ['sass', 'js'], function() {
    initBrowserSyncTask();
    
    gulp.watch(options.sass(DEV).watch, ['sass']);
    gulp.watch(options.js(DEV).watch).on('change', browserSync.reload);
    gulp.watch(options.html(DEV).watch).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);