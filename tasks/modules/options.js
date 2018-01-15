var source = 'src/';
var dist = 'out/';
var bootstrapSass = { in: './node_modules/bootstrap/scss/' };

var input = watch = source;

function getDest(env) {
    return ((env == 'prod') ? dist : source);    
}

exports.sass = function(env) {
    return {
        src: input + 'scss/*.scss',
        dest: getDest(env) + 'css/',
        watch: watch + 'scss/**/*',
        env: env,
        sassOpts: {
            outputStyle: ((env=='prod') ? 'compressed' : 'nested'),
            precison: 3,
            errLogToConsole: true,
            includePaths: [bootstrapSass.in]
        }
    };
}

exports.bootstrap_js = function(env) {
    return {
        src: ['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js','node_modules/popper.js/dist/umd/popper.min.js'],
        dest: getDest(env) + 'js/',
        watch: watch + 'js/**/*.js',
        env: env
    };
}

exports.html = function(env) {
    return {
        src: input + "**/*.html",
        watch: watch + "**/*.html",
        dest: getDest(env),
        env: env
    }
}

exports.js = function(env) {
    return {
        src: input + "**/*.js",
        dest: getDest(env),
        env: env
    }
}