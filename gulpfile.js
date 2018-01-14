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
        in: input + 'scss/*.scss',
        out: output + 'css/',
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

function getTask(task, options) {
    return require('./tasks/' + task)(gulp, plugins, options, browserSync);
}

sassTask = getTask('sass', getSassOption('dev'))
initBrowserSyncTask = getTask('init-browser-sync', null);

gulp.task('sass', sassTask);

gulp.task('serve', ['sass'], function() {
    initBrowserSyncTask();

    gulp.watch(getSassOption('dev').watch, ['sass']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);