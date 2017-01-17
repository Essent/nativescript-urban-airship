# NativeScript Urban Airship plugin

Steps to integrate into your main project

In your application main.ts file
> main.ts
```
// import your push notification bootstrapping
import { PushNotification } from './src/shared/push-notification/push-notification';

/**
 * PushNotifications initialization
 */
PushNotification.initialize();

```

In your application main.ts file
> push-notification.ts
```
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
            NsUrbanairship.getInstance().resetBadgeCount();
        });
    }
}
```

In your application urbanAirshipSettings.ts (filename optional)
> urbanAirshipSettings.ts
```
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
