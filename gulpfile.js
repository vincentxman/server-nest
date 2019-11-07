const { watch, lastRun, series, parallel, src, dest } = require('gulp');
var clean = require('gulp-clean');
var FtpDeploy = require("ftp-deploy");

var ftpDeploy = new FtpDeploy();
var configDist = {
    user: "audioprint",
    password: "12@*aZs&f=-23@%^@sddAZ",
    host: "o-pen.com.cn",
    port: 21,

    localRoot: __dirname + "/dist/",
    remoteRoot: "/server-nest/dist/",

    // this would upload everything except dot files   
    include: ['*', '**/*'],

    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: ['**/*.d.ts', '**/*.js.map', '**/*.bak', "node_modules/**", "node_modules/**/.*",],

    // delete ALL existing files at destination before uploading, if true
    deleteRemote: true,

    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true
};

function ftpDistDir() {
    return ftpDeploy
        .deploy(configDist)
        .then(res => console.log("finished /dist/:", res))
        .catch(err => console.log(err));
}


function cleanDistDir() {
    return src('dist', {read: false})
    .pipe(clean());
}
// ------------------------------------------------
var configDocs = {
    user: "audioprint",
    password: "12@*aZs&f=-23@%^@sddAZ",
    host: "o-pen.com.cn",
    port: 21,

    localRoot: __dirname + "/docs/",
    remoteRoot: "/server-nest/docs/",

    // this would upload everything except dot files   
    include: ['*', '**/*'],

    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    exclude: ['**/*.d.ts', '**/*.js.map', '**/*.bak', "node_modules/**", "node_modules/**/.*",],

    // delete ALL existing files at destination before uploading, if true
    deleteRemote: true,

    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true
};

function ftpDocsDir() {
    return ftpDeploy
        .deploy(configDocs)
        .then(res => console.log("finished /docs/:", res))
        .catch(err => console.log(err));
}

//-------------------------------------------------
exports.cleanDistDir = cleanDistDir;
exports.server2Ftp = series(ftpDocsDir, ftpDistDir);
