console.log("Starting app.");

const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')
/* access the notes.js file */

const command = process.argv
console.log(command);
