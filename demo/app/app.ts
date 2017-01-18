import * as application from 'application';
import { NsUrbanairship } from 'nativescript-urban-airship';

application.on(application.launchEvent, args => {
	NsUrbanairship.getInstance().startUp({
		developmentAppKey: "your dev key here",
		developmentAppSecret: "your dev secret",
		gcmSender: "Your gcmSender",
		detectProvisioningMode: false,
		inProduction: false,
		productionAppKey: "production key here",
		productionAppSecret: "production secret here",
	});
});

application.start({ moduleName: "main-page" });
