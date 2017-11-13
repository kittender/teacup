const gulp = require("gulp");

module.exports = function build() {

    gulp.src([
        '!build.js',
        './assets/**/**'
    ]).pipe(gulp.dest('./dist/'));

};
