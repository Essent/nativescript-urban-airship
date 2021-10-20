import { UrbanAirshipSettings, CommonUrbanAirship } from './urban-airship.common';

export class NsUrbanAirship implements CommonUrbanAirship {

    private static instance: NsUrbanAirship = new NsUrbanAirship();
    private static preferenceCenter = new UAPreferenceCenter();

    constructor() {
        if (NsUrbanAirship.instance) {
            throw new Error("Error: Instance failed: Use NsUrbanAirship.getInstance() instead of new.");
        }
        NsUrbanAirship.instance = this;
    }

    static getInstance() {
        return NsUrbanAirship.instance;
    }

    public startUp(urbanAirshipSettings: UrbanAirshipSettings, _application: any): void {
        let config = UAConfig.defaultConfig();
        config.detectProvisioningMode = urbanAirshipSettings.detectProvisioningMode;
        config.developmentAppKey = urbanAirshipSettings.developmentAppKey;
        config.developmentAppSecret = urbanAirshipSettings.developmentAppSecret;
        config.productionAppKey = urbanAirshipSettings.productionAppKey;
        config.productionAppSecret = urbanAirshipSettings.productionAppSecret;
        config.inProduction = urbanAirshipSettings.inProduction;
        
        UAirship.takeOffLaunchOptions(config, null);
        if (!this.pushIsValid()) {
            return;
        }
        UAirship.push.notificationOptions = (UANotificationOptions.Alert | UANotificationOptions.Badge | UANotificationOptions.Sound);
    }

    public registerUser(userId: string): void {
        if (!this.pushIsValid()) {
            return;
        }
        UAirship.contact.identify(userId);
    }

    public unRegisterUser(): void {
        if (!this.pushIsValid()) {
            return;
        }
        UAirship.contact.reset();
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
            UAirship.push.userPushNotificationsEnabled = optIn;
            resolve(this.isOptIn());
        });
    }
    
    public isOptIn(): boolean {
        if (!this.pushIsValid()) {
            return false;
        }
        return UAirship.push.userPushNotificationsEnabled;
    }

    public getChannelID(): string {
        if (!this.pushIsValid()) {
            return undefined;
        }
        return UAirship.channel.identifier;
    }

    // delegate is type of UAPushNotificationDelegate
    public setNotificationDelegate(delegate: any): void {
        if (!this.pushIsValid()) {
            return;
        }
        UAirship.push.pushNotificationDelegate = delegate;
    }

    public getRegistrationToken(): string {
        if (!this.pushIsValid()) {
            return undefined;
        }
        return UAirship.push.deviceToken;
    }

    public resetBadgeCount(): void {
        if (!this.pushIsValid()) {
            return;
        }
        UAirship.push.resetBadge();
    }

    private pushIsValid(): boolean {
        if (UAirship.push === null) {
            console.error('pushIsValid - UAirship.push() is null please check credentials');
            return false;
        }
        return true;
    }

    public openPreferenceCenter(id: string): void {
        NsUrbanAirship.preferenceCenter.openPreferenceCenter(id);
    }
}