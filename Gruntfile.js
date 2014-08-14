'use strict';

var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  grunt.initConfig({
    appConfig: {
      // configurable paths
      app: require('./bower.json').appPath || 'app',
      name: 'Spring MVC Angular',
      dist: 'src/main/webappDist',
      webapp: 'src/main/webappResources'
    },
    watch: {
    styles: {
        files: ['<%= appConfig.webapp %>/styles/{,*/}*.css'],
        tasks: ['copy:styles', 'autoprefixer']
      },
    livereload: {
        options: {
          livereload: 35729
        },
        files: [
          '<%= appConfig.webapp %>/{,*/}*.html',
          '.tmp/styles/{,*/}*.css',
          '{.tmp/,}<%= appConfig.webapp %>/scripts/{,*/}*.js',
          '<%= appConfig.webapp %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    autoprefixer: {
      options: ['last 1 version'],
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },
    connect: {
      proxies: [
        {
          context: '/',
          host: 'localhost',
          port: 8080,
          https: false,
          changeOrigin: false
        },
      ],
      options: {
        port: 9000,
        // Change this to 'localhost' to deny access to the server from outside.
        hostname: '0.0.0.0',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '<%= appConfig.webapp %>'
          ],
          middleware: function (connect) {
            return [
              proxySnippet,
              connect.static(require('path').resolve('<%= appConfig.webapp %>'))
            ];
          }
        }
      },
      test: {
        options: {
         port: 9001,
          base: [
            '.tmp',
            'test',
            '<%= appConfig.webapp %>'
          ]
        }
      },
      dist: {
        options: {
          base: '<%= appConfig.dist %>'
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= appConfig.dist %>/*',
            '!<%= appConfig.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp',
      bower: '<%= appConfig.webapp %>/bower_components'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        '<%= appConfig.webapp %>/scripts/{,*/}*.js'
      ]
    },
    coffee: {
      options: {
        sourceMap: true,
        sourceRoot: ''
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= appConfig.webapp %>/scripts',
          src: '{,*/}*.coffee',
          dest: '.tmp/scripts',
          ext: '.js'
        }]
      },
      test: {
        files: [{
          expand: true,
          cwd: 'test/spec',
          src: '{,*/}*.coffee',
          dest: '.tmp/spec',
          ext: '.js'
        }]
      }
    },
    // not used since Uglify task does concat,
    // but still available if needed
    /*concat: {
      dist: {}
    },*/
    // Automatically inject Bower components into the app
    bowerInstall: {
      app: {
        src: ['<%= appConfig.webapp %>/index.html'],
        ignorePath: '<%= appConfig.app %>/'
      }
    },
    rev: {
      dist: {
        files: {
          src: [
            '<%= appConfig.dist %>/scripts/{,*/}*.js',
            '<%= appConfig.dist %>/styles/{,*/}*.css',
            '<%= appConfig.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= appConfig.dist %>/fonts/*'
          ]
        }
      }
    },
    useminPrepare: {
      html: '<%= appConfig.webapp %>/{,*/}*.html',
      options: {
        dest: '<%= appConfig.dist %>'
      }
    },
    usemin: {
      html: ['<%= appConfig.dist %>/{,*/}*.html'],
      css: ['<%= appConfig.dist %>/styles/{,*/}*.css'],
      options: {
        dirs: ['<%= appConfig.dist %>']
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= appConfig.webapp %>/images',
          src: '{,*/}*.{jpg,jpeg}', // we don't optimize PNG files as it doesn't work on Linux. If you are not on Linux, feel free to use '{,*/}*.{png,jpg,jpeg}'
          dest: '<%= appConfig.dist %>/images'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= appConfig.webapp %>/images',
          src: '{,*/}*.svg',
          dest: '<%= appConfig.dist %>/images'
        }]
      }
    },
    cssmin: {
      // By default, your `index.html` <!-- Usemin Block --> will take care of
      // minification. This option is pre-configured if you do not wish to use
      // Usemin blocks.
      // dist: {
      //   files: {
      //     '<%= appConfig.dist %>/styles/main.css': [
      //       '.tmp/styles/{,*/}*.css',
      //       'styles/{,*/}*.css'
      //     ]
      //   }
      // }
    },
    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
          // https://github.com/appConfig/grunt-usemin/issues/44
          //collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '<%= appConfig.webapp %>',
          src: ['*.html', 'views/*.html'],
          dest: '<%= appConfig.dist %>'
        }]
      }
    },
    // Put files not handled in other tasks here
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= appConfig.webapp %>',
          dest: '<%= appConfig.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'images/{,*/}*.{png,gif,webp}',
            'fonts/*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= appConfig.dist %>/images',
          src: [
            'generated/*'
          ]
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= appConfig.webapp %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },
    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'imagemin',
        'svgmin',
        'htmlmin'
      ]
    },
    karma: {
      unit: {
        configFile: 'src/test/javascript/karma.conf.js',
        singleRun: true
      }
    },
    cdnify: {
      dist: {
        html: ['<%= appConfig.dist %>/*.html']
      }
    },
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },
    uglify: {
      dist: {
        files: {
          '<%= appConfig.dist %>/scripts/scripts.js': [
            '<%= appConfig.dist %>/scripts/scripts.js'
          ]
        }
      }
    },
    ngdocs: {
      options: {
        dest: 'docs/javascript',
        html5Mode: false,
        title: '<%= appConfig.name %> Documentation'
      },
      all: ['<%= appConfig.webapp %>/scripts/{,*/}*.js']
    }
  });

  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer',
      'configureProxies',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'clean:server',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'bowerInstall',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'copy:dist',
    'ngmin',
    'cssmin',
    'uglify',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'test',
    'build'
  ]);
};