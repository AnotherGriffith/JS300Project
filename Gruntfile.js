

module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			// include and exclude files to lint
			all: ['Gruntfile.js', 'js/**/*.js','!**/libs/*.js'],
			options: {
				curly: true,
				eqeqeq: true,
				browser: true,
				globals: {
					Calculator: true,
					afterEach: true,
					after: true,
					beforeEach: true,
					before: true,
					describe: true,
					it: true,
					expect: true,
					console: true
				}
			}
		},
		mocha: {
			all: {
				src: ['*.html','test/**/*.html'],
				options: {
					mocha: {
						ignoreLeaks: false
					},
					run: true
				}
			}
		},
		watch: {
			files: '<%= jshint.all %>',
			tasks: ['jshint', 'mocha']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-mocha');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jshint', 'mocha']);




};