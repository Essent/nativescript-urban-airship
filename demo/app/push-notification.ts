// import NativeScript hooks
import { ApplicationEventData, on, launchEvent, resumeEvent, ios } from "tns-core-modules/application";
import { NsUrbanairship } from 'nativescript-urban-airship';
import { urbanAirshipSettings } from './urbanAirshipSettings';

export class PushNotification {
    public static initialize(): void {
        on(launchEvent, (args: ApplicationEventData) => {
            NsUrbanairship.getInstance().startUp(urbanAirshipSettings);
        });

        if (ios) {
            on(resumeEvent, (args: ApplicationEventData) => {
                // example for resetting badge on resume
                NsUrbanairship.getInstance().resetBadgeCount();
            });
        }
    }
}