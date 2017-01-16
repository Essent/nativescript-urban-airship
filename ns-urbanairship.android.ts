import { UrbanAirshipSettings } from './ns-urbanairship.common';
import app = require("application");

declare const urbanairship: any;
declare const UAirship: any;
declare const com: any;

export class NsUrbanairship {

	private static instance: NsUrbanairship = new NsUrbanairship();

	constructor() {
		if (NsUrbanairship.instance) {
			throw new Error("Error: Instantiation failed: Use NsUrbanairship.getInstance() instead of new.");
		}
		NsUrbanairship.instance = this;
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

	public enablePush(userId: string) {
		return new Promise((resolve, reject) => {
			UAirship.namedUser().identifier = userId;
			UAirship.push().userPushNotificationsEnabled = true;
			resolve(UAirship.push().userPushNotificationsEnabled);
		});
	}

	public isEnabled(): boolean {
		return UAirship.userPushNotificationsEnabled();
	}

	public resetBadgeCount(): void {
		UAirship.resetBadge();
	}

	public notificationOptOut() {
		return new Promise((resolve, reject) => {
			UAirship.push().userPushNotificationsEnabled = false;
			resolve(UAirship.push().userPushNotificationsEnabled);
		});
	}

	public disablePush(): void {
		UAirship.namedUser().identifier = null;
	}

}
