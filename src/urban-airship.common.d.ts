export interface UrbanAirshipSettings {
    detectProvisioningMode: boolean;
    inProduction: boolean;
    developmentAppKey: string;
    developmentAppSecret: string;
    productionAppKey: string;
    productionAppSecret: string;
    fcmSender?: string;
}
export interface CommonUrbanAirship {
    startUp(urbanAirshipSettings: UrbanAirshipSettings, application: any): void;
    registerUser(userId: string): void;
    setNotificationDelegate(delegate: any): void;
    notificationOptIn(): Promise<boolean>;
    isOptIn(): boolean;
    getChannelID(): string;
    notificationOptOut(): Promise<boolean>;
    unRegisterUser(): void;
    resetBadgeCount(): void;
    getRegistrationToken(): string;
}
