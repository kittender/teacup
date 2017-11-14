const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const minify = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const LessAutoprefix = require('less-plugin-autoprefix');
const autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

const basepath = './src/less/';
const destpath = './dist/';

const source = [
    basepath + '00_vendor/**/*.less',
    basepath + '01_settings/variables.less',
    basepath + '01_settings/responsive.less',
    basepath + '01_settings/layout.less',
    basepath + '01_settings/layers.less',
    basepath + '02_tools/**/*.less',
    basepath + '03_generic/**/*.less',
    basepath + '04_elements/**/*.less',
    basepath + '05_objects/**/*.less',
    basepath + '06_components/**/*.less',
    basepath + '07_modules/**/*.less'
];

module.exports = function build(filename, ENV) {

    switch (ENV) {
        case "staging":
            gulp.src(source)
                .pipe(concat(filename))
                .pipe(less({
                    plugins: [autoprefix]
                }))
                .pipe(gulp.dest(destpath));
            break;
            
        case "prod":
            gulp.src(source)
                .pipe(concat(filename))
                .pipe(less({
                    plugins: [autoprefix]
                }))
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
                .pipe(less({
                    plugins: [autoprefix]
                }))
                .pipe(rename({
                    suffix: ".map"
                }))
                .pipe(sourcemaps.write())
                .pipe(gulp.dest(destpath));
            break;
    }

};
