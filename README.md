# NativeScript plugin for Urban Airship
[![npm version](https://badge.fury.io/js/nativescript-urban-airship.svg)](https://www.npmjs.com/package/nativescript-urban-airship)

This is a plugin to use the [Urban Airship](https://www.urbanairship.com/) SDK (Android v15.0.0, iOS v15.0.1) with NativeScript.  
For iOS this plugin uses APNS and for Android it uses FCM.

## Requirements
* Xcode 12.x
* Android SDK 29
* NativeScript CLI 7.x
* Urban Airship account

## Installation
Run the following command from the root of your project:

```console
npm install nativescript-urban-airship
```

### Setup
First create a file with all your Urban Airship setting ([example](./demo/app/urbanAirshipSettings.ts)).

#### Android
1. Create a custom native android.app.Application in your app folder ([example](./demo/app/application.android.ts)) that calls `startUp()` with your settings in the `onCreate()`:
    ```ts
    public onCreate(): void {
        super.onCreate();
    
        NsUrbanAirship.getInstance().startUp(urbanAirshipSettings, this);
    }
    ```
    Use that custom application in the application tag in your `AndroidManifest.xml` ([example](./demo/app/App_Resources/Android/src/main/AndroidManifest.xml#L22)).

2. Place your `google-services.json` in your `App_Resources/Android` folder. This json file can be created using the [setup of FCM](https://firebase.google.com/docs/android/setup).

3. Copy the hooks [firebase-adjust-gradle.js](./demo/hooks/after-prepare/firebase-adjust-gradle.js) and [firebase-copy-google-services.js](./demo/hooks/after-prepare/firebase-copy-google-services.js) from our demo app to the `after-prepare` folder of your app.

4. Specify the right `applicationId` in your app's `app.gradle` ([example](./demo/app/App_Resources/Android/app.gradle#L10)).

5. Specify the right `id` in your app's `package.json`.

#### iOS
Create a custom UIApplicationDelegate in your app folder ([example](./demo/app/custom.delegate.ts)) that calls `startUp()` with your settings in the `applicationDidFinishLaunchingWithOptions()`:
```ts
applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
    NsUrbanAirship.getInstance().startUp(urbanAirshipSettings, null);
    return true;
};
```
Import that custom UIApplicationDelegate in your `app.ts` ([example](./demo/app/app.ts)).

### Known Issues
When using webpack, calling `startUp()` on Android in a custom native android.app.Application is not working, in that case it is better to call the native function instead of `startUp()`:
```ts
public onCreate(): void {
    super.onCreate();

    const options = new com.urbanairship.AirshipConfigOptions.Builder()
        .setDevelopmentAppKey(urbanAirshipSettings.developmentAppKey)
        .setDevelopmentAppSecret(urbanAirshipSettings.developmentAppSecret)
        .setProductionAppKey(urbanAirshipSettings.productionAppKey)
        .setProductionAppSecret(urbanAirshipSettings.productionAppSecret)
        .setInProduction(urbanAirshipSettings.inProduction)
        .setFcmSenderId(urbanAirshipSettings.fcmSender)
        .build();

    com.urbanairship.UAirship.takeOff(this, options);
}
```

### Optional functions

#### Setting Named User Id
To register a named user id call `registerUser()`.

```ts
NsUrbanairship.getInstance().registerUser('MY_NEW_USER_ID');
```

#### Removing Named User Id
To remove a named user id call `unRegisterUser()`.

```ts
NsUrbanairship.getInstance().unRegisterUser();
```

#### Enabling User Notifications
To set user notifications to enabled call `notificationOptIn()`.

```ts
NsUrbanairship.getInstance().notificationOptIn();
```

#### Disabling User Notifications
To set user notifications to disabled call `notificationOptOut()`.

```ts
NsUrbanairship.getInstance().notificationOptOut();
```

#### Getting Enabled User Notifications
To get the status of enabled push notifications call `isOptIn()`, this will return true or false.

```ts
NsUrbanairship.getInstance().isOptIn();
```

#### Getting Channel ID
To get the channel ID call `getChannelID()`, this will return a string.

```ts
NsUrbanairship.getInstance().getChannelID();
```

#### Getting Registration Token
To get the registration token (APNS token for iOS and FCM token for Android) call `getRegistrationToken()`, this will return a string.

```ts
NsUrbanairship.getInstance().getRegistrationToken();
```

#### Resetting Badge Count (iOS only)
To reset the badge count call `resetBadgeCount()`.

```ts
NsUrbanairship.getInstance().resetBadgeCount();
```

#### Opening Preference Center
To open the preference center call `openPreferenceCenter()`.

```ts
NsUrbanairship.getInstance().openPreferenceCenter('PREFERENCE_CENTER_ID');
```