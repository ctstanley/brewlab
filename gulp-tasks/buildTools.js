var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var merge = require('merge-stream');

// Automatically creates components with proper boilerplate and creates associated tests and styles files with the associated boilerplate for each.  Files have reminders in the tops to take necessary action to include them.
var notifyCreate = function (path, fname, bp) {
  var thing = path.split('/').pop()
  var message = '\n\nCreating files for ' + thing.slice(0,-1) + ' named ' + fname + '...\n'
  var sourceMessage = 'Using boilerplate files in ' + path + '...\n\n'
  var react = '  -React component created: /src' + path + '/' + fname + '.jsx\n'
  var test = '  -Test file created: /test' + path + '/' + fname + '.js\n'
  var styles = '  -Styles file created: /src/utils/styles' + path + '/' + fname + '.jsx\n\n'
  var warning = 'PLEASE GO TO ALL FILES AND FOLLOW INSTRUCTIONS.\nStyles need to be hooked up manually\n\n'
  console.log(message + sourceMessage + react + test + styles + warning)
}

// Creates 3 files given a file name
var createComponentFiles = function (path,fname) {
  var bp = '/boilerplate'
  var component = gulp.src(['src' + path + bp + '.jsx'])
    .pipe(concat(fname + '.jsx'))
    .pipe(gulp.dest('src' + path))

  var test = gulp.src(['test'+ path + bp +'.js'])
    .pipe(concat(fname + '.js'))
    .pipe(gulp.dest('test' + path))

  var style = gulp.src(['src/utils/styles' + path + bp + '.jsx'])
    .pipe(concat(fname + '.jsx'))
    .pipe(gulp.dest('src/utils/styles' + path))
  notifyCreate(path, fname, bp);
  return merge(component,test,style)
};

// Creates store file given file name
var createStoreFile = function (name) {
  var component = gulp.src(['src/stores/boilerplate.jsx'])
    .pipe(concat(name + '.jsx'))
    .pipe(gulp.dest('src/stores/'))
};

// Gulp task that calls above functions
gulp.task('create', function() {
  if (gutil.env.component) {
    createComponentFiles('/components', gutil.env.component)
  } else if (gutil.env.svgIcon) {
    createComponentFiles('/components/svgIcons', gutil.env.svgIcon)
  } else if (gutil.env.page) {
    createComponentFiles('/pages', gutil.env.page)
  } else if (gutil.env.static) {
    createComponentFiles('/pages/static', gutil.env.static)
  } else if (gutil.env.store) {
    createStoreFile(gutil.env.store)
  }
});
