'use strict';

var gulp            = require('gulp'),
	
	url             = process.cwd(),
    connect         = require('gulp-connect-multi')(),
    del             = require('del');


// Connnect
gulp.task('connect', connect.server({
    root: [url],
    port: 9999,
    livereload: true,
    open: {
        browser: 'Google Chrome' // if not working OS X browser: 'Google Chrome'
    }
}));

// Clean
gulp.task('clean', function() {
    return del('dist');
});