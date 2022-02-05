import { UrbanAirshipSettings, CommonUrbanAirship } from './urban-airship.common';
export declare class NsUrbanAirship implements CommonUrbanAirship {
    private static instance;
    constructor();
    static getInstance(): NsUrbanAirship;
    startUp(urbanAirshipSettings: UrbanAirshipSettings, application: any): void;
    registerUser(userId: string): void;
    unRegisterUser(): void;
    notificationOptIn(): Promise<boolean>;
    notificationOptOut(): Promise<boolean>;
    private setOptIn;
    isOptIn(): boolean;
    getChannelID(): string;
    getRegistrationToken(): string;
    openPreferenceCenter(id: string): void;
    resetBadgeCount(): void;
    setNotificationDelegate(delegate: any): void;
    setDeepLinkDelegate(delegate: any): void;
}
