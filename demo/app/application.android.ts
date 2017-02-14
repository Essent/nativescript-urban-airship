import * as application from 'application';

declare const com: any;

@JavaProxy('com.tns.YourApplicationName')
class YourApplicationName extends android.app.Application {
    public onCreate(): void {
        super.onCreate();

        /**
         * Android needs to have this file static
         * for notifying all receivers in time
         */
        const options = new com.urbanairship.AirshipConfigOptions.Builder()
            .setDevelopmentAppKey('your dev key here')
            .setDevelopmentAppSecret('your dev secret')
            .setProductionAppKey('production key here')
            .setProductionAppSecret('production secret here')
            .setInProduction(false)
            .setGcmSender('Your gcmSender')
            .build();
        
        // call takeoff method in the onCreate method
        com.urbanairship.UAirship.takeOff(application.android.context, options);
    }
}
