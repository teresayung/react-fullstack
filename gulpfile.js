'use strict';

var gulp = require('gulp');

var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');

var paths = {
    app: ['./templates/app/src/app.jsx'],
    js: ['./templates/app/src/**/*.*'],
};

gulp.task('browserify', function() {
    // Browserify/bundle the JS.
    browserify(paths.app)
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./templates/app/build/'))
        .pipe(connect.reload());
});

gulp.task('connect', function(){
  connect.server({
    root: 'templates/app',
    livereload: true,
    port: 8080
  });
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    gulp.watch(paths.js, ['browserify']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['connect', 'watch', 'browserify']);