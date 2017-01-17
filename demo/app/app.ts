import * as application from 'application';
import { NsUrbanairship } from 'nativescript-urban-airship';

application.on(application.launchEvent, args => {
	NsUrbanairship.getInstance().startUp({
		developmentAppKey: "development key here",
		developmentAppSecret: "development secret here",
		gcmSender: "optional gcmSender",
		detectProvisioningMode: false,
		inProduction: false,
		productionAppKey: "production key here",
		productionAppSecret: "production secret here"
	});
});

application.on(application.resumeEvent, args => {
	if (application.ios) {
		NsUrbanairship.getInstance().resetBadgeCount();
	}
});

application.start({ moduleName: "main-page" });
