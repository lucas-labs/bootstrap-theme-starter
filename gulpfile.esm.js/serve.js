import logger from 'fancy-log';
import { sass as sassConfig, html as htmlConfig, img as imgConfig } from './config';
import { initBrowserSync, browserSync } from './tasks/browser-sync';
import { html } from './tasks/html';
import { sass as sassTask } from './tasks/sass';
import { build } from './build';
const { watch, series } = require('gulp');

function startBrowserSync() {
    initBrowserSync();
    logger.info('BrowserSync started. Watching for changes.')

    watch(sassConfig.watch, sassTask);
    watch(htmlConfig.watch).on('change', browserSync.reload);
    watch(imgConfig.watch).on('change', browserSync.reload);
}

var serve = series(
    build,
    startBrowserSync
)

export { serve };