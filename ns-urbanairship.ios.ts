import {Common} from './ns-urbanairship.common';

declare const UAConfig: any;
declare const UAirship: any;
declare const UANotificationOptionAlert: any;
declare const UANotificationOptionBadge: any;
declare const UANotificationOptionSound: any;

export class NsUrbanairship extends Common {

	public startUp(): void {
		let config = UAConfig.defaultConfig();
		config.detectProvisioningMode = this.detectProvisioningMode;
		config.developmentAppKey = this.developmentAppKey;
		config.developmentAppSecret = this.developmentAppSecret;
		config.productionAppKey = this.productionAppKey;
		config.productionAppSecret = this.productionAppSecret;

		UAirship.takeOff(config);
		UAirship.push().notificationOptions = (UANotificationOptionAlert | UANotificationOptionBadge | UANotificationOptionSound);
	}

	public enablePush(userId: String): void {
		UAirship.namedUser().identifier = userId;
		UAirship.push().userPushNotificationsEnabled = true;
	}

	public disablePush(): void {
		UAirship.namedUser().identifier = null;
	}
}
