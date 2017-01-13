import { Common, UrbanAirshipSettings } from './ns-urbanairship.common';
import app = require("application");

declare const urbanairship: any;
declare const UAirship: any;
declare const com: any;

export class NsUrbanairship extends Common {

	private static instance: NsUrbanairship = new NsUrbanairship();

	constructor() {
		super();
	}

	static getInstance() {
		return NsUrbanairship.instance;
	}

	public startUp(urbanAirshipSettings: UrbanAirshipSettings): void {
		let options = new com.urbanairship.AirshipConfigOptions.Builder()
			.setDevelopmentAppKey(urbanAirshipSettings.developmentAppKey)
			.setDevelopmentAppSecret(urbanAirshipSettings.developmentAppSecret)
			.setProductionAppKey(urbanAirshipSettings.productionAppKey)
			.setProductionAppSecret(urbanAirshipSettings.productionAppSecret)
			.setInProduction(urbanAirshipSettings.inProduction)
			.setGcmSender(urbanAirshipSettings.gcmSender) // FCM/GCM sender ID
			.build();

		com.urbanairship.UAirship.takeOff(app.android.context, options);
	}

	public enablePush(userId: String): void {
		com.urbanairship.UAirship.shared().getNamedUser().setId(userId);
		com.urbanairship.UAirship.shared().getPushManager().setUserNotificationsEnabled(true);
	}

	public disablePush(): void {
		com.urbanairship.UAirship.shared().getNamedUser().setId(null);
	}
}
