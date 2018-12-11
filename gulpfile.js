'use strict';

// подключение модулей
global.$ = {
		gulp: 				require('gulp'),
		pug: 					require('gulp-pug'),
		sass: 				require('gulp-sass'),
		autoprefixer: require('gulp-autoprefixer'),
		cleanCSS: 		require('gulp-clean-css'),
		sourcemaps: 	require('gulp-sourcemaps'),
		notify: 			require("gulp-notify"),
		cleanBuild : 	require('del'),
		browserSync: 	require('browser-sync').create(),
		rename:       require('gulp-rename'),
		uglify:       require('gulp-uglify'),
		concat: 			require('gulp-concat'),

		// путь к таскам
		path: {
			tasks: 			require('./gulp/config/tasks.js')
		}
};

// запуск тасков в цикле
$.path.tasks.forEach(function (taskPath) {
		require(taskPath)();
});


// задача во время разработки
$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('pug:dev', 'scss:dev','js:dev'),
	$.gulp.parallel('watch', 'server:dev')
));

// задача для финальной версии
$.gulp.task('build', $.gulp.series(
	'cleanBuild',
	$.gulp.parallel('pug:build', 'scss:build','js:build','font','img')
));