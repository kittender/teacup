const gulp = require('gulp');
const myth = require('gulp-myth');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const minify = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

const basepath = './src/css/';
const destpath = './dist/';

const source = [
    basepath + '00_vendor/**/*.css',
    basepath + '01_settings/variables.css',
    basepath + '01_settings/layout.css',
    basepath + '01_settings/layers.css',
    basepath + '02_tools/**/*.css',
    basepath + '03_generic/**/*.css',
    basepath + '04_elements/**/*.css',
    basepath + '05_objects/**/*.css',
    basepath + '06_components/**/*.css',
    basepath + '07_modules/**/*.css'
];

module.exports = function build(filename, ENV) {

    switch (ENV) {
        case "staging":
            gulp.src(source)
                .pipe(concat(filename))
                .pipe(myth())
                .pipe(gulp.dest(destpath));
            break;
            
        case "prod":
            gulp.src(source)
                .pipe(concat(filename))
                .pipe(myth())
                .pipe(minify())
                .pipe(rename({
                    suffix: ".min"
                }))
                .pipe(gulp.dest(destpath));
            break;
            
        default:
            gulp.src(source)
                .pipe(sourcemaps.init())
                .pipe(concat(filename))
                .pipe(myth())
                .pipe(rename({
                    suffix: ".map"
                }))
                .pipe(gulp.dest(destpath));
            break;
    }

};
