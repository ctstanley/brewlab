var gulp = require('gulp')
var webdriver = require('gulp-webdriver');
var browserSync = require('browser-sync');
// From http://twin.github.io/selenium-testing-workflow-with-webdriverio/

gulp.task('serve:test', function (done) {
  browserSync({
    logLevel: 'silent',
    notify: false,
    open: false,
    port: 9000,
    server: { baseDir: ['dist'] },
    ui: false
  }, done);
});


gulp.task('run:tests', ['serve:test'], function () {
  return gulp.src('./test/**/*.js', {read: false})
    .pipe(webdriver({
      desiredCapabilities: {
        browserName: 'chrome',
        platform: 'OS X 10.10',
        version: '43.0',
      },
      waitforTimeout: 10000,
    }))
    .once('end', function () {
      browserSync.exit();
    });
});
