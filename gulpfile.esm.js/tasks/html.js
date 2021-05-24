const { src, dest } = require('gulp');
import { html as config } from '../config';

function html () {
    var stream = src(config.src)
        .pipe(
            dest(config.dest)
        );
    
    return stream;
};

export { html };
