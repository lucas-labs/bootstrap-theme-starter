const { src, dest } = require('gulp');
import imagemin from 'gulp-imagemin';
import { img as config } from '../config';

function img () {
    var stream = src(config.src)
        .pipe(imagemin({verbose: true}))
        .pipe(dest(config.dest));

    return stream;
};

export { img };
