'use strict';

// Load plugins
var _config         = require('./gulp/config/paths.json'),
    url             = process.cwd(),
    requiredir      = require('requiredir'),
    connect         = require('./gulp/functions'),


    tasks           = requiredir('./gulp'),

    gulp            = require('gulp');


// Default task
gulp.task('default', ['clean'],  function() {
    gulp.start('images', 'sassLint', 'styles','scripts:vendor', 'ie', 'fonts', 'ng', 'connect', 'watch');
});

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch(_config.paths.styles.src + '/**/*.scss', ['sassLint', 'styles']);

  // Watch .js files
  gulp.watch(_config.paths.scripts.src + '/**/*.js', ['jsLint', 'ng']);
});
