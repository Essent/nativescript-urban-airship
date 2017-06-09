import { UrbanAirshipSettings, CommonUrbanAirship } from './urbanairship.common';

// @TODO see if we can use UANotificationOptions
declare const UANotificationOptionAlert: any;
declare const UANotificationOptionBadge: any;
declare const UANotificationOptionSound: any;

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
		let config = UAConfig.defaultConfig();
		config.detectProvisioningMode = urbanAirshipSettings.detectProvisioningMode;
		config.developmentAppKey = urbanAirshipSettings.developmentAppKey;
		config.developmentAppSecret = urbanAirshipSettings.developmentAppSecret;
		config.productionAppKey = urbanAirshipSettings.productionAppKey;
		config.productionAppSecret = urbanAirshipSettings.productionAppSecret;
		config.inProduction = urbanAirshipSettings.inProduction;
		UAirship.takeOff(config);
		UAirship.push().notificationOptions = (UANotificationOptionAlert | UANotificationOptionBadge | UANotificationOptionSound);
	}

	public registerUser(userId: string): void {
		UAirship.namedUser().identifier = userId;
	}

	public unRegisterUser(): void {
		UAirship.namedUser().identifier = null;
	}

	public notificationOptIn(): Promise<boolean> {
		return this.setOptIn(true);
	}

	public notificationOptOut(): Promise<boolean> {
		return this.setOptIn(false);
	}

	private setOptIn(optIn: boolean): Promise<boolean> {
		return new Promise((resolve) => {
			UAirship.push().userPushNotificationsEnabled = optIn;
			resolve(this.isOptIn());
		});
	}

	public isOptIn(): boolean {
		return UAirship.push().userPushNotificationsEnabled;
	}

	public getChannelID(): string {
		return UAirship.push().channelID;
	}

	// delegate is type of UAPushNotificationDelegate
	public setNotificationDelegate(delegate: any): void {
		if (delegate.conformsToProtocol(UAPushNotificationDelegate)) {
			UAirship.push().pushNotificationDelegate = delegate;
		}
		else {
			console.error('setNotificationDelegate - Given object does not implement pushNotificationDelegate protocol');
		}
	}

	// support only for android
	public getRegistrationToken(): string {
		return "";
	}

	public resetBadgeCount(): void {
		UAirship.push().resetBadge();
	}
}
