// Task: sass
module.exports = function (gulp, plugins, config, browserSync) {
    return function () {

        var stream = gulp.src(config.in)
            .pipe(plugins.wait(500))
            .pipe(plugins.sass(config.sassOpts))
            .pipe(gulp.dest(config.out));
        
        if(config.env != 'prod') {
            stream.pipe(browserSync.stream())
        }
        
        return stream;
    };
};