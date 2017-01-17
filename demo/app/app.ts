import * as application from 'application';
import { NsUrbanairship } from 'nativescript-urban-airship';

application.on(application.launchEvent, args => {
	NsUrbanairship.getInstance().startUp({
		developmentAppKey: "G0mIxntETJKumFTCWGfaNQ",
		developmentAppSecret: "p0EMVN6zSmqSf5uxa1oP-w",
		gcmSender: "758734661063",
		detectProvisioningMode: false,
		inProduction: false,
		productionAppKey: "production key here",
		productionAppSecret: "production secret here"
	});
});

application.on(application.resumeEvent, args => {
	NsUrbanairship.getInstance().resetBadgeCount();
});

application.start({ moduleName: "main-page" });
