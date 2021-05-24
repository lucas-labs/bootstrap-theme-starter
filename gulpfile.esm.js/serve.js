import { watch, series } from 'gulp';
import { sass as sassConfig, html as htmlConfig, img as imgConfig } from './config';
import { initBrowserSync, browserSync } from './tasks/browser-sync';
import { sass as sassTask } from './tasks/sass';
import { build } from './build';

import logger from 'fancy-log';

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
