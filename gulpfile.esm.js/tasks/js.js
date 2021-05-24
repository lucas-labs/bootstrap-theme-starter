

const { src, dest } = require('gulp');
import { js as config, bootstrapJsDependences as bsJSConfig } from '../config';

function js () {
    var stream = src(config.src)
        .pipe(
            dest(config.dest)
        );
    
    return stream;
};

function jsBootstrapDependencies() {
    var stream = src(bsJSConfig.src)
        .pipe(
            dest(bsJSConfig.dest)
        );

    return stream;
}

export { js, jsBootstrapDependencies };
