import * as application from 'application';
import { NsUrbanairship } from 'nativescript-ns-urbanairship';

application.on(application.launchEvent, function (args) {
	let nsUrbanairship = new NsUrbanairship();
	nsUrbanairship.developmentAppKey = "G0mIxntETJKumFTCWGfaNQ";
	nsUrbanairship.developmentAppSecret = "p0EMVN6zSmqSf5uxa1oP-w";
	nsUrbanairship.gcmSender = "758734661063";
	nsUrbanairship.startUp();
});

application.start({ moduleName: "main-page" });
