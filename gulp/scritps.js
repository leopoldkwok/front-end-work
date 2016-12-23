'use strict';

var _config         = require('./config/paths.json'),
	gulp            = require('gulp'),
	connect			= require('./functions'),

	sourcemaps      = require('gulp-sourcemaps'),
	concat          = require('gulp-concat'),
	rename          = require('gulp-rename'),
	browserify      = require('gulp-browserify'),
	uglify          = require('gulp-uglify'),
	notify          = require('gulp-notify'),
    vendor          = ['./node_modules/jquery/dist/jquery.js'];

gulp.task('scripts', function() {
  return gulp.src(_config.paths.scripts.src + '/custom.js')
    .pipe(sourcemaps.init())
    .pipe(concat('/custom.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(browserify())
    .pipe(uglify({mangle: false}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(_config.paths.scripts.dist))
    // .pipe(connect.reload())
    .pipe(notify('JS Done!'));
});

// added jquery

gulp.task('scripts:vendor', function() {
    return gulp.src(vendor)
        .pipe(gulp.dest(_config.paths.scripts.dist));
});


gulp.task('ng', function() {
    return gulp.src(_config.paths.scripts.src + '/ng/app.js')
        .pipe(sourcemaps.init())
        .pipe(concat('/app.js'))
        .pipe(rename({ suffix: '.min' }))
        .pipe(browserify())
        .pipe(uglify({mangle: false}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(_config.paths.scripts.dist))
        // .pipe(connect.reload())
        .pipe(notify('Ng Done!'));
});