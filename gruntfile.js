module.exports = function(grunt) {

    // All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                process: function(src, filepath) {
                    return '/**** Individual File: ' + filepath + ' ****/ \n' + src;
                }
            },
            js: {
                src: ['scripts/libs/*.js'],
                dest: 'scripts/libs.js',
            },
            css: {
                src: ['css/libs/*.css'],
                dest: 'css/libs.css',
            },
        },
        uglify: {
           /*lib: {
                src: 'scripts/libs.js',
                dest: 'scripts/libs.min.js'
            },
            core: {
                src: 'scripts/core.js',
                dest: 'scripts/core.min.js'
            }*/
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/uncompressed',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/compressed'
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    //style: 'compressed',
                    style: 'expanded',
                    noCache: true
                },
                files: {
                    'css/core.css': 'scss/styles.scss'
                }
            } 
        },
        watch: {
            scripts: {
                files: ['scripts/*.js', 'scripts/libs/*.js'],
                tasks: ['concat'/*, 'uglify'*/],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['scss/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            }
        }

    });

    // Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', /*'uglify', */'imagemin', 'sass', 'watch']);

};