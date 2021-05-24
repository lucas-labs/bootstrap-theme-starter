import clean from 'gulp-clean';
import { src, dest } from 'gulp';
import { basePath, mode } from '../config';

function cleanBasePath(cb) {
    if(mode.prod()) {
        return src(basePath(), { read: false, allowEmpty: true })
            .pipe(
                clean()
            );
    } else {
        cb();
    }
}

export { cleanBasePath as clean };
