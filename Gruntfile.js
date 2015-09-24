module.exports = function(grunt) {
  //var mozjpeg = require('imagemin-mozjpeg');
  // All upfront config goes in a massive nested object.
  grunt.initConfig({
    // You can set arbitrary key-value pairs.
    distFolder: './',
    // You can also set the value of a key as parsed JSON.
    // Allows us to reference properties we declared in package.json.
    pkg: grunt.file.readJSON('package.json'),

    // Grunt tasks are associated with specific properties.
    // these names generally match their npm package name.
    watch: {
      scripts: {
        files: 'scss/*.scss',
        tasks: ['sass'],
        options: {
          debounceDelay: 250,
        },
      },
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['*.scss'],
          dest: './css',
          ext: '.css'
        }]
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'css/style.min.css': ['css/style.css']
        }
      }
    },
    //pngmin: {
    //  compile: {
    //    options: {
    //      ext: '.png',
    //      force: true
    //    },
    //    files: [
    //      {
    //        src: 'images/*.png',
    //        dest: 'images/min'
    //      }
    //    ]
    //  }
    //},
    //imagemin: {                          // Task
    //
    //  dynamic: {                         // Another target
    //    files: [{
    //      expand: true,                  // Enable dynamic expansion
    //      cwd: 'images/',                   // Src matches are relative to this path
    //      src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
    //      dest: 'imagemin/'                  // Destination path prefix
    //    }]
    //  }
    //},
    uglify: {
      options: {
        mangle: true
      },
      my_target: {
        files: {
          'js/main.min.js': ['js/main.js'],
          'js/Application.min.js': ['js/Application.js'],
          'js/Worker.min.js': ['js/Worker.js']
        }
      }
    }
  }); // The end of grunt.initConfig

  // We've set up each task's configuration.
  // Now actually load the tasks.
  // This will do a lookup similar to node's require() function.
  grunt.registerTask('default', ['sass', 'uglify', 'cssmin']);
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  //grunt.loadNpmTasks('grunt-pngmin');
  //grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Register our own custom task alias.
  grunt.registerTask('build', ['concat']);
};