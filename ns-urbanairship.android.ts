import { Common } from './ns-urbanairship.common';
import app = require("application");

declare const urbanairship: any;
declare const UAirship: any;
declare const com: any;

export class NsUrbanairship extends Common {

	public startUp(): void {
		let options = new com.urbanairship.AirshipConfigOptions.Builder()
			.setDevelopmentAppKey(this.developmentAppKey)
			.setDevelopmentAppSecret(this.developmentAppSecret)
			.setProductionAppKey(this.productionAppKey)
			.setProductionAppSecret(this.productionAppSecret)
			.setInProduction(false)
			.setGcmSender(this.gcmSender) // FCM/GCM sender ID
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
