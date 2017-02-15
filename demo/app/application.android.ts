import * as application from 'application';
import { urbanAirshipSettings } from './urbanAirshipSettings';

declare const com: any;

/**
 * Alter your Application name with caution, this requires you to change your application name inside of your App_Resources > AndroidManifest.xml file
 * Even though, you do need to extend this class to make the takeoff call possible
 * Keep in mind that anything referencing the previous class: com.tns.NativeScriptApplication will no longer work for Android.
 * If you are having issues because you or a 3rd party plugin is referencing the old class directly. 
 * In the plugin or code that refer to com.tns.NativeScriptApplication directly, Consider using: application.android.context instead.
 **/
@JavaProxy('com.tns.YourApplicationName')
class YourApplicationName extends android.app.Application {
    public onCreate(): void {
        super.onCreate();

        /**
         * Android needs to have this file static
         * for notifying all receivers in time
         */
        const options = new com.urbanairship.AirshipConfigOptions.Builder()
            .setDevelopmentAppKey(urbanAirshipSettings.developmentAppKey)
            .setDevelopmentAppSecret(urbanAirshipSettings.developmentAppSecret)
            .setProductionAppKey(urbanAirshipSettings.productionAppKey)
            .setProductionAppSecret(urbanAirshipSettings.productionAppSecret)
            .setInProduction(urbanAirshipSettings.inProduction)
            .setGcmSender(urbanAirshipSettings.gcmSender)
            .build();

        // call takeoff method in the onCreate method
        com.urbanairship.UAirship.takeOff(application.android.context, options);
    }
}
