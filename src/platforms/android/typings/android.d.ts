/// <reference path="android-declarations.d.ts"/>


declare module com {
	export module urbanairship {
		export class ActivityMonitor {
			public static class: java.lang.Class<com.urbanairship.ActivityMonitor>;
			public activityLifecycleCallbacks: globalAndroid.app.Application.ActivityLifecycleCallbacks;
			public addListener(param0: com.urbanairship.ActivityMonitor.Listener): void;
			public removeListener(param0: com.urbanairship.ActivityMonitor.Listener): void;
			public isAppForegrounded(): boolean;
			public getResumedActivity(): globalAndroid.app.Activity;
			public constructor();
			public static shared(param0: globalAndroid.content.Context): com.urbanairship.ActivityMonitor;
		}
		export module ActivityMonitor {
			export class Listener {
				public static class: java.lang.Class<com.urbanairship.ActivityMonitor.Listener>;
				/**
				 * Constructs a new instance of the com.urbanairship.ActivityMonitor$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onForeground(param0: number): void;
					onBackground(param0: number): void;
				});
				public constructor();
				public onBackground(param0: number): void;
				public onForeground(param0: number): void;
			}
			export class SimpleListener extends com.urbanairship.ActivityMonitor.Listener {
				public static class: java.lang.Class<com.urbanairship.ActivityMonitor.SimpleListener>;
				public onBackground(param0: number): void;
				public onActivityCreated(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
				public onActivityResumed(param0: globalAndroid.app.Activity): void;
				public onActivityDestroyed(param0: globalAndroid.app.Activity): void;
				public onActivityStarted(param0: globalAndroid.app.Activity): void;
				public onActivitySaveInstanceState(param0: globalAndroid.app.Activity, param1: globalAndroid.os.Bundle): void;
				public onActivityStopped(param0: globalAndroid.app.Activity): void;
				public onForeground(param0: number): void;
				public onActivityPaused(param0: globalAndroid.app.Activity): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export abstract class AirshipComponent {
			public static class: java.lang.Class<com.urbanairship.AirshipComponent>;
			public onComponentEnableChange(param0: boolean): void;
			public constructor(param0: com.urbanairship.PreferenceDataStore);
			public tearDown(): void;
			public onPerformJob(param0: com.urbanairship.UAirship, param1: com.urbanairship.job.JobInfo): number;
			public onNewConfig(param0: com.urbanairship.json.JsonList): void;
			public getDataStore(): com.urbanairship.PreferenceDataStore;
			public init(): void;
			public getJobExecutor(param0: com.urbanairship.job.JobInfo): java.util.concurrent.Executor;
			public setComponentEnabled(param0: boolean): void;
			public isComponentEnabled(): boolean;
			public onAirshipReady(param0: com.urbanairship.UAirship): void;
		}
	}
}

declare module com {
	export module urbanairship {
		export class AirshipConfigOptions {
			public static class: java.lang.Class<com.urbanairship.AirshipConfigOptions>;
			public static ADM_TRANSPORT: string;
			public static GCM_TRANSPORT: string;
			public static FCM_TRANSPORT: string;
			public productionAppKey: string;
			public productionAppSecret: string;
			public developmentAppKey: string;
			public developmentAppSecret: string;
			public hostURL: string;
			public analyticsServer: string;
			public landingPageContentURL: string;
			public remoteDataURL: string;
			public gcmSender: string;
			public fcmSenderId: string;
			public developmentFcmSenderId: string;
			public productionFcmSenderId: string;
			public allowedTransports: native.Array<string>;
			public customPushProvider: com.urbanairship.push.PushProvider;
			public whitelist: native.Array<string>;
			public enableUrlWhitelisting: boolean;
			public inProduction: boolean;
			public analyticsEnabled: boolean;
			public backgroundReportingIntervalMS: number;
			public clearNamedUser: boolean;
			public developmentLogLevel: number;
			public productionLogLevel: number;
			public autoLaunchApplication: boolean;
			public channelCreationDelayEnabled: boolean;
			public channelCaptureEnabled: boolean;
			public notificationIcon: number;
			public walletUrl: string;
			public notificationAccentColor: number;
			public notificationChannel: string;
			public appStoreUri: globalAndroid.net.Uri;
			public getLoggerLevel(): number;
			public getAppKey(): string;
			public getFcmSenderId(): string;
			public isTransportAllowed(param0: string): boolean;
			public getAppSecret(): string;
		}
		export module AirshipConfigOptions {
			export class Builder {
				public static class: java.lang.Class<com.urbanairship.AirshipConfigOptions.Builder>;
				public setAnalyticsEnabled(param0: boolean): com.urbanairship.AirshipConfigOptions.Builder;
				public applyProperties(param0: globalAndroid.content.Context, param1: java.util.Properties): com.urbanairship.AirshipConfigOptions.Builder;
				public setDevelopmentFcmSenderId(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public setInProduction(param0: boolean): com.urbanairship.AirshipConfigOptions.Builder;
				public setDevelopmentAppSecret(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public setNotificationIcon(param0: number): com.urbanairship.AirshipConfigOptions.Builder;
				public setHostURL(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public setProductionFcmSenderId(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public constructor();
				public setAllowedTransports(param0: native.Array<string>): com.urbanairship.AirshipConfigOptions.Builder;
				public setCustomPushProvider(param0: com.urbanairship.push.PushProvider): com.urbanairship.AirshipConfigOptions.Builder;
				public applyDefaultProperties(param0: globalAndroid.content.Context): com.urbanairship.AirshipConfigOptions.Builder;
				public setAnalyticsServer(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public setBackgroundReportingIntervalMS(param0: number): com.urbanairship.AirshipConfigOptions.Builder;
				public setProductionAppSecret(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public setAutoLaunchApplication(param0: boolean): com.urbanairship.AirshipConfigOptions.Builder;
				public setProductionLogLevel(param0: number): com.urbanairship.AirshipConfigOptions.Builder;
				public setWalletUrl(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public setGcmSender(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public setClearNamedUser(param0: boolean): com.urbanairship.AirshipConfigOptions.Builder;
				public setEnableUrlWhitelisting(param0: boolean): com.urbanairship.AirshipConfigOptions.Builder;
				public build(): com.urbanairship.AirshipConfigOptions;
				public setDevelopmentLogLevel(param0: number): com.urbanairship.AirshipConfigOptions.Builder;
				public setAppStoreUri(param0: globalAndroid.net.Uri): com.urbanairship.AirshipConfigOptions.Builder;
				public applyProperties(param0: globalAndroid.content.Context, param1: string): com.urbanairship.AirshipConfigOptions.Builder;
				public setNotificationChannel(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public detectProvisioningMode(param0: globalAndroid.content.Context): com.urbanairship.AirshipConfigOptions.Builder;
				public setNotificationAccentColor(param0: number): com.urbanairship.AirshipConfigOptions.Builder;
				public setLandingPageContentURL(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public setChannelCaptureEnabled(param0: boolean): com.urbanairship.AirshipConfigOptions.Builder;
				public setChannelCreationDelayEnabled(param0: boolean): com.urbanairship.AirshipConfigOptions.Builder;
				public applyConfig(param0: globalAndroid.content.Context, param1: number): com.urbanairship.AirshipConfigOptions.Builder;
				public setFcmSenderId(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public setProductionAppKey(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public setWhitelist(param0: native.Array<string>): com.urbanairship.AirshipConfigOptions.Builder;
				public setDevelopmentAppKey(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
				public setRemoteDataURL(param0: string): com.urbanairship.AirshipConfigOptions.Builder;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export class AirshipReceiver {
			public static class: java.lang.Class<com.urbanairship.AirshipReceiver>;
			public onPushReceived(param0: globalAndroid.content.Context, param1: com.urbanairship.push.PushMessage, param2: boolean): void;
			public onChannelUpdated(param0: globalAndroid.content.Context, param1: string): void;
			public onChannelCreated(param0: globalAndroid.content.Context, param1: string): void;
			public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public onChannelRegistrationFailed(param0: globalAndroid.content.Context): void;
			public onNotificationPosted(param0: globalAndroid.content.Context, param1: com.urbanairship.AirshipReceiver.NotificationInfo): void;
			public constructor();
			public onNotificationDismissed(param0: globalAndroid.content.Context, param1: com.urbanairship.AirshipReceiver.NotificationInfo): void;
			public onNotificationOpened(param0: globalAndroid.content.Context, param1: com.urbanairship.AirshipReceiver.NotificationInfo, param2: com.urbanairship.AirshipReceiver.ActionButtonInfo): boolean;
			public onNotificationOpened(param0: globalAndroid.content.Context, param1: com.urbanairship.AirshipReceiver.NotificationInfo): boolean;
		}
		export module AirshipReceiver {
			export class ActionButtonInfo {
				public static class: java.lang.Class<com.urbanairship.AirshipReceiver.ActionButtonInfo>;
				public getButtonId(): string;
				public isForeground(): boolean;
				public getRemoteInput(): globalAndroid.os.Bundle;
			}
			export class NotificationInfo {
				public static class: java.lang.Class<com.urbanairship.AirshipReceiver.NotificationInfo>;
				public getNotificationId(): number;
				public getNotificationTag(): string;
				public getMessage(): com.urbanairship.push.PushMessage;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export class AirshipVersionInfo {
			public static class: java.lang.Class<com.urbanairship.AirshipVersionInfo>;
			/**
			 * Constructs a new instance of the com.urbanairship.AirshipVersionInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getAirshipVersion(): string;
				getPackageVersion(): string;
			});
			public constructor();
			public getPackageVersion(): string;
			public getAirshipVersion(): string;
		}
	}
}

declare module com {
	export module urbanairship {
		export class AlarmOperationScheduler extends com.urbanairship.OperationScheduler {
			public static class: java.lang.Class<com.urbanairship.AlarmOperationScheduler>;
			public static shared(param0: globalAndroid.content.Context): com.urbanairship.AlarmOperationScheduler;
			public schedule(param0: number, param1: com.urbanairship.CancelableOperation): void;
		}
		export module AlarmOperationScheduler {
			export class InternalScheduler {
				public static class: java.lang.Class<com.urbanairship.AlarmOperationScheduler.InternalScheduler>;
				/**
				 * Constructs a new instance of the com.urbanairship.AlarmOperationScheduler$InternalScheduler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					schedule(param0: globalAndroid.content.Context, param1: number, param2: com.urbanairship.CancelableOperation): void;
				});
				public constructor();
				public schedule(param0: globalAndroid.content.Context, param1: number, param2: com.urbanairship.CancelableOperation): void;
			}
			export class JellyBeanScheduler extends com.urbanairship.AlarmOperationScheduler.InternalScheduler {
				public static class: java.lang.Class<com.urbanairship.AlarmOperationScheduler.JellyBeanScheduler>;
				public schedule(param0: globalAndroid.content.Context, param1: number, param2: com.urbanairship.CancelableOperation): void;
			}
			export class NougatScheduler extends com.urbanairship.AlarmOperationScheduler.InternalScheduler {
				public static class: java.lang.Class<com.urbanairship.AlarmOperationScheduler.NougatScheduler>;
				public schedule(param0: globalAndroid.content.Context, param1: number, param2: com.urbanairship.CancelableOperation): void;
			}
			export module NougatScheduler {
				export class AlarmListener extends com.urbanairship.CancelableOperation {
					public static class: java.lang.Class<com.urbanairship.AlarmOperationScheduler.NougatScheduler.AlarmListener>;
					public cancel(): boolean;
					public onAlarm(): void;
					public isDone(): boolean;
					public constructor();
					public isCancelled(): boolean;
					public constructor(param0: globalAndroid.app.AlarmManager, param1: java.lang.Runnable);
					public onRun(): void;
					public cancel(param0: boolean): boolean;
					public onCancel(): void;
					public constructor(param0: globalAndroid.os.Looper);
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export class ApplicationMetrics extends com.urbanairship.AirshipComponent {
			public static class: java.lang.Class<com.urbanairship.ApplicationMetrics>;
			public getAppVersionUpdated(): boolean;
			public tearDown(): void;
			public getLastOpenTimeMillis(): number;
			public init(): void;
			public getCurrentAppVersion(): number;
		}
	}
}

declare module com {
	export module urbanairship {
		export class Autopilot extends com.urbanairship.UAirship.OnReadyCallback {
			public static class: java.lang.Class<com.urbanairship.Autopilot>;
			public static AUTOPILOT_MANIFEST_KEY: string;
			public allowEarlyTakeOff(param0: globalAndroid.content.Context): boolean;
			public isReady(param0: globalAndroid.content.Context): boolean;
			public static automaticTakeOff(param0: globalAndroid.app.Application): void;
			public constructor();
			public static automaticTakeOff(param0: globalAndroid.content.Context): void;
			public createAirshipConfigOptions(param0: globalAndroid.content.Context): com.urbanairship.AirshipConfigOptions;
			public onAirshipReady(param0: com.urbanairship.UAirship): void;
		}
	}
}

declare module com {
	export module urbanairship {
		export class BuildConfig {
			public static class: java.lang.Class<com.urbanairship.BuildConfig>;
			public static DEBUG: boolean;
			public static APPLICATION_ID: string;
			public static BUILD_TYPE: string;
			public static FLAVOR: string;
			public static VERSION_CODE: number;
			public static VERSION_NAME: string;
			public static SDK_VERSION: string;
			public static URBAN_AIRSHIP_VERSION: string;
			public constructor();
		}
	}
}

declare module com {
	export module urbanairship {
		export class Cancelable {
			public static class: java.lang.Class<com.urbanairship.Cancelable>;
			/**
			 * Constructs a new instance of the com.urbanairship.Cancelable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				cancel(param0: boolean): boolean;
				cancel(): boolean;
				isDone(): boolean;
				isCancelled(): boolean;
			});
			public constructor();
			public cancel(param0: boolean): boolean;
			public cancel(): boolean;
			public isCancelled(): boolean;
			public isDone(): boolean;
		}
	}
}

declare module com {
	export module urbanairship {
		export abstract class CancelableOperation extends com.urbanairship.Cancelable {
			public static class: java.lang.Class<com.urbanairship.CancelableOperation>;
			public cancel(param0: boolean): boolean;
			public cancel(): boolean;
			public addOnCancel(param0: com.urbanairship.Cancelable): com.urbanairship.CancelableOperation;
			public onCancel(): void;
			public onRun(): void;
			public constructor(param0: globalAndroid.os.Looper);
			public run(): void;
			public isCancelled(): boolean;
			public constructor();
			public isDone(): boolean;
			public addOnRun(param0: java.lang.Runnable): com.urbanairship.CancelableOperation;
			public getHandler(): globalAndroid.os.Handler;
		}
	}
}

declare module com {
	export module urbanairship {
		export class ChannelCapture extends com.urbanairship.AirshipComponent {
			public static class: java.lang.Class<com.urbanairship.ChannelCapture>;
			public enable(param0: number, param1: java.util.concurrent.TimeUnit): void;
			public disable(): void;
			public tearDown(): void;
			public init(): void;
		}
	}
}

declare module com {
	export module urbanairship {
		export class ChannelCaptureActivity extends com.urbanairship.messagecenter.ThemedActivity {
			public static class: java.lang.Class<com.urbanairship.ChannelCaptureActivity>;
			public getLifecycle(): any;
			public getViewModelStore(): any;
			public onCreate(param0: globalAndroid.os.Bundle): void;
			public constructor();
			public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
			public validateRequestPermissionsRequestCode(param0: number): void;
		}
	}
}

declare module com {
	export module urbanairship {
		export class ConfigParser {
			public static class: java.lang.Class<com.urbanairship.ConfigParser>;
			/**
			 * Constructs a new instance of the com.urbanairship.ConfigParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getCount(): number;
				getName(param0: number): string;
				getString(param0: number): string;
				getBoolean(param0: number): boolean;
				getStringArray(param0: number): native.Array<string>;
				getDrawableResourceId(param0: number): number;
				getColor(param0: number): number;
				getLong(param0: number): number;
			});
			public constructor();
			public getDrawableResourceId(param0: number): number;
			public getColor(param0: number): number;
			public getLong(param0: number): number;
			public getString(param0: number): string;
			public getStringArray(param0: number): native.Array<string>;
			public getCount(): number;
			public getBoolean(param0: number): boolean;
			public getName(param0: number): string;
		}
	}
}

declare module com {
	export module urbanairship {
		export class CoreActivity {
			public static class: java.lang.Class<com.urbanairship.CoreActivity>;
			public onCreate(param0: globalAndroid.os.Bundle): void;
			public constructor();
		}
	}
}

declare module com {
	export module urbanairship {
		export class CoreReceiver {
			public static class: java.lang.Class<com.urbanairship.CoreReceiver>;
			public constructor(param0: java.util.concurrent.Executor);
			public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public constructor();
		}
	}
}

declare module com {
	export module urbanairship {
		export class Fonts {
			public static class: java.lang.Class<com.urbanairship.Fonts>;
			public addFontFamily(param0: string, param1: globalAndroid.graphics.Typeface): void;
			public getFontFamily(param0: string): globalAndroid.graphics.Typeface;
			public static shared(param0: globalAndroid.content.Context): com.urbanairship.Fonts;
		}
	}
}

declare module com {
	export module urbanairship {
		export class Logger {
			public static class: java.lang.Class<com.urbanairship.Logger>;
			public static logLevel: number;
			public static TAG: string;
			public static info(param0: string, param1: java.lang.Throwable): void;
			public static warn(param0: java.lang.Throwable): void;
			public static error(param0: java.lang.Throwable): void;
			public static verbose(param0: string): void;
			public static error(param0: string): void;
			public static debug(param0: string, param1: java.lang.Throwable): void;
			public static warn(param0: string, param1: java.lang.Throwable): void;
			public static error(param0: string, param1: java.lang.Throwable): void;
			public static debug(param0: string): void;
			public static warn(param0: string): void;
			public static info(param0: string): void;
		}
	}
}

declare module com {
	export module urbanairship {
		export class OperationScheduler {
			public static class: java.lang.Class<com.urbanairship.OperationScheduler>;
			/**
			 * Constructs a new instance of the com.urbanairship.OperationScheduler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				schedule(param0: number, param1: com.urbanairship.CancelableOperation): void;
			});
			public constructor();
			public schedule(param0: number, param1: com.urbanairship.CancelableOperation): void;
		}
	}
}

declare module com {
	export module urbanairship {
		export class PendingResult<T>  extends java.lang.Object {
			public static class: java.lang.Class<com.urbanairship.PendingResult<any>>;
			public cancel(param0: boolean): boolean;
			public cancel(): boolean;
			public setResult(param0: T): void;
			public addResultCallback(param0: com.urbanairship.ResultCallback<T>): com.urbanairship.PendingResult<T>;
			public get(param0: number, param1: java.util.concurrent.TimeUnit): T;
			public addCancelable(param0: com.urbanairship.Cancelable): com.urbanairship.PendingResult<T>;
			public isCancelled(): boolean;
			public constructor();
			public isDone(): boolean;
			public get(): T;
			public getResult(): T;
			public addResultCallback(param0: globalAndroid.os.Looper, param1: com.urbanairship.ResultCallback<T>): com.urbanairship.PendingResult<T>;
		}
	}
}

declare module com {
	export module urbanairship {
		export class Predicate<T>  extends java.lang.Object {
			public static class: java.lang.Class<com.urbanairship.Predicate<any>>;
			/**
			 * Constructs a new instance of the com.urbanairship.Predicate<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				apply(param0: T): boolean;
			});
			public constructor();
			public apply(param0: T): boolean;
		}
	}
}

declare module com {
	export module urbanairship {
		export class PreferenceDataStore {
			public static class: java.lang.Class<com.urbanairship.PreferenceDataStore>;
			public getInt(param0: string, param1: number): number;
			public getJsonValue(param0: string): com.urbanairship.json.JsonValue;
			public put(param0: string, param1: com.urbanairship.json.JsonValue): void;
			public getLong(param0: string, param1: number): number;
			public put(param0: string, param1: number): void;
			public put(param0: string, param1: boolean): void;
			public init(): void;
			public removeListener(param0: com.urbanairship.PreferenceDataStore.PreferenceChangeListener): void;
			public addListener(param0: com.urbanairship.PreferenceDataStore.PreferenceChangeListener): void;
			public tearDown(): void;
			public remove(param0: string): void;
			public putSync(param0: string, param1: string): boolean;
			public getBoolean(param0: string, param1: boolean): boolean;
			public getString(param0: string, param1: string): string;
			public put(param0: string, param1: com.urbanairship.json.JsonSerializable): void;
			public put(param0: string, param1: string): void;
		}
		export module PreferenceDataStore {
			export class Preference {
				public static class: java.lang.Class<com.urbanairship.PreferenceDataStore.Preference>;
			}
			export class PreferenceChangeListener {
				public static class: java.lang.Class<com.urbanairship.PreferenceDataStore.PreferenceChangeListener>;
				/**
				 * Constructs a new instance of the com.urbanairship.PreferenceDataStore$PreferenceChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPreferenceChange(param0: string): void;
				});
				public constructor();
				public onPreferenceChange(param0: string): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export class PreferencesDataManager extends com.urbanairship.util.DataManager {
			public static class: java.lang.Class<com.urbanairship.PreferencesDataManager>;
			public onDowngrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
			public constructor(param0: globalAndroid.content.Context, param1: string);
			public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
			public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: number);
		}
	}
}

declare module com {
	export module urbanairship {
		export class PropertiesConfigParser extends com.urbanairship.ConfigParser {
			public static class: java.lang.Class<com.urbanairship.PropertiesConfigParser>;
			public getDrawableResourceId(param0: number): number;
			public getColor(param0: number): number;
			public getLong(param0: number): number;
			public getString(param0: number): string;
			public static fromAssets(param0: globalAndroid.content.Context, param1: string): com.urbanairship.PropertiesConfigParser;
			public getStringArray(param0: number): native.Array<string>;
			public getCount(): number;
			public getBoolean(param0: number): boolean;
			public getName(param0: number): string;
			public static fromProperties(param0: globalAndroid.content.Context, param1: java.util.Properties): com.urbanairship.PropertiesConfigParser;
		}
	}
}

declare module com {
	export module urbanairship {
		export class PushProviders {
			public static class: java.lang.Class<com.urbanairship.PushProviders>;
		}
	}
}

declare module com {
	export module urbanairship {
		export class ResultCallback<T>  extends java.lang.Object {
			public static class: java.lang.Class<com.urbanairship.ResultCallback<any>>;
			/**
			 * Constructs a new instance of the com.urbanairship.ResultCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onResult(param0: T): void;
			});
			public constructor();
			public onResult(param0: T): void;
		}
	}
}

declare module com {
	export module urbanairship {
		export class UAirship {
			public static class: java.lang.Class<com.urbanairship.UAirship>;
			public static ACTION_AIRSHIP_READY: string;
			public static AMAZON_PLATFORM: number;
			public static ANDROID_PLATFORM: number;
			public static LOG_TAKE_OFF_STACKTRACE: boolean;
			public static getPackageInfo(): globalAndroid.content.pm.PackageInfo;
			public getWhitelist(): com.urbanairship.js.Whitelist;
			public static shared(): com.urbanairship.UAirship;
			public static getPackageName(): string;
			public getMessageCenter(): com.urbanairship.messagecenter.MessageCenter;
			public getComponents(): java.util.List<com.urbanairship.AirshipComponent>;
			public getPushManager(): com.urbanairship.push.PushManager;
			public getApplicationMetrics(): com.urbanairship.ApplicationMetrics;
			public static shared(param0: com.urbanairship.UAirship.OnReadyCallback): com.urbanairship.Cancelable;
			public static getVersion(): string;
			public static takeOff(param0: globalAndroid.app.Application, param1: com.urbanairship.AirshipConfigOptions): void;
			public getLocationManager(): com.urbanairship.location.UALocationManager;
			public static shared(param0: com.urbanairship.UAirship.OnReadyCallback, param1: globalAndroid.os.Looper): com.urbanairship.Cancelable;
			public static takeOff(param0: globalAndroid.app.Application, param1: com.urbanairship.AirshipConfigOptions, param2: com.urbanairship.UAirship.OnReadyCallback): void;
			public static getPackageManager(): globalAndroid.content.pm.PackageManager;
			public getInbox(): com.urbanairship.richpush.RichPushInbox;
			public static waitForTakeOff(param0: number): com.urbanairship.UAirship;
			public getLegacyInAppMessageManager(): com.urbanairship.iam.LegacyInAppMessageManager;
			public getAirshipConfigOptions(): com.urbanairship.AirshipConfigOptions;
			public static land(): void;
			public static isMainProcess(): boolean;
			public static isFlying(): boolean;
			public getChannelCapture(): com.urbanairship.ChannelCapture;
			public static getApplicationContext(): globalAndroid.content.Context;
			public static getAppInfo(): globalAndroid.content.pm.ApplicationInfo;
			public static takeOff(param0: globalAndroid.app.Application, param1: com.urbanairship.UAirship.OnReadyCallback): void;
			public static isTakingOff(): boolean;
			public getActionRegistry(): com.urbanairship.actions.ActionRegistry;
			public static getAppName(): string;
			public static takeOff(param0: globalAndroid.app.Application): void;
			public getRemoteData(): com.urbanairship.remotedata.RemoteData;
			public getAutomation(): com.urbanairship.automation.Automation;
			public static getUrbanAirshipPermission(): string;
			public getAnalytics(): com.urbanairship.analytics.Analytics;
			public getNamedUser(): com.urbanairship.push.NamedUser;
			public getInAppMessagingManager(): com.urbanairship.iam.InAppMessageManager;
			public getPlatformType(): number;
			public static getAppIcon(): number;
			public static getAppVersion(): number;
		}
		export module UAirship {
			export class OnReadyCallback {
				public static class: java.lang.Class<com.urbanairship.UAirship.OnReadyCallback>;
				/**
				 * Constructs a new instance of the com.urbanairship.UAirship$OnReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onAirshipReady(param0: com.urbanairship.UAirship): void;
				});
				public constructor();
				public onAirshipReady(param0: com.urbanairship.UAirship): void;
			}
			export class Platform {
				public static class: java.lang.Class<com.urbanairship.UAirship.Platform>;
				/**
				 * Constructs a new instance of the com.urbanairship.UAirship$Platform interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export class UrbanAirshipProvider {
			public static class: java.lang.Class<com.urbanairship.UrbanAirshipProvider>;
			public static QUERY_PARAMETER_LIMIT: string;
			public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
			public static getEventsContentUri(param0: globalAndroid.content.Context): globalAndroid.net.Uri;
			public static getRichPushContentUri(param0: globalAndroid.content.Context): globalAndroid.net.Uri;
			public constructor();
			public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
			public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
			public getType(param0: globalAndroid.net.Uri): string;
			public bulkInsert(param0: globalAndroid.net.Uri, param1: native.Array<globalAndroid.content.ContentValues>): number;
			public static getAuthorityString(param0: globalAndroid.content.Context): string;
			public onCreate(): boolean;
			public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
			public shutdown(): void;
			public static getPreferencesContentUri(param0: globalAndroid.content.Context): globalAndroid.net.Uri;
		}
		export module UrbanAirshipProvider {
			export class DatabaseModel {
				public static class: java.lang.Class<com.urbanairship.UrbanAirshipProvider.DatabaseModel>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export class UrbanAirshipResolver {
			public static class: java.lang.Class<com.urbanairship.UrbanAirshipResolver>;
			public update(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
			public delete(param0: globalAndroid.net.Uri, param1: string, param2: native.Array<string>): number;
			public unregisterContentObserver(param0: globalAndroid.database.ContentObserver): void;
			public query(param0: globalAndroid.net.Uri, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
			public insert(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentValues): globalAndroid.net.Uri;
			public registerContentObserver(param0: globalAndroid.net.Uri, param1: boolean, param2: globalAndroid.database.ContentObserver): void;
			public constructor(param0: globalAndroid.content.Context);
			public bulkInsert(param0: globalAndroid.net.Uri, param1: native.Array<globalAndroid.content.ContentValues>): number;
			public notifyChange(param0: globalAndroid.net.Uri, param1: globalAndroid.database.ContentObserver): void;
		}
	}
}

declare module com {
	export module urbanairship {
		export class XmlConfigParser extends com.urbanairship.ConfigParser {
			public static class: java.lang.Class<com.urbanairship.XmlConfigParser>;
			public getDrawableResourceId(param0: number): number;
			public getColor(param0: number): number;
			public getLong(param0: number): number;
			public getString(param0: number): string;
			public getStringArray(param0: number): native.Array<string>;
			public getCount(): number;
			public getBoolean(param0: number): boolean;
			public close(): void;
			public getName(param0: number): string;
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export abstract class Action {
				public static class: java.lang.Class<com.urbanairship.actions.Action>;
				public static SITUATION_MANUAL_INVOCATION: number;
				public static SITUATION_PUSH_RECEIVED: number;
				public static SITUATION_PUSH_OPENED: number;
				public static SITUATION_WEB_VIEW_INVOCATION: number;
				public static SITUATION_FOREGROUND_NOTIFICATION_ACTION_BUTTON: number;
				public static SITUATION_BACKGROUND_NOTIFICATION_ACTION_BUTTON: number;
				public static SITUATION_AUTOMATION: number;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public onFinish(param0: com.urbanairship.actions.ActionArguments, param1: com.urbanairship.actions.ActionResult): void;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public shouldRunOnMainThread(): boolean;
				public onStart(param0: com.urbanairship.actions.ActionArguments): void;
				public constructor();
			}
			export module Action {
				export class Situation {
					public static class: java.lang.Class<com.urbanairship.actions.Action.Situation>;
					/**
					 * Constructs a new instance of the com.urbanairship.actions.Action$Situation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ActionArguments {
				public static class: java.lang.Class<com.urbanairship.actions.ActionArguments>;
				public static RICH_PUSH_ID_METADATA: string;
				public static PUSH_MESSAGE_METADATA: string;
				public static REMOTE_INPUT_METADATA: string;
				public static ACTION_SCHEDULE_METADATA: string;
				public static REGISTRY_ACTION_NAME_METADATA: string;
				public constructor(param0: number, param1: com.urbanairship.actions.ActionValue, param2: globalAndroid.os.Bundle);
				public getValue(): com.urbanairship.actions.ActionValue;
				public toString(): string;
				public getMetadata(): globalAndroid.os.Bundle;
				public getSituation(): number;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ActionCompletionCallback {
				public static class: java.lang.Class<com.urbanairship.actions.ActionCompletionCallback>;
				/**
				 * Constructs a new instance of the com.urbanairship.actions.ActionCompletionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onFinish(param0: com.urbanairship.actions.ActionArguments, param1: com.urbanairship.actions.ActionResult): void;
				});
				public constructor();
				public onFinish(param0: com.urbanairship.actions.ActionArguments, param1: com.urbanairship.actions.ActionResult): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ActionRegistry {
				public static class: java.lang.Class<com.urbanairship.actions.ActionRegistry>;
				public registerDefaultActions(param0: globalAndroid.content.Context): void;
				public registerAction(param0: java.lang.Class<any>, param1: com.urbanairship.actions.ActionRegistry.Predicate, param2: native.Array<string>): com.urbanairship.actions.ActionRegistry.Entry;
				public registerAction(param0: java.lang.Class<any>, param1: native.Array<string>): com.urbanairship.actions.ActionRegistry.Entry;
				public unregisterAction(param0: string): void;
				public registerAction(param0: com.urbanairship.actions.Action, param1: native.Array<string>): com.urbanairship.actions.ActionRegistry.Entry;
				public getEntry(param0: string): com.urbanairship.actions.ActionRegistry.Entry;
				public getEntries(): java.util.Set<com.urbanairship.actions.ActionRegistry.Entry>;
				public constructor();
			}
			export module ActionRegistry {
				export class Entry {
					public static class: java.lang.Class<com.urbanairship.actions.ActionRegistry.Entry>;
					public setPredicate(param0: com.urbanairship.actions.ActionRegistry.Predicate): void;
					public getNames(): java.util.List<string>;
					public toString(): string;
					public addSituationOverride(param0: com.urbanairship.actions.Action, param1: number): void;
					public getPredicate(): com.urbanairship.actions.ActionRegistry.Predicate;
					public getActionForSituation(param0: number): com.urbanairship.actions.Action;
					public getDefaultAction(): com.urbanairship.actions.Action;
					public setDefaultAction(param0: com.urbanairship.actions.Action): void;
				}
				export class Predicate {
					public static class: java.lang.Class<com.urbanairship.actions.ActionRegistry.Predicate>;
					/**
					 * Constructs a new instance of the com.urbanairship.actions.ActionRegistry$Predicate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						apply(param0: com.urbanairship.actions.ActionArguments): boolean;
					});
					public constructor();
					public apply(param0: com.urbanairship.actions.ActionArguments): boolean;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ActionResult {
				public static class: java.lang.Class<com.urbanairship.actions.ActionResult>;
				public static STATUS_COMPLETED: number;
				public static STATUS_REJECTED_ARGUMENTS: number;
				public static STATUS_ACTION_NOT_FOUND: number;
				public static STATUS_EXECUTION_ERROR: number;
				public getException(): java.lang.Exception;
				public static newErrorResult(param0: java.lang.Exception): com.urbanairship.actions.ActionResult;
				public getValue(): com.urbanairship.actions.ActionValue;
				public static newEmptyResult(): com.urbanairship.actions.ActionResult;
				public getStatus(): number;
				public static newResult(param0: com.urbanairship.actions.ActionValue): com.urbanairship.actions.ActionResult;
			}
			export module ActionResult {
				export class Status {
					public static class: java.lang.Class<com.urbanairship.actions.ActionResult.Status>;
					/**
					 * Constructs a new instance of the com.urbanairship.actions.ActionResult$Status interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ActionRunRequest {
				public static class: java.lang.Class<com.urbanairship.actions.ActionRunRequest>;
				public setSituation(param0: number): com.urbanairship.actions.ActionRunRequest;
				public static createRequest(param0: string): com.urbanairship.actions.ActionRunRequest;
				public runSync(): com.urbanairship.actions.ActionResult;
				public setMetadata(param0: globalAndroid.os.Bundle): com.urbanairship.actions.ActionRunRequest;
				public run(param0: com.urbanairship.actions.ActionCompletionCallback): void;
				public static createRequest(param0: com.urbanairship.actions.Action): com.urbanairship.actions.ActionRunRequest;
				public run(): void;
				public setValue(param0: any): com.urbanairship.actions.ActionRunRequest;
				public run(param0: com.urbanairship.actions.ActionCompletionCallback, param1: globalAndroid.os.Looper): void;
				public static createRequest(param0: string, param1: com.urbanairship.actions.ActionRegistry): com.urbanairship.actions.ActionRunRequest;
				public setValue(param0: com.urbanairship.actions.ActionValue): com.urbanairship.actions.ActionRunRequest;
			}
			export module ActionRunRequest {
				export abstract class ActionRunnable {
					public static class: java.lang.Class<com.urbanairship.actions.ActionRunRequest.ActionRunnable>;
					public constructor(param0: com.urbanairship.actions.ActionRunRequest, param1: com.urbanairship.actions.ActionArguments);
					public run(): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ActionRunRequestFactory {
				public static class: java.lang.Class<com.urbanairship.actions.ActionRunRequestFactory>;
				public createActionRequest(param0: string): com.urbanairship.actions.ActionRunRequest;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ActionService {
				public static class: java.lang.Class<com.urbanairship.actions.ActionService>;
				public static ACTION_RUN_ACTIONS: string;
				public static EXTRA_ACTIONS_BUNDLE: string;
				public static EXTRA_SITUATION: string;
				public static EXTRA_METADATA: string;
				public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
				public static runActions(param0: globalAndroid.content.Context, param1: string, param2: number, param3: globalAndroid.os.Bundle): void;
				public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
				public onCreate(): void;
				public static runActions(param0: globalAndroid.content.Context, param1: java.util.Map<string,com.urbanairship.actions.ActionValue>, param2: number, param3: globalAndroid.os.Bundle): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ActionValue extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.actions.ActionValue>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.urbanairship.actions.ActionValue>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getString(): string;
				public constructor(param0: com.urbanairship.json.JsonValue);
				public getDouble(param0: number): number;
				public static wrap(param0: com.urbanairship.json.JsonSerializable): com.urbanairship.actions.ActionValue;
				public getMap(): com.urbanairship.json.JsonMap;
				public static wrap(param0: number): com.urbanairship.actions.ActionValue;
				public toString(): string;
				public constructor();
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public getList(): com.urbanairship.json.JsonList;
				public static wrap(param0: boolean): com.urbanairship.actions.ActionValue;
				public static wrap(param0: string): com.urbanairship.actions.ActionValue;
				public getBoolean(param0: boolean): boolean;
				public hashCode(): number;
				public getLong(param0: number): number;
				public equals(param0: any): boolean;
				public describeContents(): number;
				public getString(param0: string): string;
				public static wrap(param0: any): com.urbanairship.actions.ActionValue;
				public getInt(param0: number): number;
				public isNull(): boolean;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ActionValueException {
				public static class: java.lang.Class<com.urbanairship.actions.ActionValueException>;
				public constructor(param0: string, param1: java.lang.Exception);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class AddCustomEventAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.AddCustomEventAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public constructor();
			}
			export module AddCustomEventAction {
				export class AddCustomEventActionPredicate extends com.urbanairship.actions.ActionRegistry.Predicate {
					public static class: java.lang.Class<com.urbanairship.actions.AddCustomEventAction.AddCustomEventActionPredicate>;
					public apply(param0: com.urbanairship.actions.ActionArguments): boolean;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class CancelSchedulesAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.CancelSchedulesAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static DEFAULT_REGISTRY_SHORT_NAME: string;
				public static GROUPS: string;
				public static IDS: string;
				public static ALL: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ChannelCaptureAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.ChannelCaptureAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static DEFAULT_REGISTRY_SHORT_NAME: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ClipboardAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.ClipboardAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static DEFAULT_REGISTRY_SHORT_NAME: string;
				public static LABEL_KEY: string;
				public static TEXT_KEY: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public shouldRunOnMainThread(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class DeepLinkAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.DeepLinkAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static DEFAULT_REGISTRY_SHORT_NAME: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public shouldRunOnMainThread(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class EnableFeatureAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.EnableFeatureAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static DEFAULT_REGISTRY_SHORT_NAME: string;
				public static FEATURE_USER_NOTIFICATIONS: string;
				public static FEATURE_LOCATION: string;
				public static FEATURE_BACKGROUND_LOCATION: string;
				public constructor(param0: com.urbanairship.util.PermissionsRequester);
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class FetchDeviceInfoAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.FetchDeviceInfoAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static DEFAULT_REGISTRY_SHORT_NAME: string;
				public static CHANNEL_ID_KEY: string;
				public static NAMED_USER_ID_KEY: string;
				public static TAGS_KEY: string;
				public static PUSH_OPT_IN_KEY: string;
				public static LOCATION_ENABLED_KEY: string;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public constructor();
			}
			export module FetchDeviceInfoAction {
				export class FetchDeviceInfoPredicate extends com.urbanairship.actions.ActionRegistry.Predicate {
					public static class: java.lang.Class<com.urbanairship.actions.FetchDeviceInfoAction.FetchDeviceInfoPredicate>;
					public apply(param0: com.urbanairship.actions.ActionArguments): boolean;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class LandingPageAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.LandingPageAction>;
				public static LANDING_PAGE_CACHE_OPEN_TIME_LIMIT_MS: number;
				public static DEFAULT_REGISTRY_NAME: string;
				public static DEFAULT_REGISTRY_SHORT_NAME: string;
				public static SHOW_LANDING_PAGE_INTENT_ACTION: string;
				public static URL_KEY: string;
				public static WIDTH_KEY: string;
				public static HEIGHT_KEY: string;
				public static ASPECT_LOCK_KEY: string;
				public static CACHE_ON_RECEIVE_KEY: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public parseUri(param0: com.urbanairship.actions.ActionArguments): globalAndroid.net.Uri;
				public shouldRunOnMainThread(): boolean;
				public shouldCacheOnReceive(param0: com.urbanairship.actions.ActionArguments): boolean;
				public constructor();
			}
			export module LandingPageAction {
				export class LandingPagePredicate extends com.urbanairship.actions.ActionRegistry.Predicate {
					public static class: java.lang.Class<com.urbanairship.actions.LandingPageAction.LandingPagePredicate>;
					public apply(param0: com.urbanairship.actions.ActionArguments): boolean;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class LandingPageActivity {
				public static class: java.lang.Class<com.urbanairship.actions.LandingPageActivity>;
				public static LANDING_PAGE_VIEW_KEY: string;
				public static WIDTH_KEY: string;
				public static HEIGHT_KEY: string;
				public static ASPECT_LOCK_KEY: string;
				public static LANDING_PAGE_BACKGROUND_COLOR: string;
				public loadLandingPage(param0: number): void;
				public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onResume(): void;
				public onNewIntent(param0: globalAndroid.content.Intent): void;
				public onCloseButtonClick(param0: globalAndroid.view.View): void;
				public onPause(): void;
				public applySizeConstraints(): void;
				public loadLandingPage(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class OpenExternalUrlAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.OpenExternalUrlAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static DEFAULT_REGISTRY_SHORT_NAME: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public shouldRunOnMainThread(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class OpenRichPushInboxAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.OpenRichPushInboxAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static DEFAULT_REGISTRY_SHORT_NAME: string;
				public static MESSAGE_ID_PLACEHOLDER: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public shouldRunOnMainThread(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class OverlayRichPushMessageAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.OverlayRichPushMessageAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static DEFAULT_REGISTRY_SHORT_NAME: string;
				public static MESSAGE_ID_PLACEHOLDER: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public shouldRunOnMainThread(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class RateAppAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.RateAppAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static DEFAULT_REGISTRY_SHORT_NAME: string;
				public static SHOW_LINK_PROMPT_KEY: string;
				public static TITLE_KEY: string;
				public static BODY_KEY: string;
				public static SHOW_RATE_APP_INTENT_ACTION: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public shouldRunOnMainThread(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class RateAppActivity extends com.urbanairship.messagecenter.ThemedActivity {
				public static class: java.lang.Class<com.urbanairship.actions.RateAppActivity>;
				public getViewModelStore(): any;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onResume(): void;
				public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
				public validateRequestPermissionsRequestCode(param0: number): void;
				public onNewIntent(param0: globalAndroid.content.Intent): void;
				public onCloseButtonClick(param0: globalAndroid.view.View): void;
				public onPause(): void;
				public getLifecycle(): any;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ScheduleAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.ScheduleAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static DEFAULT_REGISTRY_SHORT_NAME: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ShareAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.ShareAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static DEFAULT_REGISTRY_SHORT_NAME: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public excludePackage(param0: string): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public shouldRunOnMainThread(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class ToastAction extends com.urbanairship.actions.Action {
				public static class: java.lang.Class<com.urbanairship.actions.ToastAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static TEXT_KEY: string;
				public static LENGTH_KEY: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				public shouldRunOnMainThread(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export class WalletAction extends com.urbanairship.actions.OpenExternalUrlAction {
				public static class: java.lang.Class<com.urbanairship.actions.WalletAction>;
				public static DEFAULT_REGISTRY_NAME: string;
				public static DEFAULT_REGISTRY_SHORT_NAME: string;
				public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export module tags {
				export class AddTagsAction extends com.urbanairship.actions.tags.BaseTagsAction {
					public static class: java.lang.Class<com.urbanairship.actions.tags.AddTagsAction>;
					public static DEFAULT_REGISTRY_NAME: string;
					public static DEFAULT_REGISTRY_SHORT_NAME: string;
					public constructor();
				}
				export module AddTagsAction {
					export class AddTagsPredicate extends com.urbanairship.actions.ActionRegistry.Predicate {
						public static class: java.lang.Class<com.urbanairship.actions.tags.AddTagsAction.AddTagsPredicate>;
						public constructor();
						public apply(param0: com.urbanairship.actions.ActionArguments): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export module tags {
				export abstract class BaseTagsAction extends com.urbanairship.actions.Action {
					public static class: java.lang.Class<com.urbanairship.actions.tags.BaseTagsAction>;
					public acceptsArguments(param0: com.urbanairship.actions.ActionArguments): boolean;
					public getPushManager(): com.urbanairship.push.PushManager;
					public perform(param0: com.urbanairship.actions.ActionArguments): com.urbanairship.actions.ActionResult;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module actions {
			export module tags {
				export class RemoveTagsAction extends com.urbanairship.actions.tags.BaseTagsAction {
					public static class: java.lang.Class<com.urbanairship.actions.tags.RemoveTagsAction>;
					public static DEFAULT_REGISTRY_NAME: string;
					public static DEFAULT_REGISTRY_SHORT_NAME: string;
					public constructor();
				}
				export module RemoveTagsAction {
					export class RemoveTagsPredicate extends com.urbanairship.actions.ActionRegistry.Predicate {
						public static class: java.lang.Class<com.urbanairship.actions.tags.RemoveTagsAction.RemoveTagsPredicate>;
						public constructor();
						public apply(param0: com.urbanairship.actions.ActionArguments): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class AccountEventTemplate {
				public static class: java.lang.Class<com.urbanairship.analytics.AccountEventTemplate>;
				public static ACCOUNT_EVENT_TEMPLATE: string;
				public static REGISTERED_ACCOUNT_EVENT: string;
				public setValue(param0: string): com.urbanairship.analytics.AccountEventTemplate;
				public setCategory(param0: string): com.urbanairship.analytics.AccountEventTemplate;
				public createEvent(): com.urbanairship.analytics.CustomEvent;
				public setValue(param0: java.math.BigDecimal): com.urbanairship.analytics.AccountEventTemplate;
				public setValue(param0: number): com.urbanairship.analytics.AccountEventTemplate;
				public setTransactionId(param0: string): com.urbanairship.analytics.AccountEventTemplate;
				public static newRegisteredTemplate(): com.urbanairship.analytics.AccountEventTemplate;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class Analytics extends com.urbanairship.AirshipComponent {
				public static class: java.lang.Class<com.urbanairship.analytics.Analytics>;
				public static ACTION_SEND: string;
				public static ACTION_UPDATE_ADVERTISING_ID: string;
				public static SCHEDULE_SEND_DELAY_SECONDS: number;
				public trackScreen(param0: string): void;
				public isAutoTrackAdvertisingIdEnabled(): boolean;
				public uploadEvents(): void;
				public onPerformJob(param0: com.urbanairship.UAirship, param1: com.urbanairship.job.JobInfo): number;
				public recordLocation(param0: globalAndroid.location.Location): void;
				public getAssociatedIdentifiers(): com.urbanairship.analytics.AssociatedIdentifiers;
				public setEnabled(param0: boolean): void;
				public init(): void;
				public isAppInForeground(): boolean;
				public tearDown(): void;
				public addEvent(param0: com.urbanairship.analytics.Event): void;
				public setConversionMetadata(param0: string): void;
				public setAutoTrackAdvertisingIdEnabled(param0: boolean): void;
				public removeAnalyticsListener(param0: com.urbanairship.analytics.AnalyticsListener): void;
				public getConversionSendId(): string;
				public getConversionMetadata(): string;
				public isEnabled(): boolean;
				public addAnalyticsListener(param0: com.urbanairship.analytics.AnalyticsListener): void;
				public editAssociatedIdentifiers(): com.urbanairship.analytics.AssociatedIdentifiers.Editor;
				public recordLocation(param0: globalAndroid.location.Location, param1: com.urbanairship.location.LocationRequestOptions, param2: number): void;
				public setConversionSendId(param0: string): void;
				public getSessionId(): string;
			}
			export module Analytics {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.analytics.Analytics.Builder>;
					public constructor(param0: globalAndroid.content.Context);
					public setPreferenceDataStore(param0: com.urbanairship.PreferenceDataStore): com.urbanairship.analytics.Analytics.Builder;
					public setActivityMonitor(param0: com.urbanairship.ActivityMonitor): com.urbanairship.analytics.Analytics.Builder;
					public setEventManager(param0: com.urbanairship.analytics.data.EventManager): com.urbanairship.analytics.Analytics.Builder;
					public setExecutor(param0: java.util.concurrent.Executor): com.urbanairship.analytics.Analytics.Builder;
					public setJobDispatcher(param0: com.urbanairship.job.JobDispatcher): com.urbanairship.analytics.Analytics.Builder;
					public setConfigOptions(param0: com.urbanairship.AirshipConfigOptions): com.urbanairship.analytics.Analytics.Builder;
					public build(): com.urbanairship.analytics.Analytics;
					public setPlatform(param0: number): com.urbanairship.analytics.Analytics.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class AnalyticsJobHandler {
				public static class: java.lang.Class<com.urbanairship.analytics.AnalyticsJobHandler>;
				public performJob(param0: com.urbanairship.job.JobInfo): number;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class AnalyticsListener {
				public static class: java.lang.Class<com.urbanairship.analytics.AnalyticsListener>;
				/**
				 * Constructs a new instance of the com.urbanairship.analytics.AnalyticsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onScreenTracked(param0: string): void;
					onCustomEventAdded(param0: com.urbanairship.analytics.CustomEvent): void;
					onRegionEventAdded(param0: com.urbanairship.location.RegionEvent): void;
				});
				public constructor();
				public onCustomEventAdded(param0: com.urbanairship.analytics.CustomEvent): void;
				public onScreenTracked(param0: string): void;
				public onRegionEventAdded(param0: com.urbanairship.location.RegionEvent): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class AppBackgroundEvent extends com.urbanairship.analytics.Event {
				public static class: java.lang.Class<com.urbanairship.analytics.AppBackgroundEvent>;
				public getType(): string;
				public getEventData(): com.urbanairship.json.JsonMap;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class AppForegroundEvent extends com.urbanairship.analytics.Event {
				public static class: java.lang.Class<com.urbanairship.analytics.AppForegroundEvent>;
				public getType(): string;
				public getEventData(): com.urbanairship.json.JsonMap;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class AssociateIdentifiersEvent extends com.urbanairship.analytics.Event {
				public static class: java.lang.Class<com.urbanairship.analytics.AssociateIdentifiersEvent>;
				public getType(): string;
				public getEventData(): com.urbanairship.json.JsonMap;
				public isValid(): boolean;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class AssociatedIdentifiers extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.analytics.AssociatedIdentifiers>;
				public static MAX_CHARACTER_COUNT: number;
				public static MAX_IDS: number;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public static fromJson(param0: string): com.urbanairship.analytics.AssociatedIdentifiers;
				public getIds(): java.util.Map<string,string>;
				public getAdvertisingId(): string;
				public isLimitAdTrackingEnabled(): boolean;
			}
			export module AssociatedIdentifiers {
				export abstract class Editor {
					public static class: java.lang.Class<com.urbanairship.analytics.AssociatedIdentifiers.Editor>;
					public removeIdentifier(param0: string): com.urbanairship.analytics.AssociatedIdentifiers.Editor;
					public addIdentifier(param0: string, param1: string): com.urbanairship.analytics.AssociatedIdentifiers.Editor;
					public clear(): com.urbanairship.analytics.AssociatedIdentifiers.Editor;
					public removeAdvertisingId(): com.urbanairship.analytics.AssociatedIdentifiers.Editor;
					public setAdvertisingId(param0: string, param1: boolean): com.urbanairship.analytics.AssociatedIdentifiers.Editor;
					public apply(): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class CustomEvent extends com.urbanairship.analytics.Event implements com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.analytics.CustomEvent>;
				public static INTERACTION_ID: string;
				public static INTERACTION_TYPE: string;
				public static EVENT_NAME: string;
				public static EVENT_VALUE: string;
				public static TRANSACTION_ID: string;
				public static MCRAP_TRANSACTION_TYPE: string;
				public static CONVERSION_SEND_ID: string;
				public static CONVERSION_METADATA: string;
				public static LAST_RECEIVED_METADATA: string;
				public static TEMPLATE_TYPE: string;
				public static PROPERTIES: string;
				public static MAX_CHARACTER_LENGTH: number;
				public static MAX_PROPERTIES: number;
				public static MAX_PROPERTY_COLLECTION_SIZE: number;
				public getType(): string;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public getInteractionType(): string;
				public getEventData(): com.urbanairship.json.JsonMap;
				public getEventValue(): java.math.BigDecimal;
				public getTransactionId(): string;
				public getInteractionId(): string;
				public static newBuilder(param0: string): com.urbanairship.analytics.CustomEvent.Builder;
				public getProperties(): java.util.Map<string,any>;
				public isValid(): boolean;
				public getEventName(): string;
				public track(): com.urbanairship.analytics.CustomEvent;
			}
			export module CustomEvent {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.analytics.CustomEvent.Builder>;
					public setEventValue(param0: string): com.urbanairship.analytics.CustomEvent.Builder;
					public constructor(param0: string);
					public setInteraction(param0: com.urbanairship.richpush.RichPushMessage): com.urbanairship.analytics.CustomEvent.Builder;
					public setInteraction(param0: string, param1: string): com.urbanairship.analytics.CustomEvent.Builder;
					public addProperty(param0: string, param1: string): com.urbanairship.analytics.CustomEvent.Builder;
					public setEventValue(param0: java.math.BigDecimal): com.urbanairship.analytics.CustomEvent.Builder;
					public build(): com.urbanairship.analytics.CustomEvent;
					public setTransactionId(param0: string): com.urbanairship.analytics.CustomEvent.Builder;
					public addProperty(param0: string, param1: number): com.urbanairship.analytics.CustomEvent.Builder;
					public create(): com.urbanairship.analytics.CustomEvent;
					public setAttribution(param0: com.urbanairship.push.PushMessage): com.urbanairship.analytics.CustomEvent.Builder;
					public setEventValue(param0: number): com.urbanairship.analytics.CustomEvent.Builder;
					public addProperty(param0: string, param1: boolean): com.urbanairship.analytics.CustomEvent.Builder;
					public addProperty(param0: string, param1: java.util.Collection<string>): com.urbanairship.analytics.CustomEvent.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export abstract class Event {
				public static class: java.lang.Class<com.urbanairship.analytics.Event>;
				public static LOW_PRIORITY: number;
				public static NORMAL_PRIORITY: number;
				public static HIGH_PRIORITY: number;
				public getType(): string;
				public getNotificationTypes(): java.util.ArrayList<string>;
				public getEventData(): com.urbanairship.json.JsonMap;
				public getCarrier(): string;
				public getTimezone(): number;
				public getPriority(): number;
				public getEventId(): string;
				public isValid(): boolean;
				public getConnectionType(): string;
				public static millisecondsToSecondsString(param0: number): string;
				public constructor();
				public getTime(): string;
				public constructor(param0: number);
				public createEventPayload(param0: string): string;
				public isDaylightSavingsTime(): boolean;
				public getConnectionSubType(): string;
			}
			export module Event {
				export class Priority {
					public static class: java.lang.Class<com.urbanairship.analytics.Event.Priority>;
					/**
					 * Constructs a new instance of the com.urbanairship.analytics.Event$Priority interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class InstallAttributionEvent extends com.urbanairship.analytics.Event {
				public static class: java.lang.Class<com.urbanairship.analytics.InstallAttributionEvent>;
				public getType(): string;
				public getEventData(): com.urbanairship.json.JsonMap;
				public constructor(param0: number);
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class InstallReceiver {
				public static class: java.lang.Class<com.urbanairship.analytics.InstallReceiver>;
				public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class InteractiveNotificationEvent extends com.urbanairship.analytics.Event {
				public static class: java.lang.Class<com.urbanairship.analytics.InteractiveNotificationEvent>;
				public getType(): string;
				public getEventData(): com.urbanairship.json.JsonMap;
				public constructor(param0: number);
				public constructor(param0: com.urbanairship.push.PushMessage, param1: string, param2: string, param3: boolean, param4: globalAndroid.os.Bundle);
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class LocationEvent extends com.urbanairship.analytics.Event {
				public static class: java.lang.Class<com.urbanairship.analytics.LocationEvent>;
				public static UPDATE_TYPE_CONTINUOUS: number;
				public static UPDATE_TYPE_SINGLE: number;
				public getType(): string;
				public constructor(param0: globalAndroid.location.Location, param1: number, param2: number, param3: number, param4: boolean);
				public getEventData(): com.urbanairship.json.JsonMap;
				public constructor(param0: number);
				public getPriority(): number;
				public constructor();
			}
			export module LocationEvent {
				export class UpdateType {
					public static class: java.lang.Class<com.urbanairship.analytics.LocationEvent.UpdateType>;
					/**
					 * Constructs a new instance of the com.urbanairship.analytics.LocationEvent$UpdateType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class MediaEventTemplate {
				public static class: java.lang.Class<com.urbanairship.analytics.MediaEventTemplate>;
				public static MEDIA_EVENT_TEMPLATE: string;
				public static BROWSED_CONTENT_EVENT: string;
				public static CONSUMED_CONTENT_EVENT: string;
				public static STARRED_CONTENT_EVENT: string;
				public static SHARED_CONTENT_EVENT: string;
				public static newSharedTemplate(param0: string, param1: string): com.urbanairship.analytics.MediaEventTemplate;
				public static newConsumedTemplate(): com.urbanairship.analytics.MediaEventTemplate;
				public static newConsumedTemplate(param0: java.math.BigDecimal): com.urbanairship.analytics.MediaEventTemplate;
				public setDescription(param0: string): com.urbanairship.analytics.MediaEventTemplate;
				public static newSharedTemplate(): com.urbanairship.analytics.MediaEventTemplate;
				public setCategory(param0: string): com.urbanairship.analytics.MediaEventTemplate;
				public setAuthor(param0: string): com.urbanairship.analytics.MediaEventTemplate;
				public createEvent(): com.urbanairship.analytics.CustomEvent;
				public static newConsumedTemplate(param0: number): com.urbanairship.analytics.MediaEventTemplate;
				public static newConsumedTemplate(param0: string): com.urbanairship.analytics.MediaEventTemplate;
				public setType(param0: string): com.urbanairship.analytics.MediaEventTemplate;
				public static newStarredTemplate(): com.urbanairship.analytics.MediaEventTemplate;
				public setId(param0: string): com.urbanairship.analytics.MediaEventTemplate;
				public static newBrowsedTemplate(): com.urbanairship.analytics.MediaEventTemplate;
				public setPublishedDate(param0: string): com.urbanairship.analytics.MediaEventTemplate;
				public setFeature(param0: boolean): com.urbanairship.analytics.MediaEventTemplate;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class PushArrivedEvent extends com.urbanairship.analytics.Event {
				public static class: java.lang.Class<com.urbanairship.analytics.PushArrivedEvent>;
				public getType(): string;
				public getEventData(): com.urbanairship.json.JsonMap;
				public constructor(param0: com.urbanairship.push.PushMessage);
				public constructor(param0: number);
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class RetailEventTemplate {
				public static class: java.lang.Class<com.urbanairship.analytics.RetailEventTemplate>;
				public static RETAIL_EVENT_TEMPLATE: string;
				public static BROWSED_PRODUCT_EVENT: string;
				public static ADDED_TO_CART_EVENT: string;
				public static STARRED_PRODUCT_EVENT: string;
				public static SHARED_PRODUCT_EVENT: string;
				public static PURCHASED_EVENT: string;
				public setDescription(param0: string): com.urbanairship.analytics.RetailEventTemplate;
				public setCategory(param0: string): com.urbanairship.analytics.RetailEventTemplate;
				public setId(param0: string): com.urbanairship.analytics.RetailEventTemplate;
				public setTransactionId(param0: string): com.urbanairship.analytics.RetailEventTemplate;
				public setValue(param0: string): com.urbanairship.analytics.RetailEventTemplate;
				public setValue(param0: java.math.BigDecimal): com.urbanairship.analytics.RetailEventTemplate;
				public static newBrowsedTemplate(): com.urbanairship.analytics.RetailEventTemplate;
				public static newPurchasedTemplate(): com.urbanairship.analytics.RetailEventTemplate;
				public createEvent(): com.urbanairship.analytics.CustomEvent;
				public static newStarredProductTemplate(): com.urbanairship.analytics.RetailEventTemplate;
				public static newSharedProductTemplate(): com.urbanairship.analytics.RetailEventTemplate;
				public static newAddedToCartTemplate(): com.urbanairship.analytics.RetailEventTemplate;
				public setValue(param0: number): com.urbanairship.analytics.RetailEventTemplate;
				public setBrand(param0: string): com.urbanairship.analytics.RetailEventTemplate;
				public static newSharedProductTemplate(param0: string, param1: string): com.urbanairship.analytics.RetailEventTemplate;
				public setNewItem(param0: boolean): com.urbanairship.analytics.RetailEventTemplate;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export class ScreenTrackingEvent extends com.urbanairship.analytics.Event {
				public static class: java.lang.Class<com.urbanairship.analytics.ScreenTrackingEvent>;
				public getType(): string;
				public getEventData(): com.urbanairship.json.JsonMap;
				public isValid(): boolean;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export module data {
				export class EventApiClient {
					public static class: java.lang.Class<com.urbanairship.analytics.data.EventApiClient>;
					public constructor(param0: globalAndroid.content.Context);
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export module data {
				export class EventManager {
					public static class: java.lang.Class<com.urbanairship.analytics.data.EventManager>;
					public deleteEvents(): void;
					public addEvent(param0: com.urbanairship.analytics.Event, param1: string): void;
					public scheduleEventUpload(param0: number, param1: java.util.concurrent.TimeUnit): void;
					public uploadEvents(param0: com.urbanairship.UAirship): boolean;
				}
				export module EventManager {
					export class Builder {
						public static class: java.lang.Class<com.urbanairship.analytics.data.EventManager.Builder>;
						public setPreferenceDataStore(param0: com.urbanairship.PreferenceDataStore): com.urbanairship.analytics.data.EventManager.Builder;
						public constructor();
						public setActivityMonitor(param0: com.urbanairship.ActivityMonitor): com.urbanairship.analytics.data.EventManager.Builder;
						public setEventResolver(param0: com.urbanairship.analytics.data.EventResolver): com.urbanairship.analytics.data.EventManager.Builder;
						public build(): com.urbanairship.analytics.data.EventManager;
						public setApiClient(param0: com.urbanairship.analytics.data.EventApiClient): com.urbanairship.analytics.data.EventManager.Builder;
						public setJobAction(param0: string): com.urbanairship.analytics.data.EventManager.Builder;
						public setJobDispatcher(param0: com.urbanairship.job.JobDispatcher): com.urbanairship.analytics.data.EventManager.Builder;
						public setBackgroundReportingIntervalMS(param0: number): com.urbanairship.analytics.data.EventManager.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export module data {
				export class EventResolver extends com.urbanairship.UrbanAirshipResolver {
					public static class: java.lang.Class<com.urbanairship.analytics.data.EventResolver>;
					public static ASCENDING_SORT_ORDER: string;
					public constructor(param0: globalAndroid.content.Context);
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export module data {
				export class EventResponse {
					public static class: java.lang.Class<com.urbanairship.analytics.data.EventResponse>;
					public constructor(param0: com.urbanairship.http.Response);
					public getStatus(): number;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module analytics {
			export module data {
				export class EventsStorage extends com.urbanairship.util.DataManager {
					public static class: java.lang.Class<com.urbanairship.analytics.data.EventsStorage>;
					public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: number);
					public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: string);
					public onDowngrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
					public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
				}
				export module EventsStorage {
					export class Events {
						public static class: java.lang.Class<com.urbanairship.analytics.data.EventsStorage.Events>;
						/**
						 * Constructs a new instance of the com.urbanairship.analytics.data.EventsStorage$Events interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static COLUMN_NAME_EVENT_SIZE: string;
						public static COLUMN_NAME_EVENT_ID: string;
						public static TABLE_NAME: string;
						public static COLUMN_NAME_TYPE: string;
						public static COLUMN_NAME_TIME: string;
						public static COLUMN_NAME_DATA: string;
						public static COLUMN_NAME_SESSION_ID: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module automation {
			export class ActionAutomationDriver extends com.urbanairship.automation.AutomationDriver<com.urbanairship.automation.ActionSchedule> {
				public static class: java.lang.Class<com.urbanairship.automation.ActionAutomationDriver>;
				public onExecuteTriggeredSchedule(param0: any, param1: com.urbanairship.automation.AutomationDriver.ExecutionCallback): void;
				public onPrepareSchedule(param0: any, param1: com.urbanairship.automation.AutomationDriver.PrepareScheduleCallback): void;
				public createSchedule(param0: string, param1: com.urbanairship.automation.ScheduleInfo): any;
				public isScheduleReadyToExecute(param0: any): boolean;
				public isScheduleReadyToExecute(param0: com.urbanairship.automation.ActionSchedule): boolean;
				public onPrepareSchedule(param0: com.urbanairship.automation.ActionSchedule, param1: com.urbanairship.automation.AutomationDriver.PrepareScheduleCallback): void;
				public createSchedule(param0: string, param1: com.urbanairship.automation.ScheduleInfo): com.urbanairship.automation.ActionSchedule;
				public onExecuteTriggeredSchedule(param0: com.urbanairship.automation.ActionSchedule, param1: com.urbanairship.automation.AutomationDriver.ExecutionCallback): void;
			}
			export module ActionAutomationDriver {
				export class ActionCallback extends com.urbanairship.actions.ActionCompletionCallback {
					public static class: java.lang.Class<com.urbanairship.automation.ActionAutomationDriver.ActionCallback>;
					public onFinish(param0: com.urbanairship.actions.ActionArguments, param1: com.urbanairship.actions.ActionResult): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module automation {
			export class ActionSchedule extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.automation.ActionSchedule>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.urbanairship.automation.ActionSchedule>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getId(): string;
				public getInfo(): any;
				public constructor(param0: string, param1: com.urbanairship.automation.ActionScheduleInfo);
				public describeContents(): number;
				public getInfo(): com.urbanairship.automation.ActionScheduleInfo;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module automation {
			export class ActionScheduleEdits extends com.urbanairship.automation.ScheduleEdits {
				public static class: java.lang.Class<com.urbanairship.automation.ActionScheduleEdits>;
				public getEditGracePeriod(): java.lang.Long;
				public getPriority(): java.lang.Integer;
				public getData(): com.urbanairship.json.JsonValue;
				public static newBuilder(): com.urbanairship.automation.ActionScheduleEdits.Builder;
				public getStart(): java.lang.Long;
				public getEnd(): java.lang.Long;
				public getActions(): java.util.Map<string,com.urbanairship.json.JsonValue>;
				public getLimit(): java.lang.Integer;
				public getInterval(): java.lang.Long;
				public static fromJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.automation.ActionScheduleEdits;
				public getData(): com.urbanairship.json.JsonSerializable;
			}
			export module ActionScheduleEdits {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.automation.ActionScheduleEdits.Builder>;
					public setActions(param0: java.util.Map<string,com.urbanairship.json.JsonValue>): com.urbanairship.automation.ActionScheduleEdits.Builder;
					public setInterval(param0: number, param1: java.util.concurrent.TimeUnit): com.urbanairship.automation.ActionScheduleEdits.Builder;
					public setEnd(param0: number): com.urbanairship.automation.ActionScheduleEdits.Builder;
					public setPriority(param0: number): com.urbanairship.automation.ActionScheduleEdits.Builder;
					public build(): com.urbanairship.automation.ActionScheduleEdits;
					public setLimit(param0: number): com.urbanairship.automation.ActionScheduleEdits.Builder;
					public setEditGracePeriod(param0: number, param1: java.util.concurrent.TimeUnit): com.urbanairship.automation.ActionScheduleEdits.Builder;
					public setStart(param0: number): com.urbanairship.automation.ActionScheduleEdits.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module automation {
			export class ActionScheduleInfo extends com.urbanairship.automation.ScheduleInfo {
				public static class: java.lang.Class<com.urbanairship.automation.ActionScheduleInfo>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.urbanairship.automation.ActionScheduleInfo>;
				public static TRIGGER_LIMIT: number;
				public static ACTIONS_KEY: string;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getEnd(): number;
				public getTriggers(): java.util.List<com.urbanairship.automation.Trigger>;
				public static newBuilder(): com.urbanairship.automation.ActionScheduleInfo.Builder;
				public getEditGracePeriod(): number;
				public getDelay(): com.urbanairship.automation.ScheduleDelay;
				public getInterval(): number;
				public getPriority(): number;
				public getData(): com.urbanairship.json.JsonSerializable;
				public constructor(param0: globalAndroid.os.Parcel);
				public getData(): com.urbanairship.json.JsonValue;
				public describeContents(): number;
				public getGroup(): string;
				public getStart(): number;
				public getActions(): java.util.Map<string,com.urbanairship.json.JsonValue>;
				public static parseJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.automation.ActionScheduleInfo;
				public getLimit(): number;
			}
			export module ActionScheduleInfo {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.automation.ActionScheduleInfo.Builder>;
					public setStart(param0: number): com.urbanairship.automation.ActionScheduleInfo.Builder;
					public build(): com.urbanairship.automation.ActionScheduleInfo;
					public setEnd(param0: number): com.urbanairship.automation.ActionScheduleInfo.Builder;
					public addAllActions(param0: com.urbanairship.json.JsonMap): com.urbanairship.automation.ActionScheduleInfo.Builder;
					public addTrigger(param0: com.urbanairship.automation.Trigger): com.urbanairship.automation.ActionScheduleInfo.Builder;
					public addTriggers(param0: java.util.List<com.urbanairship.automation.Trigger>): com.urbanairship.automation.ActionScheduleInfo.Builder;
					public setGroup(param0: string): com.urbanairship.automation.ActionScheduleInfo.Builder;
					public setEditGracePeriod(param0: number, param1: java.util.concurrent.TimeUnit): com.urbanairship.automation.ActionScheduleInfo.Builder;
					public setDelay(param0: com.urbanairship.automation.ScheduleDelay): com.urbanairship.automation.ActionScheduleInfo.Builder;
					public constructor();
					public setPriority(param0: number): com.urbanairship.automation.ActionScheduleInfo.Builder;
					public setInterval(param0: number, param1: java.util.concurrent.TimeUnit): com.urbanairship.automation.ActionScheduleInfo.Builder;
					public setLimit(param0: number): com.urbanairship.automation.ActionScheduleInfo.Builder;
					public addAction(param0: string, param1: com.urbanairship.json.JsonSerializable): com.urbanairship.automation.ActionScheduleInfo.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module automation {
			export class Automation extends com.urbanairship.AirshipComponent {
				public static class: java.lang.Class<com.urbanairship.automation.Automation>;
				public static SCHEDULES_LIMIT: number;
				public onComponentEnableChange(param0: boolean): void;
				public schedule(param0: com.urbanairship.automation.ActionScheduleInfo): com.urbanairship.PendingResult<com.urbanairship.automation.ActionSchedule>;
				public getSchedule(param0: string): com.urbanairship.PendingResult<com.urbanairship.automation.ActionSchedule>;
				public getSchedules(param0: java.util.Set<string>): com.urbanairship.PendingResult<java.util.Collection<com.urbanairship.automation.ActionSchedule>>;
				public cancel(param0: java.util.Collection<string>): java.util.concurrent.Future<java.lang.Void>;
				public init(): void;
				public tearDown(): void;
				public getSchedules(): com.urbanairship.PendingResult<java.util.Collection<com.urbanairship.automation.ActionSchedule>>;
				public cancelGroup(param0: string): com.urbanairship.PendingResult<java.lang.Boolean>;
				public schedule(param0: java.util.List<com.urbanairship.automation.ActionScheduleInfo>): com.urbanairship.PendingResult<java.util.List<com.urbanairship.automation.ActionSchedule>>;
				public cancel(param0: string): java.util.concurrent.Future<java.lang.Void>;
				public cancelAll(): java.util.concurrent.Future<java.lang.Void>;
				public constructor(param0: com.urbanairship.PreferenceDataStore);
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.AirshipConfigOptions, param3: com.urbanairship.analytics.Analytics, param4: com.urbanairship.ActivityMonitor);
				public getSchedules(param0: string): com.urbanairship.PendingResult<java.util.Collection<com.urbanairship.automation.ActionSchedule>>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module automation {
			export class AutomationDataManager extends com.urbanairship.util.DataManager {
				public static class: java.lang.Class<com.urbanairship.automation.AutomationDataManager>;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: number);
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
				public onConfigure(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
				public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
				public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
				public onDowngrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
				public getScheduleCount(): number;
			}
			export module AutomationDataManager {
				export class SetOperation<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.urbanairship.automation.AutomationDataManager.SetOperation<any>>;
					/**
					 * Constructs a new instance of the com.urbanairship.automation.AutomationDataManager$SetOperation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						perform(param0: java.util.List<T>): void;
					});
					public constructor();
					public perform(param0: java.util.List<T>): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module automation {
			export class AutomationDriver<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.automation.AutomationDriver<any>>;
				/**
				 * Constructs a new instance of the com.urbanairship.automation.AutomationDriver<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPrepareSchedule(param0: T, param1: com.urbanairship.automation.AutomationDriver.PrepareScheduleCallback): void;
					isScheduleReadyToExecute(param0: T): boolean;
					onExecuteTriggeredSchedule(param0: T, param1: com.urbanairship.automation.AutomationDriver.ExecutionCallback): void;
					createSchedule(param0: string, param1: com.urbanairship.automation.ScheduleInfo): T;
				});
				public constructor();
				public static RESULT_CONTINUE: number;
				public static RESULT_CANCEL: number;
				public static RESULT_SKIP: number;
				public static RESULT_PENALIZE: number;
				public isScheduleReadyToExecute(param0: T): boolean;
				public createSchedule(param0: string, param1: com.urbanairship.automation.ScheduleInfo): T;
				public onPrepareSchedule(param0: T, param1: com.urbanairship.automation.AutomationDriver.PrepareScheduleCallback): void;
				public onExecuteTriggeredSchedule(param0: T, param1: com.urbanairship.automation.AutomationDriver.ExecutionCallback): void;
			}
			export module AutomationDriver {
				export class ExecutionCallback {
					public static class: java.lang.Class<com.urbanairship.automation.AutomationDriver.ExecutionCallback>;
					/**
					 * Constructs a new instance of the com.urbanairship.automation.AutomationDriver$ExecutionCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onFinish(): void;
					});
					public constructor();
					public onFinish(): void;
				}
				export class PrepareResult {
					public static class: java.lang.Class<com.urbanairship.automation.AutomationDriver.PrepareResult>;
					/**
					 * Constructs a new instance of the com.urbanairship.automation.AutomationDriver$PrepareResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class PrepareScheduleCallback {
					public static class: java.lang.Class<com.urbanairship.automation.AutomationDriver.PrepareScheduleCallback>;
					/**
					 * Constructs a new instance of the com.urbanairship.automation.AutomationDriver$PrepareScheduleCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onFinish(param0: number): void;
					});
					public constructor();
					public onFinish(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module automation {
			export class AutomationEngine<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.automation.AutomationEngine<any>>;
				public editSchedule(param0: string, param1: com.urbanairship.automation.ScheduleEdits): com.urbanairship.PendingResult<T>;
				public getSchedules(param0: string): com.urbanairship.PendingResult<java.util.Collection<T>>;
				public getSchedule(param0: string): com.urbanairship.PendingResult<T>;
				public cancelGroups(param0: java.util.Collection<string>): com.urbanairship.PendingResult<java.lang.Void>;
				public getSchedules(): com.urbanairship.PendingResult<java.util.Collection<T>>;
				public getSchedules(param0: java.util.Set<string>): com.urbanairship.PendingResult<java.util.Collection<T>>;
				public setPaused(param0: boolean): void;
				public schedule(param0: java.util.List<any>): com.urbanairship.PendingResult<java.util.List<T>>;
				public cancelAll(): com.urbanairship.PendingResult<java.lang.Void>;
				public stop(): void;
				public setScheduleExpiryListener(param0: com.urbanairship.automation.AutomationEngine.ScheduleExpiryListener<T>): void;
				public cancelGroup(param0: string): com.urbanairship.PendingResult<java.lang.Boolean>;
				public checkPendingSchedules(): void;
				public start(): void;
				public cancel(param0: java.util.Collection<string>): com.urbanairship.PendingResult<java.lang.Void>;
				public schedule(param0: com.urbanairship.automation.ScheduleInfo): com.urbanairship.PendingResult<T>;
			}
			export module AutomationEngine {
				export class Builder<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.urbanairship.automation.AutomationEngine.Builder<any>>;
					public analytics: com.urbanairship.analytics.Analytics;
					public setScheduleLimit(param0: number): com.urbanairship.automation.AutomationEngine.Builder<T>;
					public setActivityMonitor(param0: com.urbanairship.ActivityMonitor): com.urbanairship.automation.AutomationEngine.Builder<T>;
					public constructor();
					public setDriver(param0: com.urbanairship.automation.AutomationDriver<T>): com.urbanairship.automation.AutomationEngine.Builder<T>;
					public setDataManager(param0: com.urbanairship.automation.AutomationDataManager): com.urbanairship.automation.AutomationEngine.Builder<T>;
					public setAnalytics(param0: com.urbanairship.analytics.Analytics): com.urbanairship.automation.AutomationEngine.Builder<T>;
					public setOperationScheduler(param0: com.urbanairship.OperationScheduler): com.urbanairship.automation.AutomationEngine.Builder<T>;
					public build(): com.urbanairship.automation.AutomationEngine<T>;
				}
				export class ScheduleExecutorCallback extends com.urbanairship.automation.AutomationDriver.ExecutionCallback {
					public static class: java.lang.Class<com.urbanairship.automation.AutomationEngine.ScheduleExecutorCallback>;
					public onFinish(): void;
				}
				export class ScheduleExpiryListener<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.urbanairship.automation.AutomationEngine.ScheduleExpiryListener<any>>;
					/**
					 * Constructs a new instance of the com.urbanairship.automation.AutomationEngine$ScheduleExpiryListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onScheduleExpired(param0: T): void;
					});
					public constructor();
					public onScheduleExpired(param0: T): void;
				}
				export class ScheduleOperation extends com.urbanairship.CancelableOperation {
					public static class: java.lang.Class<com.urbanairship.automation.AutomationEngine.ScheduleOperation>;
					public cancel(): boolean;
					public isDone(): boolean;
					public isCancelled(): boolean;
					public cancel(param0: boolean): boolean;
				}
				export abstract class ScheduleRunnable<ReturnType>  extends java.lang.Runnable {
					public static class: java.lang.Class<com.urbanairship.automation.AutomationEngine.ScheduleRunnable<any>>;
				}
				export class TriggerUpdate {
					public static class: java.lang.Class<com.urbanairship.automation.AutomationEngine.TriggerUpdate>;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module automation {
			export class ParseScheduleException {
				public static class: java.lang.Class<com.urbanairship.automation.ParseScheduleException>;
				public constructor(param0: string, param1: java.lang.Throwable);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module automation {
			export class Schedule<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.automation.Schedule<any>>;
				/**
				 * Constructs a new instance of the com.urbanairship.automation.Schedule<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getInfo(): T;
					getId(): string;
				});
				public constructor();
				public getInfo(): T;
				public getId(): string;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module automation {
			export class ScheduleDelay {
				public static class: java.lang.Class<com.urbanairship.automation.ScheduleDelay>;
				public static SECONDS_KEY: string;
				public static APP_STATE_ANY: number;
				public static APP_STATE_FOREGROUND: number;
				public static APP_STATE_BACKGROUND: number;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.urbanairship.automation.ScheduleDelay>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public static newBuilder(): com.urbanairship.automation.ScheduleDelay.Builder;
				public getCancellationTriggers(): java.util.List<com.urbanairship.automation.Trigger>;
				public getRegionId(): string;
				public getAppState(): number;
				public static parseJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.automation.ScheduleDelay;
				public describeContents(): number;
				public getSeconds(): number;
				public getScreens(): java.util.List<string>;
				public constructor(param0: globalAndroid.os.Parcel);
			}
			export module ScheduleDelay {
				export class AppState {
					public static class: java.lang.Class<com.urbanairship.automation.ScheduleDelay.AppState>;
					/**
					 * Constructs a new instance of the com.urbanairship.automation.ScheduleDelay$AppState interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.automation.ScheduleDelay.Builder>;
					public setAppState(param0: number): com.urbanairship.automation.ScheduleDelay.Builder;
					public setScreens(param0: java.util.List<string>): com.urbanairship.automation.ScheduleDelay.Builder;
					public constructor();
					public setRegionId(param0: string): com.urbanairship.automation.ScheduleDelay.Builder;
					public build(): com.urbanairship.automation.ScheduleDelay;
					public setSeconds(param0: number): com.urbanairship.automation.ScheduleDelay.Builder;
					public setScreen(param0: string): com.urbanairship.automation.ScheduleDelay.Builder;
					public setScreens(param0: com.urbanairship.json.JsonList): com.urbanairship.automation.ScheduleDelay.Builder;
					public addCancellationTrigger(param0: com.urbanairship.automation.Trigger): com.urbanairship.automation.ScheduleDelay.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module automation {
			export class ScheduleEdits {
				public static class: java.lang.Class<com.urbanairship.automation.ScheduleEdits>;
				/**
				 * Constructs a new instance of the com.urbanairship.automation.ScheduleEdits interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getData(): com.urbanairship.json.JsonSerializable;
					getLimit(): java.lang.Integer;
					getPriority(): java.lang.Integer;
					getStart(): java.lang.Long;
					getEnd(): java.lang.Long;
					getInterval(): java.lang.Long;
					getEditGracePeriod(): java.lang.Long;
				});
				public constructor();
				public getEditGracePeriod(): java.lang.Long;
				public getPriority(): java.lang.Integer;
				public getStart(): java.lang.Long;
				public getEnd(): java.lang.Long;
				public getLimit(): java.lang.Integer;
				public getData(): com.urbanairship.json.JsonSerializable;
				public getInterval(): java.lang.Long;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module automation {
			export class ScheduleEntry extends com.urbanairship.automation.ScheduleInfo {
				public static class: java.lang.Class<com.urbanairship.automation.ScheduleEntry>;
				public scheduleId: string;
				public group: string;
				public seconds: number;
				public screens: java.util.List<string>;
				public appState: number;
				public triggerEntries: java.util.List<com.urbanairship.automation.TriggerEntry>;
				public regionId: string;
				public getEnd(): number;
				public getTriggers(): java.util.List<com.urbanairship.automation.Trigger>;
				public getEditGracePeriod(): number;
				public getGroup(): string;
				public getStart(): number;
				public getInterval(): number;
				public getDelay(): com.urbanairship.automation.ScheduleDelay;
				public getPriority(): number;
				public toString(): string;
				public getData(): com.urbanairship.json.JsonSerializable;
				public getLimit(): number;
			}
			export module ScheduleEntry {
				export class State {
					public static class: java.lang.Class<com.urbanairship.automation.ScheduleEntry.State>;
					/**
					 * Constructs a new instance of the com.urbanairship.automation.ScheduleEntry$State interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module automation {
			export class ScheduleInfo {
				public static class: java.lang.Class<com.urbanairship.automation.ScheduleInfo>;
				/**
				 * Constructs a new instance of the com.urbanairship.automation.ScheduleInfo interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getTriggers(): java.util.List<com.urbanairship.automation.Trigger>;
					getData(): com.urbanairship.json.JsonSerializable;
					getLimit(): number;
					getPriority(): number;
					getGroup(): string;
					getStart(): number;
					getEnd(): number;
					getDelay(): com.urbanairship.automation.ScheduleDelay;
					getEditGracePeriod(): number;
					getInterval(): number;
				});
				public constructor();
				public static PRIORITY_KEY: string;
				public static INTERVAL: string;
				public static START_KEY: string;
				public static DELAY_KEY: string;
				public static EDIT_GRACE_PERIOD: string;
				public static END_KEY: string;
				public static GROUP_KEY: string;
				public static LIMIT_KEY: string;
				public static TRIGGERS_KEY: string;
				public getEnd(): number;
				public getTriggers(): java.util.List<com.urbanairship.automation.Trigger>;
				public getEditGracePeriod(): number;
				public getGroup(): string;
				public getStart(): number;
				public getDelay(): com.urbanairship.automation.ScheduleDelay;
				public getInterval(): number;
				public getPriority(): number;
				public getData(): com.urbanairship.json.JsonSerializable;
				public getLimit(): number;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module automation {
			export class Trigger {
				public static class: java.lang.Class<com.urbanairship.automation.Trigger>;
				public static LIFE_CYCLE_FOREGROUND: number;
				public static LIFE_CYCLE_BACKGROUND: number;
				public static REGION_ENTER: number;
				public static REGION_EXIT: number;
				public static CUSTOM_EVENT_COUNT: number;
				public static CUSTOM_EVENT_VALUE: number;
				public static SCREEN_VIEW: number;
				public static LIFE_CYCLE_APP_INIT: number;
				public static ACTIVE_SESSION: number;
				public static VERSION: number;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.urbanairship.automation.Trigger>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public constructor(param0: number, param1: number, param2: com.urbanairship.json.JsonPredicate);
				public getType(): number;
				public describeContents(): number;
				public static parseJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.automation.Trigger;
				public constructor(param0: globalAndroid.os.Parcel);
				public getGoal(): number;
				public getPredicate(): com.urbanairship.json.JsonPredicate;
			}
			export module Trigger {
				export class TriggerType {
					public static class: java.lang.Class<com.urbanairship.automation.Trigger.TriggerType>;
					/**
					 * Constructs a new instance of the com.urbanairship.automation.Trigger$TriggerType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module automation {
			export class TriggerEntry {
				public static class: java.lang.Class<com.urbanairship.automation.TriggerEntry>;
				public scheduleId: string;
				public type: number;
				public goal: number;
				public jsonPredicate: com.urbanairship.json.JsonPredicate;
				public isCancellation: boolean;
				public setProgress(param0: number): void;
				public getProgress(): number;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module automation {
			export class TriggerObservables {
				public static class: java.lang.Class<com.urbanairship.automation.TriggerObservables>;
				public static foregrounded(param0: com.urbanairship.ActivityMonitor): com.urbanairship.reactive.Observable<com.urbanairship.json.JsonSerializable>;
				public static appVersionUpdated(): com.urbanairship.reactive.Observable<com.urbanairship.json.JsonSerializable>;
				public static newSession(param0: com.urbanairship.ActivityMonitor): com.urbanairship.reactive.Observable<com.urbanairship.json.JsonSerializable>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module automation {
			export class Triggers {
				public static class: java.lang.Class<com.urbanairship.automation.Triggers>;
				public static newExitRegionTriggerBuilder(): com.urbanairship.automation.Triggers.RegionTriggerBuilder;
				public static newEnterRegionTriggerBuilder(): com.urbanairship.automation.Triggers.RegionTriggerBuilder;
				public static newAppInitTriggerBuilder(): com.urbanairship.automation.Triggers.LifeCycleTriggerBuilder;
				public static newCustomEventTriggerBuilder(): com.urbanairship.automation.Triggers.CustomEventTriggerBuilder;
				public static newActiveSessionTriggerBuilder(): com.urbanairship.automation.Triggers.ActiveSessionTriggerBuilder;
				public static newScreenTriggerBuilder(): com.urbanairship.automation.Triggers.ScreenTriggerBuilder;
				public static newForegroundTriggerBuilder(): com.urbanairship.automation.Triggers.LifeCycleTriggerBuilder;
				public static newBackgroundTriggerBuilder(): com.urbanairship.automation.Triggers.LifeCycleTriggerBuilder;
				public static newVersionTriggerBuilder(param0: com.urbanairship.json.ValueMatcher): com.urbanairship.automation.Triggers.VersionTriggerBuilder;
				public constructor();
			}
			export module Triggers {
				export class ActiveSessionTriggerBuilder {
					public static class: java.lang.Class<com.urbanairship.automation.Triggers.ActiveSessionTriggerBuilder>;
					public setGoal(param0: number): com.urbanairship.automation.Triggers.ActiveSessionTriggerBuilder;
					public build(): com.urbanairship.automation.Trigger;
				}
				export class CustomEventTriggerBuilder {
					public static class: java.lang.Class<com.urbanairship.automation.Triggers.CustomEventTriggerBuilder>;
					public setCountGoal(param0: number): com.urbanairship.automation.Triggers.CustomEventTriggerBuilder;
					public setValueGoal(param0: number): com.urbanairship.automation.Triggers.CustomEventTriggerBuilder;
					public build(): com.urbanairship.automation.Trigger;
					public setEventName(param0: string): com.urbanairship.automation.Triggers.CustomEventTriggerBuilder;
				}
				export class LifeCycleTriggerBuilder {
					public static class: java.lang.Class<com.urbanairship.automation.Triggers.LifeCycleTriggerBuilder>;
					public build(): com.urbanairship.automation.Trigger;
					public setGoal(param0: number): com.urbanairship.automation.Triggers.LifeCycleTriggerBuilder;
				}
				export class RegionTriggerBuilder {
					public static class: java.lang.Class<com.urbanairship.automation.Triggers.RegionTriggerBuilder>;
					public setGoal(param0: number): com.urbanairship.automation.Triggers.RegionTriggerBuilder;
					public build(): com.urbanairship.automation.Trigger;
					public setRegionId(param0: string): com.urbanairship.automation.Triggers.RegionTriggerBuilder;
				}
				export class ScreenTriggerBuilder {
					public static class: java.lang.Class<com.urbanairship.automation.Triggers.ScreenTriggerBuilder>;
					public setGoal(param0: number): com.urbanairship.automation.Triggers.ScreenTriggerBuilder;
					public build(): com.urbanairship.automation.Trigger;
					public setScreenName(param0: string): com.urbanairship.automation.Triggers.ScreenTriggerBuilder;
				}
				export class VersionTriggerBuilder {
					public static class: java.lang.Class<com.urbanairship.automation.Triggers.VersionTriggerBuilder>;
					public build(): com.urbanairship.automation.Trigger;
					public setGoal(param0: number): com.urbanairship.automation.Triggers.VersionTriggerBuilder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module google {
			export class GooglePlayServicesUtilWrapper {
				public static class: java.lang.Class<com.urbanairship.google.GooglePlayServicesUtilWrapper>;
				public static isUserRecoverableError(param0: number): boolean;
				public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module google {
			export class PlayServicesErrorActivity extends globalAndroid.support.v4.app.FragmentActivity {
				public static class: java.lang.Class<com.urbanairship.google.PlayServicesErrorActivity>;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
				public getViewModelStore(): any;
				public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
				public validateRequestPermissionsRequestCode(param0: number): void;
				public onStart(): void;
				public getLifecycle(): any;
				public onStop(): void;
				public constructor();
			}
			export module PlayServicesErrorActivity {
				export class ErrorDialogFragment extends globalAndroid.support.v4.app.DialogFragment {
					public static class: java.lang.Class<com.urbanairship.google.PlayServicesErrorActivity.ErrorDialogFragment>;
					public onCancel(param0: globalAndroid.content.DialogInterface): void;
					public constructor();
					public static createInstance(param0: number): com.urbanairship.google.PlayServicesErrorActivity.ErrorDialogFragment;
					public getViewModelStore(): any;
					public onCreateDialog(param0: globalAndroid.os.Bundle): globalAndroid.app.Dialog;
					public getLifecycle(): any;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module google {
			export class PlayServicesUtils {
				public static class: java.lang.Class<com.urbanairship.google.PlayServicesUtils>;
				public static MISSING_PLAY_SERVICE_DEPENDENCY: number;
				public static isGooglePlayServicesDependencyAvailable(): boolean;
				public static isGooglePlayStoreAvailable(param0: globalAndroid.content.Context): boolean;
				public static isFusedLocationDependencyAvailable(): boolean;
				public static isGoogleAdsDependencyAvailable(): boolean;
				public static isGoogleCloudMessagingDependencyAvailable(): boolean;
				public static handleAnyPlayServicesError(param0: globalAndroid.content.Context): void;
				public static isGooglePlayServicesAvailable(param0: globalAndroid.content.Context): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module http {
			export class Request {
				public static class: java.lang.Class<com.urbanairship.http.Request>;
				public url: java.net.URL;
				public user: string;
				public password: string;
				public requestMethod: string;
				public body: string;
				public contentType: string;
				public responseProperties: java.util.Map<string,string>;
				public setIfModifiedSince(param0: number): com.urbanairship.http.Request;
				public setCompressRequestBody(param0: boolean): com.urbanairship.http.Request;
				public constructor(param0: string, param1: java.net.URL);
				public setRequestBody(param0: string, param1: string): com.urbanairship.http.Request;
				public execute(): com.urbanairship.http.Response;
				public static getUrbanAirshipUserAgent(): string;
				public setHeader(param0: string, param1: string): com.urbanairship.http.Request;
				public setCredentials(param0: string, param1: string): com.urbanairship.http.Request;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module http {
			export class RequestFactory {
				public static class: java.lang.Class<com.urbanairship.http.RequestFactory>;
				public static DEFAULT_REQUEST_FACTORY: com.urbanairship.http.RequestFactory;
				public createRequest(param0: string, param1: java.net.URL): com.urbanairship.http.Request;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module http {
			export class Response {
				public static class: java.lang.Class<com.urbanairship.http.Response>;
				public static HTTP_TOO_MANY_REQUESTS: number;
				public getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
				public getResponseBody(): string;
				public getLastModifiedTime(): number;
				public getStatus(): number;
				public getResponseHeader(param0: string): string;
				public toString(): string;
			}
			export module Response {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.http.Response.Builder>;
					public create(): com.urbanairship.http.Response;
					public setLastModified(param0: number): com.urbanairship.http.Response.Builder;
					public setResponseHeaders(param0: java.util.Map<string,java.util.List<string>>): com.urbanairship.http.Response.Builder;
					public setResponseMessage(param0: string): com.urbanairship.http.Response.Builder;
					public constructor(param0: number);
					public setResponseBody(param0: string): com.urbanairship.http.Response.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class AdapterWrapper {
				public static class: java.lang.Class<com.urbanairship.iam.AdapterWrapper>;
				public scheduleId: string;
				public message: com.urbanairship.iam.InAppMessage;
				public adapter: com.urbanairship.iam.InAppMessageAdapter;
				public displayed: boolean;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class Audience extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.iam.Audience>;
				public static MISS_BEHAVIOR_CANCEL: string;
				public static MISS_BEHAVIOR_SKIP: string;
				public static MISS_BEHAVIOR_PENALIZE: string;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public static parseJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.iam.Audience;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public static newBuilder(): com.urbanairship.iam.Audience.Builder;
			}
			export module Audience {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.iam.Audience.Builder>;
					public setNotificationsOptIn(param0: boolean): com.urbanairship.iam.Audience.Builder;
					public setVersionMatcher(param0: com.urbanairship.json.ValueMatcher): com.urbanairship.iam.Audience.Builder;
					public setLocationOptIn(param0: boolean): com.urbanairship.iam.Audience.Builder;
					public addLanguageTag(param0: string): com.urbanairship.iam.Audience.Builder;
					public setTagSelector(param0: com.urbanairship.iam.TagSelector): com.urbanairship.iam.Audience.Builder;
					public setMissBehavior(param0: string): com.urbanairship.iam.Audience.Builder;
					public build(): com.urbanairship.iam.Audience;
				}
				export class MissBehavior {
					public static class: java.lang.Class<com.urbanairship.iam.Audience.MissBehavior>;
					/**
					 * Constructs a new instance of the com.urbanairship.iam.Audience$MissBehavior interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export abstract class AudienceChecks {
				public static class: java.lang.Class<com.urbanairship.iam.AudienceChecks>;
				public static checkAudience(param0: globalAndroid.content.Context, param1: com.urbanairship.iam.Audience): boolean;
				public static checkAudience(param0: globalAndroid.content.Context, param1: com.urbanairship.iam.Audience, param2: java.util.Map<string,java.util.Set<string>>): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class ButtonInfo extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.iam.ButtonInfo>;
				public static MAX_ID_LENGTH: number;
				public static BEHAVIOR_CANCEL: string;
				public static BEHAVIOR_DISMISS: string;
				public static parseJson(param0: com.urbanairship.json.JsonList): java.util.List<com.urbanairship.iam.ButtonInfo>;
				public getBorderRadius(): java.lang.Float;
				public static parseJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.iam.ButtonInfo;
				public getId(): string;
				public static newBuilder(param0: com.urbanairship.iam.ButtonInfo): com.urbanairship.iam.ButtonInfo.Builder;
				public getBehavior(): string;
				public toString(): string;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getActions(): java.util.Map<string,com.urbanairship.json.JsonValue>;
				public getLabel(): com.urbanairship.iam.TextInfo;
				public getBorderColor(): java.lang.Integer;
				public static newBuilder(): com.urbanairship.iam.ButtonInfo.Builder;
				public getBackgroundColor(): java.lang.Integer;
			}
			export module ButtonInfo {
				export class Behavior {
					public static class: java.lang.Class<com.urbanairship.iam.ButtonInfo.Behavior>;
					/**
					 * Constructs a new instance of the com.urbanairship.iam.ButtonInfo$Behavior interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.iam.ButtonInfo.Builder>;
					public setBehavior(param0: string): com.urbanairship.iam.ButtonInfo.Builder;
					public setBorderColor(param0: number): com.urbanairship.iam.ButtonInfo.Builder;
					public setActions(param0: java.util.Map<string,com.urbanairship.json.JsonValue>): com.urbanairship.iam.ButtonInfo.Builder;
					public addAction(param0: string, param1: com.urbanairship.json.JsonSerializable): com.urbanairship.iam.ButtonInfo.Builder;
					public setLabel(param0: com.urbanairship.iam.TextInfo): com.urbanairship.iam.ButtonInfo.Builder;
					public setBackgroundColor(param0: number): com.urbanairship.iam.ButtonInfo.Builder;
					public setId(param0: string): com.urbanairship.iam.ButtonInfo.Builder;
					public build(): com.urbanairship.iam.ButtonInfo;
					public setBorderRadius(param0: number): com.urbanairship.iam.ButtonInfo.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class DisplayContent extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.iam.DisplayContent>;
				/**
				 * Constructs a new instance of the com.urbanairship.iam.DisplayContent interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					toJsonValue(): com.urbanairship.json.JsonValue;
				});
				public constructor();
				public static BUTTON_LAYOUT_SEPARATE: string;
				public static BUTTON_LAYOUT_KEY: string;
				public static FOOTER_KEY: string;
				public static BUTTONS_KEY: string;
				public static URL_KEY: string;
				public static DISMISS_BUTTON_COLOR_KEY: string;
				public static BODY_KEY: string;
				public static BORDER_RADIUS_KEY: string;
				public static ALLOW_FULLSCREEN_DISPLAY_KEY: string;
				public static BUTTON_LAYOUT_JOINED: string;
				public static BUTTON_LAYOUT_STACKED: string;
				public static PLACEMENT_KEY: string;
				public static TEMPLATE_KEY: string;
				public static HEADING_KEY: string;
				public static DURATION_KEY: string;
				public static MEDIA_KEY: string;
				public static BACKGROUND_COLOR_KEY: string;
				public toJsonValue(): com.urbanairship.json.JsonValue;
			}
			export module DisplayContent {
				export class ButtonLayout {
					public static class: java.lang.Class<com.urbanairship.iam.DisplayContent.ButtonLayout>;
					/**
					 * Constructs a new instance of the com.urbanairship.iam.DisplayContent$ButtonLayout interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class DisplayEvent extends com.urbanairship.iam.InAppMessageEvent {
				public static class: java.lang.Class<com.urbanairship.iam.DisplayEvent>;
				public getType(): string;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class DisplayHandler {
				public static class: java.lang.Class<com.urbanairship.iam.DisplayHandler>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.urbanairship.iam.DisplayHandler>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public finished(param0: com.urbanairship.iam.ResolutionInfo): void;
				public continueOnNextActivity(): void;
				public describeContents(): number;
				public cancelFutureDisplays(): void;
				public requestDisplayLock(param0: globalAndroid.app.Activity): boolean;
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export abstract class InAppActionUtils {
				public static class: java.lang.Class<com.urbanairship.iam.InAppActionUtils>;
				public static runActions(param0: java.util.Map<string,com.urbanairship.json.JsonValue>, param1: com.urbanairship.actions.ActionRunRequestFactory): void;
				public static runActions(param0: java.util.Map<string,com.urbanairship.json.JsonValue>): void;
				public static runActions(param0: com.urbanairship.iam.ButtonInfo): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class InAppMessage extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.iam.InAppMessage>;
				public static MAX_ID_LENGTH: number;
				public static TYPE_BANNER: string;
				public static TYPE_CUSTOM: string;
				public static TYPE_FULLSCREEN: string;
				public static TYPE_MODAL: string;
				public static TYPE_HTML: string;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.urbanairship.iam.InAppMessage>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getType(): string;
				public getId(): string;
				public getExtras(): com.urbanairship.json.JsonMap;
				public getAudience(): com.urbanairship.iam.Audience;
				public toString(): string;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public static newBuilder(param0: com.urbanairship.iam.InAppMessage): com.urbanairship.iam.InAppMessage.Builder;
				public getDisplayContent(): com.urbanairship.iam.DisplayContent;
				public hashCode(): number;
				public describeContents(): number;
				public equals(param0: any): boolean;
				public getActions(): java.util.Map<string,com.urbanairship.json.JsonValue>;
				public static newBuilder(): com.urbanairship.iam.InAppMessage.Builder;
			}
			export module InAppMessage {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.iam.InAppMessage.Builder>;
					public constructor(param0: com.urbanairship.iam.InAppMessage);
					public addAction(param0: string, param1: com.urbanairship.json.JsonValue): com.urbanairship.iam.InAppMessage.Builder;
					public setAudience(param0: com.urbanairship.iam.Audience): com.urbanairship.iam.InAppMessage.Builder;
					public setActions(param0: java.util.Map<string,com.urbanairship.json.JsonValue>): com.urbanairship.iam.InAppMessage.Builder;
					public setDisplayContent(param0: com.urbanairship.iam.custom.CustomDisplayContent): com.urbanairship.iam.InAppMessage.Builder;
					public setDisplayContent(param0: com.urbanairship.iam.fullscreen.FullScreenDisplayContent): com.urbanairship.iam.InAppMessage.Builder;
					public setExtras(param0: com.urbanairship.json.JsonMap): com.urbanairship.iam.InAppMessage.Builder;
					public setDisplayContent(param0: com.urbanairship.iam.modal.ModalDisplayContent): com.urbanairship.iam.InAppMessage.Builder;
					public setDisplayContent(param0: com.urbanairship.iam.banner.BannerDisplayContent): com.urbanairship.iam.InAppMessage.Builder;
					public setDisplayContent(param0: com.urbanairship.iam.html.HtmlDisplayContent): com.urbanairship.iam.InAppMessage.Builder;
					public build(): com.urbanairship.iam.InAppMessage;
					public setId(param0: string): com.urbanairship.iam.InAppMessage.Builder;
				}
				export class DisplayType {
					public static class: java.lang.Class<com.urbanairship.iam.InAppMessage.DisplayType>;
					/**
					 * Constructs a new instance of the com.urbanairship.iam.InAppMessage$DisplayType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export abstract class InAppMessageActivity extends com.urbanairship.messagecenter.ThemedActivity {
				public static class: java.lang.Class<com.urbanairship.iam.InAppMessageActivity>;
				public static DISPLAY_HANDLER_EXTRA_KEY: string;
				public static IN_APP_MESSAGE_KEY: string;
				public static IN_APP_CACHE_KEY: string;
				public onBackPressed(): void;
				public getDisplayTime(): number;
				public getViewModelStore(): any;
				public onResume(): void;
				public onPause(): void;
				public getLifecycle(): any;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public getCache(): com.urbanairship.iam.InAppMessageCache;
				public constructor();
				public onCreateMessage(param0: globalAndroid.os.Bundle): void;
				public getDisplayHandler(): com.urbanairship.iam.DisplayHandler;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
				public validateRequestPermissionsRequestCode(param0: number): void;
				public onStart(): void;
				public getMessage(): com.urbanairship.iam.InAppMessage;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class InAppMessageAdapter {
				public static class: java.lang.Class<com.urbanairship.iam.InAppMessageAdapter>;
				/**
				 * Constructs a new instance of the com.urbanairship.iam.InAppMessageAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPrepare(param0: globalAndroid.content.Context): number;
					isReady(param0: globalAndroid.app.Activity): boolean;
					onDisplay(param0: globalAndroid.app.Activity, param1: boolean, param2: com.urbanairship.iam.DisplayHandler): boolean;
					onFinish(): void;
				});
				public constructor();
				public static OK: number;
				public static RETRY: number;
				public static CANCEL: number;
				public onDisplay(param0: globalAndroid.app.Activity, param1: boolean, param2: com.urbanairship.iam.DisplayHandler): boolean;
				public onPrepare(param0: globalAndroid.content.Context): number;
				public onFinish(): void;
				public isReady(param0: globalAndroid.app.Activity): boolean;
			}
			export module InAppMessageAdapter {
				export class Factory {
					public static class: java.lang.Class<com.urbanairship.iam.InAppMessageAdapter.Factory>;
					/**
					 * Constructs a new instance of the com.urbanairship.iam.InAppMessageAdapter$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createAdapter(param0: com.urbanairship.iam.InAppMessage): com.urbanairship.iam.InAppMessageAdapter;
					});
					public constructor();
					public createAdapter(param0: com.urbanairship.iam.InAppMessage): com.urbanairship.iam.InAppMessageAdapter;
				}
				export class PrepareResult {
					public static class: java.lang.Class<com.urbanairship.iam.InAppMessageAdapter.PrepareResult>;
					/**
					 * Constructs a new instance of the com.urbanairship.iam.InAppMessageAdapter$PrepareResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class InAppMessageCache {
				public static class: java.lang.Class<com.urbanairship.iam.InAppMessageCache>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.urbanairship.iam.InAppMessageCache>;
				public static MEDIA_CACHE_KEY: string;
				public static IMAGE_WIDTH_CACHE_KEY: string;
				public static IMAGE_HEIGHT_CACHE_KEY: string;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public static newCache(param0: globalAndroid.content.Context, param1: com.urbanairship.iam.InAppMessage): com.urbanairship.iam.InAppMessageCache;
				public describeContents(): number;
				public getBundle(): globalAndroid.os.Bundle;
				public delete(): boolean;
				public file(param0: string): java.io.File;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class InAppMessageDriver extends com.urbanairship.automation.AutomationDriver<com.urbanairship.iam.InAppMessageSchedule> {
				public static class: java.lang.Class<com.urbanairship.iam.InAppMessageDriver>;
				public onExecuteTriggeredSchedule(param0: any, param1: com.urbanairship.automation.AutomationDriver.ExecutionCallback): void;
				public onPrepareSchedule(param0: any, param1: com.urbanairship.automation.AutomationDriver.PrepareScheduleCallback): void;
				public onExecuteTriggeredSchedule(param0: com.urbanairship.iam.InAppMessageSchedule, param1: com.urbanairship.automation.AutomationDriver.ExecutionCallback): void;
				public createSchedule(param0: string, param1: com.urbanairship.automation.ScheduleInfo): any;
				public onPrepareSchedule(param0: com.urbanairship.iam.InAppMessageSchedule, param1: com.urbanairship.automation.AutomationDriver.PrepareScheduleCallback): void;
				public isScheduleReadyToExecute(param0: any): boolean;
				public createSchedule(param0: string, param1: com.urbanairship.automation.ScheduleInfo): com.urbanairship.iam.InAppMessageSchedule;
				public isScheduleReadyToExecute(param0: com.urbanairship.iam.InAppMessageSchedule): boolean;
			}
			export module InAppMessageDriver {
				export class Listener {
					public static class: java.lang.Class<com.urbanairship.iam.InAppMessageDriver.Listener>;
					/**
					 * Constructs a new instance of the com.urbanairship.iam.InAppMessageDriver$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPrepareMessage(param0: string, param1: com.urbanairship.iam.InAppMessage): void;
						isMessageReady(param0: string, param1: com.urbanairship.iam.InAppMessage): boolean;
						onDisplay(param0: string): void;
					});
					public constructor();
					public onDisplay(param0: string): void;
					public onPrepareMessage(param0: string, param1: com.urbanairship.iam.InAppMessage): void;
					public isMessageReady(param0: string, param1: com.urbanairship.iam.InAppMessage): boolean;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export abstract class InAppMessageEvent extends com.urbanairship.analytics.Event {
				public static class: java.lang.Class<com.urbanairship.iam.InAppMessageEvent>;
				public getEventData(): com.urbanairship.json.JsonMap;
				public isValid(): boolean;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class InAppMessageExtender {
				public static class: java.lang.Class<com.urbanairship.iam.InAppMessageExtender>;
				/**
				 * Constructs a new instance of the com.urbanairship.iam.InAppMessageExtender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					extend(param0: com.urbanairship.iam.InAppMessage): com.urbanairship.iam.InAppMessage;
				});
				public constructor();
				public extend(param0: com.urbanairship.iam.InAppMessage): com.urbanairship.iam.InAppMessage;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class InAppMessageListener {
				public static class: java.lang.Class<com.urbanairship.iam.InAppMessageListener>;
				/**
				 * Constructs a new instance of the com.urbanairship.iam.InAppMessageListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onMessageDisplayed(param0: string, param1: com.urbanairship.iam.InAppMessage): void;
					onMessageFinished(param0: string, param1: com.urbanairship.iam.InAppMessage, param2: com.urbanairship.iam.ResolutionInfo): void;
				});
				public constructor();
				public onMessageFinished(param0: string, param1: com.urbanairship.iam.InAppMessage, param2: com.urbanairship.iam.ResolutionInfo): void;
				public onMessageDisplayed(param0: string, param1: com.urbanairship.iam.InAppMessage): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class InAppMessageManager extends com.urbanairship.AirshipComponent implements com.urbanairship.iam.InAppMessageScheduler {
				public static class: java.lang.Class<com.urbanairship.iam.InAppMessageManager>;
				public static DEFAULT_DISPLAY_INTERVAL_MS: number;
				public static EXCLUDE_FROM_AUTO_SHOW: string;
				public onComponentEnableChange(param0: boolean): void;
				public addListener(param0: com.urbanairship.iam.InAppMessageListener): void;
				public onAirshipReady(param0: com.urbanairship.UAirship): void;
				public removeListener(param0: com.urbanairship.iam.InAppMessageListener): void;
				public onNewConfig(param0: com.urbanairship.json.JsonList): void;
				public getSchedules(param0: string): com.urbanairship.PendingResult<java.util.Collection<com.urbanairship.iam.InAppMessageSchedule>>;
				public getDisplayInterval(): number;
				public setEnabled(param0: boolean): void;
				public init(): void;
				public constructor(param0: com.urbanairship.PreferenceDataStore);
				public cancelSchedule(param0: string): com.urbanairship.PendingResult<java.lang.Void>;
				public setDisplayInterval(param0: number, param1: java.util.concurrent.TimeUnit): void;
				public schedule(param0: java.util.List<com.urbanairship.iam.InAppMessageScheduleInfo>): com.urbanairship.PendingResult<java.util.List<com.urbanairship.iam.InAppMessageSchedule>>;
				public cancelMessages(param0: java.util.Collection<string>): com.urbanairship.PendingResult<java.lang.Void>;
				public getSchedules(): com.urbanairship.PendingResult<java.util.Collection<com.urbanairship.iam.InAppMessageSchedule>>;
				public setAdapterFactory(param0: string, param1: com.urbanairship.iam.InAppMessageAdapter.Factory): void;
				public setMessageExtender(param0: com.urbanairship.iam.InAppMessageExtender): void;
				public setPaused(param0: boolean): void;
				public scheduleMessage(param0: com.urbanairship.iam.InAppMessageScheduleInfo): com.urbanairship.PendingResult<com.urbanairship.iam.InAppMessageSchedule>;
				public tearDown(): void;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.AirshipConfigOptions, param3: com.urbanairship.analytics.Analytics, param4: com.urbanairship.ActivityMonitor, param5: com.urbanairship.remotedata.RemoteData, param6: com.urbanairship.push.PushManager, param7: com.urbanairship.push.TagGroupRegistrar);
				public getSchedule(param0: string): com.urbanairship.PendingResult<com.urbanairship.iam.InAppMessageSchedule>;
				public editSchedule(param0: string, param1: com.urbanairship.iam.InAppMessageScheduleEdits): com.urbanairship.PendingResult<com.urbanairship.iam.InAppMessageSchedule>;
				public cancelMessage(param0: string): com.urbanairship.PendingResult<java.lang.Boolean>;
				public isEnabled(): boolean;
				public isPaused(): boolean;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class InAppMessageSchedule extends com.urbanairship.automation.Schedule<com.urbanairship.iam.InAppMessageScheduleInfo> {
				public static class: java.lang.Class<com.urbanairship.iam.InAppMessageSchedule>;
				public constructor(param0: string, param1: com.urbanairship.iam.InAppMessageScheduleInfo);
				public getId(): string;
				public getInfo(): any;
				public getInfo(): com.urbanairship.iam.InAppMessageScheduleInfo;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class InAppMessageScheduleEdits extends com.urbanairship.automation.ScheduleEdits {
				public static class: java.lang.Class<com.urbanairship.iam.InAppMessageScheduleEdits>;
				public getEditGracePeriod(): java.lang.Long;
				public static newBuilder(param0: com.urbanairship.iam.InAppMessageScheduleEdits): com.urbanairship.iam.InAppMessageScheduleEdits.Builder;
				public getPriority(): java.lang.Integer;
				public getStart(): java.lang.Long;
				public getEnd(): java.lang.Long;
				public static fromJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.iam.InAppMessageScheduleEdits;
				public static newBuilder(): com.urbanairship.iam.InAppMessageScheduleEdits.Builder;
				public getMessage(): com.urbanairship.iam.InAppMessage;
				public getLimit(): java.lang.Integer;
				public getData(): com.urbanairship.json.JsonSerializable;
				public getInterval(): java.lang.Long;
			}
			export module InAppMessageScheduleEdits {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.iam.InAppMessageScheduleEdits.Builder>;
					public setEnd(param0: number): com.urbanairship.iam.InAppMessageScheduleEdits.Builder;
					public setPriority(param0: number): com.urbanairship.iam.InAppMessageScheduleEdits.Builder;
					public setMessage(param0: com.urbanairship.iam.InAppMessage): com.urbanairship.iam.InAppMessageScheduleEdits.Builder;
					public setStart(param0: number): com.urbanairship.iam.InAppMessageScheduleEdits.Builder;
					public setEditGracePeriod(param0: number, param1: java.util.concurrent.TimeUnit): com.urbanairship.iam.InAppMessageScheduleEdits.Builder;
					public setInterval(param0: number, param1: java.util.concurrent.TimeUnit): com.urbanairship.iam.InAppMessageScheduleEdits.Builder;
					public setLimit(param0: number): com.urbanairship.iam.InAppMessageScheduleEdits.Builder;
					public build(): com.urbanairship.iam.InAppMessageScheduleEdits;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class InAppMessageScheduleInfo extends com.urbanairship.automation.ScheduleInfo {
				public static class: java.lang.Class<com.urbanairship.iam.InAppMessageScheduleInfo>;
				public static TRIGGER_LIMIT: number;
				public getEnd(): number;
				public getInAppMessage(): com.urbanairship.iam.InAppMessage;
				public getTriggers(): java.util.List<com.urbanairship.automation.Trigger>;
				public getEditGracePeriod(): number;
				public getDelay(): com.urbanairship.automation.ScheduleDelay;
				public getInterval(): number;
				public getPriority(): number;
				public static fromJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.iam.InAppMessageScheduleInfo;
				public getData(): com.urbanairship.json.JsonSerializable;
				public static newBuilder(): com.urbanairship.iam.InAppMessageScheduleInfo.Builder;
				public getStart(): number;
				public getGroup(): string;
				public getLimit(): number;
			}
			export module InAppMessageScheduleInfo {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.iam.InAppMessageScheduleInfo.Builder>;
					public addTrigger(param0: com.urbanairship.automation.Trigger): com.urbanairship.iam.InAppMessageScheduleInfo.Builder;
					public addTriggers(param0: java.util.List<com.urbanairship.automation.Trigger>): com.urbanairship.iam.InAppMessageScheduleInfo.Builder;
					public setTriggers(param0: java.util.List<com.urbanairship.automation.Trigger>): com.urbanairship.iam.InAppMessageScheduleInfo.Builder;
					public setLimit(param0: number): com.urbanairship.iam.InAppMessageScheduleInfo.Builder;
					public setEditGracePeriod(param0: number, param1: java.util.concurrent.TimeUnit): com.urbanairship.iam.InAppMessageScheduleInfo.Builder;
					public build(): com.urbanairship.iam.InAppMessageScheduleInfo;
					public setPriority(param0: number): com.urbanairship.iam.InAppMessageScheduleInfo.Builder;
					public setMessage(param0: com.urbanairship.iam.InAppMessage): com.urbanairship.iam.InAppMessageScheduleInfo.Builder;
					public setDelay(param0: com.urbanairship.automation.ScheduleDelay): com.urbanairship.iam.InAppMessageScheduleInfo.Builder;
					public setEnd(param0: number): com.urbanairship.iam.InAppMessageScheduleInfo.Builder;
					public setInterval(param0: number, param1: java.util.concurrent.TimeUnit): com.urbanairship.iam.InAppMessageScheduleInfo.Builder;
					public setStart(param0: number): com.urbanairship.iam.InAppMessageScheduleInfo.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class InAppMessageScheduler {
				public static class: java.lang.Class<com.urbanairship.iam.InAppMessageScheduler>;
				/**
				 * Constructs a new instance of the com.urbanairship.iam.InAppMessageScheduler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					scheduleMessage(param0: com.urbanairship.iam.InAppMessageScheduleInfo): com.urbanairship.PendingResult<com.urbanairship.iam.InAppMessageSchedule>;
					cancelSchedule(param0: string): com.urbanairship.PendingResult<java.lang.Void>;
					cancelMessage(param0: string): com.urbanairship.PendingResult<java.lang.Boolean>;
					cancelMessages(param0: java.util.Collection<string>): com.urbanairship.PendingResult<java.lang.Void>;
					schedule(param0: java.util.List<com.urbanairship.iam.InAppMessageScheduleInfo>): com.urbanairship.PendingResult<java.util.List<com.urbanairship.iam.InAppMessageSchedule>>;
					getSchedules(param0: string): com.urbanairship.PendingResult<java.util.Collection<com.urbanairship.iam.InAppMessageSchedule>>;
					getSchedule(param0: string): com.urbanairship.PendingResult<com.urbanairship.iam.InAppMessageSchedule>;
					getSchedules(): com.urbanairship.PendingResult<java.util.Collection<com.urbanairship.iam.InAppMessageSchedule>>;
					editSchedule(param0: string, param1: com.urbanairship.iam.InAppMessageScheduleEdits): com.urbanairship.PendingResult<com.urbanairship.iam.InAppMessageSchedule>;
				});
				public constructor();
				public scheduleMessage(param0: com.urbanairship.iam.InAppMessageScheduleInfo): com.urbanairship.PendingResult<com.urbanairship.iam.InAppMessageSchedule>;
				public schedule(param0: java.util.List<com.urbanairship.iam.InAppMessageScheduleInfo>): com.urbanairship.PendingResult<java.util.List<com.urbanairship.iam.InAppMessageSchedule>>;
				public getSchedule(param0: string): com.urbanairship.PendingResult<com.urbanairship.iam.InAppMessageSchedule>;
				public editSchedule(param0: string, param1: com.urbanairship.iam.InAppMessageScheduleEdits): com.urbanairship.PendingResult<com.urbanairship.iam.InAppMessageSchedule>;
				public cancelMessages(param0: java.util.Collection<string>): com.urbanairship.PendingResult<java.lang.Void>;
				public cancelMessage(param0: string): com.urbanairship.PendingResult<java.lang.Boolean>;
				public getSchedules(): com.urbanairship.PendingResult<java.util.Collection<com.urbanairship.iam.InAppMessageSchedule>>;
				public getSchedules(param0: string): com.urbanairship.PendingResult<java.util.Collection<com.urbanairship.iam.InAppMessageSchedule>>;
				public cancelSchedule(param0: string): com.urbanairship.PendingResult<java.lang.Void>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class InAppRemoteConfig {
				public static class: java.lang.Class<com.urbanairship.iam.InAppRemoteConfig>;
				public tagGroupsConfig: com.urbanairship.iam.InAppRemoteConfig.TagGroupsConfig;
				public static fromJsonList(param0: com.urbanairship.json.JsonList): com.urbanairship.iam.InAppRemoteConfig;
			}
			export module InAppRemoteConfig {
				export class TagGroupsConfig {
					public static class: java.lang.Class<com.urbanairship.iam.InAppRemoteConfig.TagGroupsConfig>;
					public isEnabled: boolean;
					public cacheMaxAgeInSeconds: number;
					public cacheStaleReadTimeSeconds: number;
					public cachePreferLocalTagDataTimeSeconds: number;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class InAppRemoteDataObserver {
				public static class: java.lang.Class<com.urbanairship.iam.InAppRemoteDataObserver>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class LegacyInAppMessage {
				public static class: java.lang.Class<com.urbanairship.iam.LegacyInAppMessage>;
				public getId(): string;
				public getExtras(): com.urbanairship.json.JsonMap;
				public getButtonActionValues(param0: string): java.util.Map<string,com.urbanairship.json.JsonValue>;
				public getPlacement(): string;
				public getDuration(): java.lang.Long;
				public static newBuilder(): com.urbanairship.iam.LegacyInAppMessage.Builder;
				public getButtonGroupId(): string;
				public getClickActionValues(): java.util.Map<string,com.urbanairship.json.JsonValue>;
				public static fromPush(param0: com.urbanairship.push.PushMessage): com.urbanairship.iam.LegacyInAppMessage;
				public getExpiry(): number;
				public getAlert(): string;
				public getPrimaryColor(): java.lang.Integer;
				public getSecondaryColor(): java.lang.Integer;
			}
			export module LegacyInAppMessage {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.iam.LegacyInAppMessage.Builder>;
					public setPrimaryColor(param0: java.lang.Integer): com.urbanairship.iam.LegacyInAppMessage.Builder;
					public setSecondaryColor(param0: java.lang.Integer): com.urbanairship.iam.LegacyInAppMessage.Builder;
					public build(): com.urbanairship.iam.LegacyInAppMessage;
					public setPlacement(param0: string): com.urbanairship.iam.LegacyInAppMessage.Builder;
					public setDuration(param0: java.lang.Long): com.urbanairship.iam.LegacyInAppMessage.Builder;
					public setButtonGroupId(param0: string): com.urbanairship.iam.LegacyInAppMessage.Builder;
					public setId(param0: string): com.urbanairship.iam.LegacyInAppMessage.Builder;
					public setAlert(param0: string): com.urbanairship.iam.LegacyInAppMessage.Builder;
					public setClickActionValues(param0: java.util.Map<string,com.urbanairship.json.JsonValue>): com.urbanairship.iam.LegacyInAppMessage.Builder;
					public setExpiry(param0: java.lang.Long): com.urbanairship.iam.LegacyInAppMessage.Builder;
					public setButtonActionValues(param0: string, param1: java.util.Map<string,com.urbanairship.json.JsonValue>): com.urbanairship.iam.LegacyInAppMessage.Builder;
					public setExtras(param0: com.urbanairship.json.JsonMap): com.urbanairship.iam.LegacyInAppMessage.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class LegacyInAppMessageManager extends com.urbanairship.AirshipComponent {
				public static class: java.lang.Class<com.urbanairship.iam.LegacyInAppMessageManager>;
				public static DEFAULT_PRIMARY_COLOR: number;
				public static DEFAULT_SECONDARY_COLOR: number;
				public static DEFAULT_BORDER_RADIUS_DP: number;
				public onPushResponse(param0: com.urbanairship.push.PushMessage): void;
				public constructor(param0: com.urbanairship.PreferenceDataStore, param1: com.urbanairship.iam.InAppMessageManager, param2: com.urbanairship.analytics.Analytics);
				public setMessageBuilderExtender(param0: com.urbanairship.iam.LegacyInAppMessageManager.MessageBuilderExtender): void;
				public setScheduleBuilderExtender(param0: com.urbanairship.iam.LegacyInAppMessageManager.ScheduleInfoBuilderExtender): void;
				public onPushReceived(param0: com.urbanairship.push.PushMessage): void;
				public constructor(param0: com.urbanairship.PreferenceDataStore);
				public setDisplayAsapEnabled(param0: boolean): void;
				public getDisplayAsapEnabled(): boolean;
				public init(): void;
			}
			export module LegacyInAppMessageManager {
				export class MessageBuilderExtender {
					public static class: java.lang.Class<com.urbanairship.iam.LegacyInAppMessageManager.MessageBuilderExtender>;
					/**
					 * Constructs a new instance of the com.urbanairship.iam.LegacyInAppMessageManager$MessageBuilderExtender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						extend(param0: globalAndroid.content.Context, param1: com.urbanairship.iam.InAppMessage.Builder, param2: com.urbanairship.iam.LegacyInAppMessage): com.urbanairship.iam.InAppMessage.Builder;
					});
					public constructor();
					public extend(param0: globalAndroid.content.Context, param1: com.urbanairship.iam.InAppMessage.Builder, param2: com.urbanairship.iam.LegacyInAppMessage): com.urbanairship.iam.InAppMessage.Builder;
				}
				export class ScheduleInfoBuilderExtender {
					public static class: java.lang.Class<com.urbanairship.iam.LegacyInAppMessageManager.ScheduleInfoBuilderExtender>;
					/**
					 * Constructs a new instance of the com.urbanairship.iam.LegacyInAppMessageManager$ScheduleInfoBuilderExtender interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						extend(param0: globalAndroid.content.Context, param1: com.urbanairship.iam.InAppMessageScheduleInfo.Builder, param2: com.urbanairship.iam.LegacyInAppMessage): com.urbanairship.iam.InAppMessageScheduleInfo.Builder;
					});
					public constructor();
					public extend(param0: globalAndroid.content.Context, param1: com.urbanairship.iam.InAppMessageScheduleInfo.Builder, param2: com.urbanairship.iam.LegacyInAppMessage): com.urbanairship.iam.InAppMessageScheduleInfo.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export abstract class MediaDisplayAdapter extends com.urbanairship.iam.InAppMessageAdapter {
				public static class: java.lang.Class<com.urbanairship.iam.MediaDisplayAdapter>;
				public constructor(param0: com.urbanairship.iam.InAppMessage, param1: com.urbanairship.iam.MediaInfo);
				public onDisplay(param0: globalAndroid.app.Activity, param1: boolean, param2: com.urbanairship.iam.DisplayHandler): boolean;
				public onPrepare(param0: globalAndroid.content.Context): number;
				public getMessage(): com.urbanairship.iam.InAppMessage;
				public onFinish(): void;
				public getCache(): com.urbanairship.iam.InAppMessageCache;
				public isReady(param0: globalAndroid.app.Activity): boolean;
				public createCache(param0: globalAndroid.content.Context): void;
				public cacheMedia(param0: globalAndroid.content.Context, param1: com.urbanairship.iam.MediaInfo): number;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class MediaInfo extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.iam.MediaInfo>;
				public static TYPE_IMAGE: string;
				public static TYPE_VIDEO: string;
				public static TYPE_YOUTUBE: string;
				public static parseJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.iam.MediaInfo;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public getType(): string;
				public static newBuilder(param0: com.urbanairship.iam.MediaInfo): com.urbanairship.iam.MediaInfo.Builder;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getUrl(): string;
				public getDescription(): string;
				public toString(): string;
				public static newBuilder(): com.urbanairship.iam.MediaInfo.Builder;
			}
			export module MediaInfo {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.iam.MediaInfo.Builder>;
					public setDescription(param0: string): com.urbanairship.iam.MediaInfo.Builder;
					public setUrl(param0: string): com.urbanairship.iam.MediaInfo.Builder;
					public setType(param0: string): com.urbanairship.iam.MediaInfo.Builder;
					public build(): com.urbanairship.iam.MediaInfo;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class ResolutionEvent extends com.urbanairship.iam.InAppMessageEvent {
				public static class: java.lang.Class<com.urbanairship.iam.ResolutionEvent>;
				public getType(): string;
				public getEventData(): com.urbanairship.json.JsonMap;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class ResolutionInfo {
				public static class: java.lang.Class<com.urbanairship.iam.ResolutionInfo>;
				public static RESOLUTION_BUTTON_CLICK: string;
				public static RESOLUTION_MESSAGE_CLICK: string;
				public static RESOLUTION_USER_DISMISSED: string;
				public static RESOLUTION_TIMED_OUT: string;
				public getType(): string;
				public getDisplayMilliseconds(): number;
				public static messageClicked(param0: number): com.urbanairship.iam.ResolutionInfo;
				public static timedOut(param0: number): com.urbanairship.iam.ResolutionInfo;
				public getButtonInfo(): com.urbanairship.iam.ButtonInfo;
				public static dismissed(param0: number): com.urbanairship.iam.ResolutionInfo;
				public static buttonPressed(param0: com.urbanairship.iam.ButtonInfo, param1: number): com.urbanairship.iam.ResolutionInfo;
			}
			export module ResolutionInfo {
				export class Type {
					public static class: java.lang.Class<com.urbanairship.iam.ResolutionInfo.Type>;
					/**
					 * Constructs a new instance of the com.urbanairship.iam.ResolutionInfo$Type interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class TagSelector extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.iam.TagSelector>;
				public static EMPTY_TAG_GROUPS: java.util.Map<string,java.util.Set<string>>;
				public containsTagGroups(): boolean;
				public static or(param0: native.Array<com.urbanairship.iam.TagSelector>): com.urbanairship.iam.TagSelector;
				public static tag(param0: string, param1: string): com.urbanairship.iam.TagSelector;
				public apply(param0: java.util.Collection<string>): boolean;
				public toString(): string;
				public static and(param0: java.util.List<com.urbanairship.iam.TagSelector>): com.urbanairship.iam.TagSelector;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public apply(param0: java.util.Collection<string>, param1: java.util.Map<string,java.util.Set<string>>): boolean;
				public static and(param0: native.Array<com.urbanairship.iam.TagSelector>): com.urbanairship.iam.TagSelector;
				public static tag(param0: string): com.urbanairship.iam.TagSelector;
				public hashCode(): number;
				public getTagGroups(): java.util.Map<string,java.util.Set<string>>;
				public equals(param0: any): boolean;
				public static not(param0: com.urbanairship.iam.TagSelector): com.urbanairship.iam.TagSelector;
				public static parseJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.iam.TagSelector;
				public static or(param0: java.util.List<com.urbanairship.iam.TagSelector>): com.urbanairship.iam.TagSelector;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export class TextInfo extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.iam.TextInfo>;
				public static ALIGNMENT_RIGHT: string;
				public static ALIGNMENT_LEFT: string;
				public static ALIGNMENT_CENTER: string;
				public static STYLE_BOLD: string;
				public static STYLE_UNDERLINE: string;
				public static STYLE_ITALIC: string;
				public getColor(): java.lang.Integer;
				public static parseJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.iam.TextInfo;
				public getStyles(): java.util.List<string>;
				public getDrawable(): number;
				public toString(): string;
				public getText(): string;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public getAlignment(): string;
				public getFontFamilies(): java.util.List<string>;
				public hashCode(): number;
				public static newBuilder(): com.urbanairship.iam.TextInfo.Builder;
				public equals(param0: any): boolean;
				public getFontSize(): java.lang.Float;
				public static newBuilder(param0: com.urbanairship.iam.TextInfo): com.urbanairship.iam.TextInfo.Builder;
			}
			export module TextInfo {
				export class Alignment {
					public static class: java.lang.Class<com.urbanairship.iam.TextInfo.Alignment>;
					/**
					 * Constructs a new instance of the com.urbanairship.iam.TextInfo$Alignment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.iam.TextInfo.Builder>;
					public setAlignment(param0: string): com.urbanairship.iam.TextInfo.Builder;
					public build(): com.urbanairship.iam.TextInfo;
					public addFontFamily(param0: string): com.urbanairship.iam.TextInfo.Builder;
					public setColor(param0: number): com.urbanairship.iam.TextInfo.Builder;
					public addStyle(param0: string): com.urbanairship.iam.TextInfo.Builder;
					public setDrawable(param0: number): com.urbanairship.iam.TextInfo.Builder;
					public setText(param0: string): com.urbanairship.iam.TextInfo.Builder;
					public setFontSize(param0: number): com.urbanairship.iam.TextInfo.Builder;
				}
				export class Style {
					public static class: java.lang.Class<com.urbanairship.iam.TextInfo.Style>;
					/**
					 * Constructs a new instance of the com.urbanairship.iam.TextInfo$Style interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module banner {
				export class BannerAdapter extends com.urbanairship.iam.MediaDisplayAdapter {
					public static class: java.lang.Class<com.urbanairship.iam.banner.BannerAdapter>;
					public static BANNER_CONTAINER_ID: string;
					public getContainerId(param0: globalAndroid.app.Activity): number;
					public onPrepare(param0: globalAndroid.content.Context): number;
					public onDisplay(param0: globalAndroid.app.Activity, param1: boolean, param2: com.urbanairship.iam.DisplayHandler): boolean;
					public constructor(param0: com.urbanairship.iam.InAppMessage, param1: com.urbanairship.iam.MediaInfo);
					public constructor(param0: com.urbanairship.iam.InAppMessage, param1: com.urbanairship.iam.banner.BannerDisplayContent);
					public isReady(param0: globalAndroid.app.Activity): boolean;
					public onFinish(): void;
					public static newAdapter(param0: com.urbanairship.iam.InAppMessage): com.urbanairship.iam.banner.BannerAdapter;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module banner {
				export class BannerAdapterFactory extends com.urbanairship.iam.InAppMessageAdapter.Factory {
					public static class: java.lang.Class<com.urbanairship.iam.banner.BannerAdapterFactory>;
					public constructor();
					public createAdapter(param0: com.urbanairship.iam.InAppMessage): com.urbanairship.iam.InAppMessageAdapter;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module banner {
				export class BannerDismissLayout {
					public static class: java.lang.Class<com.urbanairship.iam.banner.BannerDismissLayout>;
					public setXFraction(param0: number): void;
					public setMinFlingVelocity(param0: number): void;
					public setListener(param0: com.urbanairship.iam.banner.BannerDismissLayout.Listener): void;
					public setPlacement(param0: string): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public onInterceptTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public getXFraction(): number;
					public getYFraction(): number;
					public setYFraction(param0: number): void;
					public computeScroll(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public getMinFlingVelocity(): number;
				}
				export module BannerDismissLayout {
					export class Listener {
						public static class: java.lang.Class<com.urbanairship.iam.banner.BannerDismissLayout.Listener>;
						/**
						 * Constructs a new instance of the com.urbanairship.iam.banner.BannerDismissLayout$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onDismissed(param0: globalAndroid.view.View): void;
							onDragStateChanged(param0: globalAndroid.view.View, param1: number): void;
						});
						public constructor();
						public onDismissed(param0: globalAndroid.view.View): void;
						public onDragStateChanged(param0: globalAndroid.view.View, param1: number): void;
					}
					export class ViewDragCallback extends globalAndroid.support.v4.widget.ViewDragHelper.Callback {
						public static class: java.lang.Class<com.urbanairship.iam.banner.BannerDismissLayout.ViewDragCallback>;
						public onViewDragStateChanged(param0: number): void;
						public onViewReleased(param0: globalAndroid.view.View, param1: number, param2: number): void;
						public tryCaptureView(param0: globalAndroid.view.View, param1: number): boolean;
						public clampViewPositionHorizontal(param0: globalAndroid.view.View, param1: number, param2: number): number;
						public clampViewPositionVertical(param0: globalAndroid.view.View, param1: number, param2: number): number;
						public onViewCaptured(param0: globalAndroid.view.View, param1: number): void;
						public onViewPositionChanged(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module banner {
				export class BannerDisplayContent extends com.urbanairship.iam.DisplayContent {
					public static class: java.lang.Class<com.urbanairship.iam.banner.BannerDisplayContent>;
					public static PLACEMENT_TOP: string;
					public static PLACEMENT_BOTTOM: string;
					public static TEMPLATE_LEFT_MEDIA: string;
					public static TEMPLATE_RIGHT_MEDIA: string;
					public static DEFAULT_DURATION_MS: number;
					public static MAX_BUTTONS: number;
					public getMedia(): com.urbanairship.iam.MediaInfo;
					public static newBuilder(): com.urbanairship.iam.banner.BannerDisplayContent.Builder;
					public static parseJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.iam.banner.BannerDisplayContent;
					public getBody(): com.urbanairship.iam.TextInfo;
					public toJsonValue(): com.urbanairship.json.JsonValue;
					public getBorderRadius(): number;
					public equals(param0: any): boolean;
					public getDuration(): number;
					public toString(): string;
					public getDismissButtonColor(): number;
					public getActions(): java.util.Map<string,com.urbanairship.json.JsonValue>;
					public getPlacement(): string;
					public getButtons(): java.util.List<com.urbanairship.iam.ButtonInfo>;
					public getBackgroundColor(): number;
					public static newBuilder(param0: com.urbanairship.iam.banner.BannerDisplayContent): com.urbanairship.iam.banner.BannerDisplayContent.Builder;
					public getTemplate(): string;
					public getButtonLayout(): string;
					public hashCode(): number;
					public getHeading(): com.urbanairship.iam.TextInfo;
				}
				export module BannerDisplayContent {
					export class Builder {
						public static class: java.lang.Class<com.urbanairship.iam.banner.BannerDisplayContent.Builder>;
						public setDuration(param0: number, param1: java.util.concurrent.TimeUnit): com.urbanairship.iam.banner.BannerDisplayContent.Builder;
						public setActions(param0: java.util.Map<string,com.urbanairship.json.JsonValue>): com.urbanairship.iam.banner.BannerDisplayContent.Builder;
						public addAction(param0: string, param1: com.urbanairship.json.JsonValue): com.urbanairship.iam.banner.BannerDisplayContent.Builder;
						public setBackgroundColor(param0: number): com.urbanairship.iam.banner.BannerDisplayContent.Builder;
						public setDismissButtonColor(param0: number): com.urbanairship.iam.banner.BannerDisplayContent.Builder;
						public addButton(param0: com.urbanairship.iam.ButtonInfo): com.urbanairship.iam.banner.BannerDisplayContent.Builder;
						public setButtons(param0: java.util.List<com.urbanairship.iam.ButtonInfo>): com.urbanairship.iam.banner.BannerDisplayContent.Builder;
						public setButtonLayout(param0: string): com.urbanairship.iam.banner.BannerDisplayContent.Builder;
						public setPlacement(param0: string): com.urbanairship.iam.banner.BannerDisplayContent.Builder;
						public setHeading(param0: com.urbanairship.iam.TextInfo): com.urbanairship.iam.banner.BannerDisplayContent.Builder;
						public setBorderRadius(param0: number): com.urbanairship.iam.banner.BannerDisplayContent.Builder;
						public setTemplate(param0: string): com.urbanairship.iam.banner.BannerDisplayContent.Builder;
						public setBody(param0: com.urbanairship.iam.TextInfo): com.urbanairship.iam.banner.BannerDisplayContent.Builder;
						public setMedia(param0: com.urbanairship.iam.MediaInfo): com.urbanairship.iam.banner.BannerDisplayContent.Builder;
						public build(): com.urbanairship.iam.banner.BannerDisplayContent;
					}
					export class Placement {
						public static class: java.lang.Class<com.urbanairship.iam.banner.BannerDisplayContent.Placement>;
						/**
						 * Constructs a new instance of the com.urbanairship.iam.banner.BannerDisplayContent$Placement interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export class Template {
						public static class: java.lang.Class<com.urbanairship.iam.banner.BannerDisplayContent.Template>;
						/**
						 * Constructs a new instance of the com.urbanairship.iam.banner.BannerDisplayContent$Template interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module banner {
				export class BannerFragment implements com.urbanairship.iam.view.InAppButtonLayout.ButtonClickListener, com.urbanairship.iam.banner.BannerDismissLayout.Listener {
					public static class: java.lang.Class<com.urbanairship.iam.banner.BannerFragment>;
					public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
					public isDismissed(): boolean;
					public onCreate(param0: globalAndroid.os.Bundle): void;
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public onDragStateChanged(param0: globalAndroid.view.View, param1: number): void;
					public static newBuilder(): com.urbanairship.iam.banner.BannerFragment.Builder;
					public onDismissed(param0: globalAndroid.view.View): void;
					public dismiss(param0: boolean, param1: com.urbanairship.iam.ResolutionInfo): void;
					public onResume(): void;
					public onStart(): void;
					public constructor();
					public getTimer(): com.urbanairship.iam.banner.Timer;
					public onClick(param0: globalAndroid.view.View): void;
					public onPause(): void;
					public onStop(): void;
					public onButtonClicked(param0: globalAndroid.view.View, param1: com.urbanairship.iam.ButtonInfo): void;
					public getDisplayContent(): com.urbanairship.iam.banner.BannerDisplayContent;
				}
				export module BannerFragment {
					export class Builder {
						public static class: java.lang.Class<com.urbanairship.iam.banner.BannerFragment.Builder>;
						public setCache(param0: com.urbanairship.iam.InAppMessageCache): com.urbanairship.iam.banner.BannerFragment.Builder;
						public setExitAnimation(param0: number): com.urbanairship.iam.banner.BannerFragment.Builder;
						public setInAppMessage(param0: com.urbanairship.iam.InAppMessage): com.urbanairship.iam.banner.BannerFragment.Builder;
						public build(): com.urbanairship.iam.banner.BannerFragment;
						public setDisplayHandler(param0: com.urbanairship.iam.DisplayHandler): com.urbanairship.iam.banner.BannerFragment.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module banner {
				export abstract class Timer {
					public static class: java.lang.Class<com.urbanairship.iam.banner.Timer>;
					public stop(): void;
					public start(): void;
					public onFinish(): void;
					public constructor(param0: number);
					public getRunTime(): number;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module custom {
				export class CustomDisplayContent extends com.urbanairship.iam.DisplayContent {
					public static class: java.lang.Class<com.urbanairship.iam.custom.CustomDisplayContent>;
					public equals(param0: any): boolean;
					public getValue(): com.urbanairship.json.JsonValue;
					public constructor(param0: com.urbanairship.json.JsonValue);
					public hashCode(): number;
					public toJsonValue(): com.urbanairship.json.JsonValue;
					public static parseJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.iam.custom.CustomDisplayContent;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module fullscreen {
				export class FullScreenActivity extends com.urbanairship.iam.InAppMessageActivity implements com.urbanairship.iam.view.InAppButtonLayout.ButtonClickListener {
					public static class: java.lang.Class<com.urbanairship.iam.fullscreen.FullScreenActivity>;
					public displayContent: com.urbanairship.iam.fullscreen.FullScreenDisplayContent;
					public validateRequestPermissionsRequestCode(param0: number): void;
					public constructor();
					public getTemplate(param0: string): number;
					public onPause(): void;
					public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
					public getViewModelStore(): any;
					public onCreateMessage(param0: globalAndroid.os.Bundle): void;
					public normalizeTemplate(param0: com.urbanairship.iam.fullscreen.FullScreenDisplayContent): string;
					public onButtonClicked(param0: globalAndroid.view.View, param1: com.urbanairship.iam.ButtonInfo): void;
					public onResume(): void;
					public getLifecycle(): any;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module fullscreen {
				export class FullScreenAdapter extends com.urbanairship.iam.MediaDisplayAdapter {
					public static class: java.lang.Class<com.urbanairship.iam.fullscreen.FullScreenAdapter>;
					public onPrepare(param0: globalAndroid.content.Context): number;
					public onDisplay(param0: globalAndroid.app.Activity, param1: boolean, param2: com.urbanairship.iam.DisplayHandler): boolean;
					public constructor(param0: com.urbanairship.iam.InAppMessage, param1: com.urbanairship.iam.MediaInfo);
					public isReady(param0: globalAndroid.app.Activity): boolean;
					public constructor(param0: com.urbanairship.iam.InAppMessage, param1: com.urbanairship.iam.fullscreen.FullScreenDisplayContent);
					public static newAdapter(param0: com.urbanairship.iam.InAppMessage): com.urbanairship.iam.fullscreen.FullScreenAdapter;
					public onFinish(): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module fullscreen {
				export class FullScreenAdapterFactory extends com.urbanairship.iam.InAppMessageAdapter.Factory {
					public static class: java.lang.Class<com.urbanairship.iam.fullscreen.FullScreenAdapterFactory>;
					public constructor();
					public createAdapter(param0: com.urbanairship.iam.InAppMessage): com.urbanairship.iam.InAppMessageAdapter;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module fullscreen {
				export class FullScreenDisplayContent extends com.urbanairship.iam.DisplayContent {
					public static class: java.lang.Class<com.urbanairship.iam.fullscreen.FullScreenDisplayContent>;
					public static TEMPLATE_HEADER_MEDIA_BODY: string;
					public static TEMPLATE_MEDIA_HEADER_BODY: string;
					public static TEMPLATE_HEADER_BODY_MEDIA: string;
					public static MAX_BUTTONS: number;
					public getMedia(): com.urbanairship.iam.MediaInfo;
					public static parseJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.iam.fullscreen.FullScreenDisplayContent;
					public getFooter(): com.urbanairship.iam.ButtonInfo;
					public getBody(): com.urbanairship.iam.TextInfo;
					public toJsonValue(): com.urbanairship.json.JsonValue;
					public equals(param0: any): boolean;
					public static newBuilder(): com.urbanairship.iam.fullscreen.FullScreenDisplayContent.Builder;
					public toString(): string;
					public getDismissButtonColor(): number;
					public getButtons(): java.util.List<com.urbanairship.iam.ButtonInfo>;
					public getBackgroundColor(): number;
					public getTemplate(): string;
					public getButtonLayout(): string;
					public hashCode(): number;
					public getHeading(): com.urbanairship.iam.TextInfo;
					public static newBuilder(param0: com.urbanairship.iam.fullscreen.FullScreenDisplayContent): com.urbanairship.iam.fullscreen.FullScreenDisplayContent.Builder;
				}
				export module FullScreenDisplayContent {
					export class Builder {
						public static class: java.lang.Class<com.urbanairship.iam.fullscreen.FullScreenDisplayContent.Builder>;
						public addButton(param0: com.urbanairship.iam.ButtonInfo): com.urbanairship.iam.fullscreen.FullScreenDisplayContent.Builder;
						public setTemplate(param0: string): com.urbanairship.iam.fullscreen.FullScreenDisplayContent.Builder;
						public setButtonLayout(param0: string): com.urbanairship.iam.fullscreen.FullScreenDisplayContent.Builder;
						public setDismissButtonColor(param0: number): com.urbanairship.iam.fullscreen.FullScreenDisplayContent.Builder;
						public setMedia(param0: com.urbanairship.iam.MediaInfo): com.urbanairship.iam.fullscreen.FullScreenDisplayContent.Builder;
						public build(): com.urbanairship.iam.fullscreen.FullScreenDisplayContent;
						public setBody(param0: com.urbanairship.iam.TextInfo): com.urbanairship.iam.fullscreen.FullScreenDisplayContent.Builder;
						public setFooter(param0: com.urbanairship.iam.ButtonInfo): com.urbanairship.iam.fullscreen.FullScreenDisplayContent.Builder;
						public setHeading(param0: com.urbanairship.iam.TextInfo): com.urbanairship.iam.fullscreen.FullScreenDisplayContent.Builder;
						public setBackgroundColor(param0: number): com.urbanairship.iam.fullscreen.FullScreenDisplayContent.Builder;
						public setButtons(param0: java.util.List<com.urbanairship.iam.ButtonInfo>): com.urbanairship.iam.fullscreen.FullScreenDisplayContent.Builder;
					}
					export class Template {
						public static class: java.lang.Class<com.urbanairship.iam.fullscreen.FullScreenDisplayContent.Template>;
						/**
						 * Constructs a new instance of the com.urbanairship.iam.fullscreen.FullScreenDisplayContent$Template interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module html {
				export class HtmlActivity extends com.urbanairship.iam.InAppMessageActivity {
					public static class: java.lang.Class<com.urbanairship.iam.html.HtmlActivity>;
					public validateRequestPermissionsRequestCode(param0: number): void;
					public load(param0: number): void;
					public constructor();
					public onPause(): void;
					public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
					public getViewModelStore(): any;
					public onCreateMessage(param0: globalAndroid.os.Bundle): void;
					public load(): void;
					public onResume(): void;
					public getLifecycle(): any;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module html {
				export class HtmlAdapterFactory extends com.urbanairship.iam.InAppMessageAdapter.Factory {
					public static class: java.lang.Class<com.urbanairship.iam.html.HtmlAdapterFactory>;
					public constructor();
					public createAdapter(param0: com.urbanairship.iam.InAppMessage): com.urbanairship.iam.InAppMessageAdapter;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module html {
				export class HtmlDisplayAdapter extends com.urbanairship.iam.InAppMessageAdapter {
					public static class: java.lang.Class<com.urbanairship.iam.html.HtmlDisplayAdapter>;
					public constructor(param0: com.urbanairship.iam.InAppMessage);
					public onPrepare(param0: globalAndroid.content.Context): number;
					public onDisplay(param0: globalAndroid.app.Activity, param1: boolean, param2: com.urbanairship.iam.DisplayHandler): boolean;
					public isReady(param0: globalAndroid.app.Activity): boolean;
					public onFinish(): void;
					public static newAdapter(param0: com.urbanairship.iam.InAppMessage): com.urbanairship.iam.html.HtmlDisplayAdapter;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module html {
				export class HtmlDisplayContent extends com.urbanairship.iam.DisplayContent {
					public static class: java.lang.Class<com.urbanairship.iam.html.HtmlDisplayContent>;
					public equals(param0: any): boolean;
					public getBorderRadius(): number;
					public toString(): string;
					public static newBuilder(): com.urbanairship.iam.html.HtmlDisplayContent.Builder;
					public getUrl(): string;
					public getDismissButtonColor(): number;
					public getBackgroundColor(): number;
					public isFullscreenDisplayAllowed(): boolean;
					public static newBuilder(param0: com.urbanairship.iam.html.HtmlDisplayContent): com.urbanairship.iam.html.HtmlDisplayContent.Builder;
					public static parseJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.iam.html.HtmlDisplayContent;
					public hashCode(): number;
					public toJsonValue(): com.urbanairship.json.JsonValue;
				}
				export module HtmlDisplayContent {
					export class Builder {
						public static class: java.lang.Class<com.urbanairship.iam.html.HtmlDisplayContent.Builder>;
						public setAllowFullscreenDisplay(param0: boolean): com.urbanairship.iam.html.HtmlDisplayContent.Builder;
						public setUrl(param0: string): com.urbanairship.iam.html.HtmlDisplayContent.Builder;
						public setBorderRadius(param0: number): com.urbanairship.iam.html.HtmlDisplayContent.Builder;
						public setBackgroundColor(param0: number): com.urbanairship.iam.html.HtmlDisplayContent.Builder;
						public setDismissButtonColor(param0: number): com.urbanairship.iam.html.HtmlDisplayContent.Builder;
						public build(): com.urbanairship.iam.html.HtmlDisplayContent;
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module modal {
				export class ModalActivity extends com.urbanairship.iam.InAppMessageActivity implements com.urbanairship.iam.view.InAppButtonLayout.ButtonClickListener {
					public static class: java.lang.Class<com.urbanairship.iam.modal.ModalActivity>;
					public validateRequestPermissionsRequestCode(param0: number): void;
					public constructor();
					public normalizeTemplate(param0: com.urbanairship.iam.modal.ModalDisplayContent): string;
					public getTemplate(param0: string): number;
					public onPause(): void;
					public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
					public getViewModelStore(): any;
					public onCreateMessage(param0: globalAndroid.os.Bundle): void;
					public onButtonClicked(param0: globalAndroid.view.View, param1: com.urbanairship.iam.ButtonInfo): void;
					public onResume(): void;
					public getLifecycle(): any;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module modal {
				export class ModalAdapter extends com.urbanairship.iam.MediaDisplayAdapter {
					public static class: java.lang.Class<com.urbanairship.iam.modal.ModalAdapter>;
					public static newAdapter(param0: com.urbanairship.iam.InAppMessage): com.urbanairship.iam.modal.ModalAdapter;
					public onPrepare(param0: globalAndroid.content.Context): number;
					public onDisplay(param0: globalAndroid.app.Activity, param1: boolean, param2: com.urbanairship.iam.DisplayHandler): boolean;
					public isReady(param0: globalAndroid.app.Activity): boolean;
					public onFinish(): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module modal {
				export class ModalAdapterFactory extends com.urbanairship.iam.InAppMessageAdapter.Factory {
					public static class: java.lang.Class<com.urbanairship.iam.modal.ModalAdapterFactory>;
					public constructor();
					public createAdapter(param0: com.urbanairship.iam.InAppMessage): com.urbanairship.iam.InAppMessageAdapter;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module modal {
				export class ModalDisplayContent extends com.urbanairship.iam.DisplayContent {
					public static class: java.lang.Class<com.urbanairship.iam.modal.ModalDisplayContent>;
					public static TEMPLATE_HEADER_MEDIA_BODY: string;
					public static TEMPLATE_MEDIA_HEADER_BODY: string;
					public static TEMPLATE_HEADER_BODY_MEDIA: string;
					public static MAX_BUTTONS: number;
					public getMedia(): com.urbanairship.iam.MediaInfo;
					public isFullscreenDisplayAllowed(): boolean;
					public static newBuilder(param0: com.urbanairship.iam.modal.ModalDisplayContent): com.urbanairship.iam.modal.ModalDisplayContent.Builder;
					public getFooter(): com.urbanairship.iam.ButtonInfo;
					public static parseJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.iam.modal.ModalDisplayContent;
					public getBody(): com.urbanairship.iam.TextInfo;
					public toJsonValue(): com.urbanairship.json.JsonValue;
					public getBorderRadius(): number;
					public equals(param0: any): boolean;
					public toString(): string;
					public getDismissButtonColor(): number;
					public getButtons(): java.util.List<com.urbanairship.iam.ButtonInfo>;
					public getBackgroundColor(): number;
					public static newBuilder(): com.urbanairship.iam.modal.ModalDisplayContent.Builder;
					public getTemplate(): string;
					public getButtonLayout(): string;
					public hashCode(): number;
					public getHeading(): com.urbanairship.iam.TextInfo;
				}
				export module ModalDisplayContent {
					export class Builder {
						public static class: java.lang.Class<com.urbanairship.iam.modal.ModalDisplayContent.Builder>;
						public addButton(param0: com.urbanairship.iam.ButtonInfo): com.urbanairship.iam.modal.ModalDisplayContent.Builder;
						public setHeading(param0: com.urbanairship.iam.TextInfo): com.urbanairship.iam.modal.ModalDisplayContent.Builder;
						public build(): com.urbanairship.iam.modal.ModalDisplayContent;
						public setDismissButtonColor(param0: number): com.urbanairship.iam.modal.ModalDisplayContent.Builder;
						public setButtons(param0: java.util.List<com.urbanairship.iam.ButtonInfo>): com.urbanairship.iam.modal.ModalDisplayContent.Builder;
						public setAllowFullscreenDisplay(param0: boolean): com.urbanairship.iam.modal.ModalDisplayContent.Builder;
						public setBorderRadius(param0: number): com.urbanairship.iam.modal.ModalDisplayContent.Builder;
						public setTemplate(param0: string): com.urbanairship.iam.modal.ModalDisplayContent.Builder;
						public setBody(param0: com.urbanairship.iam.TextInfo): com.urbanairship.iam.modal.ModalDisplayContent.Builder;
						public setFooter(param0: com.urbanairship.iam.ButtonInfo): com.urbanairship.iam.modal.ModalDisplayContent.Builder;
						public setButtonLayout(param0: string): com.urbanairship.iam.modal.ModalDisplayContent.Builder;
						public setMedia(param0: com.urbanairship.iam.MediaInfo): com.urbanairship.iam.modal.ModalDisplayContent.Builder;
						public setBackgroundColor(param0: number): com.urbanairship.iam.modal.ModalDisplayContent.Builder;
					}
					export class Template {
						public static class: java.lang.Class<com.urbanairship.iam.modal.ModalDisplayContent.Template>;
						/**
						 * Constructs a new instance of the com.urbanairship.iam.modal.ModalDisplayContent$Template interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module tags {
				export class TagGroupHistorian {
					public static class: java.lang.Class<com.urbanairship.iam.tags.TagGroupHistorian>;
				}
				export module TagGroupHistorian {
					export class MutationRecord extends com.urbanairship.json.JsonSerializable {
						public static class: java.lang.Class<com.urbanairship.iam.tags.TagGroupHistorian.MutationRecord>;
						public toJsonValue(): com.urbanairship.json.JsonValue;
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module tags {
				export class TagGroupLookupApiClient {
					public static class: java.lang.Class<com.urbanairship.iam.tags.TagGroupLookupApiClient>;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module tags {
				export class TagGroupManager {
					public static class: java.lang.Class<com.urbanairship.iam.tags.TagGroupManager>;
					public static MIN_CACHE_MAX_AGE_TIME_MS: number;
					public static DEFAULT_CACHE_MAX_AGE_TIME_MS: number;
					public static DEFAULT_CACHE_STALE_READ_TIME_MS: number;
					public static DEFAULT_PREFER_LOCAL_DATA_TIME_MS: number;
					public setEnabled(param0: boolean): void;
					public setRequestTagsCallback(param0: com.urbanairship.iam.tags.TagGroupManager.RequestTagsCallback): void;
					public constructor(param0: com.urbanairship.AirshipConfigOptions, param1: com.urbanairship.push.PushManager, param2: com.urbanairship.push.TagGroupRegistrar, param3: com.urbanairship.PreferenceDataStore);
					public getPreferLocalTagDataTime(): number;
					public setCacheMaxAgeTime(param0: number, param1: java.util.concurrent.TimeUnit): void;
					public getCacheMaxAgeTimeMilliseconds(): number;
					public setCacheStaleReadTime(param0: number, param1: java.util.concurrent.TimeUnit): void;
					public isEnabled(): boolean;
					public setPreferLocalTagDataTime(param0: number, param1: java.util.concurrent.TimeUnit): void;
					public getTags(param0: java.util.Map<string,java.util.Set<string>>): com.urbanairship.iam.tags.TagGroupResult;
					public getCacheStaleReadTimeMilliseconds(): number;
				}
				export module TagGroupManager {
					export class RequestTagsCallback {
						public static class: java.lang.Class<com.urbanairship.iam.tags.TagGroupManager.RequestTagsCallback>;
						/**
						 * Constructs a new instance of the com.urbanairship.iam.tags.TagGroupManager$RequestTagsCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getTags(): java.util.Map<string,java.util.Set<string>>;
						});
						public constructor();
						public getTags(): java.util.Map<string,java.util.Set<string>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module tags {
				export class TagGroupResponse extends com.urbanairship.json.JsonSerializable {
					public static class: java.lang.Class<com.urbanairship.iam.tags.TagGroupResponse>;
					public equals(param0: any): boolean;
					public toString(): string;
					public hashCode(): number;
					public toJsonValue(): com.urbanairship.json.JsonValue;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module tags {
				export class TagGroupResult {
					public static class: java.lang.Class<com.urbanairship.iam.tags.TagGroupResult>;
					public success: boolean;
					public tagGroups: java.util.Map<string,java.util.Set<string>>;
					public constructor(param0: boolean, param1: java.util.Map<string,java.util.Set<string>>);
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module tags {
				export class TagGroupUtils {
					public static class: java.lang.Class<com.urbanairship.iam.tags.TagGroupUtils>;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module view {
				export class BackgroundDrawableBuilder {
					public static class: java.lang.Class<com.urbanairship.iam.view.BackgroundDrawableBuilder>;
					public setStrokeWidth(param0: number): com.urbanairship.iam.view.BackgroundDrawableBuilder;
					public setBorderRadius(param0: number, param1: number): com.urbanairship.iam.view.BackgroundDrawableBuilder;
					public setBackgroundColor(param0: number): com.urbanairship.iam.view.BackgroundDrawableBuilder;
					public setStrokeColor(param0: number): com.urbanairship.iam.view.BackgroundDrawableBuilder;
					public static newBuilder(param0: globalAndroid.content.Context): com.urbanairship.iam.view.BackgroundDrawableBuilder;
					public setPressedColor(param0: number): com.urbanairship.iam.view.BackgroundDrawableBuilder;
					public build(): globalAndroid.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module view {
				export abstract class BorderRadius {
					public static class: java.lang.Class<com.urbanairship.iam.view.BorderRadius>;
					public static TOP_LEFT: number;
					public static TOP_RIGHT: number;
					public static BOTTOM_RIGHT: number;
					public static BOTTOM_LEFT: number;
					public static ALL: number;
					public static LEFT: number;
					public static RIGHT: number;
					public static TOP: number;
					public static BOTTOM: number;
					public static applyBorderRadiusPadding(param0: globalAndroid.view.View, param1: number, param2: number): void;
					public constructor();
					public static createRadiiArray(param0: number, param1: number): native.Array<number>;
				}
				export module BorderRadius {
					export class BorderRadiusFlag {
						public static class: java.lang.Class<com.urbanairship.iam.view.BorderRadius.BorderRadiusFlag>;
						/**
						 * Constructs a new instance of the com.urbanairship.iam.view.BorderRadius$BorderRadiusFlag interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module view {
				export class BoundedFrameLayout {
					public static class: java.lang.Class<com.urbanairship.iam.view.BoundedFrameLayout>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onMeasure(param0: number, param1: number): void;
					public onDraw(param0: globalAndroid.graphics.Canvas): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public setClipPathBorderRadius(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module view {
				export class BoundedLinearLayout {
					public static class: java.lang.Class<com.urbanairship.iam.view.BoundedLinearLayout>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public onMeasure(param0: number, param1: number): void;
					public onDraw(param0: globalAndroid.graphics.Canvas): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public setClipPathBorderRadius(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module view {
				export class BoundedViewDelegate {
					public static class: java.lang.Class<com.urbanairship.iam.view.BoundedViewDelegate>;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module view {
				export class ClippableViewDelegate {
					public static class: java.lang.Class<com.urbanairship.iam.view.ClippableViewDelegate>;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module view {
				export class InAppButtonLayout extends com.urbanairship.iam.view.BoundedLinearLayout {
					public static class: java.lang.Class<com.urbanairship.iam.view.InAppButtonLayout>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public setButtons(param0: string, param1: java.util.List<com.urbanairship.iam.ButtonInfo>): void;
					public setButtonClickListener(param0: com.urbanairship.iam.view.InAppButtonLayout.ButtonClickListener): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				}
				export module InAppButtonLayout {
					export class ButtonClickListener {
						public static class: java.lang.Class<com.urbanairship.iam.view.InAppButtonLayout.ButtonClickListener>;
						/**
						 * Constructs a new instance of the com.urbanairship.iam.view.InAppButtonLayout$ButtonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onButtonClicked(param0: globalAndroid.view.View, param1: com.urbanairship.iam.ButtonInfo): void;
						});
						public constructor();
						public onButtonClicked(param0: globalAndroid.view.View, param1: com.urbanairship.iam.ButtonInfo): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module view {
				export class InAppViewUtils {
					public static class: java.lang.Class<com.urbanairship.iam.view.InAppViewUtils>;
					public static loadMediaInfo(param0: com.urbanairship.iam.view.MediaView, param1: com.urbanairship.iam.MediaInfo, param2: com.urbanairship.iam.InAppMessageCache): void;
					public constructor();
					public static applyButtonInfo(param0: globalAndroid.widget.Button, param1: com.urbanairship.iam.ButtonInfo, param2: number): void;
					public static applyTextInfo(param0: globalAndroid.widget.TextView, param1: com.urbanairship.iam.TextInfo): void;
				}
				export module InAppViewUtils {
					export class CenteredImageSpan {
						public static class: java.lang.Class<com.urbanairship.iam.view.InAppViewUtils.CenteredImageSpan>;
						public draw(param0: globalAndroid.graphics.Canvas, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: globalAndroid.graphics.Paint): void;
						public constructor(param0: globalAndroid.graphics.drawable.Drawable);
					}
					export class RemoveUnderlineSpan {
						public static class: java.lang.Class<com.urbanairship.iam.view.InAppViewUtils.RemoveUnderlineSpan>;
						public updateDrawState(param0: globalAndroid.text.TextPaint): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module iam {
			export module view {
				export class MediaView {
					public static class: java.lang.Class<com.urbanairship.iam.view.MediaView>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setMediaInfo(param0: com.urbanairship.iam.MediaInfo, param1: string): void;
					public setChromeClient(param0: globalAndroid.webkit.WebChromeClient): void;
					public onPause(): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public onResume(): void;
				}
				export module MediaView {
					export abstract class MediaWebViewClient {
						public static class: java.lang.Class<com.urbanairship.iam.view.MediaView.MediaWebViewClient>;
						public onPageFinished(param0: globalAndroid.webkit.WebView): void;
						public onReceivedError(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.WebResourceRequest, param2: globalAndroid.webkit.WebResourceError): void;
						public onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module job {
			export class AirshipService {
				public static class: java.lang.Class<com.urbanairship.job.AirshipService>;
				public static ACTION_RUN_JOB: string;
				public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
				public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
				public onCreate(): void;
				public static createIntent(param0: globalAndroid.content.Context, param1: com.urbanairship.job.JobInfo, param2: globalAndroid.os.Bundle): globalAndroid.content.Intent;
				public onDestroy(): void;
				public constructor();
			}
			export module AirshipService {
				export class IncomingHandler {
					public static class: java.lang.Class<com.urbanairship.job.AirshipService.IncomingHandler>;
					public handleMessage(param0: globalAndroid.os.Message): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module job {
			export class AlarmScheduler extends com.urbanairship.job.Scheduler {
				public static class: java.lang.Class<com.urbanairship.job.AlarmScheduler>;
				public reschedule(param0: globalAndroid.content.Context, param1: com.urbanairship.job.JobInfo, param2: number, param3: globalAndroid.os.Bundle): void;
				public schedule(param0: globalAndroid.content.Context, param1: com.urbanairship.job.JobInfo, param2: number): void;
				public cancel(param0: globalAndroid.content.Context, param1: number): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module job {
			export class AndroidJobScheduler extends com.urbanairship.job.Scheduler {
				public static class: java.lang.Class<com.urbanairship.job.AndroidJobScheduler>;
				public reschedule(param0: globalAndroid.content.Context, param1: com.urbanairship.job.JobInfo, param2: number, param3: globalAndroid.os.Bundle): void;
				public schedule(param0: globalAndroid.content.Context, param1: com.urbanairship.job.JobInfo, param2: number): void;
				public cancel(param0: globalAndroid.content.Context, param1: number): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module job {
			export class AndroidJobService {
				public static class: java.lang.Class<com.urbanairship.job.AndroidJobService>;
				public onStartJob(param0: any): boolean;
				public onStopJob(param0: any): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module job {
			export class Job {
				public static class: java.lang.Class<com.urbanairship.job.Job>;
				public run(): void;
			}
			export module Job {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.job.Job.Builder>;
				}
				export class Callback {
					public static class: java.lang.Class<com.urbanairship.job.Job.Callback>;
					/**
					 * Constructs a new instance of the com.urbanairship.job.Job$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onFinish(param0: com.urbanairship.job.Job, param1: number): void;
					});
					public constructor();
					public onFinish(param0: com.urbanairship.job.Job, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module job {
			export class JobDispatcher {
				public static class: java.lang.Class<com.urbanairship.job.JobDispatcher>;
				public dispatch(param0: com.urbanairship.job.JobInfo): void;
				public static shared(param0: globalAndroid.content.Context): com.urbanairship.job.JobDispatcher;
				public cancel(param0: number): void;
			}
			export module JobDispatcher {
				export class DefaultSchedulerFactory extends com.urbanairship.job.JobDispatcher.SchedulerFactory {
					public static class: java.lang.Class<com.urbanairship.job.JobDispatcher.DefaultSchedulerFactory>;
					public createScheduler(param0: globalAndroid.content.Context): com.urbanairship.job.Scheduler;
					public createFallbackScheduler(param0: globalAndroid.content.Context): com.urbanairship.job.Scheduler;
				}
				export class SchedulerFactory {
					public static class: java.lang.Class<com.urbanairship.job.JobDispatcher.SchedulerFactory>;
					/**
					 * Constructs a new instance of the com.urbanairship.job.JobDispatcher$SchedulerFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						createScheduler(param0: globalAndroid.content.Context): com.urbanairship.job.Scheduler;
						createFallbackScheduler(param0: globalAndroid.content.Context): com.urbanairship.job.Scheduler;
					});
					public constructor();
					public createScheduler(param0: globalAndroid.content.Context): com.urbanairship.job.Scheduler;
					public createFallbackScheduler(param0: globalAndroid.content.Context): com.urbanairship.job.Scheduler;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module job {
			export class JobInfo {
				public static class: java.lang.Class<com.urbanairship.job.JobInfo>;
				public static ANALYTICS_EVENT_UPLOAD: number;
				public static ANALYTICS_UPDATE_ADVERTISING_ID: number;
				public static NAMED_USER_UPDATE_ID: number;
				public static NAMED_USER_UPDATE_TAG_GROUPS: number;
				public static CHANNEL_UPDATE_PUSH_TOKEN: number;
				public static CHANNEL_UPDATE_REGISTRATION: number;
				public static CHANNEL_UPDATE_TAG_GROUPS: number;
				public static RICH_PUSH_UPDATE_USER: number;
				public static RICH_PUSH_UPDATE_MESSAGES: number;
				public static RICH_PUSH_SYNC_MESSAGE_STATE: number;
				public static REMOTE_DATA_REFRESH: number;
				public static JOB_FINISHED: number;
				public static JOB_RETRY: number;
				public getAirshipComponentName(): string;
				public toPersistableBundle(): globalAndroid.os.PersistableBundle;
				public getId(): number;
				public getExtras(): com.urbanairship.json.JsonMap;
				public toBundle(): globalAndroid.os.Bundle;
				public getAction(): string;
				public getInitialDelay(): number;
				public isNetworkAccessRequired(): boolean;
				public static newBuilder(): com.urbanairship.job.JobInfo.Builder;
				public isPersistent(): boolean;
				public static fromBundle(param0: globalAndroid.os.Bundle): com.urbanairship.job.JobInfo;
				public toString(): string;
			}
			export module JobInfo {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.job.JobInfo.Builder>;
					public setExtras(param0: com.urbanairship.json.JsonMap): com.urbanairship.job.JobInfo.Builder;
					public setAirshipComponent(param0: java.lang.Class<any>): com.urbanairship.job.JobInfo.Builder;
					public setAction(param0: string): com.urbanairship.job.JobInfo.Builder;
					public setInitialDelay(param0: number, param1: java.util.concurrent.TimeUnit): com.urbanairship.job.JobInfo.Builder;
					public setNetworkAccessRequired(param0: boolean): com.urbanairship.job.JobInfo.Builder;
					public build(): com.urbanairship.job.JobInfo;
					public setId(param0: number): com.urbanairship.job.JobInfo.Builder;
					public setPersistent(param0: boolean): com.urbanairship.job.JobInfo.Builder;
					public generateUniqueId(param0: globalAndroid.content.Context): com.urbanairship.job.JobInfo.Builder;
				}
				export class JobId {
					public static class: java.lang.Class<com.urbanairship.job.JobInfo.JobId>;
					/**
					 * Constructs a new instance of the com.urbanairship.job.JobInfo$JobId interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class JobResult {
					public static class: java.lang.Class<com.urbanairship.job.JobInfo.JobResult>;
					/**
					 * Constructs a new instance of the com.urbanairship.job.JobInfo$JobResult interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module job {
			export class Scheduler {
				public static class: java.lang.Class<com.urbanairship.job.Scheduler>;
				/**
				 * Constructs a new instance of the com.urbanairship.job.Scheduler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					cancel(param0: globalAndroid.content.Context, param1: number): void;
					schedule(param0: globalAndroid.content.Context, param1: com.urbanairship.job.JobInfo, param2: number): void;
					reschedule(param0: globalAndroid.content.Context, param1: com.urbanairship.job.JobInfo, param2: number, param3: globalAndroid.os.Bundle): void;
				});
				public constructor();
				public reschedule(param0: globalAndroid.content.Context, param1: com.urbanairship.job.JobInfo, param2: number, param3: globalAndroid.os.Bundle): void;
				public schedule(param0: globalAndroid.content.Context, param1: com.urbanairship.job.JobInfo, param2: number): void;
				public cancel(param0: globalAndroid.content.Context, param1: number): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module job {
			export class SchedulerException {
				public static class: java.lang.Class<com.urbanairship.job.SchedulerException>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module js {
			export class Whitelist {
				public static class: java.lang.Class<com.urbanairship.js.Whitelist>;
				public static SCOPE_JAVASCRIPT_INTERFACE: number;
				public static SCOPE_OPEN_URL: number;
				public static SCOPE_ALL: number;
				public isWhitelisted(param0: string): boolean;
				public addEntry(param0: string): boolean;
				public isWhitelisted(param0: string, param1: number): boolean;
				public setWhitelistCallback(param0: com.urbanairship.js.Whitelist.OnWhitelistCallback): void;
				public setOpenUrlWhitelistingEnabled(param0: boolean): void;
				public addEntry(param0: string, param1: number): boolean;
				public static createDefaultWhitelist(param0: com.urbanairship.AirshipConfigOptions): com.urbanairship.js.Whitelist;
				public constructor();
			}
			export module Whitelist {
				export class Entry {
					public static class: java.lang.Class<com.urbanairship.js.Whitelist.Entry>;
				}
				export class OnWhitelistCallback {
					public static class: java.lang.Class<com.urbanairship.js.Whitelist.OnWhitelistCallback>;
					/**
					 * Constructs a new instance of the com.urbanairship.js.Whitelist$OnWhitelistCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						acceptWhitelisting(param0: string, param1: number): boolean;
					});
					public constructor();
					public acceptWhitelisting(param0: string, param1: number): boolean;
				}
				export class Scope {
					public static class: java.lang.Class<com.urbanairship.js.Whitelist.Scope>;
					/**
					 * Constructs a new instance of the com.urbanairship.js.Whitelist$Scope interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export class UriPattern {
					public static class: java.lang.Class<com.urbanairship.js.Whitelist.UriPattern>;
					public equals(param0: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export class JsonException {
				public static class: java.lang.Class<com.urbanairship.json.JsonException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export class JsonList extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.json.JsonList>;
				public static EMPTY_LIST: com.urbanairship.json.JsonList;
				public iterator(): java.util.Iterator<com.urbanairship.json.JsonValue>;
				public getList(): java.util.List<com.urbanairship.json.JsonValue>;
				public constructor(param0: java.util.List<com.urbanairship.json.JsonValue>);
				public toString(): string;
				public indexOf(param0: com.urbanairship.json.JsonValue): number;
				public size(): number;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public lastIndexOf(param0: com.urbanairship.json.JsonValue): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public isEmpty(): boolean;
				public contains(param0: com.urbanairship.json.JsonValue): boolean;
				public get(param0: number): com.urbanairship.json.JsonValue;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export class JsonMap extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.json.JsonMap>;
				public static EMPTY_MAP: com.urbanairship.json.JsonMap;
				public keySet(): java.util.Set<string>;
				public containsKey(param0: string): boolean;
				public iterator(): java.util.Iterator<java.util.Map.Entry<string,com.urbanairship.json.JsonValue>>;
				public opt(param0: string): com.urbanairship.json.JsonValue;
				public toString(): string;
				public get(param0: string): com.urbanairship.json.JsonValue;
				public size(): number;
				public getMap(): java.util.Map<string,com.urbanairship.json.JsonValue>;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public entrySet(): java.util.Set<java.util.Map.Entry<string,com.urbanairship.json.JsonValue>>;
				public values(): java.util.Collection<com.urbanairship.json.JsonValue>;
				public constructor(param0: java.util.Map<string,com.urbanairship.json.JsonValue>);
				public hashCode(): number;
				public static newBuilder(): com.urbanairship.json.JsonMap.Builder;
				public equals(param0: any): boolean;
				public containsValue(param0: com.urbanairship.json.JsonValue): boolean;
				public isEmpty(): boolean;
			}
			export module JsonMap {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.json.JsonMap.Builder>;
					public put(param0: string, param1: string): com.urbanairship.json.JsonMap.Builder;
					public put(param0: string, param1: boolean): com.urbanairship.json.JsonMap.Builder;
					public put(param0: string, param1: com.urbanairship.json.JsonSerializable): com.urbanairship.json.JsonMap.Builder;
					public putOpt(param0: string, param1: any): com.urbanairship.json.JsonMap.Builder;
					public put(param0: string, param1: number): com.urbanairship.json.JsonMap.Builder;
					public build(): com.urbanairship.json.JsonMap;
					public putAll(param0: com.urbanairship.json.JsonMap): com.urbanairship.json.JsonMap.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export class JsonMatcher extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.json.JsonMatcher>;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public static parse(param0: com.urbanairship.json.JsonValue): com.urbanairship.json.JsonMatcher;
				public apply(param0: com.urbanairship.json.JsonSerializable): boolean;
				public hashCode(): number;
				public static newBuilder(): com.urbanairship.json.JsonMatcher.Builder;
				public equals(param0: any): boolean;
				public apply(param0: any): boolean;
			}
			export module JsonMatcher {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.json.JsonMatcher.Builder>;
					public setScope(param0: string): com.urbanairship.json.JsonMatcher.Builder;
					public setScope(param0: java.util.List<string>): com.urbanairship.json.JsonMatcher.Builder;
					public build(): com.urbanairship.json.JsonMatcher;
					public setKey(param0: string): com.urbanairship.json.JsonMatcher.Builder;
					public setValueMatcher(param0: com.urbanairship.json.ValueMatcher): com.urbanairship.json.JsonMatcher.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export class JsonPredicate extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.json.JsonPredicate>;
				public static OR_PREDICATE_TYPE: string;
				public static AND_PREDICATE_TYPE: string;
				public static NOT_PREDICATE_TYPE: string;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public apply(param0: com.urbanairship.json.JsonSerializable): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public apply(param0: any): boolean;
				public static newBuilder(): com.urbanairship.json.JsonPredicate.Builder;
				public static parse(param0: com.urbanairship.json.JsonValue): com.urbanairship.json.JsonPredicate;
			}
			export module JsonPredicate {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.json.JsonPredicate.Builder>;
					public setPredicateType(param0: string): com.urbanairship.json.JsonPredicate.Builder;
					public build(): com.urbanairship.json.JsonPredicate;
					public constructor();
					public addPredicate(param0: com.urbanairship.json.JsonPredicate): com.urbanairship.json.JsonPredicate.Builder;
					public addMatcher(param0: com.urbanairship.json.JsonMatcher): com.urbanairship.json.JsonPredicate.Builder;
				}
				export class PredicateType {
					public static class: java.lang.Class<com.urbanairship.json.JsonPredicate.PredicateType>;
					/**
					 * Constructs a new instance of the com.urbanairship.json.JsonPredicate$PredicateType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export class JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.json.JsonSerializable>;
				/**
				 * Constructs a new instance of the com.urbanairship.json.JsonSerializable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					toJsonValue(): com.urbanairship.json.JsonValue;
				});
				public constructor();
				public toJsonValue(): com.urbanairship.json.JsonValue;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export class JsonValue extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.json.JsonValue>;
				public static NULL: com.urbanairship.json.JsonValue;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.urbanairship.json.JsonValue>;
				public getNumber(): java.lang.Number;
				public getDouble(param0: number): number;
				public static wrap(param0: boolean): com.urbanairship.json.JsonValue;
				public isNumber(): boolean;
				public static wrap(param0: com.urbanairship.json.JsonSerializable): com.urbanairship.json.JsonValue;
				public isDouble(): boolean;
				public getValue(): any;
				public static wrap(param0: string): com.urbanairship.json.JsonValue;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public isLong(): boolean;
				public getBoolean(param0: boolean): boolean;
				public hashCode(): number;
				public getLong(param0: number): number;
				public equals(param0: any): boolean;
				public getString(param0: string): string;
				public static wrap(param0: any): com.urbanairship.json.JsonValue;
				public getInt(param0: number): number;
				public isBoolean(): boolean;
				public optMap(): com.urbanairship.json.JsonMap;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getString(): string;
				public isJsonMap(): boolean;
				public static wrapOpt(param0: any): com.urbanairship.json.JsonValue;
				public getMap(): com.urbanairship.json.JsonMap;
				public static wrap(param0: any, param1: com.urbanairship.json.JsonValue): com.urbanairship.json.JsonValue;
				public isInteger(): boolean;
				public static parseString(param0: string): com.urbanairship.json.JsonValue;
				public toString(): string;
				public isJsonList(): boolean;
				public optList(): com.urbanairship.json.JsonList;
				public getList(): com.urbanairship.json.JsonList;
				public isString(): boolean;
				public describeContents(): number;
				public isNull(): boolean;
				public static wrap(param0: number): com.urbanairship.json.JsonValue;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export abstract class ValueMatcher extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.json.ValueMatcher>;
				public static newArrayContainsMatcher(param0: com.urbanairship.json.JsonPredicate, param1: number): com.urbanairship.json.ValueMatcher;
				public apply(param0: com.urbanairship.json.JsonValue, param1: boolean): boolean;
				public static newArrayContainsMatcher(param0: com.urbanairship.json.JsonPredicate): com.urbanairship.json.ValueMatcher;
				public toString(): string;
				public constructor();
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public static newValueMatcher(param0: com.urbanairship.json.JsonValue): com.urbanairship.json.ValueMatcher;
				public static parse(param0: com.urbanairship.json.JsonValue): com.urbanairship.json.ValueMatcher;
				public apply(param0: com.urbanairship.json.JsonSerializable): boolean;
				public static newVersionMatcher(param0: string): com.urbanairship.json.ValueMatcher;
				public static newNumberRangeMatcher(param0: java.lang.Double, param1: java.lang.Double): com.urbanairship.json.ValueMatcher;
				public apply(param0: any): boolean;
				public static newIsPresentMatcher(): com.urbanairship.json.ValueMatcher;
				public static newIsAbsentMatcher(): com.urbanairship.json.ValueMatcher;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export module matchers {
				export class ArrayContainsMatcher extends com.urbanairship.json.ValueMatcher {
					public static class: java.lang.Class<com.urbanairship.json.matchers.ArrayContainsMatcher>;
					public static ARRAY_CONTAINS_KEY: string;
					public static INDEX_KEY: string;
					public equals(param0: any): boolean;
					public constructor();
					public apply(param0: com.urbanairship.json.JsonSerializable): boolean;
					public hashCode(): number;
					public apply(param0: any): boolean;
					public constructor(param0: com.urbanairship.json.JsonPredicate, param1: java.lang.Integer);
					public toJsonValue(): com.urbanairship.json.JsonValue;
					public apply(param0: com.urbanairship.json.JsonValue, param1: boolean): boolean;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export module matchers {
				export class ExactValueMatcher extends com.urbanairship.json.ValueMatcher {
					public static class: java.lang.Class<com.urbanairship.json.matchers.ExactValueMatcher>;
					public static EQUALS_VALUE_KEY: string;
					public equals(param0: any): boolean;
					public isEquals(param0: com.urbanairship.json.JsonValue, param1: com.urbanairship.json.JsonValue, param2: boolean): boolean;
					public constructor();
					public constructor(param0: com.urbanairship.json.JsonValue);
					public apply(param0: com.urbanairship.json.JsonSerializable): boolean;
					public hashCode(): number;
					public apply(param0: any): boolean;
					public toJsonValue(): com.urbanairship.json.JsonValue;
					public apply(param0: com.urbanairship.json.JsonValue, param1: boolean): boolean;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export module matchers {
				export class NumberRangeMatcher extends com.urbanairship.json.ValueMatcher {
					public static class: java.lang.Class<com.urbanairship.json.matchers.NumberRangeMatcher>;
					public static MIN_VALUE_KEY: string;
					public static MAX_VALUE_KEY: string;
					public equals(param0: any): boolean;
					public constructor();
					public constructor(param0: java.lang.Double, param1: java.lang.Double);
					public hashCode(): number;
					public apply(param0: com.urbanairship.json.JsonSerializable): boolean;
					public apply(param0: any): boolean;
					public apply(param0: com.urbanairship.json.JsonValue, param1: boolean): boolean;
					public toJsonValue(): com.urbanairship.json.JsonValue;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export module matchers {
				export class PresenceMatcher extends com.urbanairship.json.ValueMatcher {
					public static class: java.lang.Class<com.urbanairship.json.matchers.PresenceMatcher>;
					public static IS_PRESENT_VALUE_KEY: string;
					public equals(param0: any): boolean;
					public constructor(param0: boolean);
					public constructor();
					public apply(param0: com.urbanairship.json.JsonSerializable): boolean;
					public hashCode(): number;
					public apply(param0: any): boolean;
					public toJsonValue(): com.urbanairship.json.JsonValue;
					public apply(param0: com.urbanairship.json.JsonValue, param1: boolean): boolean;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module json {
			export module matchers {
				export class VersionMatcher extends com.urbanairship.json.ValueMatcher {
					public static class: java.lang.Class<com.urbanairship.json.matchers.VersionMatcher>;
					public static VERSION_KEY: string;
					public static ALTERNATE_VERSION_KEY: string;
					public equals(param0: any): boolean;
					public constructor();
					public constructor(param0: com.urbanairship.util.IvyVersionMatcher);
					public apply(param0: com.urbanairship.json.JsonSerializable): boolean;
					public hashCode(): number;
					public apply(param0: any): boolean;
					public toJsonValue(): com.urbanairship.json.JsonValue;
					public apply(param0: com.urbanairship.json.JsonValue, param1: boolean): boolean;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module location {
			export class CircularRegion {
				public static class: java.lang.Class<com.urbanairship.location.CircularRegion>;
				public static MAX_RADIUS: number;
				public getRadius(): number;
				public constructor(param0: number, param1: number, param2: number);
				public getLatitude(): number;
				public getLongitude(): number;
				public isValid(): boolean;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module location {
			export class FusedLocationAdapter extends com.urbanairship.location.LocationAdapter {
				public static class: java.lang.Class<com.urbanairship.location.FusedLocationAdapter>;
				public cancelLocationUpdates(param0: globalAndroid.content.Context, param1: globalAndroid.app.PendingIntent): void;
				public onSystemLocationProvidersChanged(param0: globalAndroid.content.Context, param1: com.urbanairship.location.LocationRequestOptions, param2: globalAndroid.app.PendingIntent): void;
				public constructor(param0: globalAndroid.content.Context);
				public getRequestCode(): number;
				public isAvailable(param0: globalAndroid.content.Context): boolean;
				public requestSingleLocation(param0: globalAndroid.content.Context, param1: com.urbanairship.location.LocationRequestOptions, param2: com.urbanairship.ResultCallback<globalAndroid.location.Location>): com.urbanairship.Cancelable;
				public requestLocationUpdates(param0: globalAndroid.content.Context, param1: com.urbanairship.location.LocationRequestOptions, param2: globalAndroid.app.PendingIntent): void;
			}
			export module FusedLocationAdapter {
				export class SingleLocationRequest extends com.urbanairship.CancelableOperation {
					public static class: java.lang.Class<com.urbanairship.location.FusedLocationAdapter.SingleLocationRequest>;
					public cancel(): boolean;
					public isDone(): boolean;
					public isCancelled(): boolean;
					public onRun(): void;
					public cancel(param0: boolean): boolean;
					public onCancel(): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module location {
			export class LocationAdapter {
				public static class: java.lang.Class<com.urbanairship.location.LocationAdapter>;
				/**
				 * Constructs a new instance of the com.urbanairship.location.LocationAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					requestSingleLocation(param0: globalAndroid.content.Context, param1: com.urbanairship.location.LocationRequestOptions, param2: com.urbanairship.ResultCallback<globalAndroid.location.Location>): com.urbanairship.Cancelable;
					cancelLocationUpdates(param0: globalAndroid.content.Context, param1: globalAndroid.app.PendingIntent): void;
					requestLocationUpdates(param0: globalAndroid.content.Context, param1: com.urbanairship.location.LocationRequestOptions, param2: globalAndroid.app.PendingIntent): void;
					isAvailable(param0: globalAndroid.content.Context): boolean;
					onSystemLocationProvidersChanged(param0: globalAndroid.content.Context, param1: com.urbanairship.location.LocationRequestOptions, param2: globalAndroid.app.PendingIntent): void;
					getRequestCode(): number;
				});
				public constructor();
				public cancelLocationUpdates(param0: globalAndroid.content.Context, param1: globalAndroid.app.PendingIntent): void;
				public onSystemLocationProvidersChanged(param0: globalAndroid.content.Context, param1: com.urbanairship.location.LocationRequestOptions, param2: globalAndroid.app.PendingIntent): void;
				public getRequestCode(): number;
				public isAvailable(param0: globalAndroid.content.Context): boolean;
				public requestSingleLocation(param0: globalAndroid.content.Context, param1: com.urbanairship.location.LocationRequestOptions, param2: com.urbanairship.ResultCallback<globalAndroid.location.Location>): com.urbanairship.Cancelable;
				public requestLocationUpdates(param0: globalAndroid.content.Context, param1: com.urbanairship.location.LocationRequestOptions, param2: globalAndroid.app.PendingIntent): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module location {
			export class LocationListener {
				public static class: java.lang.Class<com.urbanairship.location.LocationListener>;
				/**
				 * Constructs a new instance of the com.urbanairship.location.LocationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onLocationChanged(param0: globalAndroid.location.Location): void;
				});
				public constructor();
				public onLocationChanged(param0: globalAndroid.location.Location): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module location {
			export class LocationRequestOptions extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.location.LocationRequestOptions>;
				public static MIN_DISTANCE_KEY: string;
				public static MIN_TIME_KEY: string;
				public static PRIORITY_KEY: string;
				public static DEFAULT_UPDATE_INTERVAL_METERS: number;
				public static DEFAULT_UPDATE_INTERVAL_MILLISECONDS: number;
				public static DEFAULT_REQUEST_PRIORITY: number;
				public static PRIORITY_HIGH_ACCURACY: number;
				public static PRIORITY_BALANCED_POWER_ACCURACY: number;
				public static PRIORITY_LOW_POWER: number;
				public static PRIORITY_NO_POWER: number;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.urbanairship.location.LocationRequestOptions>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public static parseJson(param0: string): com.urbanairship.location.LocationRequestOptions;
				public static createDefaultOptions(): com.urbanairship.location.LocationRequestOptions;
				public getMinTime(): number;
				public getMinDistance(): number;
				public describeContents(): number;
				public equals(param0: any): boolean;
				public getPriority(): number;
				public toString(): string;
			}
			export module LocationRequestOptions {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.location.LocationRequestOptions.Builder>;
					public setPriority(param0: number): com.urbanairship.location.LocationRequestOptions.Builder;
					public create(): com.urbanairship.location.LocationRequestOptions;
					public constructor();
					public setMinTime(param0: number, param1: java.util.concurrent.TimeUnit): com.urbanairship.location.LocationRequestOptions.Builder;
					public setMinDistance(param0: number): com.urbanairship.location.LocationRequestOptions.Builder;
				}
				export class Priority {
					public static class: java.lang.Class<com.urbanairship.location.LocationRequestOptions.Priority>;
					/**
					 * Constructs a new instance of the com.urbanairship.location.LocationRequestOptions$Priority interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module location {
			export class LocationService {
				public static class: java.lang.Class<com.urbanairship.location.LocationService>;
				public onHandleIntent(param0: globalAndroid.content.Intent): void;
				public onCreate(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module location {
			export class ProximityRegion {
				public static class: java.lang.Class<com.urbanairship.location.ProximityRegion>;
				public setCoordinates(param0: java.lang.Double, param1: java.lang.Double): void;
				public getProximityId(): string;
				public getLatitude(): java.lang.Double;
				public setRssi(param0: java.lang.Integer): void;
				public constructor(param0: string, param1: number, param2: number);
				public getMinor(): number;
				public getLongitude(): java.lang.Double;
				public isValid(): boolean;
				public getMajor(): number;
				public getRssi(): java.lang.Integer;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module location {
			export class RegionEvent extends com.urbanairship.analytics.Event implements com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.location.RegionEvent>;
				public static TYPE: string;
				public static REGION_ID: string;
				public static BOUNDARY_EVENT_ENTER: number;
				public static BOUNDARY_EVENT_EXIT: number;
				public static MAX_CHARACTER_LENGTH: number;
				public static MAX_LATITUDE: number;
				public static MIN_LATITUDE: number;
				public static MAX_LONGITUDE: number;
				public static MIN_LONGITUDE: number;
				public setProximityRegion(param0: com.urbanairship.location.ProximityRegion): void;
				public getType(): string;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public constructor(param0: string, param1: string, param2: number);
				public getBoundaryEvent(): number;
				public getEventData(): com.urbanairship.json.JsonMap;
				public constructor(param0: number);
				public getPriority(): number;
				public isValid(): boolean;
				public setCircularRegion(param0: com.urbanairship.location.CircularRegion): void;
				public constructor();
			}
			export module RegionEvent {
				export class Boundary {
					public static class: java.lang.Class<com.urbanairship.location.RegionEvent.Boundary>;
					/**
					 * Constructs a new instance of the com.urbanairship.location.RegionEvent$Boundary interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module location {
			export class StandardLocationAdapter extends com.urbanairship.location.LocationAdapter {
				public static class: java.lang.Class<com.urbanairship.location.StandardLocationAdapter>;
				public cancelLocationUpdates(param0: globalAndroid.content.Context, param1: globalAndroid.app.PendingIntent): void;
				public onSystemLocationProvidersChanged(param0: globalAndroid.content.Context, param1: com.urbanairship.location.LocationRequestOptions, param2: globalAndroid.app.PendingIntent): void;
				public getRequestCode(): number;
				public isAvailable(param0: globalAndroid.content.Context): boolean;
				public requestLocationUpdates(param0: globalAndroid.content.Context, param1: com.urbanairship.location.LocationRequestOptions, param2: globalAndroid.app.PendingIntent): void;
				public requestSingleLocation(param0: globalAndroid.content.Context, param1: com.urbanairship.location.LocationRequestOptions, param2: com.urbanairship.ResultCallback<globalAndroid.location.Location>): com.urbanairship.Cancelable;
			}
			export module StandardLocationAdapter {
				export class AndroidLocationListener {
					public static class: java.lang.Class<com.urbanairship.location.StandardLocationAdapter.AndroidLocationListener>;
					public onProviderDisabled(param0: string): void;
					public onStatusChanged(param0: string, param1: number, param2: globalAndroid.os.Bundle): void;
					public onProviderEnabled(param0: string): void;
					public onLocationChanged(param0: globalAndroid.location.Location): void;
				}
				export class SingleLocationRequest extends com.urbanairship.CancelableOperation {
					public static class: java.lang.Class<com.urbanairship.location.StandardLocationAdapter.SingleLocationRequest>;
					public cancel(): boolean;
					public isDone(): boolean;
					public isCancelled(): boolean;
					public onRun(): void;
					public cancel(param0: boolean): boolean;
					public onCancel(): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module location {
			export class UALocationManager extends com.urbanairship.AirshipComponent {
				public static class: java.lang.Class<com.urbanairship.location.UALocationManager>;
				public onComponentEnableChange(param0: boolean): void;
				public isLocationUpdatesEnabled(): boolean;
				public setBackgroundLocationAllowed(param0: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.ActivityMonitor);
				public init(): void;
				public tearDown(): void;
				public isOptIn(): boolean;
				public setLocationUpdatesEnabled(param0: boolean): void;
				public addLocationListener(param0: com.urbanairship.location.LocationListener): void;
				public isBackgroundLocationAllowed(): boolean;
				public removeLocationListener(param0: com.urbanairship.location.LocationListener): void;
				public requestSingleLocation(param0: com.urbanairship.location.LocationRequestOptions): com.urbanairship.PendingResult<globalAndroid.location.Location>;
				public requestSingleLocation(): com.urbanairship.PendingResult<globalAndroid.location.Location>;
				public constructor(param0: com.urbanairship.PreferenceDataStore);
				public setLocationRequestOptions(param0: com.urbanairship.location.LocationRequestOptions): void;
				public getLocationRequestOptions(): com.urbanairship.location.LocationRequestOptions;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module location {
			export class UALocationProvider {
				public static class: java.lang.Class<com.urbanairship.location.UALocationProvider>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module messagecenter {
			export class AppCompatDelegateWrapper {
				public static class: java.lang.Class<com.urbanairship.messagecenter.AppCompatDelegateWrapper>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module messagecenter {
			export class DefaultMultiChoiceModeListener {
				public static class: java.lang.Class<com.urbanairship.messagecenter.DefaultMultiChoiceModeListener>;
				public onCreateActionMode(param0: globalAndroid.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
				public onItemCheckedStateChanged(param0: globalAndroid.view.ActionMode, param1: number, param2: number, param3: boolean): void;
				public onActionItemClicked(param0: globalAndroid.view.ActionMode, param1: globalAndroid.view.MenuItem): boolean;
				public constructor(param0: com.urbanairship.messagecenter.MessageListFragment);
				public onDestroyActionMode(param0: globalAndroid.view.ActionMode): void;
				public onPrepareActionMode(param0: globalAndroid.view.ActionMode, param1: globalAndroid.view.Menu): boolean;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module messagecenter {
			export class ImageLoader {
				public static class: java.lang.Class<com.urbanairship.messagecenter.ImageLoader>;
				public cancelRequest(param0: globalAndroid.widget.ImageView): void;
				public load(param0: string, param1: number, param2: globalAndroid.widget.ImageView): void;
				public static shared(param0: globalAndroid.content.Context): com.urbanairship.messagecenter.ImageLoader;
			}
			export module ImageLoader {
				export class BitmapAsyncTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,globalAndroid.graphics.drawable.BitmapDrawable> {
					public static class: java.lang.Class<com.urbanairship.messagecenter.ImageLoader.BitmapAsyncTask>;
					public doInBackground(param0: native.Array<java.lang.Void>): globalAndroid.graphics.drawable.BitmapDrawable;
					public onPostExecute(param0: globalAndroid.graphics.drawable.BitmapDrawable): void;
				}
				export abstract class Request {
					public static class: java.lang.Class<com.urbanairship.messagecenter.ImageLoader.Request>;
					public onPreDraw(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module messagecenter {
			export class MessageActivity extends com.urbanairship.messagecenter.ThemedActivity {
				public static class: java.lang.Class<com.urbanairship.messagecenter.MessageActivity>;
				public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				public getViewModelStore(): any;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
				public validateRequestPermissionsRequestCode(param0: number): void;
				public onStart(): void;
				public onNewIntent(param0: globalAndroid.content.Intent): void;
				public getLifecycle(): any;
				public onStop(): void;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module messagecenter {
			export class MessageCenter extends com.urbanairship.AirshipComponent {
				public static class: java.lang.Class<com.urbanairship.messagecenter.MessageCenter>;
				public getPredicate(): com.urbanairship.richpush.RichPushInbox.Predicate;
				public setPredicate(param0: com.urbanairship.richpush.RichPushInbox.Predicate): void;
				public constructor(param0: com.urbanairship.PreferenceDataStore);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module messagecenter {
			export class MessageCenterActivity extends com.urbanairship.messagecenter.ThemedActivity {
				public static class: java.lang.Class<com.urbanairship.messagecenter.MessageCenterActivity>;
				public onOptionsItemSelected(param0: globalAndroid.view.MenuItem): boolean;
				public getViewModelStore(): any;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
				public validateRequestPermissionsRequestCode(param0: number): void;
				public onNewIntent(param0: globalAndroid.content.Intent): void;
				public getLifecycle(): any;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module messagecenter {
			export class MessageCenterFragment extends globalAndroid.support.v4.app.Fragment {
				public static class: java.lang.Class<com.urbanairship.messagecenter.MessageCenterFragment>;
				public static newInstance(param0: string): com.urbanairship.messagecenter.MessageCenterFragment;
				public getViewModelStore(): any;
				public onResume(): void;
				public setMessageID(param0: string): void;
				public onPause(): void;
				public getLifecycle(): any;
				public setPredicate(param0: com.urbanairship.richpush.RichPushInbox.Predicate): void;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
				public constructor();
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public showMessage(param0: string): void;
				public configureMessageListFragment(param0: com.urbanairship.messagecenter.MessageListFragment): void;
				public onDestroyView(): void;
				public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
			}
			export module MessageCenterFragment {
				export class NoMessageSelectedFragment extends globalAndroid.support.v4.app.Fragment {
					public static class: java.lang.Class<com.urbanairship.messagecenter.MessageCenterFragment.NoMessageSelectedFragment>;
					public constructor();
					public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
					public getViewModelStore(): any;
					public getLifecycle(): any;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module messagecenter {
			export class MessageFragment extends globalAndroid.support.v4.app.Fragment {
				public static class: java.lang.Class<com.urbanairship.messagecenter.MessageFragment>;
				public static ERROR_FETCHING_MESSAGES: number;
				public static ERROR_DISPLAYING_MESSAGE: number;
				public static ERROR_MESSAGE_UNAVAILABLE: number;
				public getViewModelStore(): any;
				public onResume(): void;
				public onPause(): void;
				public showErrorPage(): void;
				public getLifecycle(): any;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public static newInstance(param0: string): com.urbanairship.messagecenter.MessageFragment;
				public getMessageId(): string;
				public showErrorPage(param0: number): void;
				public constructor();
				public showProgress(): void;
				public showMessage(): void;
				public onStart(): void;
				public retry(): void;
				public onStop(): void;
				public onDestroyView(): void;
				public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module messagecenter {
			export class MessageItemView {
				public static class: java.lang.Class<com.urbanairship.messagecenter.MessageItemView>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onCreateDrawableState(param0: number): native.Array<number>;
				public setActivated(param0: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module messagecenter {
			export class MessageListFragment extends globalAndroid.support.v4.app.Fragment {
				public static class: java.lang.Class<com.urbanairship.messagecenter.MessageListFragment>;
				public getViewModelStore(): any;
				public onResume(): void;
				public getAdapter(): com.urbanairship.messagecenter.MessageViewAdapter;
				public onPause(): void;
				public getLifecycle(): any;
				public createMessageViewAdapter(): com.urbanairship.messagecenter.MessageViewAdapter;
				public onCreateView(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: globalAndroid.os.Bundle): globalAndroid.view.View;
				public getAbsListView(): globalAndroid.widget.AbsListView;
				public constructor();
				public getMessage(param0: number): com.urbanairship.richpush.RichPushMessage;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onDestroy(): void;
				public getAbsListViewAsync(param0: com.urbanairship.messagecenter.MessageListFragment.OnListViewReadyCallback): void;
				public onDestroyView(): void;
				public onViewCreated(param0: globalAndroid.view.View, param1: globalAndroid.os.Bundle): void;
			}
			export module MessageListFragment {
				export class OnListViewReadyCallback {
					public static class: java.lang.Class<com.urbanairship.messagecenter.MessageListFragment.OnListViewReadyCallback>;
					/**
					 * Constructs a new instance of the com.urbanairship.messagecenter.MessageListFragment$OnListViewReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onListViewReady(param0: globalAndroid.widget.AbsListView): void;
					});
					public constructor();
					public onListViewReady(param0: globalAndroid.widget.AbsListView): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module messagecenter {
			export abstract class MessageViewAdapter {
				public static class: java.lang.Class<com.urbanairship.messagecenter.MessageViewAdapter>;
				public set(param0: java.util.Collection<com.urbanairship.richpush.RichPushMessage>): void;
				public hasStableIds(): boolean;
				public getContext(): globalAndroid.content.Context;
				public getItemId(param0: number): number;
				public bindView(param0: globalAndroid.view.View, param1: com.urbanairship.richpush.RichPushMessage, param2: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: number);
				public getCount(): number;
				public getItem(param0: number): any;
				public getView(param0: number, param1: globalAndroid.view.View, param2: globalAndroid.view.ViewGroup): globalAndroid.view.View;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module messagecenter {
			export abstract class ThemedActivity extends globalAndroid.support.v4.app.FragmentActivity {
				public static class: java.lang.Class<com.urbanairship.messagecenter.ThemedActivity>;
				public getViewModelStore(): any;
				public onPostCreate(param0: globalAndroid.os.Bundle): void;
				public getLifecycle(): any;
				public setContentView(param0: number): void;
				public supportInvalidateOptionsMenu(): void;
				public getMenuInflater(): globalAndroid.view.MenuInflater;
				public setContentView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public constructor();
				public setContentView(param0: globalAndroid.view.View): void;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
				public validateRequestPermissionsRequestCode(param0: number): void;
				public onPostResume(): void;
				public onTitleChanged(param0: string, param1: number): void;
				public addContentView(param0: globalAndroid.view.View, param1: globalAndroid.view.ViewGroup.LayoutParams): void;
				public hideActionBar(): void;
				public onStop(): void;
				public onDestroy(): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public setDisplayHomeAsUpEnabled(param0: boolean): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module preference {
			export class AnalyticsEnablePreference extends com.urbanairship.preference.UACheckBoxPreference {
				public static class: java.lang.Class<com.urbanairship.preference.AnalyticsEnablePreference>;
				public onApplyAirshipPreference(param0: com.urbanairship.UAirship, param1: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getContentDescription(): string;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getInitialAirshipValue(param0: com.urbanairship.UAirship): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module preference {
			export class ChannelIdPreference {
				public static class: java.lang.Class<com.urbanairship.preference.ChannelIdPreference>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onAttachedToActivity(): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public onCreateView(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module preference {
			export class LocationBackgroundUpdatesAllowedPreference extends com.urbanairship.preference.UACheckBoxPreference {
				public static class: java.lang.Class<com.urbanairship.preference.LocationBackgroundUpdatesAllowedPreference>;
				public onApplyAirshipPreference(param0: com.urbanairship.UAirship, param1: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getContentDescription(): string;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getInitialAirshipValue(param0: com.urbanairship.UAirship): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module preference {
			export class LocationUpdatesEnabledPreference extends com.urbanairship.preference.UACheckBoxPreference {
				public static class: java.lang.Class<com.urbanairship.preference.LocationUpdatesEnabledPreference>;
				public setChecked(param0: boolean): void;
				public onApplyAirshipPreference(param0: com.urbanairship.UAirship, param1: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getContentDescription(): string;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getInitialAirshipValue(param0: com.urbanairship.UAirship): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			}
			export module LocationUpdatesEnabledPreference {
				export class RequestPermissionsTask extends globalAndroid.os.AsyncTask<native.Array<string>,java.lang.Void,java.lang.Boolean> {
					public static class: java.lang.Class<com.urbanairship.preference.LocationUpdatesEnabledPreference.RequestPermissionsTask>;
					public doInBackground(param0: native.Array<native.Array<string>>): java.lang.Boolean;
					public onPostExecute(param0: java.lang.Boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module preference {
			export class PushEnablePreference extends com.urbanairship.preference.UACheckBoxPreference {
				public static class: java.lang.Class<com.urbanairship.preference.PushEnablePreference>;
				public onApplyAirshipPreference(param0: com.urbanairship.UAirship, param1: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getContentDescription(): string;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getInitialAirshipValue(param0: com.urbanairship.UAirship): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module preference {
			export class QuietTimeEnablePreference extends com.urbanairship.preference.UACheckBoxPreference {
				public static class: java.lang.Class<com.urbanairship.preference.QuietTimeEnablePreference>;
				public onApplyAirshipPreference(param0: com.urbanairship.UAirship, param1: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getContentDescription(): string;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getInitialAirshipValue(param0: com.urbanairship.UAirship): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module preference {
			export class QuietTimeEndPreference extends com.urbanairship.preference.QuietTimePickerPreference {
				public static class: java.lang.Class<com.urbanairship.preference.QuietTimeEndPreference>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onApplyAirshipPreference(param0: com.urbanairship.UAirship, param1: number): void;
				public getContentDescription(): string;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getInitialAirshipValue(param0: com.urbanairship.UAirship): number;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module preference {
			export abstract class QuietTimePickerPreference {
				public static class: java.lang.Class<com.urbanairship.preference.QuietTimePickerPreference>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onApplyAirshipPreference(param0: com.urbanairship.UAirship, param1: number): void;
				public onDialogClosed(param0: boolean): void;
				public getContentDescription(): string;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public onCreateDialogView(): globalAndroid.view.View;
				public shouldPersist(): boolean;
				public getSummary(): string;
				public getInitialAirshipValue(param0: com.urbanairship.UAirship): number;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public onCreateView(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module preference {
			export class QuietTimeStartPreference extends com.urbanairship.preference.QuietTimePickerPreference {
				public static class: java.lang.Class<com.urbanairship.preference.QuietTimeStartPreference>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public onApplyAirshipPreference(param0: com.urbanairship.UAirship, param1: number): void;
				public getContentDescription(): string;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getInitialAirshipValue(param0: com.urbanairship.UAirship): number;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module preference {
			export class SoundEnablePreference extends com.urbanairship.preference.UACheckBoxPreference {
				public static class: java.lang.Class<com.urbanairship.preference.SoundEnablePreference>;
				public onApplyAirshipPreference(param0: com.urbanairship.UAirship, param1: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getContentDescription(): string;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getInitialAirshipValue(param0: com.urbanairship.UAirship): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module preference {
			export abstract class UACheckBoxPreference {
				public static class: java.lang.Class<com.urbanairship.preference.UACheckBoxPreference>;
				public isChecked: boolean;
				public setChecked(param0: boolean): void;
				public onApplyAirshipPreference(param0: com.urbanairship.UAirship, param1: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getContentDescription(): string;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getInitialAirshipValue(param0: com.urbanairship.UAirship): boolean;
				public shouldPersist(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public onCreateView(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module preference {
			export class UserIdPreference {
				public static class: java.lang.Class<com.urbanairship.preference.UserIdPreference>;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public onCreateView(param0: globalAndroid.view.ViewGroup): globalAndroid.view.View;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module preference {
			export class VibrateEnablePreference extends com.urbanairship.preference.UACheckBoxPreference {
				public static class: java.lang.Class<com.urbanairship.preference.VibrateEnablePreference>;
				public onApplyAirshipPreference(param0: com.urbanairship.UAirship, param1: boolean): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public getContentDescription(): string;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public getInitialAirshipValue(param0: com.urbanairship.UAirship): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class ActionButtonGroupsParser {
				public static class: java.lang.Class<com.urbanairship.push.ActionButtonGroupsParser>;
				public static fromXml(param0: globalAndroid.content.Context, param1: number): java.util.Map<string,com.urbanairship.push.notifications.NotificationActionButtonGroup>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export abstract class BaseApiClient {
				public static class: java.lang.Class<com.urbanairship.push.BaseApiClient>;
				public getDeviceUrl(param0: string): java.net.URL;
				public getPlatform(): number;
				public performRequest(param0: java.net.URL, param1: string, param2: string): com.urbanairship.http.Response;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class ChannelApiClient extends com.urbanairship.push.BaseApiClient {
				public static class: java.lang.Class<com.urbanairship.push.ChannelApiClient>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class ChannelRegistrationPayload extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.push.ChannelRegistrationPayload>;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public toString(): string;
			}
			export module ChannelRegistrationPayload {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.push.ChannelRegistrationPayload.Builder>;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class IncomingPushRunnable {
				public static class: java.lang.Class<com.urbanairship.push.IncomingPushRunnable>;
				public run(): void;
			}
			export module IncomingPushRunnable {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.push.IncomingPushRunnable.Builder>;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class NamedUser extends com.urbanairship.AirshipComponent {
				public static class: java.lang.Class<com.urbanairship.push.NamedUser>;
				public getId(): string;
				public setId(param0: string): void;
				public forceUpdate(): void;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.push.TagGroupRegistrar);
				public onPerformJob(param0: com.urbanairship.UAirship, param1: com.urbanairship.job.JobInfo): number;
				public constructor(param0: com.urbanairship.PreferenceDataStore);
				public editTagGroups(): com.urbanairship.push.TagGroupsEditor;
				public init(): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class NamedUserApiClient extends com.urbanairship.push.BaseApiClient {
				public static class: java.lang.Class<com.urbanairship.push.NamedUserApiClient>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class NamedUserJobHandler {
				public static class: java.lang.Class<com.urbanairship.push.NamedUserJobHandler>;
				public performJob(param0: com.urbanairship.job.JobInfo): number;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class PendingTagGroupMutationStore {
				public static class: java.lang.Class<com.urbanairship.push.PendingTagGroupMutationStore>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class PushManager extends com.urbanairship.AirshipComponent {
				public static class: java.lang.Class<com.urbanairship.push.PushManager>;
				public static ACTION_PUSH_RECEIVED: string;
				public static ACTION_NOTIFICATION_OPENED: string;
				public static ACTION_NOTIFICATION_DISMISSED: string;
				public static ACTION_CHANNEL_UPDATED: string;
				public static EXTRA_NOTIFICATION_ID: string;
				public static EXTRA_PUSH_MESSAGE_BUNDLE: string;
				public static EXTRA_NOTIFICATION_BUTTON_ID: string;
				public static EXTRA_NOTIFICATION_BUTTON_FOREGROUND: string;
				public static EXTRA_ERROR: string;
				public static EXTRA_CHANNEL_ID: string;
				public static EXTRA_CHANNEL_CREATE_REQUEST: string;
				public static ACTION_NOTIFICATION_OPENED_PROXY: string;
				public static ACTION_NOTIFICATION_BUTTON_OPENED_PROXY: string;
				public static ACTION_NOTIFICATION_DISMISSED_PROXY: string;
				public static EXTRA_NOTIFICATION_CONTENT_INTENT: string;
				public static EXTRA_NOTIFICATION_DELETE_INTENT: string;
				public static EXTRA_NOTIFICATION_ACTION_BUTTON_DESCRIPTION: string;
				public static EXTRA_NOTIFICATION_BUTTON_ACTIONS_PAYLOAD: string;
				public getNotificationActionGroup(param0: string): com.urbanairship.push.notifications.NotificationActionButtonGroup;
				public onComponentEnableChange(param0: boolean): void;
				public getRegistrationToken(): string;
				public setTags(param0: java.util.Set<string>): void;
				public setPushTokenRegistrationEnabled(param0: boolean): void;
				public addNotificationActionButtonGroups(param0: globalAndroid.content.Context, param1: number): void;
				public setAlias(param0: string): void;
				public editTags(): com.urbanairship.push.TagEditor;
				public getChannelId(): string;
				public updateRegistration(): void;
				public getTags(): java.util.Set<string>;
				public init(): void;
				public getChannelTagRegistrationEnabled(): boolean;
				public isQuietTimeEnabled(): boolean;
				public setQuietTimeInterval(param0: java.util.Date, param1: java.util.Date): void;
				public isPushAvailable(): boolean;
				public isSoundEnabled(): boolean;
				public setPushEnabled(param0: boolean): void;
				public getNotificationFactory(): com.urbanairship.push.notifications.NotificationFactory;
				public constructor(param0: com.urbanairship.PreferenceDataStore);
				public getJobExecutor(param0: com.urbanairship.job.JobInfo): java.util.concurrent.Executor;
				public setChannelTagRegistrationEnabled(param0: boolean): void;
				public getAlias(): string;
				public isPushEnabled(): boolean;
				public getUserNotificationsEnabled(): boolean;
				public setAliasAndTags(param0: string, param1: java.util.Set<string>): void;
				public setUserNotificationsEnabled(param0: boolean): void;
				public removeNotificationActionButtonGroup(param0: string): void;
				public isInQuietTime(): boolean;
				public onPerformJob(param0: com.urbanairship.UAirship, param1: com.urbanairship.job.JobInfo): number;
				public setSoundEnabled(param0: boolean): void;
				public isVibrateEnabled(): boolean;
				public getLastReceivedMetadata(): string;
				public setQuietTimeEnabled(param0: boolean): void;
				public addNotificationActionButtonGroup(param0: string, param1: com.urbanairship.push.notifications.NotificationActionButtonGroup): void;
				public isOptIn(): boolean;
				public setVibrateEnabled(param0: boolean): void;
				public getQuietTimeInterval(): native.Array<java.util.Date>;
				public areNotificationsOptedIn(): boolean;
				public enableChannelCreation(): void;
				public setNotificationFactory(param0: com.urbanairship.push.notifications.NotificationFactory): void;
				public getPushTokenRegistrationEnabled(): boolean;
				public editTagGroups(): com.urbanairship.push.TagGroupsEditor;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.AirshipConfigOptions, param3: com.urbanairship.push.PushProvider, param4: com.urbanairship.push.TagGroupRegistrar);
			}
			export module PushManager {
				export class QuietTime {
					public static class: java.lang.Class<com.urbanairship.push.PushManager.QuietTime>;
					public static START_HOUR_KEY: string;
					public static START_MIN_KEY: string;
					public static END_HOUR_KEY: string;
					public static END_MIN_KEY: string;
					public static NOT_SET_VAL: number;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class PushManagerJobHandler {
				public static class: java.lang.Class<com.urbanairship.push.PushManagerJobHandler>;
				public performJob(param0: com.urbanairship.job.JobInfo): number;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class PushMessage extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.push.PushMessage>;
				public static EXTRA_RICH_PUSH_ID: string;
				public static EXTRA_ALERT: string;
				public static EXTRA_SEND_ID: string;
				public static EXTRA_METADATA: string;
				public static EXTRA_ACTIONS: string;
				public static EXTRA_INTERACTIVE_ACTIONS: string;
				public static EXTRA_INTERACTIVE_TYPE: string;
				public static EXTRA_TITLE: string;
				public static EXTRA_SUMMARY: string;
				public static EXTRA_WEARABLE: string;
				public static EXTRA_STYLE: string;
				public static EXTRA_LOCAL_ONLY: string;
				public static EXTRA_ICON_COLOR: string;
				public static EXTRA_ICON: string;
				public static EXTRA_PRIORITY: string;
				public static EXTRA_SOUND: string;
				public static EXTRA_VISIBILITY: string;
				public static EXTRA_PUBLIC_NOTIFICATION: string;
				public static EXTRA_CATEGORY: string;
				public static EXTRA_PUSH_ID: string;
				public static EXTRA_EXPIRATION: string;
				public static EXTRA_IN_APP_MESSAGE: string;
				public static EXTRA_NOTIFICATION_TAG: string;
				public static EXTRA_NOTIFICATION_CHANNEL: string;
				public static EXTRA_DELIVERY_PRIORITY: string;
				public static PRIORITY_HIGH: string;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.urbanairship.push.PushMessage>;
				public containsKey(param0: string): boolean;
				public getPublicNotificationPayload(): string;
				public getInteractiveNotificationType(): string;
				public getSound(param0: globalAndroid.content.Context): globalAndroid.net.Uri;
				public getWearablePayload(): string;
				public isLocalOnly(): boolean;
				public getCategory(): string;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public static fromJsonValue(param0: com.urbanairship.json.JsonValue): com.urbanairship.push.PushMessage;
				public getIconColor(param0: number): number;
				public getCanonicalPushId(): string;
				public hashCode(): number;
				public getNotificationChannel(): string;
				public equals(param0: any): boolean;
				public getAlert(): string;
				public getMetadata(): string;
				public getSummary(): string;
				public getActions(): java.util.Map<string,com.urbanairship.actions.ActionValue>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getIcon(param0: globalAndroid.content.Context, param1: number): number;
				public getNotificationTag(): string;
				public getPriority(): number;
				public constructor(param0: globalAndroid.os.Bundle);
				public toString(): string;
				public getTitle(): string;
				public getPushBundle(): globalAndroid.os.Bundle;
				public getInteractiveActionsPayload(): string;
				public constructor(param0: java.util.Map<string,string>);
				public static fromIntent(param0: globalAndroid.content.Intent): com.urbanairship.push.PushMessage;
				public getVisibility(): number;
				public getExtra(param0: string, param1: string): string;
				public getRichPushMessageId(): string;
				public getStylePayload(): string;
				public describeContents(): number;
				public containsAirshipKeys(): boolean;
				public getSendId(): string;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class PushProvider {
				public static class: java.lang.Class<com.urbanairship.push.PushProvider>;
				/**
				 * Constructs a new instance of the com.urbanairship.push.PushProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getPlatform(): number;
					getRegistrationToken(param0: globalAndroid.content.Context): string;
					isAvailable(param0: globalAndroid.content.Context): boolean;
					isSupported(param0: globalAndroid.content.Context, param1: com.urbanairship.AirshipConfigOptions): boolean;
					isUrbanAirshipMessage(param0: globalAndroid.content.Context, param1: com.urbanairship.UAirship, param2: com.urbanairship.push.PushMessage): boolean;
				});
				public constructor();
				public isSupported(param0: globalAndroid.content.Context, param1: com.urbanairship.AirshipConfigOptions): boolean;
				public getRegistrationToken(param0: globalAndroid.content.Context): string;
				public getPlatform(): number;
				public isUrbanAirshipMessage(param0: globalAndroid.content.Context, param1: com.urbanairship.UAirship, param2: com.urbanairship.push.PushMessage): boolean;
				public isAvailable(param0: globalAndroid.content.Context): boolean;
			}
			export module PushProvider {
				export class RegistrationException {
					public static class: java.lang.Class<com.urbanairship.push.PushProvider.RegistrationException>;
					public isRecoverable(): boolean;
					public constructor(param0: string, param1: boolean);
					public constructor(param0: string, param1: boolean, param2: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export abstract class PushProviderBridge {
				public static class: java.lang.Class<com.urbanairship.push.PushProviderBridge>;
				public static processPush(param0: java.lang.Class<any>, param1: com.urbanairship.push.PushMessage): com.urbanairship.push.PushProviderBridge.ProcessPushRequest;
				public static requestRegistrationUpdate(param0: globalAndroid.content.Context): void;
				public constructor();
			}
			export module PushProviderBridge {
				export class ProcessPushRequest {
					public static class: java.lang.Class<com.urbanairship.push.PushProviderBridge.ProcessPushRequest>;
					public setMaxCallbackWaitTime(param0: number): com.urbanairship.push.PushProviderBridge.ProcessPushRequest;
					public executeSync(param0: globalAndroid.content.Context): void;
					public allowWakeLocks(param0: boolean): com.urbanairship.push.PushProviderBridge.ProcessPushRequest;
					public execute(param0: globalAndroid.content.Context, param1: java.lang.Runnable): void;
					public execute(param0: globalAndroid.content.Context): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class PushService {
				public static class: java.lang.Class<com.urbanairship.push.PushService>;
				public onBind(param0: globalAndroid.content.Intent): globalAndroid.os.IBinder;
				public onStartCommand(param0: globalAndroid.content.Intent, param1: number, param2: number): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class QuietTimeInterval extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.push.QuietTimeInterval>;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public static parseJson(param0: string): com.urbanairship.push.QuietTimeInterval;
				public toString(): string;
			}
			export module QuietTimeInterval {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.push.QuietTimeInterval.Builder>;
					public constructor();
					public setQuietTimeInterval(param0: java.util.Date, param1: java.util.Date): com.urbanairship.push.QuietTimeInterval.Builder;
					public setEndMin(param0: number): com.urbanairship.push.QuietTimeInterval.Builder;
					public build(): com.urbanairship.push.QuietTimeInterval;
					public setStartHour(param0: number): com.urbanairship.push.QuietTimeInterval.Builder;
					public setStartMin(param0: number): com.urbanairship.push.QuietTimeInterval.Builder;
					public setEndHour(param0: number): com.urbanairship.push.QuietTimeInterval.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export abstract class TagEditor {
				public static class: java.lang.Class<com.urbanairship.push.TagEditor>;
				public apply(): void;
				public addTag(param0: string): com.urbanairship.push.TagEditor;
				public removeTag(param0: string): com.urbanairship.push.TagEditor;
				public removeTags(param0: java.util.Set<string>): com.urbanairship.push.TagEditor;
				public addTags(param0: java.util.Set<string>): com.urbanairship.push.TagEditor;
				public clear(): com.urbanairship.push.TagEditor;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class TagGroupApiClient extends com.urbanairship.push.BaseApiClient {
				public static class: java.lang.Class<com.urbanairship.push.TagGroupApiClient>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class TagGroupRegistrar {
				public static class: java.lang.Class<com.urbanairship.push.TagGroupRegistrar>;
				public static NAMED_USER: number;
				public static CHANNEL: number;
				public uploadMutations(param0: number, param1: string): boolean;
				public addMutations(param0: number, param1: java.util.List<com.urbanairship.push.TagGroupsMutation>): void;
				public clearMutations(param0: number): void;
				public migrateKeys(): void;
				public addListener(param0: com.urbanairship.push.TagGroupRegistrar.Listener): void;
				public constructor(param0: number, param1: com.urbanairship.AirshipConfigOptions, param2: com.urbanairship.PreferenceDataStore);
				public removeListener(param0: com.urbanairship.push.TagGroupRegistrar.Listener): void;
				public getPendingMutations(param0: number): java.util.List<com.urbanairship.push.TagGroupsMutation>;
			}
			export module TagGroupRegistrar {
				export class Listener {
					public static class: java.lang.Class<com.urbanairship.push.TagGroupRegistrar.Listener>;
					/**
					 * Constructs a new instance of the com.urbanairship.push.TagGroupRegistrar$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMutationUploaded(param0: com.urbanairship.push.TagGroupsMutation): void;
					});
					public constructor();
					public onMutationUploaded(param0: com.urbanairship.push.TagGroupsMutation): void;
				}
				export class TagGroupType {
					public static class: java.lang.Class<com.urbanairship.push.TagGroupRegistrar.TagGroupType>;
					/**
					 * Constructs a new instance of the com.urbanairship.push.TagGroupRegistrar$TagGroupType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class TagGroupsEditor {
				public static class: java.lang.Class<com.urbanairship.push.TagGroupsEditor>;
				public apply(): void;
				public setTags(param0: string, param1: java.util.Set<string>): com.urbanairship.push.TagGroupsEditor;
				public addTag(param0: string, param1: string): com.urbanairship.push.TagGroupsEditor;
				public addTags(param0: string, param1: java.util.Set<string>): com.urbanairship.push.TagGroupsEditor;
				public removeTag(param0: string, param1: string): com.urbanairship.push.TagGroupsEditor;
				public removeTags(param0: string, param1: java.util.Set<string>): com.urbanairship.push.TagGroupsEditor;
				public setTag(param0: string, param1: string): com.urbanairship.push.TagGroupsEditor;
				public allowTagGroupChange(param0: string): boolean;
				public constructor();
				public onApply(param0: java.util.List<com.urbanairship.push.TagGroupsMutation>): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class TagGroupsMutation extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.push.TagGroupsMutation>;
				public static newAddTagsMutation(param0: string, param1: java.util.Set<string>): com.urbanairship.push.TagGroupsMutation;
				public static newSetTagsMutation(param0: string, param1: java.util.Set<string>): com.urbanairship.push.TagGroupsMutation;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public static newAddRemoveMutation(param0: java.util.Map<string,java.util.Set<string>>, param1: java.util.Map<string,java.util.Set<string>>): com.urbanairship.push.TagGroupsMutation;
				public hashCode(): number;
				public static fromJsonList(param0: com.urbanairship.json.JsonList): java.util.List<com.urbanairship.push.TagGroupsMutation>;
				public equals(param0: any): boolean;
				public static newRemoveTagsMutation(param0: string, param1: java.util.Set<string>): com.urbanairship.push.TagGroupsMutation;
				public static fromJsonValue(param0: com.urbanairship.json.JsonValue): com.urbanairship.push.TagGroupsMutation;
				public apply(param0: java.util.Map<string,java.util.Set<string>>): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export class TagUtils {
				public static class: java.lang.Class<com.urbanairship.push.TagUtils>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module fcm {
				export class AirshipFirebaseInstanceIdService extends com.google.firebase.iid.FirebaseInstanceIdService {
					public static class: java.lang.Class<com.urbanairship.push.fcm.AirshipFirebaseInstanceIdService>;
					public onTokenRefresh(): void;
					public constructor();
					public static processTokenRefresh(param0: globalAndroid.content.Context): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module fcm {
				export class AirshipFirebaseMessagingService extends com.google.firebase.messaging.FirebaseMessagingService {
					public static class: java.lang.Class<com.urbanairship.push.fcm.AirshipFirebaseMessagingService>;
					public constructor();
					public onMessageReceived(param0: com.google.firebase.messaging.RemoteMessage): void;
					public static processMessage(param0: globalAndroid.content.Context, param1: com.google.firebase.messaging.RemoteMessage): java.util.concurrent.Future<java.lang.Void>;
					public static processMessageSync(param0: globalAndroid.content.Context, param1: com.google.firebase.messaging.RemoteMessage): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module fcm {
				export class BuildConfig {
					public static class: java.lang.Class<com.urbanairship.push.fcm.BuildConfig>;
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public static SDK_VERSION: string;
					public static URBAN_AIRSHIP_VERSION: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module fcm {
				export class FcmPushProvider implements com.urbanairship.push.PushProvider, com.urbanairship.AirshipVersionInfo {
					public static class: java.lang.Class<com.urbanairship.push.fcm.FcmPushProvider>;
					public isSupported(param0: globalAndroid.content.Context, param1: com.urbanairship.AirshipConfigOptions): boolean;
					public toString(): string;
					public isAvailable(param0: globalAndroid.content.Context): boolean;
					public isUrbanAirshipMessage(param0: globalAndroid.content.Context, param1: com.urbanairship.UAirship, param2: com.urbanairship.push.PushMessage): boolean;
					public constructor();
					public getPackageVersion(): string;
					public getPlatform(): number;
					public getRegistrationToken(param0: globalAndroid.content.Context): string;
					public getAirshipVersion(): string;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class ActionsNotificationExtender extends globalAndroid.support.v4.app.NotificationCompat.Extender {
					public static class: java.lang.Class<com.urbanairship.push.notifications.ActionsNotificationExtender>;
					public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.push.PushMessage, param2: number);
					public extend(param0: globalAndroid.support.v4.app.NotificationCompat.Builder): globalAndroid.support.v4.app.NotificationCompat.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class CustomLayoutNotificationFactory extends com.urbanairship.push.notifications.NotificationFactory {
					public static class: java.lang.Class<com.urbanairship.push.notifications.CustomLayoutNotificationFactory>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: number);
					public createNotification(param0: com.urbanairship.push.PushMessage, param1: number): globalAndroid.app.Notification;
					public onBindContentView(param0: globalAndroid.widget.RemoteViews, param1: com.urbanairship.push.PushMessage, param2: number): void;
					public extendBuilder(param0: globalAndroid.support.v4.app.NotificationCompat.Builder, param1: com.urbanairship.push.PushMessage, param2: number): globalAndroid.support.v4.app.NotificationCompat.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class DefaultNotificationFactory extends com.urbanairship.push.notifications.NotificationFactory {
					public static class: java.lang.Class<com.urbanairship.push.notifications.DefaultNotificationFactory>;
					public constructor(param0: globalAndroid.content.Context);
					public static newFactory(param0: globalAndroid.content.Context, param1: com.urbanairship.AirshipConfigOptions): com.urbanairship.push.notifications.DefaultNotificationFactory;
					public createNotification(param0: com.urbanairship.push.PushMessage, param1: number): globalAndroid.app.Notification;
					public extendBuilder(param0: globalAndroid.support.v4.app.NotificationCompat.Builder, param1: com.urbanairship.push.PushMessage, param2: number): globalAndroid.support.v4.app.NotificationCompat.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class LocalizableRemoteInput {
					public static class: java.lang.Class<com.urbanairship.push.notifications.LocalizableRemoteInput>;
					public getAllowFreeFormInput(): boolean;
					public getExtras(): globalAndroid.os.Bundle;
					public getChoices(): native.Array<number>;
					public createRemoteInput(param0: globalAndroid.content.Context): globalAndroid.support.v4.app.RemoteInput;
					public getResultKey(): string;
					public getLabel(): number;
				}
				export module LocalizableRemoteInput {
					export class Builder {
						public static class: java.lang.Class<com.urbanairship.push.notifications.LocalizableRemoteInput.Builder>;
						public setLabel(param0: number): com.urbanairship.push.notifications.LocalizableRemoteInput.Builder;
						public build(): com.urbanairship.push.notifications.LocalizableRemoteInput;
						public addExtras(param0: globalAndroid.os.Bundle): com.urbanairship.push.notifications.LocalizableRemoteInput.Builder;
						public constructor(param0: string);
						public setChoices(param0: number): com.urbanairship.push.notifications.LocalizableRemoteInput.Builder;
						public setAllowFreeFormInput(param0: boolean): com.urbanairship.push.notifications.LocalizableRemoteInput.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class NotificationActionButton {
					public static class: java.lang.Class<com.urbanairship.push.notifications.NotificationActionButton>;
					public getIcon(): number;
					public isForegroundAction(): boolean;
					public getId(): string;
					public getExtras(): globalAndroid.os.Bundle;
					public getRemoteInputs(): java.util.List<com.urbanairship.push.notifications.LocalizableRemoteInput>;
					public getDescription(): string;
					public getLabel(): number;
					public getLabel(param0: globalAndroid.content.Context): string;
				}
				export module NotificationActionButton {
					export class Builder {
						public static class: java.lang.Class<com.urbanairship.push.notifications.NotificationActionButton.Builder>;
						public setIcon(param0: number): com.urbanairship.push.notifications.NotificationActionButton.Builder;
						public setLabel(param0: number): com.urbanairship.push.notifications.NotificationActionButton.Builder;
						public setPerformsInForeground(param0: boolean): com.urbanairship.push.notifications.NotificationActionButton.Builder;
						public setDescription(param0: string): com.urbanairship.push.notifications.NotificationActionButton.Builder;
						public addRemoteInput(param0: com.urbanairship.push.notifications.LocalizableRemoteInput): com.urbanairship.push.notifications.NotificationActionButton.Builder;
						public build(): com.urbanairship.push.notifications.NotificationActionButton;
						public extend(param0: globalAndroid.support.v4.app.NotificationCompat.Action.Extender): com.urbanairship.push.notifications.NotificationActionButton.Builder;
						public constructor(param0: string);
						public setLabel(param0: string): com.urbanairship.push.notifications.NotificationActionButton.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class NotificationActionButtonGroup {
					public static class: java.lang.Class<com.urbanairship.push.notifications.NotificationActionButtonGroup>;
					public getNotificationActionButtons(): java.util.List<com.urbanairship.push.notifications.NotificationActionButton>;
				}
				export module NotificationActionButtonGroup {
					export class Builder {
						public static class: java.lang.Class<com.urbanairship.push.notifications.NotificationActionButtonGroup.Builder>;
						public constructor();
						public build(): com.urbanairship.push.notifications.NotificationActionButtonGroup;
						public addNotificationActionButton(param0: com.urbanairship.push.notifications.NotificationActionButton): com.urbanairship.push.notifications.NotificationActionButtonGroup.Builder;
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class NotificationFactory {
					public static class: java.lang.Class<com.urbanairship.push.notifications.NotificationFactory>;
					public static DEFAULT_NOTIFICATION_CHANNEL: string;
					public static EXECUTOR: java.util.concurrent.ExecutorService;
					public static TAG_NOTIFICATION_ID: number;
					public setConstantNotificationId(param0: number): com.urbanairship.push.notifications.NotificationFactory;
					public getConstantNotificationId(): number;
					public setSmallIconId(param0: number): void;
					public getTitleId(): number;
					public getSound(): globalAndroid.net.Uri;
					public setNotificationChannel(param0: string): void;
					public getTitle(param0: com.urbanairship.push.PushMessage): string;
					public setNotificationDefaultOptions(param0: number): void;
					public createNotification(param0: com.urbanairship.push.PushMessage, param1: number): globalAndroid.app.Notification;
					public getContext(): globalAndroid.content.Context;
					public setTitleId(param0: number): void;
					public createNotificationResult(param0: com.urbanairship.push.PushMessage, param1: number, param2: boolean): com.urbanairship.push.notifications.NotificationFactory.Result;
					public getLargeIcon(): number;
					public setColor(param0: number): void;
					public getColor(): number;
					public getSmallIconId(): number;
					public getNotificationChannel(): string;
					public requiresLongRunningTask(param0: com.urbanairship.push.PushMessage): boolean;
					public getNotificationDefaultOptions(): number;
					public constructor(param0: globalAndroid.content.Context);
					public setLargeIcon(param0: number): void;
					public createNotificationBuilder(param0: com.urbanairship.push.PushMessage, param1: number, param2: globalAndroid.support.v4.app.NotificationCompat.Style): globalAndroid.support.v4.app.NotificationCompat.Builder;
					public getNextId(param0: com.urbanairship.push.PushMessage): number;
					public createNotificationResult(param0: com.urbanairship.push.PushMessage, param1: number): com.urbanairship.push.notifications.NotificationFactory.Result;
					public setSound(param0: globalAndroid.net.Uri): void;
				}
				export module NotificationFactory {
					export class Result {
						public static class: java.lang.Class<com.urbanairship.push.notifications.NotificationFactory.Result>;
						public static OK: number;
						public static RETRY: number;
						public static CANCEL: number;
						public static notification(param0: globalAndroid.app.Notification): com.urbanairship.push.notifications.NotificationFactory.Result;
						public static cancel(): com.urbanairship.push.notifications.NotificationFactory.Result;
						public getNotification(): globalAndroid.app.Notification;
						public static retry(): com.urbanairship.push.notifications.NotificationFactory.Result;
						public getStatus(): number;
					}
					export module Result {
						export class Status {
							public static class: java.lang.Class<com.urbanairship.push.notifications.NotificationFactory.Result.Status>;
							/**
							 * Constructs a new instance of the com.urbanairship.push.notifications.NotificationFactory$Result$Status interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
							});
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class PublicNotificationExtender extends globalAndroid.support.v4.app.NotificationCompat.Extender {
					public static class: java.lang.Class<com.urbanairship.push.notifications.PublicNotificationExtender>;
					public setSmallIcon(param0: number): com.urbanairship.push.notifications.PublicNotificationExtender;
					public setAccentColor(param0: number): com.urbanairship.push.notifications.PublicNotificationExtender;
					public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.push.PushMessage);
					public setLargeIcon(param0: number): com.urbanairship.push.notifications.PublicNotificationExtender;
					public extend(param0: globalAndroid.support.v4.app.NotificationCompat.Builder): globalAndroid.support.v4.app.NotificationCompat.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class StyleNotificationExtender extends globalAndroid.support.v4.app.NotificationCompat.Extender {
					public static class: java.lang.Class<com.urbanairship.push.notifications.StyleNotificationExtender>;
					public setDefaultStyle(param0: globalAndroid.support.v4.app.NotificationCompat.Style): com.urbanairship.push.notifications.StyleNotificationExtender;
					public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.push.PushMessage);
					public extend(param0: globalAndroid.support.v4.app.NotificationCompat.Builder): globalAndroid.support.v4.app.NotificationCompat.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module push {
			export module notifications {
				export class WearableNotificationExtender extends globalAndroid.support.v4.app.NotificationCompat.Extender {
					public static class: java.lang.Class<com.urbanairship.push.notifications.WearableNotificationExtender>;
					public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.push.PushMessage, param2: number);
					public extend(param0: globalAndroid.support.v4.app.NotificationCompat.Builder): globalAndroid.support.v4.app.NotificationCompat.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class BiFunction<T, U, R>  extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.reactive.BiFunction<any,any,any>>;
				/**
				 * Constructs a new instance of the com.urbanairship.reactive.BiFunction<any,any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(param0: T, param1: U): R;
				});
				public constructor();
				public apply(param0: T, param1: U): R;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class CompoundSubscription extends com.urbanairship.reactive.Subscription {
				public static class: java.lang.Class<com.urbanairship.reactive.CompoundSubscription>;
				public add(param0: com.urbanairship.reactive.Subscription): void;
				public remove(param0: com.urbanairship.reactive.Subscription): void;
				public cancel(): void;
				public constructor(param0: java.lang.Runnable);
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class Function<T, R>  extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.reactive.Function<any,any>>;
				/**
				 * Constructs a new instance of the com.urbanairship.reactive.Function<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(param0: T): R;
				});
				public constructor();
				public apply(param0: T): R;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class Observable<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.reactive.Observable<any>>;
				public map(param0: com.urbanairship.reactive.Function<any,any>): com.urbanairship.reactive.Observable<any>;
				public distinctUntilChanged(): com.urbanairship.reactive.Observable<T>;
				public defaultIfEmpty(param0: T): com.urbanairship.reactive.Observable<T>;
				public static error(param0: java.lang.Exception): com.urbanairship.reactive.Observable<any>;
				public subscribe(param0: com.urbanairship.reactive.Observer<T>): com.urbanairship.reactive.Subscription;
				public static from(param0: java.util.Collection): com.urbanairship.reactive.Observable<any>;
				public observeOn(param0: com.urbanairship.reactive.Scheduler): com.urbanairship.reactive.Observable<T>;
				public constructor();
				public static never(): com.urbanairship.reactive.Observable<any>;
				public static merge(param0: java.util.Collection): com.urbanairship.reactive.Observable<any>;
				public subscribeOn(param0: com.urbanairship.reactive.Scheduler): com.urbanairship.reactive.Observable<T>;
				public static just(param0: any): com.urbanairship.reactive.Observable<any>;
				public static zip(param0: com.urbanairship.reactive.Observable<any>, param1: com.urbanairship.reactive.Observable<any>, param2: com.urbanairship.reactive.BiFunction<any,any,any>): com.urbanairship.reactive.Observable<any>;
				public static create(param0: com.urbanairship.reactive.Function<any,any>): com.urbanairship.reactive.Observable<any>;
				public flatMap(param0: com.urbanairship.reactive.Function<any,any>): com.urbanairship.reactive.Observable<any>;
				public static merge(param0: com.urbanairship.reactive.Observable<any>, param1: com.urbanairship.reactive.Observable<any>): com.urbanairship.reactive.Observable<any>;
				public static defer(param0: com.urbanairship.reactive.Supplier<any>): com.urbanairship.reactive.Observable<any>;
				public static empty(): com.urbanairship.reactive.Observable<any>;
				public filter(param0: com.urbanairship.Predicate<T>): com.urbanairship.reactive.Observable<T>;
				public static concat(param0: com.urbanairship.reactive.Observable<any>, param1: com.urbanairship.reactive.Observable<any>): com.urbanairship.reactive.Observable<any>;
			}
			export module Observable {
				export class Holder<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.urbanairship.reactive.Observable.Holder<any>>;
				}
				export class ObservableTracker<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.urbanairship.reactive.Observable.ObservableTracker<any>>;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class Observer<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.reactive.Observer<any>>;
				/**
				 * Constructs a new instance of the com.urbanairship.reactive.Observer<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onNext(param0: T): void;
					onCompleted(): void;
					onError(param0: java.lang.Exception): void;
				});
				public constructor();
				public onCompleted(): void;
				public onError(param0: java.lang.Exception): void;
				public onNext(param0: T): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class Scheduler {
				public static class: java.lang.Class<com.urbanairship.reactive.Scheduler>;
				/**
				 * Constructs a new instance of the com.urbanairship.reactive.Scheduler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					schedule(param0: java.lang.Runnable): com.urbanairship.reactive.Subscription;
					schedule(param0: java.lang.Runnable, param1: number): com.urbanairship.reactive.Subscription;
				});
				public constructor();
				public schedule(param0: java.lang.Runnable): com.urbanairship.reactive.Subscription;
				public schedule(param0: java.lang.Runnable, param1: number): com.urbanairship.reactive.Subscription;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class Schedulers {
				public static class: java.lang.Class<com.urbanairship.reactive.Schedulers>;
				public static main(): com.urbanairship.reactive.Schedulers.LooperScheduler;
				public static looper(param0: globalAndroid.os.Looper): com.urbanairship.reactive.Schedulers.LooperScheduler;
				public constructor();
			}
			export module Schedulers {
				export class LooperScheduler extends com.urbanairship.reactive.Scheduler {
					public static class: java.lang.Class<com.urbanairship.reactive.Schedulers.LooperScheduler>;
					public schedule(param0: java.lang.Runnable, param1: number): com.urbanairship.reactive.Subscription;
					public schedule(param0: java.lang.Runnable): com.urbanairship.reactive.Subscription;
					public constructor(param0: globalAndroid.os.Looper);
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class SerialSubscription extends com.urbanairship.reactive.Subscription {
				public static class: java.lang.Class<com.urbanairship.reactive.SerialSubscription>;
				public cancel(): void;
				public setSubscription(param0: com.urbanairship.reactive.Subscription): void;
				public constructor(param0: java.lang.Runnable);
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class Subject<T>  extends com.urbanairship.reactive.Observable<any> implements com.urbanairship.reactive.Observer<any>  {
				public static class: java.lang.Class<com.urbanairship.reactive.Subject<any>>;
				public onCompleted(): void;
				public static create(): com.urbanairship.reactive.Subject<any>;
				public onNext(param0: any): void;
				public static create(param0: com.urbanairship.reactive.Function<any,any>): com.urbanairship.reactive.Observable<any>;
				public onError(param0: java.lang.Exception): void;
				public subscribe(param0: com.urbanairship.reactive.Observer<any>): com.urbanairship.reactive.Subscription;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class Subscriber<T>  extends com.urbanairship.reactive.Observer<any> {
				public static class: java.lang.Class<com.urbanairship.reactive.Subscriber<any>>;
				public onCompleted(): void;
				public onNext(param0: any): void;
				public onError(param0: java.lang.Exception): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class Subscription {
				public static class: java.lang.Class<com.urbanairship.reactive.Subscription>;
				public cancel(): void;
				public static create(param0: java.lang.Runnable): com.urbanairship.reactive.Subscription;
				public static empty(): com.urbanairship.reactive.Subscription;
				public constructor(param0: java.lang.Runnable);
				public isCancelled(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module reactive {
			export class Supplier<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.reactive.Supplier<any>>;
				/**
				 * Constructs a new instance of the com.urbanairship.reactive.Supplier<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					apply(): T;
				});
				public constructor();
				public apply(): T;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module remoteconfig {
			export class DisableInfo extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.remoteconfig.DisableInfo>;
				public static filter(param0: java.util.Collection<com.urbanairship.remoteconfig.DisableInfo>, param1: string, param2: number): java.util.List<com.urbanairship.remoteconfig.DisableInfo>;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public static parseJson(param0: com.urbanairship.json.JsonValue): com.urbanairship.remoteconfig.DisableInfo;
				public getRemoteDataRefreshInterval(): number;
				public equals(param0: any): boolean;
				public getDisabledModules(): java.util.Set<string>;
				public static newBuilder(): com.urbanairship.remoteconfig.DisableInfo.Builder;
				public getSdkVersionConstraints(): java.util.Set<string>;
				public getAppVersionPredicate(): com.urbanairship.json.JsonPredicate;
			}
			export module DisableInfo {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.remoteconfig.DisableInfo.Builder>;
					public setRemoteDataInterval(param0: number): com.urbanairship.remoteconfig.DisableInfo.Builder;
					public setAppVersionPredicate(param0: com.urbanairship.json.JsonPredicate): com.urbanairship.remoteconfig.DisableInfo.Builder;
					public setDisabledModules(param0: java.util.Collection<string>): com.urbanairship.remoteconfig.DisableInfo.Builder;
					public setSDKVersionConstraints(param0: java.util.Collection<string>): com.urbanairship.remoteconfig.DisableInfo.Builder;
					public build(): com.urbanairship.remoteconfig.DisableInfo;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module remoteconfig {
			export class ModuleAdapter {
				public static class: java.lang.Class<com.urbanairship.remoteconfig.ModuleAdapter>;
				public setComponentEnabled(param0: string, param1: boolean): void;
				public onNewConfig(param0: string, param1: com.urbanairship.json.JsonList): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module remoteconfig {
			export class Modules {
				public static class: java.lang.Class<com.urbanairship.remoteconfig.Modules>;
				/**
				 * Constructs a new instance of the com.urbanairship.remoteconfig.Modules interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					<clinit>(): void;
				});
				public constructor();
				public static MESSAGE_CENTER: string;
				public static NAMED_USER_MODULE: string;
				public static ANALYTICS_MODULE: string;
				public static IN_APP_MODULE: string;
				public static LOCATION_MODULE: string;
				public static ALL_MODULES: java.util.List<string>;
				public static PUSH_MODULE: string;
				public static AUTOMATION_MODULE: string;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module remoteconfig {
			export class RemoteConfigManager extends com.urbanairship.AirshipComponent {
				public static class: java.lang.Class<com.urbanairship.remoteconfig.RemoteConfigManager>;
				public tearDown(): void;
				public constructor(param0: com.urbanairship.PreferenceDataStore, param1: com.urbanairship.remotedata.RemoteData);
				public constructor(param0: com.urbanairship.PreferenceDataStore);
				public constructor(param0: com.urbanairship.PreferenceDataStore, param1: com.urbanairship.remotedata.RemoteData, param2: com.urbanairship.remoteconfig.ModuleAdapter);
				public init(): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module remotedata {
			export class RemoteData extends com.urbanairship.AirshipComponent {
				public static class: java.lang.Class<com.urbanairship.remotedata.RemoteData>;
				public tearDown(): void;
				public getForegroundRefreshInterval(): number;
				public payloadsForType(param0: string): com.urbanairship.reactive.Observable<com.urbanairship.remotedata.RemoteDataPayload>;
				public getLastModified(): string;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.AirshipConfigOptions, param3: com.urbanairship.ActivityMonitor);
				public setForegroundRefreshInterval(param0: number): void;
				public refresh(): void;
				public payloadsForTypes(param0: native.Array<string>): com.urbanairship.reactive.Observable<java.util.Collection<com.urbanairship.remotedata.RemoteDataPayload>>;
				public onPerformJob(param0: com.urbanairship.UAirship, param1: com.urbanairship.job.JobInfo): number;
				public constructor(param0: com.urbanairship.PreferenceDataStore);
				public init(): void;
				public payloadsForTypes(param0: java.util.Collection<string>): com.urbanairship.reactive.Observable<java.util.Collection<com.urbanairship.remotedata.RemoteDataPayload>>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module remotedata {
			export class RemoteDataApiClient {
				public static class: java.lang.Class<com.urbanairship.remotedata.RemoteDataApiClient>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module remotedata {
			export class RemoteDataJobHandler {
				public static class: java.lang.Class<com.urbanairship.remotedata.RemoteDataJobHandler>;
				public performJob(param0: com.urbanairship.job.JobInfo): number;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module remotedata {
			export class RemoteDataPayload {
				public static class: java.lang.Class<com.urbanairship.remotedata.RemoteDataPayload>;
				public getData(): com.urbanairship.json.JsonMap;
				public getType(): string;
				public static parsePayloads(param0: com.urbanairship.json.JsonValue): java.util.Set<com.urbanairship.remotedata.RemoteDataPayload>;
				public hashCode(): number;
				public static parsePayload(param0: com.urbanairship.json.JsonValue): com.urbanairship.remotedata.RemoteDataPayload;
				public equals(param0: any): boolean;
				public constructor(param0: string, param1: number, param2: com.urbanairship.json.JsonMap);
				public toString(): string;
				public getTimestamp(): number;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module remotedata {
			export class RemoteDataPayloadEntry {
				public static class: java.lang.Class<com.urbanairship.remotedata.RemoteDataPayloadEntry>;
				public type: string;
				public timestamp: number;
				public data: string;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module remotedata {
			export class RemoteDataStore extends com.urbanairship.util.DataManager {
				public static class: java.lang.Class<com.urbanairship.remotedata.RemoteDataStore>;
				public savePayload(param0: com.urbanairship.remotedata.RemoteDataPayload): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: number);
				public deletePayloads(): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: string);
				public getPayloads(param0: java.util.Collection<string>): java.util.Set<com.urbanairship.remotedata.RemoteDataPayload>;
				public getPayloads(): java.util.Set<com.urbanairship.remotedata.RemoteDataPayload>;
				public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
				public savePayloads(param0: java.util.Set<com.urbanairship.remotedata.RemoteDataPayload>): boolean;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module richpush {
			export class InboxJobHandler {
				public static class: java.lang.Class<com.urbanairship.richpush.InboxJobHandler>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module richpush {
			export class RichPushDataManager extends com.urbanairship.util.DataManager {
				public static class: java.lang.Class<com.urbanairship.richpush.RichPushDataManager>;
				public static TABLE_NAME: string;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: number);
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
				public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
				public onDowngrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module richpush {
			export class RichPushInbox extends com.urbanairship.AirshipComponent {
				public static class: java.lang.Class<com.urbanairship.richpush.RichPushInbox>;
				public static INBOX_ACTION_NAMES: java.util.List<string>;
				public static VIEW_INBOX_INTENT_ACTION: string;
				public static VIEW_MESSAGE_INTENT_ACTION: string;
				public static MESSAGE_DATA_SCHEME: string;
				public getUser(): com.urbanairship.richpush.RichPushUser;
				public startMessageActivity(param0: string): void;
				public addListener(param0: com.urbanairship.richpush.RichPushInbox.Listener): void;
				public fetchMessages(param0: com.urbanairship.richpush.RichPushInbox.FetchMessagesCallback, param1: globalAndroid.os.Looper): com.urbanairship.Cancelable;
				public getMessages(): java.util.List<com.urbanairship.richpush.RichPushMessage>;
				public startInboxActivity(): void;
				public getReadMessages(): java.util.List<com.urbanairship.richpush.RichPushMessage>;
				public constructor(param0: globalAndroid.content.Context, param1: com.urbanairship.PreferenceDataStore, param2: com.urbanairship.ActivityMonitor);
				public init(): void;
				public fetchMessages(): void;
				public deleteMessages(param0: java.util.Set<string>): void;
				public getReadMessages(param0: com.urbanairship.richpush.RichPushInbox.Predicate): java.util.List<com.urbanairship.richpush.RichPushMessage>;
				public fetchMessages(param0: com.urbanairship.richpush.RichPushInbox.FetchMessagesCallback): com.urbanairship.Cancelable;
				public constructor(param0: com.urbanairship.PreferenceDataStore);
				public getMessages(param0: com.urbanairship.richpush.RichPushInbox.Predicate): java.util.List<com.urbanairship.richpush.RichPushMessage>;
				public getUnreadCount(): number;
				public getMessageIds(): java.util.Set<string>;
				public getReadCount(): number;
				public removeListener(param0: com.urbanairship.richpush.RichPushInbox.Listener): void;
				public onPerformJob(param0: com.urbanairship.UAirship, param1: com.urbanairship.job.JobInfo): number;
				public getUnreadMessages(): java.util.List<com.urbanairship.richpush.RichPushMessage>;
				public getCount(): number;
				public tearDown(): void;
				public markMessagesUnread(param0: java.util.Set<string>): void;
				public getUnreadMessages(param0: com.urbanairship.richpush.RichPushInbox.Predicate): java.util.List<com.urbanairship.richpush.RichPushMessage>;
				public markMessagesRead(param0: java.util.Set<string>): void;
				public getMessage(param0: string): com.urbanairship.richpush.RichPushMessage;
			}
			export module RichPushInbox {
				export class FetchMessagesCallback {
					public static class: java.lang.Class<com.urbanairship.richpush.RichPushInbox.FetchMessagesCallback>;
					/**
					 * Constructs a new instance of the com.urbanairship.richpush.RichPushInbox$FetchMessagesCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onFinished(param0: boolean): void;
					});
					public constructor();
					public onFinished(param0: boolean): void;
				}
				export class Listener {
					public static class: java.lang.Class<com.urbanairship.richpush.RichPushInbox.Listener>;
					/**
					 * Constructs a new instance of the com.urbanairship.richpush.RichPushInbox$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onInboxUpdated(): void;
					});
					public constructor();
					public onInboxUpdated(): void;
				}
				export class PendingFetchMessagesCallback extends com.urbanairship.CancelableOperation {
					public static class: java.lang.Class<com.urbanairship.richpush.RichPushInbox.PendingFetchMessagesCallback>;
					public constructor(param0: com.urbanairship.richpush.RichPushInbox.FetchMessagesCallback, param1: globalAndroid.os.Looper);
					public cancel(): boolean;
					public isDone(): boolean;
					public constructor();
					public isCancelled(): boolean;
					public onRun(): void;
					public cancel(param0: boolean): boolean;
					public constructor(param0: globalAndroid.os.Looper);
				}
				export class Predicate {
					public static class: java.lang.Class<com.urbanairship.richpush.RichPushInbox.Predicate>;
					/**
					 * Constructs a new instance of the com.urbanairship.richpush.RichPushInbox$Predicate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						apply(param0: com.urbanairship.richpush.RichPushMessage): boolean;
					});
					public constructor();
					public apply(param0: com.urbanairship.richpush.RichPushMessage): boolean;
				}
				export class SentAtRichPushMessageComparator extends java.util.Comparator<com.urbanairship.richpush.RichPushMessage> {
					public static class: java.lang.Class<com.urbanairship.richpush.RichPushInbox.SentAtRichPushMessageComparator>;
					public compare(param0: com.urbanairship.richpush.RichPushMessage, param1: com.urbanairship.richpush.RichPushMessage): number;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module richpush {
			export class RichPushMessage extends java.lang.Comparable<com.urbanairship.richpush.RichPushMessage> {
				public static class: java.lang.Class<com.urbanairship.richpush.RichPushMessage>;
				public isRead(): boolean;
				public getSentDate(): java.util.Date;
				public getExtras(): globalAndroid.os.Bundle;
				public compareTo(param0: com.urbanairship.richpush.RichPushMessage): number;
				public getMessageReadUrl(): string;
				public getSentDateMS(): number;
				public isDeleted(): boolean;
				public getMessageId(): string;
				public getTitle(): string;
				public getExpirationDate(): java.util.Date;
				public getExpirationDateMS(): java.lang.Long;
				public getMessageBodyUrl(): string;
				public isExpired(): boolean;
				public delete(): void;
				public hashCode(): number;
				public getListIconUrl(): string;
				public equals(param0: any): boolean;
				public markRead(): void;
				public getRawMessageJson(): com.urbanairship.json.JsonValue;
				public markUnread(): void;
				public getMessageUrl(): string;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module richpush {
			export class RichPushResolver extends com.urbanairship.UrbanAirshipResolver {
				public static class: java.lang.Class<com.urbanairship.richpush.RichPushResolver>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module richpush {
			export class RichPushTable {
				public static class: java.lang.Class<com.urbanairship.richpush.RichPushTable>;
				public static COLUMN_NAME_MESSAGE_ID: string;
				public static COLUMN_NAME_MESSAGE_URL: string;
				public static COLUMN_NAME_MESSAGE_BODY_URL: string;
				public static COLUMN_NAME_MESSAGE_READ_URL: string;
				public static COLUMN_NAME_TITLE: string;
				public static COLUMN_NAME_EXTRA: string;
				public static COLUMN_NAME_UNREAD: string;
				public static COLUMN_NAME_UNREAD_ORIG: string;
				public static COLUMN_NAME_DELETED: string;
				public static COLUMN_NAME_KEY: string;
				public static COLUMN_NAME_TIMESTAMP: string;
				public static COLUMN_NAME_RAW_MESSAGE_OBJECT: string;
				public static COLUMN_NAME_EXPIRATION_TIMESTAMP: string;
				public static TABLE_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module richpush {
			export class RichPushUser {
				public static class: java.lang.Class<com.urbanairship.richpush.RichPushUser>;
				public getId(): string;
				public addListener(param0: com.urbanairship.richpush.RichPushUser.Listener): void;
				public static isCreated(): boolean;
				public update(param0: boolean): void;
				public getPassword(): string;
				public removeListener(param0: com.urbanairship.richpush.RichPushUser.Listener): void;
			}
			export module RichPushUser {
				export class Listener {
					public static class: java.lang.Class<com.urbanairship.richpush.RichPushUser.Listener>;
					/**
					 * Constructs a new instance of the com.urbanairship.richpush.RichPushUser$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onUserUpdated(param0: boolean): void;
					});
					public constructor();
					public onUserUpdated(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class BitmapUtils {
				public static class: java.lang.Class<com.urbanairship.util.BitmapUtils>;
				public static fetchScaledBitmap(param0: globalAndroid.content.Context, param1: java.net.URL, param2: number, param3: number): globalAndroid.graphics.Bitmap;
				public static calculateInSampleSize(param0: number, param1: number, param2: number, param3: number): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class Checks {
				public static class: java.lang.Class<com.urbanairship.util.Checks>;
				public static checkNotNull(param0: any, param1: string): void;
				public constructor();
				public static checkArgument(param0: boolean, param1: string): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class Clock {
				public static class: java.lang.Class<com.urbanairship.util.Clock>;
				public static DEFAULT_CLOCK: com.urbanairship.util.Clock;
				public currentTimeMillis(): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class ColorUtils {
				public static class: java.lang.Class<com.urbanairship.util.ColorUtils>;
				public static convertToString(param0: number): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export abstract class DataManager {
				public static class: java.lang.Class<com.urbanairship.util.DataManager>;
				public query(param0: string, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string): globalAndroid.database.Cursor;
				public close(): void;
				public onConfigure(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
				public getReadableDatabase(): globalAndroid.database.sqlite.SQLiteDatabase;
				public bulkInsert(param0: string, param1: native.Array<globalAndroid.content.ContentValues>): java.util.List<globalAndroid.content.ContentValues>;
				public getWritableDatabase(): globalAndroid.database.sqlite.SQLiteDatabase;
				public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
				public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
				public onDowngrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: number);
				public delete(param0: string, param1: string, param2: native.Array<string>): number;
				public insert(param0: string, param1: globalAndroid.content.ContentValues): number;
				public rawQuery(param0: string, param1: native.Array<string>): globalAndroid.database.Cursor;
				public onOpen(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
				public query(param0: string, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string): globalAndroid.database.Cursor;
				public update(param0: string, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): number;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class DateUtils {
				public static class: java.lang.Class<com.urbanairship.util.DateUtils>;
				public static parseIso8601(param0: string, param1: number): number;
				public static createIso8601TimeStamp(param0: number): string;
				public static parseIso8601(param0: string): number;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export abstract class FileUtils {
				public static class: java.lang.Class<com.urbanairship.util.FileUtils>;
				public static downloadFile(param0: java.net.URL, param1: java.io.File): com.urbanairship.util.FileUtils.DownloadResult;
				public static deleteRecursively(param0: java.io.File): boolean;
				public constructor();
			}
			export module FileUtils {
				export class DownloadResult {
					public static class: java.lang.Class<com.urbanairship.util.FileUtils.DownloadResult>;
					public statusCode: number;
					public isSuccess: boolean;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class HelperActivity {
				public static class: java.lang.Class<com.urbanairship.util.HelperActivity>;
				public static PERMISSIONS_EXTRA: string;
				public static RESULT_RECEIVER_EXTRA: string;
				public static RESULT_INTENT_EXTRA: string;
				public static START_ACTIVITY_INTENT_EXTRA: string;
				public static startActivityForResult(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): com.urbanairship.util.HelperActivity.ActivityResult;
				public onActivityResult(param0: number, param1: number, param2: globalAndroid.content.Intent): void;
				public static requestPermissions(param0: globalAndroid.content.Context, param1: native.Array<string>): native.Array<number>;
				public onCreate(param0: globalAndroid.os.Bundle): void;
				public onRequestPermissionsResult(param0: number, param1: native.Array<string>, param2: native.Array<number>): void;
				public constructor();
			}
			export module HelperActivity {
				export class ActivityResult {
					public static class: java.lang.Class<com.urbanairship.util.HelperActivity.ActivityResult>;
					public getResultCode(): number;
					public constructor();
					public getIntent(): globalAndroid.content.Intent;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class IvyVersionMatcher extends java.lang.Object {
				public static class: java.lang.Class<com.urbanairship.util.IvyVersionMatcher>;
				public static newMatcher(param0: string): com.urbanairship.util.IvyVersionMatcher;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public apply(param0: string): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public apply(param0: any): boolean;
			}
			export module IvyVersionMatcher {
				export class Version extends java.lang.Comparable<com.urbanairship.util.IvyVersionMatcher.Version> {
					public static class: java.lang.Class<com.urbanairship.util.IvyVersionMatcher.Version>;
					public constructor(param0: string);
					public compareTo(param0: com.urbanairship.util.IvyVersionMatcher.Version): number;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class ManifestUtils {
				public static class: java.lang.Class<com.urbanairship.util.ManifestUtils>;
				public static ENABLE_LOCAL_STORAGE: string;
				public static LOCAL_STORAGE_DATABASE_DIRECTORY: string;
				public static isPermissionGranted(param0: string): boolean;
				public static getApplicationInfo(): globalAndroid.content.pm.ApplicationInfo;
				public static shouldEnableLocalStorage(): boolean;
				public static isPermissionKnown(param0: string): boolean;
				public static getActivityInfo(param0: java.lang.Class): globalAndroid.content.pm.ActivityInfo;
				public static validateManifest(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class Network {
				public static class: java.lang.Class<com.urbanairship.util.Network>;
				public static isConnected(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class NotificationIdGenerator {
				public static class: java.lang.Class<com.urbanairship.util.NotificationIdGenerator>;
				public static nextID(): number;
				public static getStart(): number;
				public static setStart(param0: number): void;
				public static setRange(param0: number): void;
				public static getRange(): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class PermissionsRequester {
				public static class: java.lang.Class<com.urbanairship.util.PermissionsRequester>;
				/**
				 * Constructs a new instance of the com.urbanairship.util.PermissionsRequester interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					requestPermissions(param0: globalAndroid.content.Context, param1: java.util.List<string>): native.Array<number>;
				});
				public constructor();
				public requestPermissions(param0: globalAndroid.content.Context, param1: java.util.List<string>): native.Array<number>;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class PlatformUtils {
				public static class: java.lang.Class<com.urbanairship.util.PlatformUtils>;
				public static parsePlatform(param0: number): number;
				public static asString(param0: number): string;
				public constructor();
				public static isPlatformValid(param0: number): boolean;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class RetryingExecutor {
				public static class: java.lang.Class<com.urbanairship.util.RetryingExecutor>;
				public static RESULT_FINISHED: number;
				public static RESULT_RETRY: number;
				public static RESULT_CANCEL: number;
				public execute(param0: java.lang.Runnable): void;
				public execute(param0: native.Array<com.urbanairship.util.RetryingExecutor.Operation>): void;
				public execute(param0: com.urbanairship.util.RetryingExecutor.Operation): void;
				public constructor(param0: globalAndroid.os.Handler, param1: java.util.concurrent.Executor);
				public setPaused(param0: boolean): void;
			}
			export module RetryingExecutor {
				export class ChainedOperations extends com.urbanairship.util.RetryingExecutor.Operation {
					public static class: java.lang.Class<com.urbanairship.util.RetryingExecutor.ChainedOperations>;
					public run(): number;
				}
				export class Operation {
					public static class: java.lang.Class<com.urbanairship.util.RetryingExecutor.Operation>;
					/**
					 * Constructs a new instance of the com.urbanairship.util.RetryingExecutor$Operation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						run(): number;
					});
					public constructor();
					public run(): number;
				}
				export class Result {
					public static class: java.lang.Class<com.urbanairship.util.RetryingExecutor.Result>;
					/**
					 * Constructs a new instance of the com.urbanairship.util.RetryingExecutor$Result interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class UAHttpStatusUtil {
				public static class: java.lang.Class<com.urbanairship.util.UAHttpStatusUtil>;
				public static inRedirectionRange(param0: number): boolean;
				public static inClientErrorRange(param0: number): boolean;
				public static inServerErrorRange(param0: number): boolean;
				public static inSuccessRange(param0: number): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export abstract class UAMathUtil {
				public static class: java.lang.Class<com.urbanairship.util.UAMathUtil>;
				public static constrain(param0: number, param1: number, param2: number): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export abstract class UAStringUtil {
				public static class: java.lang.Class<com.urbanairship.util.UAStringUtil>;
				public static base64Decode(param0: string): native.Array<number>;
				public static equals(param0: string, param1: string): boolean;
				public static sha256Digest(param0: string): native.Array<number>;
				public static repeat(param0: string, param1: number, param2: string): string;
				public static base64DecodedString(param0: string): string;
				public static join(param0: java.util.Collection<string>, param1: string): string;
				public static isEmpty(param0: string): boolean;
				public constructor();
				public static sha256(param0: string): string;
				public static byteToHex(param0: native.Array<number>): string;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class UriUtils {
				public static class: java.lang.Class<com.urbanairship.util.UriUtils>;
				public static getQueryParameters(param0: globalAndroid.net.Uri): java.util.Map<string,java.util.List<string>>;
				public static parse(param0: any): globalAndroid.net.Uri;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class VersionUtils {
				public static class: java.lang.Class<com.urbanairship.util.VersionUtils>;
				public static createVersionPredicate(param0: com.urbanairship.json.ValueMatcher): com.urbanairship.json.JsonPredicate;
				public static createVersionObject(): com.urbanairship.json.JsonSerializable;
				public static createVersionObject(param0: number): com.urbanairship.json.JsonSerializable;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module util {
			export class ViewUtils {
				public static class: java.lang.Class<com.urbanairship.util.ViewUtils>;
				public static createTypeface(param0: globalAndroid.content.Context, param1: number): globalAndroid.graphics.Typeface;
				public static applyTextStyle(param0: globalAndroid.content.Context, param1: globalAndroid.widget.TextView, param2: number, param3: globalAndroid.graphics.Typeface): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module wallet {
			export class Callback {
				public static class: java.lang.Class<com.urbanairship.wallet.Callback>;
				/**
				 * Constructs a new instance of the com.urbanairship.wallet.Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onResult(param0: com.urbanairship.wallet.Pass): void;
					onError(param0: number): void;
				});
				public constructor();
				public onResult(param0: com.urbanairship.wallet.Pass): void;
				public onError(param0: number): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module wallet {
			export class CancelableCallback extends com.urbanairship.CancelableOperation {
				public static class: java.lang.Class<com.urbanairship.wallet.CancelableCallback>;
				public isDone(): boolean;
				public onCancel(): void;
				public constructor(param0: globalAndroid.os.Looper);
				public cancel(): boolean;
				public cancel(param0: boolean): boolean;
				public onRun(): void;
				public constructor(param0: com.urbanairship.wallet.Callback, param1: globalAndroid.os.Looper);
				public isCancelled(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module wallet {
			export class Field extends com.urbanairship.json.JsonSerializable {
				public static class: java.lang.Class<com.urbanairship.wallet.Field>;
				public toJsonValue(): com.urbanairship.json.JsonValue;
				public toString(): string;
			}
			export module Field {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.wallet.Field.Builder>;
					public setValue(param0: number): com.urbanairship.wallet.Field.Builder;
					public constructor();
					public setLabel(param0: string): com.urbanairship.wallet.Field.Builder;
					public setName(param0: string): com.urbanairship.wallet.Field.Builder;
					public setValue(param0: string): com.urbanairship.wallet.Field.Builder;
					public build(): com.urbanairship.wallet.Field;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module wallet {
			export class Pass {
				public static class: java.lang.Class<com.urbanairship.wallet.Pass>;
				public static CREATOR: globalAndroid.os.Parcelable.Creator<com.urbanairship.wallet.Pass>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public requestToSavePass(param0: globalAndroid.content.Context): void;
				public getId(): string;
				public describeContents(): number;
				public getPublicUri(): globalAndroid.net.Uri;
				public constructor(param0: globalAndroid.os.Parcel);
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module wallet {
			export class PassRequest {
				public static class: java.lang.Class<com.urbanairship.wallet.PassRequest>;
				public execute(param0: com.urbanairship.wallet.Callback): void;
				public static newBuilder(): com.urbanairship.wallet.PassRequest.Builder;
				public cancel(): void;
				public execute(param0: com.urbanairship.wallet.Callback, param1: globalAndroid.os.Looper): void;
				public toString(): string;
			}
			export module PassRequest {
				export class Builder {
					public static class: java.lang.Class<com.urbanairship.wallet.PassRequest.Builder>;
					public userName: string;
					public build(): com.urbanairship.wallet.PassRequest;
					public setExpirationDate(param0: string, param1: string): com.urbanairship.wallet.PassRequest.Builder;
					public constructor();
					public setBarcodeValue(param0: string, param1: string): com.urbanairship.wallet.PassRequest.Builder;
					public setTag(param0: string): com.urbanairship.wallet.PassRequest.Builder;
					public setAuth(param0: string, param1: string): com.urbanairship.wallet.PassRequest.Builder;
					public addField(param0: com.urbanairship.wallet.Field): com.urbanairship.wallet.PassRequest.Builder;
					public setBarcodeAltText(param0: string, param1: string): com.urbanairship.wallet.PassRequest.Builder;
					public setTemplateId(param0: string): com.urbanairship.wallet.PassRequest.Builder;
					public setExternalId(param0: string): com.urbanairship.wallet.PassRequest.Builder;
				}
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module widget {
			export class UAWebChromeClient {
				public static class: java.lang.Class<com.urbanairship.widget.UAWebChromeClient>;
				public onHideCustomView(): void;
				public constructor(param0: globalAndroid.app.Activity);
				public getDefaultVideoPoster(): globalAndroid.graphics.Bitmap;
				public onShowCustomView(param0: globalAndroid.view.View, param1: globalAndroid.webkit.WebChromeClient.CustomViewCallback): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module widget {
			export class UAWebView {
				public static class: java.lang.Class<com.urbanairship.widget.UAWebView>;
				public getCurrentMessage(): com.urbanairship.richpush.RichPushMessage;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
				public loadUrl(param0: string): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
				public loadRichPushMessage(param0: com.urbanairship.richpush.RichPushMessage): void;
				public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
				public loadDataWithBaseURL(param0: string, param1: string, param2: string, param3: string, param4: string): void;
				public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number, param3: number);
				public populateCustomJavascriptInterfaces(): void;
				public loadUrl(param0: string, param1: java.util.Map<string,string>): void;
				public constructor(param0: globalAndroid.content.Context);
				public loadData(param0: string, param1: string, param2: string): void;
				public initializeView(): void;
				public setWebViewClient(param0: globalAndroid.webkit.WebViewClient): void;
			}
		}
	}
}

declare module com {
	export module urbanairship {
		export module widget {
			export class UAWebViewClient {
				public static class: java.lang.Class<com.urbanairship.widget.UAWebViewClient>;
				public static UA_ACTION_SCHEME: string;
				public static RUN_BASIC_ACTIONS_COMMAND: string;
				public static RUN_ACTIONS_COMMAND: string;
				public static CLOSE_COMMAND: string;
				public onPageStarted(param0: globalAndroid.webkit.WebView, param1: string, param2: globalAndroid.graphics.Bitmap): void;
				public shouldOverrideUrlLoading(param0: globalAndroid.webkit.WebView, param1: string): boolean;
				public setActionCompletionCallback(param0: com.urbanairship.actions.ActionCompletionCallback): void;
				public onClose(param0: globalAndroid.webkit.WebView): void;
				public onPageFinished(param0: globalAndroid.webkit.WebView, param1: string): void;
				public onReceivedHttpAuthRequest(param0: globalAndroid.webkit.WebView, param1: globalAndroid.webkit.HttpAuthHandler, param2: string, param3: string): void;
				public constructor();
				public onLoadResource(param0: globalAndroid.webkit.WebView, param1: string): void;
			}
			export module UAWebViewClient {
				export class Credentials {
					public static class: java.lang.Class<com.urbanairship.widget.UAWebViewClient.Credentials>;
				}
				export class InjectJsBridgeTask extends globalAndroid.os.AsyncTask<java.lang.Void,java.lang.Void,string> {
					public static class: java.lang.Class<com.urbanairship.widget.UAWebViewClient.InjectJsBridgeTask>;
					public onPostExecute(param0: string): void;
					public doInBackground(param0: native.Array<java.lang.Void>): string;
				}
			}
		}
	}
}

//Generics information:
//com.urbanairship.PendingResult:1
//com.urbanairship.Predicate:1
//com.urbanairship.ResultCallback:1
//com.urbanairship.automation.AutomationDataManager.SetOperation:1
//com.urbanairship.automation.AutomationDriver:1
//com.urbanairship.automation.AutomationEngine:1
//com.urbanairship.automation.AutomationEngine.Builder:1
//com.urbanairship.automation.AutomationEngine.ScheduleExpiryListener:1
//com.urbanairship.automation.AutomationEngine.ScheduleRunnable:1
//com.urbanairship.automation.Schedule:1
//com.urbanairship.reactive.BiFunction:3
//com.urbanairship.reactive.Function:2
//com.urbanairship.reactive.Observable:1
//com.urbanairship.reactive.Observable.Holder:1
//com.urbanairship.reactive.Observable.ObservableTracker:1
//com.urbanairship.reactive.Observer:1
//com.urbanairship.reactive.Subject:1
//com.urbanairship.reactive.Subscriber:1
//com.urbanairship.reactive.Supplier:1
