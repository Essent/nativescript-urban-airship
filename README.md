# NativeScript Urban Airship plugin

Steps to integrate into your main project

```
npm install nativescript-urban-airship --save
```

####main.ts

``` typescript
import { PushNotification } from './src/shared/push-notification/push-notification';

PushNotification.initialize();
```

####push-notification.ts

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

####urbanAirshipSettings.ts

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
    notificationOptOut(): Promise<boolean>;
    unRegisterUser(): void;
    resetBadgeCount?(): void; 
}
```

## Usage Example
``` typescript
NsUrbanairship.getInstance().isOptIn(); // return a boolean if the user has registered for notifications
NsUrbanairship.getInstance().unRegisterUser(); // un-registers the user from receiving notifications
```