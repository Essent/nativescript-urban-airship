var path = require("path");
var fs = require('mz/fs');

module.exports = function($logger, $projectData, hookArgs) {

    return new Promise(function(resolve, reject) {
        if (hookArgs.prepareData.platform.toLowerCase() === 'android') {

            // Change build.gradle in app folder
            var appGradle = path.join($projectData.platformsDir, "android", "app", "build.gradle");

            fs.exists(appGradle).then(function (exists) {
                if (!exists) {
                    reject('Missing app gradle file');
                }
            });

            fs.readFile(appGradle)
                .then(function (data) {
                    return data.toString();
                })
                .then(function (fileContent) {
                    if (!fileContent.toString().match(/^\s*apply plugin: 'com.google.gms.google-services'/mg)) {
                        $logger.info('Add "apply plugin: \'com.google.gms.google-services\'"');
                        return fs.appendFile(appGradle, '\napply plugin: \'com.google.gms.google-services\'');
                    }
                    $logger.warn('"apply plugin: \'com.google.gms.google-services\'" already added');
                });

            // Change build.gradle in root folder
            var mainGradle = path.join($projectData.platformsDir, "android", "build.gradle");

            fs.exists(mainGradle).then(function (exists) {
                if (!exists) {
                    reject('Missing main gradle file');
                }
            });

            fs.readFile(mainGradle)
                .then(function (data) {
                    return data.toString();
                })
                .then(function (fileContent) {
                    if (!fileContent.toString().match(/^\s*classpath 'com.google.gms:google-services:4.2.0'/mg)) {
                        var newFileContent = fileContent.replace("dependencies {", "dependencies {\nclasspath 'com.google.gms:google-services:4.2.0'");
                        $logger.info('Add "classpath \'com.google.gms:google-services:4.2.0\'"');
                        return fs.writeFile(mainGradle, newFileContent);
                    }
                    $logger.warn('"classpath \'com.google.gms:google-services:4.2.0\'" already added');
                });
        }

        resolve();
    });
};
