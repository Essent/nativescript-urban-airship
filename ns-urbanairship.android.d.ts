import { Common, UrbanAirshipSettings } from './ns-urbanairship.common';
export declare class NsUrbanairship extends Common {
    private static instance;
    constructor();
    static getInstance(): NsUrbanairship;
    startUp(urbanAirshipSettings: UrbanAirshipSettings): void;
    enablePush(userId: String): void;
    disablePush(): void;
}
