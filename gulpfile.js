const gulp = require('gulp-help')(require('gulp'));

const build = require('./src/css/build.js');
/*const build = require('./src/less/build.js');*/
/*const build = require('./src/sass/build.js');*/

const filename = 'style.css';

gulp.task('default', 'Builds development, staging and production files.', ['dev', 'staging', 'prod']);

gulp.task('dev', 'Builds source mapped version.', function () {
    return build(filename, "dev");
});

gulp.task('staging', 'Builds prefixed, unminified version.', function () {
    return build(filename, "staging");
});

gulp.task('prod', 'Builds prefixed, minified version.', function () {
    return build(filename, "prod");
});