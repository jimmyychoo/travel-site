var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
  console.log("hooray-gulp task.");

});

gulp.task('html', function(){
    console.log("imagine html running");

});

gulp.task('styles', function(){
    console.log("imagine saas and postcss task running.");

});

gulp.task('watch', function(){
  
  watch('./app/index.html', function(){
    gulp.start('html');
  });

  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('styles');
  });
});
