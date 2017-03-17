/*!
 * grunt-assemble-wordcount <https://github.com/assemble/grunt-assemble-wordcount>
 *
 * Copyright (c) 2013-2015, 2017, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    eslint: {
      src: ['Gruntfile.js', 'index.js']
    },

    assemble: {
      options: {
        plugins: ['index.js'],
        layout: 'default.hbs',
        layoutdir: 'test/fixtures/layouts'
      },
      wordcount: {
        files: [
          {
            expand: true,
            cwd: 'test/fixtures/pages',
            src: ['**/*.hbs'],
            dest: 'test/actual'
          }
        ]
      }
    },

    // Before generating new files, remove any files from previous build.
    clean: {
      actual: ['test/actual/**']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('gruntify-eslint');
  grunt.loadNpmTasks('grunt-assemble');

  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('test', ['clean', 'assemble']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['lint', 'test']);
};
