import { UrbanAirshipSettings } from './ns-urbanairship.common';

declare const UAConfig: any;
declare const UAirship: any;
declare const UANotificationOptionAlert: any;
declare const UANotificationOptionBadge: any;
declare const UANotificationOptionSound: any;

export class NsUrbanairship {

	private static instance: NsUrbanairship = new NsUrbanairship();
	public gcmSender: string;

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
		let config = UAConfig.defaultConfig();
		config.detectProvisioningMode = urbanAirshipSettings.detectProvisioningMode;
		config.developmentAppKey = urbanAirshipSettings.developmentAppKey;
		config.developmentAppSecret = urbanAirshipSettings.developmentAppSecret;
		config.productionAppKey = urbanAirshipSettings.productionAppKey;
		config.productionAppSecret = urbanAirshipSettings.productionAppSecret;
		this.gcmSender = urbanAirshipSettings.gcmSender;
		UAirship.takeOff(config);
		UAirship.push().notificationOptions = (UANotificationOptionAlert | UANotificationOptionBadge | UANotificationOptionSound);
	}

	public enablePush(userId: string): Promise<boolean> {
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
