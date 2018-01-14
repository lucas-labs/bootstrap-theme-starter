// Task: sass
module.exports = function (gulp, plugins, config) {
    return function () {
        return gulp
            .src(config.in)
            .pipe(plugins.sass(config.sassOpts))
            .pipe(gulp.dest(config.out));
    };
};