'use strict';

var _config         = require('./config/paths.json'),
	gulp            = require('gulp');


gulp.task('fonts', function() {
    return gulp.src(_config.paths.fonts.src + '/*')
        .pipe(gulp.dest(_config.paths.fonts.dist));
});