let gulp = require('gulp');
let process = require('child_process');

gulp.task('supervisor', function () {
  process.exec('supervisor --harmony server/index', function (error, stdout, stderr) {
    if (error != null) {
      console.log(error);
    }
  });
});

gulp.task('default', ['supervisor']);