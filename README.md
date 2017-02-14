# NativeScript Urban Airship plugin

[![npm version](https://img.shields.io/npm/v/nativescript-urban-airship.svg?style=flat-square)](https://www.npmjs.com/package/nativescript-urban-airship)
[![Dependency Status](https://img.shields.io/david/essent/nativescript-urban-airship.svg?style=flat-square)](https://david-dm.org/essent/nativescript-urban-airship)
[![devDependency Status](https://img.shields.io/david/dev/essent/nativescript-urban-airship.svg?style=flat-square)](https://david-dm.org/essent/nativescript-urban-airship#info=devDependencies)

Steps to integrate into your main project

Make sure you have the NativeScript cli installed.

```
tns plugin add nativescript-urban-airship
```

#### main.ts

``` typescript
import { PushNotification } from './push-notification';

PushNotification.initialize();
```

#### push-notification.ts

``` typescript
// import NativeScript hooks
import { ApplicationEventData, on, launchEvent, resumeEvent } from 'application';
import { NsUrbanairship } from 'nativescript-urban-airship';
import { urbanAirshipSettings } from './push-notification-settings';

export class PushNotification {
    public static initialize(): void {
        on(launchEvent, (args: ApplicationEventData) => {
            NsUrbanairship.getInstance().startUp(urbanAirshipSettings);
        });

        on(resumeEvent, (args: ApplicationEventData) => {
            if (application.ios) {
                NsUrbanairship.getInstance().resetBadgeCount();
            }
        });
    }
}
```

In your application urbanAirshipSettings.ts (filename optional)

#### urbanAirshipSettings.ts

``` typescript
import { UrbanAirshipSettings } from 'nativescript-urban-airship';

export const urbanAirshipSettings: UrbanAirshipSettings = {
    developmentAppKey: "development key here",
    developmentAppSecret: "development secret here",
    gcmSender: "optional gcmSender",
    detectProvisioningMode: false,
    inProduction: false,
    productionAppKey: "production key here",
    productionAppSecret: "production secret here"
};
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

## PushNotification registration for Android
Registering the Urban Airship's takeoff at the correct moment is crucial for Android. That is why the implementation differs a bit compared to iOS. 
Android in particular requires the takeoff to be called on the onCreate lifeCycle of the application for it to register the Broadcast receivers in time. 

Extend your application using the NativeScript documentation
### This is appliciable for NativeScript versions 2.3 - 2.5

> application.android.ts

```
import * as application from 'application';
import { urbanAirshipSettings } from 'your config file location';

// the `JavaProxy` decorator specifies the package and the name for the native *.JAVA file generated.
declare const com: any;

@JavaProxy('com.tns.YourApplicationName')
class EnergyDirectApplication extends android.app.Application {
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

        com.urbanairship.UAirship.takeOff(application.android.context, options);
    }
}
```

