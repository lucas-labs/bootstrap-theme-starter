import { html } from './tasks/html';
import { js, jsBootstrapDependencies } from './tasks/js';
import { sass } from './tasks/sass';
import { img } from './tasks/img';
import { mode } from './config';

const { parallel } = require('gulp');

var build = parallel(
    
    html,
    js,
    jsBootstrapDependencies,
    sass,
    img
);

export { build };