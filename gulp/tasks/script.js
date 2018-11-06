module.exports = function () {
	$.gulp.task('js:build', function () {
		return $.gulp.src([
					'src/static/libs/jquery/dist/jquery-3.3.1.min.js',
					'src/static/js/main.js'								// Always at the end
					])
			.pipe($.concat('scripts.min.js'))
			.pipe($.uglify())
			.pipe($.gulp.dest('build/js'))
			.pipe($.browserSync.reload({
				stream: true
			}));
	});

	$.gulp.task('js:dev', function () {
		return $.gulp.src([
					'src/static/libs/jquery/dist/jquery-3.3.1.min.js',
					'src/static/libs/bootstrap/js/bootstrap.min.js',
					'src/static/js/main.js'								// Always at the end
					])
			.pipe($.concat('scripts.min.js'))
			.pipe($.gulp.dest('src/static/js'))
			.pipe($.browserSync.reload({
				stream: true
			}));
	});
}