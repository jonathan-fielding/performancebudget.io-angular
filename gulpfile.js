var gulp = require('gulp');
var tasks = require('gulp-standard-tasks')(gulp);

gulp.task('sass-prod', tasks.css({
	src: 'sass/main.scss',
	dest: 'css',
	mode: 'prod'
}));

gulp.task('default', ['sass-prod']);
gulp.task('watch', function(){
    gulp.watch('sass/**/*.scss', ['sass-prod']);
});
