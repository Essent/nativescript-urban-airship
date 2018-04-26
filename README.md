# NativeScript plugin for Urban Airship
[![npm version](https://badge.fury.io/js/nativescript-urban-airship.svg)](https://www.npmjs.com/package/nativescript-urban-airship)

This is a plugin to use the [Urban Airship](https://www.urbanairship.com/) SDK (Android v9.0.0, iOS v9.0.5) with NativeScript.

## Installation
Run the following command from the root of your project:

```console
$ tns plugin add nativescript-urban-airship
```

### Setup (Android Only)
Add the following meta-data to the application tag in the AndroidManifest.xml file of your app ([example](./demo/app/App_Resources/Android/src/main/AndroidManifest.xml)):
```xml
<meta-data
    android:name="com.urbanairship.autopilot"
    android:value="com.urbanairship.Autopilot"/>
```

## Usage
In your app folder create a file for your setting:

```ts
import { UrbanAirshipSettings } from 'nativescript-urban-airship';

export const urbanAirshipSettings: UrbanAirshipSettings = {
    developmentAppKey: "Your Development App Key",
    developmentAppSecret: "Your Development App Secret",
    // FCM/GCM Sender ID
    gcmSender: "Your Google API Project Number",
    detectProvisioningMode: false,
    // Toggles between the development and production app credentials
    // Before submitting your application to an app store set to true
    inProduction: false,
    productionAppKey: "Your Production App Key",
    productionAppSecret: "Your Production Secret"
};
```

At the launch of your app call `startUp` with your own settings from the previous step, preferably in your app.ts.

```ts
NsUrbanairship.getInstance().startUp(urbanAirshipSettings);
```

## Optional functions

### Setting Named User Id
To register a named user id call `registerUser()`.

```ts
NsUrbanairship.getInstance().registerUser('MY_NEW_USER_ID');
```

### Removing Named User Id
To remove a named user id call `unRegisterUser()`.

```ts
NsUrbanairship.getInstance().unRegisterUser();
```

### Enabling User Notifications
To set user notifications to enabled call `notificationOptIn()`.

```ts
NsUrbanairship.getInstance().notificationOptIn();
```

### Disabling User Notifications
To set user notifications to disabled call `notificationOptOut()`.

```ts
NsUrbanairship.getInstance().notificationOptOut();
```

### Getting Enabled User Notifications
To get the status of enabled push notifications call `isOptIn()`, this will return true or false.

```ts
NsUrbanairship.getInstance().isOptIn();
```

### Getting Channel ID
To get the channel ID call `getChannelID()`, this will return a string.

```ts
NsUrbanairship.getInstance().getChannelID();
```

### Getting Registration Token
To get the registration token (APNS token for iOS and GCM token for Android) call `getRegistrationToken()`, this will return a string.

```ts
NsUrbanairship.getInstance().getRegistrationToken();
```

### Resetting Badge Count (iOS only)
To reset the badge count call `resetBadgeCount()`.

```ts
NsUrbanairship.getInstance().resetBadgeCount();
```