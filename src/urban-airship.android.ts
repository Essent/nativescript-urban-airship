import { UrbanAirshipSettings, CommonUrbanAirship } from './urban-airship.common';
import UAirship = com.urbanairship.UAirship;
import AirshipConfigOptions = com.urbanairship.AirshipConfigOptions;

export class NsUrbanAirship implements CommonUrbanAirship {

    private static instance: NsUrbanAirship = new NsUrbanAirship();

    constructor() {
        if (NsUrbanAirship.instance) {
            throw new Error("Error: Instance failed: Use NsUrbanAirship.getInstance() instead of new.");
        }
        NsUrbanAirship.instance = this;
    }

    static getInstance() {
        return NsUrbanAirship.instance;
    }

    public startUp(urbanAirshipSettings: UrbanAirshipSettings, application: any): void {
        const options = new AirshipConfigOptions.Builder()
            .setDevelopmentAppKey(urbanAirshipSettings.developmentAppKey)
            .setDevelopmentAppSecret(urbanAirshipSettings.developmentAppSecret)
            .setProductionAppKey(urbanAirshipSettings.productionAppKey)
            .setProductionAppSecret(urbanAirshipSettings.productionAppSecret)
            .setInProduction(urbanAirshipSettings.inProduction)
            .setFcmSenderId(urbanAirshipSettings.fcmSender)
            .build();

        UAirship.takeOff(application, options);
    }

    public registerUser(userId: string): void {
        UAirship.shared().getNamedUser().setId(userId);
    }

    public unRegisterUser(): void {
        UAirship.shared().getNamedUser().setId(null);
    }

    public notificationOptIn(): Promise<boolean> {
        return this.setOptIn(true);
    }

    public notificationOptOut(): Promise<boolean> {
        return this.setOptIn(false);
    }

    private setOptIn(optIn: boolean): Promise<boolean> {
        return new Promise((resolve) => {
            UAirship.shared().getPushManager().setUserNotificationsEnabled(optIn);
            resolve(this.isOptIn());
        });
    }

    public isOptIn(): boolean {
        return UAirship.shared().getPushManager().isPushEnabled();
    }

    public getChannelID(): string {
        return UAirship.shared().getChannel().getId();
    }

    public getRegistrationToken(): string {
        return UAirship.shared().getPushManager().getPushToken();
    }

    // support only for ios
    public resetBadgeCount(): void { }
    public setNotificationDelegate(delegate: any): void { }

}
