import { urbanAirshipSettings } from '~/urbanAirshipSettings';
import { NsUrbanAirship } from 'nativescript-urban-airship';

// the `JavaProxy` decorator specifies the package and the name for the native *.JAVA file generated.
@JavaProxy('com.tns.MyUAApplication')
class MyCustomApplication extends android.app.Application {

    public onCreate(): void {
        super.onCreate();

        NsUrbanAirship.getInstance().startUp(urbanAirshipSettings, this);
    }

    public attachBaseContext(baseContext: android.content.Context) {
        super.attachBaseContext(baseContext);

        // This code enables MultiDex support for the application (if needed)
        android.support.multidex.MultiDex.install(this);
    }
}

/* tslint:disable */
MyCustomApplication;