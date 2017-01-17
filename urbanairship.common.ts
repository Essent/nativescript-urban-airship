export interface UrbanAirshipSettings {
    detectProvisioningMode: boolean;
    inProduction: boolean;
    developmentAppKey: string;
    developmentAppSecret: string;
    productionAppKey: string;
    productionAppSecret: string;
    gcmSender?: string;
}

export interface CommonUrbanAirship {
    startUp(urbanAirshipSettings: UrbanAirshipSettings): void;
    registerUser(userId: string): void;
    notificationOptIn(): Promise<boolean>;
    isEnabled(): boolean;
    resetBadgeCount(): void;
    notificationOptOut(): Promise<boolean>;
    unRegisterUser(): void;
}
