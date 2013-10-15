/*
 * grunt-fragment
 * https://github.com/TyrantChiong/grunt-fragment
 *
 * Copyright (c) 2013 Tychio
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before synchronizing any code of fragments, copy files from fixtrues.
    copy: {
      main: {
        expand: true,
        files: [
          {
            expand: true,
            cwd: 'test/fixtures/',
            src: ['**'],
            dest: 'test/expected'
          }
        ]
      }
    },

    // Configuration to be run (and then tested).
    fragment: {
      default_options: {
        options: {
          match: /(function syncFunc \(\) \{)[\S\s]+(\}\/\/ syncFunc end)/gm
        },
        files: {
          'test/expected/js/to.js': 'test/expected/js/from.js',
        },
      },
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['copy', 'fragment', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
