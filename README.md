# gulp-ngTemplateUrl [![Coverage Status](https://coveralls.io/repos/github/igorpsantana/gulp-ngtemplateurl/badge.svg?branch=master)](https://coveralls.io/github/igorpsantana/gulp-ngtemplateurl?branch=master) [![Build Status](https://travis-ci.org/igorpsantana/gulp-ngtemplateurl.svg?branch=master)](https://travis-ci.org/igorpsantana/gulp-ngtemplateurl) [![npm version](https://badge.fury.io/js/gulp-ngtemplateurl.svg)](https://badge.fury.io/js/gulp-ngtemplateurl)

Gulp plugin to replace all your `templateUrl` development code with `template`. It will get the html file from the `templateUrl` path, transform into a single string and inject it into `template` option.

# Install

```
  npm install gulp-ngtemplateurl --save-dev
```
or
```
  npm i gulp-ngtemplateurl --save-dev
```

# Usage

You should use **gulp-ngtemplateurl** within a gulp task:
```javascript
'use strict';

var gulp        = require('gulp')
var templateUrl = require('gulp-ngtemplateurl')


gulp.task('default', function(){
  return gulp.src('./code/*.js')
          .pipe(tUrl())
          .pipe(gulp.dest('./dist/'))
})

```
You can also use it with streams, something like this:

```javascript
var gulp        = require('gulp'),
    templateUrl = require('gulp-ngtemplateurl'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream'),
    entries     = ['./public/app.js'],
    options     = assign({}, browserify.args, { entries }),
    bwInstance  = browserify(options)

bwInstance.on('update', bundle);

gulp.task('bundle', bundle);

function bundle(){
  return bwInstance.bundle()
            .pipe(source('bundle.js'))
            .pipe(templateUrl())
            .pipe(buffer())
            .pipe(gulp.dest('./public/dist'));
}
```

## TODO

- [ ] Exception Handler
- [ ] At least 80% code-coverage  
- [ ] Optimize finding and replacing `templateUrl` with `template `
