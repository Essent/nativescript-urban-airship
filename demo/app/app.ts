import * as application from 'application';
import { isIOS } from 'platform';
import { NsUrbanairship } from 'nativescript-urban-airship';

// startup calls takeoff during launchevent on iOS 
application.on(application.launchEvent, args => {
	if (isIOS) {
		NsUrbanairship.getInstance().startUp({
			developmentAppKey: "your dev key here",
			developmentAppSecret: "your dev secret",
			gcmSender: "Your gcmSender",
			detectProvisioningMode: false,
			inProduction: false,
			productionAppKey: "production key here",
			productionAppSecret: "production secret here",
		});
	}
});

application.start({ moduleName: "main-page" });
