import gulpModeCtor from 'gulp-mode';

var mode = gulpModeCtor({
    modes: ["prod", "dev"],
    default: "development",
    verbose: false
});

const source = 'src/';
const dist = 'out/';

export function basePath() {
    return ((mode.prod()) ? dist : source);    
}

export var html = {
    src: source + "**/*.html",
    dest: basePath(),
    watch: source + "**/*.html"
}

export var js = {
    src: source + "**/*.js",
    dest: basePath()
}

export var img = {
    src: source + "img/**/*.*",
    dest: basePath() + "img/",
    watch: source + "img/**/*.*"
}

export var general = {
    dest: basePath()
}

export var sass = {
    src: source + 'scss/*.scss',
    dest: basePath() + 'css/',
    watch: source + 'scss/**/*',
    sassOpts: {
        outputStyle: ((mode.prod()) ? 'compressed' : 'nested'),
        precison: 3,
        errLogToConsole: true,
        includePaths: ['./node_modules/bootstrap/scss/']
    }
}

export var bootstrapJsDependences = {
    src: ['node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'],
    dest: basePath() + 'js/',
    watch: source + 'js/**/*.js'
}

export { mode };
