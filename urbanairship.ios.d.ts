import { UrbanAirshipSettings, CommonUrbanAirship } from './ns-urbanairship.common';
export declare class NsUrbanairship implements CommonUrbanAirship {
    private static instance;
    constructor();
    static getInstance(): NsUrbanairship;
    startUp(urbanAirshipSettings: UrbanAirshipSettings): void;
    registerUser(userId: string): void;
    notificationOptIn(): Promise<boolean>;
    private setOptIn(optIn);
    isEnabled(): boolean;
    resetBadgeCount(): void;
    notificationOptOut(): Promise<boolean>;
    unRegisterUser(): void;
}
