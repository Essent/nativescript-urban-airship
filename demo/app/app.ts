import * as application from 'application';
import { NsUrbanairship } from 'nativescript-ns-urbanairship';

application.on(application.launchEvent, function (args) {
	let nsUrbanairship = new NsUrbanairship();
});

application.start({ moduleName: "main-page" });
