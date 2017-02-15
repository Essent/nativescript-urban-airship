// import NativeScript hooks
import { ApplicationEventData, on, launchEvent, resumeEvent, ios } from 'application';
import { NsUrbanairship } from 'nativescript-urban-airship';
import { urbanAirshipSettings } from './urbanAirShipSettings';

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