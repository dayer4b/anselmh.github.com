/**
 * General Grunt setup
 */

'use strict';

var pkg = require('./package');

module.exports = function(grunt) {

	// Measure time of grunt tasks
	require('time-grunt')(grunt);

	grunt.initConfig({
		sass: {
			dev: {
				options: {
					unixNewlines: true,
					style: 'expanded'
				},
				files: 'scss/**/*.scss',
				devDest: 'css/main.css'
			},

			build: {
				options: {
					style: 'compressed',
					banner: '/*! anselm.github.io | helloanselm.com - MIT License */'
				},
				files: 'scss/**/*.scss',
				src: 'scss/main.scss',
				dest: 'css/main.min.css'
			}
		},
		modernizr: {
			build: {
				devFile: 'bower_components/modernizr/modernizr.js',
				outputFile: 'js/modernizr.min.js',

				extra: {
					shiv: true,
					mq: true
				},

				// Minify
				uglify: true,

				// Files
				files: {
					src: ['js/**/*.js'].concat(['scss/**/*.scss'])
				}
			}
		},
		jshint: {
			all: 'js/main.js',
			options: {
				jshintrc: '.jshintrc'
			}
		},
		exec: {
			build: {
				cmd: 'jekyll build'
			},
			serve: {
				cmd: 'jekyll serve --watch'
			},
			deploy: {
				cmd: 'rsync --progress -a --delete -e "ssh -q" _site/ myuser@host:mydir/'
			}
		},
		watch: {
			scss: {
				files: 'scss/',
				tasks: 'sass:dev'
			},

			js: {
				files: 'js/**/*.js',
				tasks: ['jshint']
			},

			jekyll: {
				files: [
					'_includes/*.html',
					'_layouts/*.html',
					'_posts/*.md',
					'**/.md',
					'_config.yml',
					'index.html'
				],
				tasks: ['exec:serve'],
				options: {
					interrupt: true,
					atBegin: true
				}
			}
		}
	});

	// Load all npm tasks through node-matchdep (fetches all tasks from package.json)
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.registerTask('default', ['sass:build', 'modernizr:build', 'jshint', 'exec:build']);
	// grunt.registerTask('deploy', [ 'default', 'exec:deploy' ]);

};
