var path = require("path");
var fs = require("fs");

module.exports = function($logger, $projectData, hookArgs) {

    return new Promise(function(resolve, reject) {
        /* Decide whether to prepare for dev or prod environment */
        var isReleaseBuild = (hookArgs.appFilesUpdaterOptions && hookArgs.appFilesUpdaterOptions.release) ? true : false;
        var validProdEnvs = ['prod','production'];
        var isProdEnv = false; // building with --env.prod or --env.production flag
        if (hookArgs.prepareData.env) {
            Object.keys(hookArgs.prepareData.env).forEach((key) => {
                if (validProdEnvs.indexOf(key)>-1) { isProdEnv=true; }
            });
        }
        var buildType = isReleaseBuild || isProdEnv ? 'production' : 'development';

        /* Create info file in platforms dir so we can detect changes in environment and force prepare if needed */
        var npfInfoPath = path.join($projectData.platformsDir, hookArgs.prepareData.platform.toLowerCase(), ".pluginfirebaseinfo");
        var npfInfo = {
            buildType: buildType,
        };
        try { fs.writeFileSync(npfInfoPath, JSON.stringify(npfInfo)); }
        catch (err) {
            $logger.info('nativescript-plugin-firebase: unable to create '+npfInfoPath+', prepare will be forced next time!');
        }

        /* Handle preparing of Google Services files */
        if (hookArgs.prepareData.platform.toLowerCase() === 'android') {
            var destinationGoogleJson = path.join($projectData.platformsDir, "android", "app", "google-services.json");
            var destinationGoogleJsonAlt = path.join($projectData.platformsDir, "android", "google-services.json");
            var sourceGoogleJson = path.join($projectData.appResourcesDirectoryPath, "Android", "google-services.json");
            var sourceGoogleJsonProd = path.join($projectData.appResourcesDirectoryPath, "Android", "prod.google-services.json");
            var sourceGoogleJsonDev = path.join($projectData.appResourcesDirectoryPath, "Android", "dev.google-services.json");

            // ensure we have both dev/prod versions so we never overwrite singlular google-services.json
            if (fs.existsSync(sourceGoogleJsonProd) && fs.existsSync(sourceGoogleJsonDev)) {
                if (buildType==='production') { sourceGoogleJson = sourceGoogleJsonProd; } // use prod version
                else { sourceGoogleJson = sourceGoogleJsonDev; } // use dev version
            }

            // copy correct version to destination
            if (fs.existsSync(sourceGoogleJson) && fs.existsSync(path.dirname(destinationGoogleJson))) {
                $logger.out("Copy " + sourceGoogleJson + " to " + destinationGoogleJson + ".");
                fs.writeFileSync(destinationGoogleJson, fs.readFileSync(sourceGoogleJson));
                resolve();
            } else if (fs.existsSync(sourceGoogleJson) && fs.existsSync(path.dirname(destinationGoogleJsonAlt))) {
                // NativeScript < 4 doesn't have the 'app' folder
                $logger.out("Copy " + sourceGoogleJson + " to " + destinationGoogleJsonAlt + ".");
                fs.writeFileSync(destinationGoogleJsonAlt, fs.readFileSync(sourceGoogleJson));
                resolve();
            } else {
                $logger.warn("Unable to copy google-services.json.");
                reject();
            }
        } else {
            resolve();
        }
    });
};