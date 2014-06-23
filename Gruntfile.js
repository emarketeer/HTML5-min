module.exports = function (grunt) {

    grunt.initConfig({

	    uglify: {
	        files: {
	            src: 'assets/js/src/*.js',
	            dest: 'assets/js/',
	            expand: true,
	            flatten: true,
	            ext: '.min.js'
	        }
	    },
	    watch: {
	        js:  { files: 'assets/js/src/*.js', tasks: [ 'uglify' ] },
	    }
	});

	// load plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// register at least this one task
	grunt.registerTask('default', [ 'uglify' ]);

};
