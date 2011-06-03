#!/usr/bin/env node

var os      = require('os')
  , ntodo   = require('./ntodo')
  , opt     = require('optimist').argv
  , colors  = require('colors')
  , sys     = require('sys');
    
/**
 * Run 
 *
 * @api private
 */ 
run = function() {
  path = opt._;
  if (opt._.length === 0) {
      opt._ = null;
  }
  opt.help = opt.help || opt.h;
  opt.path = opt.path || opt.p;
  if (opt.help) {
    help();
  }else{
    if (path!="" || opt.path) {
      dir = path[0] || opt.path;
      if (dir[0]==null && opt.path==true) 
        return console.log("\t\nmissing text! try again\n".red.bold);
       ntodo.search(dir)
    }else{
      help();
    }
  }
}
/**
 * Get yam user
 *
 * @api private
 */
function help(){
  console.log("\nntodo <PATH>\n".green)
  console.log("\tExamples:".white.bold)
  console.log("\t\tntodo .".green)
  console.log("\t\tntodo ../".green)
  console.log("\t\tntodo -p ../".green)
  console.log("\n")
}
run();
