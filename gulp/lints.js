'use strict';

var _config         = require('./config/paths.json'),
	gulp            = require('gulp'),
	connect			= require('./functions'),

	sassLint        = require('gulp-sass-lint'),
	jshint          = require('gulp-jshint');




gulp.task('sassLint', function() {
    return gulp.src(_config.paths.styles.src + '/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

gulp.task('jsLint', function() {
    return gulp.src(_config.paths.scripts.src + '/**/*.js')
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'));
});
