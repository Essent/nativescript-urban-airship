import { PushNotification as Common } from './push-notification';

export class PushNotification implements Common {
    public static initialize(): void {
        // Android initializes push notifications by intercepting the onCreate hook of android in application.android.ts
    }

    private constructor() {
        // Prevent instances
    }
}
