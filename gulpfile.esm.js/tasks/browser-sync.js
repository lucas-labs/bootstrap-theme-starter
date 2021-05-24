import * as bs from 'browser-sync'

const browserSync = bs.create();

function initBrowserSync() {
    browserSync.init({
            server: "./src"  
    });
};

export {
    browserSync, 
    initBrowserSync
}