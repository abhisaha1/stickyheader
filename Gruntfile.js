module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: '<json:package.json>',
        copy: {
            files: {
                cwd: 'app/',  // set working folder / root to copy
                src: ['**/*'],           // copy all files and subfolders
                dest: 'dist/',    // destination folder
                expand: true           // required when using cwd
            }
        },
        clean: {
            dist: ["dist/*"]
        },
        sync: {
            main: {
                files: [{
                    cwd: 'app/',
                    src: [
                        '**', /* Include everything */
                        '!**/*.txt' /* but exclude txt files */
                    ],
                    dest: 'dist'
                }],
                pretend: true, // Don't do any IO. Before you run the task with `updateAndDelete` PLEASE MAKE SURE it doesn't remove too much.
                verbose: true // Display log messages when copying files
            }
        },
        uglify: {
            js: {
                src: 'dist/js/jquery.stickyhead.js',
                dest: 'dist/js/jquery.stickyhead.min.js'
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                eqnull: true,
                node: true
            },
            globals: {
                exports: true,
                module: false
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    // Default task.
    grunt.registerTask('default', ['clean','copy','uglify']);

};