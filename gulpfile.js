var gulp = require('gulp'),
		gutil = require('gulp-util'),
		connect = require('gulp-connect'),
		gulpif = require('gulp-if'),
		cleanDest = require('gulp-clean-dest');

var env,
	jsSources,
	cssSources,
	htmlSources,

env = process.env.NODE_ENV || 'development';

jsSources = [
	'js/*.js'
]		

cssSources = [
	'css/*.css'
]

htmlSources = ['*.html']

gulp.task('js', function(){
	gulp.src(jsSources)
		.pipe(connect.reload())
});

gulp.task('css', function(){
	gulp.src(cssSources)
		.pipe(connect.reload())
});

gulp.task('default', ['html', 'js', 'css', 'connect', 'watch']);

gulp.task('watch', function(){
	gulp.watch(jsSources, ['js']);
	gulp.watch(cssSources, ['css']);
	gulp.watch(htmlSources, ['html']);
});

gulp.task('html', function(){
	gulp.src(htmlSources)
		.pipe(connect.reload())
})

gulp.task('connect', function(){
	connect.server({
		root: "../wisdom-pet-medicine/",
		livereload: true
	});
});