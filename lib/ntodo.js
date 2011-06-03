var fs = require('fs')
  , colors = require('colors')
  , path = require('path');

/**
 * Search for Todos
 *
 * @param {Pointer} callback
 * @api public
 */
exports.search = function(path){	
    console.log("\n::::::::::::::::::::::::::::::::::::::::".green)
    console.log(":::  Searching TODOs here: ".green + path)
    console.log("::::::::::::::::::::::::::::::::::::::::\n".green)
    traverseDirectory(path)
}

/**
 * Traverse Directory
 *
 * @param {Object} file
 * @api private
 */

function traverseDirectory(file){
  fs.readdir(file, function(err, files){
          if (err) throw err;
          files.map(function(path){
            return file + '/' + path;
          }).forEach(parseFile);
  });
}

/**
 * Parse File
 *
 * @param {Object} file
 * @api private
 */

function parseFile(file) {
  // ensure file exists
    fs.lstat(file, function(err, stat){
      if (err) throw err;
      // file
      if (stat.isFile()) {
        if(file.match(/\.js$/) ||
           file.match(/\.jade$/) ||
           file.match(/\.styl$/) )
           lookForTodos(file);
      // directory
      } else if (stat.isDirectory()) {
        //console.log(file);
        traverseDirectory(file)
      }
    });
}

/**
 * Look for Todos! Whooohoo
 *
 * @param {Object} file
 * @api private
 */

function lookForTodos(file){
  fs.readFile(file, 'utf8', function(err, data){
    if (err) throw err;
      var regex = new RegExp(/\/\/.*TODO\:\s.*?\n/g);
      var test = data.match(regex);
      if(test){
        console.log('FILE: '.green.bold + file.green);
        console.log('\n' +test +'');
      }
  });
}

//  TODO: Cache all files with the datestamp, do not parse if they haven't been updated
//  TODO: Integrate with Git? Perhaps
//  TODO: OH going crazy here, integrate with Gihub?? Imjustaying
//  TODO: Add folder exclusion for /public/javascript/pluggins for instance
//  TODO: Ok, of course add file water ;)
