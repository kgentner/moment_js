'use strict';
module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.initConfig({
    jshint: {
      all: ['server.js'],
      options: {
        jshintrc: true
      }
    },
    jscs: {
      all: {
        options: {
          //standard: 'airbnb'
          // 'preset':'aribnb'
        },
        files: {
          src: [ 'server.js']
        }
      }
    },

  });

  grunt.registerTask('test', ['jshint','jscs']);
  grunt.registerTask('default',  ['test']);
};
