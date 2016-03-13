module.exports = function(grunt) {


    // Plugin list
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Config
    grunt.initConfig({
        jshint: {
            all: ['js/*.js']
        },

        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['js/lib/bootstrap/bootstrap.min.js', 'js/*.js'],
                dest: 'js/min/app.min.js'
            }
        },

        uglify: {
            options: {
                preserveComments: false,
            },
            dist: {
                files: {
                    'js/min/app.min.js': ['js/min/app.min.js']
                }
            }
        },

        cssmin: {
            options: {
                keepSpecialComments: 0,
            },
            combine: {
                files: {
                    'css/min/app.min.css': ['css/*.css', '!css/**.min.css']
                }
            }
        },

        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    imagesDir: 'img',
                    noLineComments: true,
                    //outputStyle: 'compressed',
                    outputStyle: 'compact',
                    //environment: 'production',
                    environment: 'development',
                }
            }
        },

        watch: {
            sass: {
                files: ['sass/*.scss', 'sass/**/*.scss'],
                tasks: ['compass']
            },
            css: {
                files: ['css/*.css'],
                tasks: ['cssmin'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            js: {
                files: ['js/*.js'],
                tasks: ['jshint', 'concat:dist', 'uglify'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            all: {
                files: ['*'],
                tasks: [],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask('default', ['compass', 'jshint', 'concat:dist', 'uglify', 'cssmin']);
};