import { urbanAirshipSettings } from '../urbanAirshipSettings';
import { ApplicationEventData, on, launchEvent } from 'application';
import { NsUrbanairship } from 'nativescript-urban-airship';
import { PushNotification as Common } from './push-notification';

export class PushNotification implements Common {
    public static initialize(): void {
        on(launchEvent, (args: ApplicationEventData) => {
            // pass the startUp function to launch takeoff on ios
            NsUrbanairship.getInstance().startUp(urbanAirshipSettings);
        });
    }

    private constructor() {
        // Prevent instances
    }
}
