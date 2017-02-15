# NativeScript Urban Airship plugin

[![npm version](https://img.shields.io/npm/v/nativescript-urban-airship.svg?style=flat-square)](https://www.npmjs.com/package/nativescript-urban-airship)
[![Dependency Status](https://img.shields.io/david/essent/nativescript-urban-airship.svg?style=flat-square)](https://david-dm.org/essent/nativescript-urban-airship)
[![devDependency Status](https://img.shields.io/david/dev/essent/nativescript-urban-airship.svg?style=flat-square)](https://david-dm.org/essent/nativescript-urban-airship#info=devDependencies)

### Successfully Tested on the following configurations
> test case
- tns cli version 2.5.0
- tns-core-modules 2.4.0
- android 2.4.1
- ios 2.4.0

> test case
- tns cli version 2.5.0
- tns-core-modules 2.5.0
- android 2.5.0
- ios 2.5.0

## Steps to integrate into your main project

### iOS SDK
based Urban Airship SDK [8.1.4](https://github.com/urbanairship/ios-library/releases/tag/8.1.4)
[Urban Airship iOS documentation](http://docs.urbanairship.com/platform/ios.html)

### Android SDK
based Urban Airship SDK [8.2.5](https://github.com/urbanairship/android-library/releases/tag/8.2.5)
[Urban Airship Android documentation](http://docs.urbanairship.com/platform/android.html)

## Setup
Steps to integrate into your main project

```bash
tns plugin add nativescript-urban-airship
```

Create in your app folder a file named `urbanAirshipSettings.ts` (filename optional)

> app/urbanAirshipSettings.ts

``` typescript
import { UrbanAirshipSettings } from 'nativescript-urban-airship';

export const urbanAirshipSettings: UrbanAirshipSettings = {
    developmentAppKey: "Your Development App Key",
    developmentAppSecret: "Your Development App Secret",
    // FCM/GCM Sender ID
    gcmSender: "Your Google API Project Number",
    detectProvisioningMode: false,
    // Toggles between the development and production app credentials
    // Before submitting your application to an app store set to true
    inProduction: false,
    productionAppKey: "Your Production App Key",
    productionAppSecret: "Your Production Secret"
};
```

> app/push-notification.ts

``` typescript
// import NativeScript hooks
import { ApplicationEventData, on, launchEvent, resumeEvent, ios } from 'application';
import { NsUrbanairship } from 'nativescript-urban-airship';
import { urbanAirshipSettings } from './push-notification-settings';

export class PushNotification {
    public static initialize(): void {
        // for android we need to create a custom application to run takeOff during onCreate
        if (ios) {
            on(launchEvent, (args: ApplicationEventData) => {
                NsUrbanairship.getInstance().startUp(urbanAirshipSettings);
            });

            on(resumeEvent, (args: ApplicationEventData) => {
                // example for resetting badge on resume
                NsUrbanairship.getInstance().resetBadgeCount();
            });
        }
    }
}
```

> app/main.ts

``` typescript
import { PushNotification } from './push-notification';

PushNotification.initialize();
```

### PushNotification registration for Android
Registering the Urban Airship's takeoff at the correct moment is crucial for Android. That is why the implementation differs a bit compared to iOS. 
Android in particular requires the takeoff to be called on the onCreate lifeCycle of the application for it to register the Broadcast receivers in time. 

Extend your application using the [NativeScript documentation](https://docs.nativescript.org/runtimes/android/advanced-topics/extend-application-activity#extending-application)

***This is appliciable for NativeScript versions 2.3 - 2.5***

> app/application.android.ts

```typescript
import * as application from 'application';
import { urbanAirshipSettings } from './urbanAirshipSettings';

declare const com: any;

// the `JavaProxy` decorator specifies the package and the name
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

        // you can add Notification customization like `notificationIcon` here
        // .setNotificationIcon(android.R.drawable.ic_notification)
        // .setNotificationAccentColor(android.support.v4.content.ContextCompat(application.android.context, android.R.color.accent))

        com.urbanairship.UAirship.takeOff(application.android.context, options);
    }
}
```

> app/App_Resources/Android/AndroidManifest.xml

```xml
    <!--
        com tns folder will contain to the correct javaclass in 2.6.0,
        keep domain and namespace as com.tns
    -->
    <application
        android:name="com.tns.YourApplicationName"
        android:allowBackup="true"
        android:icon="@drawable/icon"
        android:label="@string/app_name"
        android:theme="@style/SplashTheme">
```

## API

``` typescript
export interface CommonUrbanAirship {
    startUp(urbanAirshipSettings: UrbanAirshipSettings): void;
    registerUser(userId: string): void;
    notificationOptIn(): Promise<boolean>;
    isOptIn(): boolean;
    getChannelID(): string;
    notificationOptOut(): Promise<boolean>;
    unRegisterUser(): void;
    resetBadgeCount(): void;
}
```

## Usage Example
``` typescript
NsUrbanairship.getInstance().isOptIn(); // return a boolean if the user has registered for notifications
NsUrbanairship.getInstance().unRegisterUser(); // un-registers the user from receiving notifications
```
