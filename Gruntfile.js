module.exports = function(grunt) {

  var path = require('path');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    bower: {
      install: {
        options: {
          targetDir: 'vendor',
          cleanTargetDir: true,
          layout: function(type, component, source) {
            return type;
          }
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      my_target: {
        files: {
          'js/map.min.js': ['src/js/map.js']
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  grunt.registerTask('default', ['bower:install', 'uglify']);

};
