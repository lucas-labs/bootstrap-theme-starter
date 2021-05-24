const { src, dest } = require('gulp');
import { mode, sass as config } from '../config';
import wait from 'gulp-wait';
import gulpSass from 'gulp-sass';
import { browserSync } from './browser-sync'

function sass () {
    var stream = src(config.src)
        .pipe(wait(500))
        .pipe(gulpSass(config.sassOpts))
        .pipe(dest(config.dest));

    if(!mode.prod()) {
        stream.pipe(browserSync.stream())
    }

    return stream;
};

export { sass };
