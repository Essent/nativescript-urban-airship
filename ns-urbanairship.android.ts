import { UrbanAirshipSettings, CommonUrbanAirship } from './ns-urbanairship.common';
import app = require("application");

declare const urbanairship: any;
declare const UAirship: any;
declare const com: any;

export class NsUrbanairship implements CommonUrbanAirship {

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

	public enablePush(userId: String): void {
		com.urbanairship.UAirship.shared().getNamedUser().setId(userId);
		com.urbanairship.UAirship.shared().getPushManager().setUserNotificationsEnabled(true);
	}

	public registerUser(userId: string): Promise<boolean> {
		com.urbanairship.UAirship.shared().getNamedUser().setId(userId);
	}

	public notificationOptIn(): void {
	}

	public isEnabled(): boolean {
	}

	public resetBadgeCount(): void {
	}

	public notificationOptOut(): Promise<boolean> {

	}

	public unRegisterUser(): void {

	}

}