import { js as config, bootstrapJsDependences as bsJSConfig } from '../config';
import { src, dest } from 'gulp';

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
