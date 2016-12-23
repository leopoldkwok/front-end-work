'use strict';

var _config         = require('./config/paths.json'),
	gulp            = require('gulp'),
	connect			= require('./functions'),

	sass            = require('gulp-ruby-sass'),
	autoprefixer    = require('gulp-autoprefixer'),
	cssmin          = require('gulp-cssmin'),
	rename          = require('gulp-rename'),
	notify          = require('gulp-notify');

gulp.task('styles', function() {
    return sass(_config.paths.styles.src + '/main.scss', {
        precision: 6,
        stopOnError: true,
    })
    .on('error', sass.logError)
    .pipe(autoprefixer({
        browsers: ['IE > 10', 'last 2 Firefox versions', 'last 2 Safari versions', 'last 2 Chrome versions']
    }))
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(_config.paths.styles.dist))
    // .pipe(connect.reload())
    .pipe(notify('CSS Done!'));
});

gulp.task('ie', function () {
    return gulp.src(_config.paths.ie.src + '/grid.css')
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(_config.paths.ie.dist));
});
