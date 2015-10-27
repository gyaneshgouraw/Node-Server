
var gulp = require('gulp'); 
  //  connect = require('gulp-connect');         
 var   bs = require('browser-sync');    



//   ../../sourceCode/Ecard/Ecard-portal
//   
//   ../../sourceCode/TrackYourClaimsPortal

gulp.task('serve', [], function() {
  bs.init({
    server: "../../PaperProject",
    port: 3000
  });
});
	

gulp.task('default', ['serve']);

