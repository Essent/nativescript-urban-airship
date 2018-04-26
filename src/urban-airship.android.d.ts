import { UrbanAirshipSettings, CommonUrbanAirship } from './urban-airship.common';
export declare class NsUrbanairship implements CommonUrbanAirship {
    private static instance;
    constructor();
    static getInstance(): NsUrbanairship;
    startUp(urbanAirshipSettings: UrbanAirshipSettings): void;
    registerUser(userId: string): void;
    unRegisterUser(): void;
    notificationOptIn(): Promise<boolean>;
    notificationOptOut(): Promise<boolean>;
    private setOptIn(optIn);
    isOptIn(): boolean;
    getChannelID(): string;
    getRegistrationToken(): string;
    resetBadgeCount(): void;
    setNotificationDelegate(delegate: any): void;
}
