'use strict';

var _config         = require('./config/paths.json'),
	gulp            = require('gulp'),
	imagemin        = require('gulp-imagemin');



gulp.task('images', function() {
    return gulp.src(_config.paths.images.src + '/*')
        .pipe(imagemin())
        .pipe(gulp.dest(_config.paths.images.dist));
});