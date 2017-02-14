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

	// handled in Android's Application OnCreate Event
	public startUp(urbanAirshipSettings: UrbanAirshipSettings): void { }

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

	// support only for ios
	public resetBadgeCount(): void { }
}