// post-install.js

/**
 * Script to run after npm install
 *
 * Copy selected files to user's project directory
 */

'use strict';

// Require genty-copy, to safely copying files without erasing
const gentlyCopy = require('gently-copy');

// Require prompt to ask user for destination directory
const prompt = require('prompt');

// Get fonts folder to copy
const fonts = ['fonts'];

// Get current user path
const userPath = process.env.INIT_CWD;

// Ask user input for fonts directory in their project
console.log('Please enter the directory where you want the fonts to be installed (default to `fonts`) :');

prompt.start();

prompt.get([{
  name: 'dir',
  required: true,
  default: 'fonts'
}], function(error, result) {
  if(error) {
    return onError(error);
  }

  // Copy files to selected directory
  gentlyCopy(fonts, process.env.INIT_CWD + '/' + result.dir);
});

function onError(error) {
  console.log(error);
  return 1;
}
