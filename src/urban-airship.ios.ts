import { UrbanAirshipSettings, CommonUrbanAirship } from './urban-airship.common';

// @TODO see if we can use UANotificationOptions
declare const UANotificationOptionAlert: any;
declare const UANotificationOptionBadge: any;
declare const UANotificationOptionSound: any;
declare const UAPushNotificationDelegate: any;
declare const UAConfig: any;
declare const UAirship: any;

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

        if (!this.pushIsValid()) {
            return;
        }
        UAirship.push().notificationOptions = (UANotificationOptionAlert | UANotificationOptionBadge | UANotificationOptionSound);
    }

    public registerUser(userId: string): void {
        if (!this.pushIsValid()) {
            return;
        }
        UAirship.namedUser().identifier = userId;
    }

    public unRegisterUser(): void {
        if (!this.pushIsValid()) {
            return;
        }
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
            if (!this.pushIsValid()) {
                return;
            }
            UAirship.push().userPushNotificationsEnabled = optIn;
            resolve(this.isOptIn());
        });
    }

    public isOptIn(): boolean {
        if (!this.pushIsValid()) {
            return false;
        }
        return UAirship.push().userPushNotificationsEnabled;
    }

    public getChannelID(): string {
        if (!this.pushIsValid()) {
            return undefined;
        }
        return UAirship.push().channelID;
    }

    // delegate is type of UAPushNotificationDelegate
    public setNotificationDelegate(delegate: any): void {
        if (!this.pushIsValid()) {
            return;
        }
        UAirship.push().pushNotificationDelegate = delegate;
    }

    // support only for android
    public getRegistrationToken(): string {
        return "";
    }

    public resetBadgeCount(): void {
        if (!this.pushIsValid()) {
            return;
        }
        UAirship.push().resetBadge();
    }

    private pushIsValid(): boolean {
        if (UAirship.push() === null) {
            console.error('pushIsValid - UAirship.push() is null please check credentials');
            return false;
        }
        return true;
    }
}
