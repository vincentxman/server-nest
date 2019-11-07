const { watch, lastRun, series, parallel, src, dest } = require('gulp');
var clean = require('gulp-clean');
var FtpDeploy = require("ftp-deploy");

var ftpDeploy = new FtpDeploy();
var configDist = { 
    host: "o-pen.com.cn",
    port: 21,
    // this would upload everything except dot files   
    include: ['*', '**/*'],
};
