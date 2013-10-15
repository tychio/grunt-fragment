/*
 * grunt-sync
 * https://github.com/TyrantChiong/grunt-sync
 *
 * Copyright (c) 2013 Tychio
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('sync', 'Synchronizing code of fragments', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      encode: grunt.file.defaultEncoding,
      match: /[\S\s]+/gm
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(task) {
      task = task.orig;
      var rawContents = '',
          matchContents = '',
          targetContents = '',
          newContents = '',
          fragments = '';
      // get raw code of fragment.
      rawContents = grunt.file.read(task.src, {
        encoding: options.encode
      });
      grunt.verbose.write(options.match);
      matchContents = rawContents.match(options.match);
      if (matchContents) {
        fragments = matchContents[0];
      }

      // replace target code of fragment.
      targetContents = grunt.file.read(task.dest, {
        encoding: options.encode
      });
      newContents = targetContents.replace(options.match, function () {
        return fragments;
      });
      grunt.file.write(task.dest, newContents);
    });
  });
};
