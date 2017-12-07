#!/usr/bin/env node --harmony

const fs = require("fs");
const chalk = require('chalk');
const program = require('commander');
const package = require('./package.json');
const hotcup = require('./teacup/hotcup.js');


/*/ ------------------------------------------------------------------------ /*/


/*/
 * Creates a new eye-end project
/*/
module.exports.pours = function (options) {

    const DEFAULT_TEAFILE = './bags/test.json';
    const teafile = options.tea ? options.tea : DEFAULT_TEAFILE;

    try {

        const filecontents = fs.readFileSync(teafile);
        const Teabag = JSON.parse(filecontents);
        
        // Go to target directory or .
        // Generates package.json
        // Generates task manager file
        // Builds project tree
        // Adds sugar files into specified folders
        // Installs eventual milk addons
        // If yarn is available run install in project
        // Or else if npm is available run install in project

        // FIXME : test only
        return Teabag;


    } catch (error) {
        console.log(chalk.magenta(error));
    }

};


/*/ ------------------------------------------------------------------------ /*/


module.exports.default = function () {

    program
        .version(package.version)
        .command('pour')
        .description('Creates a new eye-end project for you.')
        .option('-t, --tea <teafile>', 'Pass a custom tea.json')
        .action(pours);

    program.parse(process.argv); // Reads user input


    hotcup(); // (-:
    

};
