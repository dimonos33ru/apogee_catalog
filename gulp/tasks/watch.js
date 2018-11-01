// слежение за файлами
module.exports = function () {
	$.gulp.task('watch', function () {
		$.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug:dev'));
		$.gulp.watch('src/static/scss/**/*.scss', $.gulp.series('scss:dev'))
		$.gulp.watch('src/static/js/main.js', $.gulp.series('js:dev'))
	});
}