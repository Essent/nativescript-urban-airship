var path = require("path");
var fs = require('mz/fs');

module.exports = function(logger, projectData, hookArgs) {

    return new Promise(function(resolve, reject) {
        logger.info('====== starting firebase asjust gradle');

        if (hookArgs.platform.toLowerCase() === 'android') {
            var destinationGradle = path.join(projectData.platformsDir, "android", "app", "build.gradle");

            fs.exists(destinationGradle).then(function (exists) {
                if (!exists) {
                    reject('Missing app gradle file');
                }
            });

            fs.readFile(destinationGradle)
                .then(function (data) {
                    return data.toString();
                })
                .then(function (fileContent) {
                    if (!fileContent.toString().match(/^\s*apply plugin: 'com.google.gms.google-services'/mg)) {
                        var newFileContent = fileContent + '\napply plugin: \'com.google.gms.google-services\'';
                        logger.info('Add "apply plugin: \'com.google.gms.google-services\'"');
                        return fs.appendFile(destinationGradle, newFileContent);
                    }
                    logger.warn('"apply plugin: \'com.google.gms.google-services\'" already added');
                    // resolve();
                });
        }
    });
};
