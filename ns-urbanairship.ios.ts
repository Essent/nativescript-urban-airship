import { Common, UrbanAirshipSettings } from './ns-urbanairship.common';

declare const UAConfig: any;
declare const UAirship: any;
declare const UANotificationOptionAlert: any;
declare const UANotificationOptionBadge: any;
declare const UANotificationOptionSound: any;

export class NsUrbanairship extends Common {

	private static instance: NsUrbanairship = new NsUrbanairship();

	constructor() {
		super();
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

	public enablePush(userId: string): void {
		UAirship.namedUser().identifier = userId;
		UAirship.push().userPushNotificationsEnabled = true;
	}

	public disablePush(): void {
		UAirship.namedUser().identifier = null;
	}
}
