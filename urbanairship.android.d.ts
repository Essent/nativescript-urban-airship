import { UrbanAirshipSettings } from './ns-urbanairship.common';
export declare class NsUrbanairship {
    private static instance;
    constructor();
    static getInstance(): NsUrbanairship;
    startUp(urbanAirshipSettings: UrbanAirshipSettings): void;
    enablePush(userId: string): Promise<{}>;
    isEnabled(): boolean;
    resetBadgeCount(): void;
    notificationOptOut(): Promise<{}>;
    disablePush(): void;
}
