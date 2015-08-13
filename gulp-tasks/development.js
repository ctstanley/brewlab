var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var server = require('gulp-server-livereload');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var babelify = require('babelify');
var watch = require('gulp-watch');

// bundles .jsx files required by /src/app.jsx
var bundler = watchify(browserify({
  entries: ['./src/app.jsx'],
  transform: [babelify],
  extensions: ['.jsx'],
  debug: true, fullPaths: true,
  cache: {}, packageCache: {}
}));

// Runs bundler defined above
var bundle = function() {
  return bundler
    .bundle()
    .on('error', gutil.log)
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist'))
}

// Watches for changes
bundler.on('update', bundle)

// Calls above functions
gulp.task('build', function() {
  bundle()
});

// Development server config options
gulp.task('serve', function(done) {
  gulp.src('dist')
    .pipe(server({
      livereload: {
        enable: true,
        filter: function(filePath, cb) {
          if(/main.js/.test(filePath)) {
            cb(true)
          } else if(/style.css/.test(filePath)){
            cb(true)
          }
        }
      },
      open: true
    }));
});

// Sass concat config options
gulp.task('sass', function () {
  gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dist'));
});

// Watch sass files for changes
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
