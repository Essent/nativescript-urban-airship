import { UrbanAirshipSettings, CommonUrbanAirship } from './ns-urbanairship.common';
export declare class NsUrbanairship implements CommonUrbanAirship {
    private static instance;
    constructor();
    static getInstance(): NsUrbanairship;
    startUp(urbanAirshipSettings: UrbanAirshipSettings): void;
    enablePush(userId: String): void;
    registerUser(userId: string): Promise<boolean>;
    notificationOptIn(): void;
    isEnabled(): boolean;
    resetBadgeCount(): void;
    notificationOptOut(): Promise<boolean>;
    unRegisterUser(): void;
}
