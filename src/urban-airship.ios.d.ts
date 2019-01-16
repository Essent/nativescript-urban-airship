import { UrbanAirshipSettings, CommonUrbanAirship } from './urban-airship.common';
export declare class NsUrbanAirship implements CommonUrbanAirship {
    private static instance;
    constructor();
    static getInstance(): NsUrbanAirship;
    startUp(urbanAirshipSettings: UrbanAirshipSettings, _application: any): void;
    registerUser(userId: string): void;
    unRegisterUser(): void;
    notificationOptIn(): Promise<boolean>;
    notificationOptOut(): Promise<boolean>;
    private setOptIn(optIn);
    isOptIn(): boolean;
    getChannelID(): string;
    setNotificationDelegate(delegate: any): void;
    getRegistrationToken(): string;
    resetBadgeCount(): void;
    private pushIsValid();
}
