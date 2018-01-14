var gulp = require('gulp');
var log = require('fancy-log');
var plugins = require('gulp-load-plugins')();

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
        sassOpts: {
            outputStyle: 'nested',
            precison: 3,
            errLogToConsole: true,
            includePaths: [bootstrapSass.in]
        }
    };
}


function getTask(task, options) {
    return require('./tasks/' + task)(gulp, plugins, getSassOption('dev'));
}

gulp.task('sass', getTask('sass', getSassOption('dev')));

gulp.task('default', ['sass'], function () {
    gulp.watch(getSassOption('dev').watch, ['sass']);
});