// Require gulp
var gulp = require('gulp');

// Require gulp tasks
require('require-dir')('./gulp-tasks');

// Default production task - supporting files in /gulp-tasks/production.js
gulp.task('production',['serve:production'])

// Default development task - supporting files in /gulp-tasks/development.js
gulp.task('default', ['build', 'serve', 'sass', 'watch']);

// Default test task - supporting files in /gulp-tasks/test.js
gulp.task('test',['run:tests']);
