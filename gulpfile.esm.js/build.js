import { html } from './tasks/html';
import { js, jsBootstrapDependencies } from './tasks/js';
import { sass } from './tasks/sass';
import { img } from './tasks/img';
import { clean } from './tasks/clean';

const { parallel, series } = require('gulp');

var build = series(
    clean,
    parallel(
        clean,
        html,
        js,
        jsBootstrapDependencies,
        sass,
        img
    )    
);

export { build };
