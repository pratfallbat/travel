const browserSync = require("browser-sync");
var gulp = require("gulp"),
  webpack = require("webpack");

gulp.task("scripts", function (callback) {
  webpack(require("../../webpack.config.js"), function () {
    console.log("hurrays webpack completed");
    callback();
  });
  //   scriptsRefresh;
});
