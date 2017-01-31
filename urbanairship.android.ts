import { UrbanAirshipSettings, CommonUrbanAirship } from './urbanairship.common';
import app = require("application");

declare const urbanairship: any;
declare const UAirship: any;
declare const com: any;

export class NsUrbanairship implements CommonUrbanAirship {

	private static instance: NsUrbanairship = new NsUrbanairship();

	constructor() {
		if (NsUrbanairship.instance) {
			throw new Error("Error: Instance failed: Use NsUrbanairship.getInstance() instead of new.");
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

	public registerUser(userId: string): void {
		com.urbanairship.UAirship.shared().getNamedUser().setId(userId);
	}

	public unRegisterUser(): void {
		com.urbanairship.UAirship.shared().getNamedUser().setId(null);
	}

	public notificationOptIn(): Promise<boolean> {
		return this.setOptIn(true);
	}

	public notificationOptOut(): Promise<boolean> {
		return this.setOptIn(false);
	}

	private setOptIn(optIn: boolean): Promise<boolean> {
		return new Promise((resolve) => {
			com.urbanairship.UAirship.shared().getPushManager().setUserNotificationsEnabled(optIn);
			resolve(this.isOptIn());
		});
	}

	public isOptIn(): boolean {
		return com.urbanairship.UAirship.shared().getPushManager().isPushEnabled();
	}

	public getChannelID(): string {
		return com.urbanairship.UAirship.shared().getPushManager().getChannelId();
	}

	// support only for ios
	public resetBadgeCount(): void { }
	
}