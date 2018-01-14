var gulp = require('gulp');
var log = require('fancy-log');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();

// constantes
var source = 'src/';
var dist = 'out/';
var bootstrapSass = { in: './node_modules/bootstrap/scss/' };

function getSassOption(env) {
    var input = watch = source;
    var output = ((env == 'prod') ? dist : source);

    return {
        src: input + 'scss/*.scss',
        dest: output + 'css/',
        watch: watch + 'scss/**/*',
        env: env,
        sassOpts: {
            outputStyle: 'nested',
            precison: 3,
            errLogToConsole: true,
            includePaths: [bootstrapSass.in]
        }
    };
}

function getJsOption(env) {
    var input = watch = source;
    var output = ((env == 'prod') ? dist : source);

    return {
        src: ['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js'],
        dest: output + 'js/',
        watch: watch + 'js/*.js',
        env: env
    };
}

function getTask(task, options) {
    return require('./tasks/' + task)(gulp, plugins, options, browserSync);
}

/* Tasks */

var sassTask = getTask('sass', getSassOption('dev'))
gulp.task('sass', sassTask);

var copyJsTask = getTask('copy-js', getJsOption('dev'))
gulp.task('js', copyJsTask);

var initBrowserSyncTask = getTask('init-browser-sync', null);
gulp.task('serve', ['sass', 'js'], function() {
    initBrowserSyncTask();
    
    gulp.watch(getSassOption('dev').watch, ['sass']);
    gulp.watch(getJsOption('dev').watch).on('change', browserSync.reload);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);