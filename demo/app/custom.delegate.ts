import { ios } from "tns-core-modules/application";
import { urbanAirshipSettings } from '~/urbanAirshipSettings';
import { NsUrbanAirship } from 'nativescript-urban-airship';

if (ios) {
    class MyDelegate extends UIResponder implements UIApplicationDelegate {
        public static ObjCProtocols = [UIApplicationDelegate];

        applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
            NsUrbanAirship.getInstance().startUp(urbanAirshipSettings);
            return true;
        };

        applicationWillResignActive(application: UIApplication): void {
            NsUrbanAirship.getInstance().resetBadgeCount();
        }
    }

    ios.delegate = MyDelegate;
}
