
declare var AirshipVersionNumber: number;

declare var AirshipVersionString: interop.Reference<number>;

interface UAAccengageModuleLoaderFactory extends NSObjectProtocol {
}
declare var UAAccengageModuleLoaderFactory: {

	prototype: UAAccengageModuleLoaderFactory;

	moduleLoaderWithDataStoreChannelPushAnalytics(dataStore: UAPreferenceDataStore, channel: UAChannel, push: UAPush, analytics: UAAnalytics): UAModuleLoader;
};

declare class UAAccountEventTemplate extends NSObject {

	static alloc(): UAAccountEventTemplate; // inherited from NSObject

	static loggedInTemplate(): UAAccountEventTemplate;

	static loggedInTemplateWithValue(eventValue: number): UAAccountEventTemplate;

	static loggedInTemplateWithValueFromString(eventValue: string): UAAccountEventTemplate;

	static loggedOutTemplate(): UAAccountEventTemplate;

	static loggedOutTemplateWithValue(eventValue: number): UAAccountEventTemplate;

	static loggedOutTemplateWithValueFromString(eventValue: string): UAAccountEventTemplate;

	static new(): UAAccountEventTemplate; // inherited from NSObject

	static registeredTemplate(): UAAccountEventTemplate;

	static registeredTemplateWithValue(eventValue: number): UAAccountEventTemplate;

	static registeredTemplateWithValueFromString(eventValue: string): UAAccountEventTemplate;

	category: string;

	eventValue: NSDecimalNumber;

	transactionID: string;

	type: string;

	userID: string;

	createEvent(): UACustomEvent;
}

declare class UAAction extends NSObject {

	static action(): UAAction;

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAAction;

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAAction;

	static alloc(): UAAction; // inherited from NSObject

	static new(): UAAction; // inherited from NSObject

	acceptsArguments(_arguments: UAActionArguments): boolean;

	bind(bindBlock: (p1: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, p2: (p1: UAActionArguments) => boolean) => UAAction): UAAction;

	continueWith(continuationAction: UAAction): UAAction;

	didPerformWithArgumentsWithResult(_arguments: UAActionArguments, result: UAActionResult): void;

	filter(filterBlock: (p1: UAActionArguments) => boolean): UAAction;

	lift(liftBlock: (p1: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void) => (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAAction;

	liftTransformingPredicate(actionLiftBlock: (p1: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void) => (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateLiftBlock: (p1: (p1: UAActionArguments) => boolean) => (p1: UAActionArguments) => boolean): UAAction;

	map(mapArgumentsBlock: (p1: UAActionArguments) => UAActionArguments): UAAction;

	performWithArgumentsCompletionHandler(_arguments: UAActionArguments, completionHandler: (p1: UAActionResult) => void): void;

	postExecution(postExecutionBlock: (p1: UAActionArguments, p2: UAActionResult) => void): UAAction;

	preExecution(preExecutionBlock: (p1: UAActionArguments) => void): UAAction;

	willPerformWithArguments(_arguments: UAActionArguments): void;
}

declare class UAActionArguments extends NSObject {

	static alloc(): UAActionArguments; // inherited from NSObject

	static argumentsWithValueWithSituation(value: any, situation: UASituation): UAActionArguments;

	static argumentsWithValueWithSituationMetadata(value: any, situation: UASituation, metadata: NSDictionary<any, any>): UAActionArguments;

	static new(): UAActionArguments; // inherited from NSObject

	readonly metadata: NSDictionary<any, any>;

	readonly situation: UASituation;

	readonly value: any;
}

declare const enum UAActionFetchResult {

	NoData = 1,

	NewData = 0,

	Failed = 2
}

declare var UAActionMetadataForegroundPresentationKey: string;

declare var UAActionMetadataInboxMessageIDKey: string;

declare var UAActionMetadataPushPayloadKey: string;

declare var UAActionMetadataRegisteredName: string;

declare var UAActionMetadataResponseInfoKey: string;

declare var UAActionMetadataUserNotificationActionIDKey: string;

declare const enum UAActionOperatorErrorCode {

	ChildActionRejectedArgs = 0
}

declare var UAActionOperatorErrorDomain: string;

interface UAActionPredicateProtocol extends NSObjectProtocol {

	applyActionArguments(args: UAActionArguments): boolean;
}
declare var UAActionPredicateProtocol: {

	prototype: UAActionPredicateProtocol;

	predicate(): UAActionPredicateProtocol;
};

declare class UAActionRegistry extends NSObject {

	static alloc(): UAActionRegistry; // inherited from NSObject

	static defaultRegistry(): UAActionRegistry;

	static new(): UAActionRegistry; // inherited from NSObject

	readonly registeredEntries: NSSet<NSMutableDictionary<any, any>>;

	addNameForEntryWithName(name: string, entryName: string): boolean;

	addSituationOverrideForEntryWithNameAction(situation: UASituation, name: string, action: UAAction): boolean;

	registerActionClassName(actionClass: typeof NSObject, name: string): boolean;

	registerActionClassNamePredicate(actionClass: typeof NSObject, name: string, predicate: (p1: UAActionArguments) => boolean): boolean;

	registerActionClassNames(actionClass: typeof NSObject, names: NSArray<any> | any[]): boolean;

	registerActionClassNamesPredicate(actionClass: typeof NSObject, names: NSArray<any> | any[], predicate: (p1: UAActionArguments) => boolean): boolean;

	registerActionName(action: UAAction, name: string): boolean;

	registerActionNamePredicate(action: UAAction, name: string, predicate: (p1: UAActionArguments) => boolean): boolean;

	registerActionNames(action: UAAction, names: NSArray<any> | any[]): boolean;

	registerActionNamesPredicate(action: UAAction, names: NSArray<any> | any[], predicate: (p1: UAActionArguments) => boolean): boolean;

	registerActionsFromFile(path: string): void;

	registryEntryWithName(name: string): UAActionRegistryEntry;

	removeEntryWithName(name: string): boolean;

	removeName(name: string): boolean;

	updateActionClassForEntryWithName(actionClass: typeof NSObject, name: string): boolean;

	updateActionForEntryWithName(action: UAAction, name: string): boolean;

	updatePredicateForEntryWithName(predicate: (p1: UAActionArguments) => boolean, name: string): boolean;
}

declare class UAActionRegistryEntry extends NSObject {

	static alloc(): UAActionRegistryEntry; // inherited from NSObject

	static entryForActionClassPredicate(actionClass: typeof NSObject, predicate: (p1: UAActionArguments) => boolean): UAActionRegistryEntry;

	static entryForActionPredicate(action: UAAction, predicate: (p1: UAActionArguments) => boolean): UAActionRegistryEntry;

	static new(): UAActionRegistryEntry; // inherited from NSObject

	action: UAAction;

	readonly names: NSArray<string>;

	predicate: (p1: UAActionArguments) => boolean;

	actionForSituation(situation: UASituation): UAAction;
}

declare class UAActionResult extends NSObject {

	static alloc(): UAActionResult; // inherited from NSObject

	static emptyResult(): UAActionResult;

	static new(): UAActionResult; // inherited from NSObject

	static resultWithError(error: NSError): UAActionResult;

	static resultWithErrorWithFetchResult(error: NSError, fetchResult: UAActionFetchResult): UAActionResult;

	static resultWithValue(value: any): UAActionResult;

	static resultWithValueWithFetchResult(result: any, fetchResult: UAActionFetchResult): UAActionResult;

	readonly error: NSError;

	readonly fetchResult: UAActionFetchResult;

	readonly status: UAActionStatus;

	readonly value: any;
}

declare class UAActionRunner extends NSObject {

	static alloc(): UAActionRunner; // inherited from NSObject

	static new(): UAActionRunner; // inherited from NSObject

	static runActionValueSituation(action: UAAction, value: any, situation: UASituation): void;

	static runActionValueSituationCompletionHandler(action: UAAction, value: any, situation: UASituation, completionHandler: (p1: UAActionResult) => void): void;

	static runActionValueSituationMetadata(action: UAAction, value: any, situation: UASituation, metadata: NSDictionary<any, any>): void;

	static runActionValueSituationMetadataCompletionHandler(action: UAAction, value: any, situation: UASituation, metadata: NSDictionary<any, any>, completionHandler: (p1: UAActionResult) => void): void;

	static runActionWithNameValueSituation(actionName: string, value: any, situation: UASituation): void;

	static runActionWithNameValueSituationCompletionHandler(actionName: string, value: any, situation: UASituation, completionHandler: (p1: UAActionResult) => void): void;

	static runActionWithNameValueSituationMetadata(actionName: string, value: any, situation: UASituation, metadata: NSDictionary<any, any>): void;

	static runActionWithNameValueSituationMetadataCompletionHandler(actionName: string, value: any, situation: UASituation, metadata: NSDictionary<any, any>, completionHandler: (p1: UAActionResult) => void): void;

	static runActionsWithActionValuesSituationMetadataCompletionHandler(actionValues: NSDictionary<any, any>, situation: UASituation, metadata: NSDictionary<any, any>, completionHandler: (p1: UAActionResult) => void): void;
}

declare class UAActionSchedule extends UASchedule {

	static alloc(): UAActionSchedule; // inherited from NSObject

	static new(): UAActionSchedule; // inherited from NSObject

	static scheduleWithActionsBuilderBlock(actions: NSDictionary<any, any>, builderBlock: (p1: UAScheduleBuilder) => void): UAActionSchedule;

	readonly actions: NSDictionary<any, any>;

	readonly dataJSONString: string;
}

declare const enum UAActionStatus {

	Completed = 0,

	ArgumentsRejected = 1,

	ActionNotFound = 2,

	Error = 3
}

declare class UAActivityViewController extends UIActivityViewController implements UIPopoverControllerDelegate, UIPopoverPresentationControllerDelegate {

	static alloc(): UAActivityViewController; // inherited from NSObject

	static new(): UAActivityViewController; // inherited from NSObject

	dismissalBlock: () => void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	adaptivePresentationStyleForPresentationController(controller: UIPresentationController): UIModalPresentationStyle;

	adaptivePresentationStyleForPresentationControllerTraitCollection(controller: UIPresentationController, traitCollection: UITraitCollection): UIModalPresentationStyle;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	popoverControllerDidDismissPopover(popoverController: UIPopoverController): void;

	popoverControllerShouldDismissPopover(popoverController: UIPopoverController): boolean;

	popoverControllerWillRepositionPopoverToRectInView(popoverController: UIPopoverController, rect: interop.Pointer | interop.Reference<CGRect>, view: interop.Pointer | interop.Reference<UIView>): void;

	popoverPresentationControllerDidDismissPopover(popoverPresentationController: UIPopoverPresentationController): void;

	popoverPresentationControllerShouldDismissPopover(popoverPresentationController: UIPopoverPresentationController): boolean;

	popoverPresentationControllerWillRepositionPopoverToRectInView(popoverPresentationController: UIPopoverPresentationController, rect: interop.Pointer | interop.Reference<CGRect>, view: interop.Pointer | interop.Reference<UIView>): void;

	prepareForPopoverPresentation(popoverPresentationController: UIPopoverPresentationController): void;

	presentationControllerDidAttemptToDismiss(presentationController: UIPresentationController): void;

	presentationControllerDidDismiss(presentationController: UIPresentationController): void;

	presentationControllerShouldDismiss(presentationController: UIPresentationController): boolean;

	presentationControllerViewControllerForAdaptivePresentationStyle(controller: UIPresentationController, style: UIModalPresentationStyle): UIViewController;

	presentationControllerWillDismiss(presentationController: UIPresentationController): void;

	presentationControllerWillPresentWithAdaptiveStyleTransitionCoordinator(presentationController: UIPresentationController, style: UIModalPresentationStyle, transitionCoordinator: UIViewControllerTransitionCoordinator): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	sourceRect(): CGRect;
}

declare class UAAddCustomEventAction extends UAAction {

	static action(): UAAddCustomEventAction; // inherited from UAAction

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAAddCustomEventAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAAddCustomEventAction; // inherited from UAAction

	static alloc(): UAAddCustomEventAction; // inherited from NSObject

	static new(): UAAddCustomEventAction; // inherited from NSObject
}

declare var UAAddCustomEventActionDefaultRegistryName: string;

declare const enum UAAddCustomEventActionErrorCode {

	InvalidEventName = 0
}

declare var UAAddCustomEventActionErrorDomain: string;

declare class UAAddTagsAction extends UAModifyTagsAction {

	static action(): UAAddTagsAction; // inherited from UAAction

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAAddTagsAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAAddTagsAction; // inherited from UAAction

	static alloc(): UAAddTagsAction; // inherited from NSObject

	static new(): UAAddTagsAction; // inherited from NSObject
}

declare var UAAddTagsActionDefaultRegistryAlias: string;

declare var UAAddTagsActionDefaultRegistryName: string;

declare class UAAggregateActionResult extends UAActionResult {

	static alloc(): UAAggregateActionResult; // inherited from NSObject

	static emptyResult(): UAAggregateActionResult; // inherited from UAActionResult

	static new(): UAAggregateActionResult; // inherited from NSObject

	static resultWithError(error: NSError): UAAggregateActionResult; // inherited from UAActionResult

	static resultWithErrorWithFetchResult(error: NSError, fetchResult: UAActionFetchResult): UAAggregateActionResult; // inherited from UAActionResult

	static resultWithValue(value: any): UAAggregateActionResult; // inherited from UAActionResult

	static resultWithValueWithFetchResult(result: any, fetchResult: UAActionFetchResult): UAAggregateActionResult; // inherited from UAActionResult

	addResultForAction(result: UAActionResult, actionName: string): void;

	resultForAction(actionName: string): UAActionResult;
}

interface UAAirshipChatModuleLoaderFactory extends NSObjectProtocol {
}
declare var UAAirshipChatModuleLoaderFactory: {

	prototype: UAAirshipChatModuleLoaderFactory;

	moduleLoaderWithDataStoreConfigChannel(dataStore: UAPreferenceDataStore, config: UARuntimeConfig, channel: UAChannel): UAModuleLoader;
};

declare var UAAirshipReadyNotification: string;

declare class UAAnalytics extends UAComponent {

	static alloc(): UAAnalytics; // inherited from NSObject

	static new(): UAAnalytics; // inherited from NSObject

	static shared(): UAAnalytics; // inherited from UAComponent

	readonly conversionPushMetadata: string;

	readonly conversionSendID: string;

	enabled: boolean;

	eventConsumer: UAAnalyticsEventConsumerProtocol;

	readonly lastSendTime: Date;

	readonly sessionID: string;

	addEvent(event: UAEvent): void;

	associateDeviceIdentifiers(associatedIdentifiers: UAAssociatedIdentifiers): void;

	currentAssociatedDeviceIdentifiers(): UAAssociatedIdentifiers;

	registerSDKExtensionVersion(extension: UASDKExtension, version: string): void;

	scheduleUpload(): void;

	trackScreen(screen: string): void;
}

interface UAAnalyticsEventConsumerProtocol {

	eventAdded(event: UAEvent): void;
}
declare var UAAnalyticsEventConsumerProtocol: {

	prototype: UAAnalyticsEventConsumerProtocol;
};

declare class UAAnonymousObserver extends NSObject {

	static alloc(): UAAnonymousObserver; // inherited from NSObject

	static new(): UAAnonymousObserver; // inherited from NSObject

	readonly block: (p1: any) => void;

	readonly object: any;

	observeAtKeypathWithBlock(object: any, keyPath: string, block: (p1: any) => void): void;
}

declare class UAAppIntegration extends NSObject {

	static alloc(): UAAppIntegration; // inherited from NSObject

	static applicationDidFailToRegisterForRemoteNotificationsWithError(application: UIApplication, error: NSError): void;

	static applicationDidReceiveRemoteNotificationFetchCompletionHandler(application: UIApplication, userInfo: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	static applicationDidRegisterForRemoteNotificationsWithDeviceToken(application: UIApplication, deviceToken: NSData): void;

	static applicationPerformFetchWithCompletionHandler(application: UIApplication, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	static new(): UAAppIntegration; // inherited from NSObject

	static userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void): void;

	static userNotificationCenterWillPresentNotificationWithCompletionHandler(center: UNUserNotificationCenter, notification: UNNotification, completionHandler: (p1: UNNotificationPresentationOptions) => void): void;
}

declare class UAAppStateTracker extends NSObject {

	static alloc(): UAAppStateTracker; // inherited from NSObject

	static new(): UAAppStateTracker; // inherited from NSObject

	static shared(): UAAppStateTracker;

	readonly state: UAApplicationState;
}

declare var UAApplicationDidBecomeActiveNotification: string;

declare var UAApplicationDidEnterBackgroundNotification: string;

declare var UAApplicationDidFinishLaunchingNotification: string;

declare var UAApplicationDidTransitionToBackground: string;

declare var UAApplicationDidTransitionToForeground: string;

declare var UAApplicationLaunchOptionsRemoteNotificationKey: string;

declare class UAApplicationMetrics extends NSObject {

	static alloc(): UAApplicationMetrics; // inherited from NSObject

	static new(): UAApplicationMetrics; // inherited from NSObject

	readonly currentAppVersion: string;

	readonly isAppVersionUpdated: boolean;

	readonly lastApplicationOpenDate: Date;
}

declare const enum UAApplicationState {

	Active = 0,

	Inactive = 1,

	Background = 2
}

declare var UAApplicationWillEnterForegroundNotification: string;

declare var UAApplicationWillResignActiveNotification: string;

declare var UAApplicationWillTerminateNotification: string;

declare class UAAssociatedIdentifiers extends NSObject {

	static alloc(): UAAssociatedIdentifiers; // inherited from NSObject

	static identifiers(): UAAssociatedIdentifiers;

	static identifiersWithDictionary(identifiers: NSDictionary<string, string>): UAAssociatedIdentifiers;

	static new(): UAAssociatedIdentifiers; // inherited from NSObject

	advertisingID: string;

	advertisingTrackingEnabled: boolean;

	readonly allIDs: NSDictionary<any, any>;

	vendorID: string;

	setIdentifierForKey(identifier: string, key: string): void;
}

declare var UAAssociatedIdentifiersMaxCharacterCount: number;

declare var UAAssociatedIdentifiersMaxCount: number;

declare class UAAsyncOperation extends NSOperation {

	static alloc(): UAAsyncOperation; // inherited from NSObject

	static new(): UAAsyncOperation; // inherited from NSObject

	static operationWithBlock(block: (p1: UAAsyncOperation) => void): UAAsyncOperation;

	cancelBlock: () => void;

	finish(): void;

	startAsyncOperation(): void;
}

declare var UAAttributeAccountCreation: string;

declare var UAAttributeActionKey: string;

declare var UAAttributeAdvertisingId: string;

declare var UAAttributeAge: string;

declare var UAAttributeBirthdate: string;

declare var UAAttributeCity: string;

declare var UAAttributeCompany: string;

declare var UAAttributeCountry: string;

declare var UAAttributeEmail: string;

declare var UAAttributeFirstName: string;

declare var UAAttributeFullName: string;

declare var UAAttributeGender: string;

declare var UAAttributeHomePhone: string;

declare var UAAttributeLastName: string;

declare var UAAttributeLoyaltyTier: string;

declare var UAAttributeMobilePhone: string;

declare class UAAttributeMutations extends NSObject {

	static alloc(): UAAttributeMutations; // inherited from NSObject

	static mutations(): UAAttributeMutations;

	static new(): UAAttributeMutations; // inherited from NSObject

	removeAttribute(attribute: string): void;

	setDateForAttribute(date: Date, attribute: string): void;

	setNumberForAttribute(number: number, attribute: string): void;

	setStringForAttribute(string: string, attribute: string): void;
}

declare var UAAttributeNameKey: string;

declare var UAAttributePayloadKey: string;

declare class UAAttributePendingMutations extends NSObject implements NSCoding {

	static alloc(): UAAttributePendingMutations; // inherited from NSObject

	static collapseMutations(mutations: NSArray<UAAttributePendingMutations> | UAAttributePendingMutations[]): UAAttributePendingMutations;

	static new(): UAAttributePendingMutations; // inherited from NSObject

	static pendingMutationsWithMutationsDate(mutations: UAAttributeMutations, date: UADate): UAAttributePendingMutations;

	readonly mutationsPayload: NSArray<NSDictionary<any, any>>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	payload(): NSDictionary<any, any>;
}

declare var UAAttributeRegion: string;

declare var UAAttributeRemoveActionKey: string;

declare var UAAttributeSetActionKey: string;

declare var UAAttributeTimestampKey: string;

declare var UAAttributeTitle: string;

declare var UAAttributeUsername: string;

declare var UAAttributeValueKey: string;

declare var UAAttributeWorkPhone: string;

declare var UAAttributeZipCode: string;

declare class UAAttributes extends NSObject {

	static alloc(): UAAttributes; // inherited from NSObject

	static new(): UAAttributes; // inherited from NSObject
}

declare const enum UAAuthorizationStatus {

	NotDetermined = 0,

	Denied = 1,

	Authorized = 2,

	Provisional = 3,

	Ephemeral = 4
}

declare const enum UAAuthorizedNotificationSettings {

	None = 0,

	Badge = 1,

	Sound = 2,

	Alert = 4,

	CarPlay = 8,

	LockScreen = 16,

	NotificationCenter = 32,

	CriticalAlert = 64,

	Announcement = 128
}

declare class UAAutomationModuleLoader extends NSObject implements UAAutomationModuleLoaderFactory, UAModuleLoader {

	static alloc(): UAAutomationModuleLoader; // inherited from NSObject

	static inAppModuleLoaderWithDataStoreConfigChannelNamedUserAnalyticsRemoteDataProvider(dataStore: UAPreferenceDataStore, config: UARuntimeConfig, channel: UAChannel, namedUser: UANamedUser, analytics: UAAnalytics, remoteDataProvider: UARemoteDataProvider): UAModuleLoader;

	static new(): UAAutomationModuleLoader; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	components(): NSArray<UAComponent>;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerActions(registry: UAActionRegistry): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface UAAutomationModuleLoaderFactory extends NSObjectProtocol {
}
declare var UAAutomationModuleLoaderFactory: {

	prototype: UAAutomationModuleLoaderFactory;

	inAppModuleLoaderWithDataStoreConfigChannelNamedUserAnalyticsRemoteDataProvider(dataStore: UAPreferenceDataStore, config: UARuntimeConfig, channel: UAChannel, namedUser: UANamedUser, analytics: UAAnalytics, remoteDataProvider: UARemoteDataProvider): UAModuleLoader;
};

declare class UAAutomationResources extends NSObject {

	static alloc(): UAAutomationResources; // inherited from NSObject

	static bundle(): NSBundle;

	static new(): UAAutomationResources; // inherited from NSObject
}

declare var UABannerAdditionalPaddingKey: string;

declare var UABannerBodyStyleKey: string;

declare var UABannerButtonStyleKey: string;

declare var UABannerHeaderStyleKey: string;

declare var UABannerMaxWidthKey: string;

declare var UABannerMediaStyleKey: string;

declare var UABannerStyleFileName: string;

declare var UABannerTextStyleKey: string;

declare class UABespokeCloseView extends UIView {

	static alloc(): UABespokeCloseView; // inherited from NSObject

	static appearance(): UABespokeCloseView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UABespokeCloseView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UABespokeCloseView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): UABespokeCloseView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UABespokeCloseView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): UABespokeCloseView; // inherited from UIAppearance

	static new(): UABespokeCloseView; // inherited from NSObject
}

declare class UABeveledLoadingIndicator extends UIView {

	static alloc(): UABeveledLoadingIndicator; // inherited from NSObject

	static appearance(): UABeveledLoadingIndicator; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UABeveledLoadingIndicator; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UABeveledLoadingIndicator; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): UABeveledLoadingIndicator; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UABeveledLoadingIndicator; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): UABeveledLoadingIndicator; // inherited from UIAppearance

	static new(): UABeveledLoadingIndicator; // inherited from NSObject

	hide(): void;

	show(): void;
}

declare const enum UABoundaryEvent {

	Enter = 1,

	Exit = 2
}

declare var UAButtonAdditionalPaddingKey: string;

declare var UAButtonHeightKey: string;

declare class UACancelSchedulesAction extends UAAction {

	static action(): UACancelSchedulesAction; // inherited from UAAction

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UACancelSchedulesAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UACancelSchedulesAction; // inherited from UAAction

	static alloc(): UACancelSchedulesAction; // inherited from NSObject

	static new(): UACancelSchedulesAction; // inherited from NSObject
}

declare var UACancelSchedulesActionAll: string;

declare var UACancelSchedulesActionDefaultRegistryAlias: string;

declare var UACancelSchedulesActionDefaultRegistryName: string;

declare var UACancelSchedulesActionGroups: string;

declare var UACancelSchedulesActionIDs: string;

declare class UAChannel extends UAComponent {

	static alloc(): UAChannel; // inherited from NSObject

	static new(): UAChannel; // inherited from NSObject

	static shared(): UAChannel; // inherited from UAComponent

	channelTagRegistrationEnabled: boolean;

	readonly identifier: string;

	readonly pendingAttributes: UAAttributePendingMutations;

	readonly pendingTagGroups: NSArray<UATagGroupsMutation>;

	tags: NSArray<string>;

	addTag(tag: string): void;

	addTags(tags: NSArray<string> | string[]): void;

	addTagsGroup(tags: NSArray<string> | string[], tagGroupID: string): void;

	applyAttributeMutations(mutations: UAAttributeMutations): void;

	enableChannelCreation(): void;

	removeTag(tag: string): void;

	removeTags(tags: NSArray<string> | string[]): void;

	removeTagsGroup(tags: NSArray<string> | string[], tagGroupID: string): void;

	setTagsGroup(tags: NSArray<string> | string[], tagGroupID: string): void;

	updateRegistration(): void;
}

declare class UAChannelCapture extends NSObject {

	static alloc(): UAChannelCapture; // inherited from NSObject

	static new(): UAChannelCapture; // inherited from NSObject

	enabled: boolean;
}

declare var UAChannelCreatedEvent: string;

declare var UAChannelCreatedEventChannelKey: string;

declare var UAChannelCreatedEventExistingKey: string;

declare var UAChannelCreatedEventVar: string;

declare var UAChannelRegistrationFailedEvent: string;

declare class UAChannelRegistrationPayload extends NSObject implements NSCopying {

	static alloc(): UAChannelRegistrationPayload; // inherited from NSObject

	static new(): UAChannelRegistrationPayload; // inherited from NSObject

	SDKVersion: string;

	accengageDeviceID: string;

	appVersion: string;

	backgroundEnabled: boolean;

	badge: number;

	carrier: string;

	country: string;

	deviceID: string;

	deviceModel: string;

	deviceOS: string;

	language: string;

	locationSettings: number;

	namedUserId: string;

	optedIn: boolean;

	pushAddress: string;

	quietTime: NSDictionary<any, any>;

	quietTimeTimeZone: string;

	setTags: boolean;

	tags: NSArray<string>;

	timeZone: string;

	userID: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare var UAChannelUpdatedEvent: string;

declare var UAChannelUpdatedEventChannelKey: string;

declare var UAChannelUploadedAttributeMutationsNotification: string;

declare var UAChannelUploadedAudienceMutationNotificationDateKey: string;

declare var UAChannelUploadedAudienceMutationNotificationIdentifierKey: string;

declare var UAChannelUploadedAudienceMutationNotificationMutationKey: string;

declare var UAChannelUploadedTagGroupMutationNotification: string;

declare class UACircularRegion extends NSObject {

	static alloc(): UACircularRegion; // inherited from NSObject

	static circularRegionWithRadiusLatitudeLongitude(radius: number, latitude: number, longitude: number): UACircularRegion;

	static new(): UACircularRegion; // inherited from NSObject
}

declare const enum UACloudSite {

	US = 0,

	EU = 1
}

declare class UAColorUtils extends NSObject {

	static alloc(): UAColorUtils; // inherited from NSObject

	static colorWithHexString(hexString: string): UIColor;

	static hexStringWithColor(color: UIColor): string;

	static new(): UAColorUtils; // inherited from NSObject
}

declare class UAComponent extends NSObject {

	static alloc(): UAComponent; // inherited from NSObject

	static new(): UAComponent; // inherited from NSObject

	static shared(): UAComponent;

	readonly isDataCollectionEnabled: boolean;

	constructor(o: { dataStore: UAPreferenceDataStore; });

	airshipReady(airship: UAirship): void;

	applyRemoteConfig(config: any): void;

	componentEnabled(): boolean;

	initWithDataStore(dataStore: UAPreferenceDataStore): this;

	onComponentEnableChange(): void;

	onDataCollectionEnabledChanged(): void;
}

@NativeClass()
declare class UAConfig extends NSObject implements NSCopying {

	static alloc(): UAConfig; // inherited from NSObject

	static config(): UAConfig;

	static configWithContentsOfFile(path: string): UAConfig;

	static defaultConfig(): UAConfig;

	static new(): UAConfig; // inherited from NSObject

	URLAllowList: NSArray<string>;

	URLAllowListScopeJavaScriptInterface: NSArray<string>;

	URLAllowListScopeOpenURL: NSArray<string>;

	analyticsEnabled: boolean;

	analyticsURL: string;

	readonly appKey: string;

	readonly appSecret: string;

	automaticSetupEnabled: boolean;

	channelCaptureEnabled: boolean;

	channelCreationDelayEnabled: boolean;

	chatURL: string;

	chatWebSocketURL: string;

	clearNamedUserOnAppRestore: boolean;

	clearUserOnAppRestore: boolean;

	customConfig: NSDictionary<any, any>;

	dataCollectionOptInEnabled: boolean;

	defaultAppKey: string;

	defaultAppSecret: string;

	detectProvisioningMode: boolean;

	developmentAppKey: string;

	developmentAppSecret: string;

	developmentLogLevel: UALogLevel;

	deviceAPIURL: string;

	extendedBroadcastsEnabled: boolean;

	inProduction: boolean;

	itunesID: string;

	readonly logLevel: UALogLevel;

	messageCenterStyleConfig: string;

	productionAppKey: string;

	productionAppSecret: string;

	productionLogLevel: UALogLevel;

	remoteDataAPIURL: string;

	requestAuthorizationToUseNotifications: boolean;

	requireInitialRemoteConfigEnabled: boolean;

	site: UACloudSite;

	suppressAllowListError: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	validate(): boolean;
}

declare var UAConnectionTypeCell: string;

declare var UAConnectionTypeNone: string;

declare var UAConnectionTypeWifi: string;

declare class UACustomEvent extends UAEvent {

	static alloc(): UACustomEvent; // inherited from NSObject

	static eventWithName(eventName: string): UACustomEvent;

	static eventWithNameValue(eventName: string, eventValue: number): UACustomEvent;

	static eventWithNameValueFromString(eventName: string, eventValue: string): UACustomEvent;

	static new(): UACustomEvent; // inherited from NSObject

	eventName: string;

	eventValue: NSDecimalNumber;

	interactionID: string;

	interactionType: string;

	readonly payload: NSDictionary<any, any>;

	properties: NSDictionary<any, any>;

	transactionID: string;

	setInteractionFromMessageCenterMessage(messageID: string): void;

	track(): void;
}

declare var UACustomEventAdded: string;

declare var UACustomEventCharacterLimit: number;

declare var UACustomEventInteractionIDKey: string;

declare var UACustomEventInteractionTypeKey: string;

declare var UACustomEventMaxPropertiesCount: number;

declare var UACustomEventNameKey: string;

declare var UACustomEventPropertiesKey: string;

declare var UACustomEventTransactionIDKey: string;

declare var UACustomEventValueKey: string;

declare class UADate extends NSObject {

	static alloc(): UADate; // inherited from NSObject

	static new(): UADate; // inherited from NSObject

	readonly now: Date;
}

interface UADebugLibraryModuleLoaderFactory extends NSObjectProtocol {
}
declare var UADebugLibraryModuleLoaderFactory: {

	prototype: UADebugLibraryModuleLoaderFactory;

	debugLibraryModuleLoaderWithAnalytics(analytics: UAAnalytics): UAModuleLoader;
};

declare class UADeepLinkAction extends UAOpenExternalURLAction {

	static action(): UADeepLinkAction; // inherited from UAAction

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UADeepLinkAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UADeepLinkAction; // inherited from UAAction

	static alloc(): UADeepLinkAction; // inherited from NSObject

	static new(): UADeepLinkAction; // inherited from NSObject
}

declare var UADeepLinkActionDefaultRegistryAlias: string;

declare var UADeepLinkActionDefaultRegistryName: string;

interface UADeepLinkDelegate extends NSObjectProtocol {

	receivedDeepLinkCompletionHandler?(url: NSURL, completionHandler: () => void): void;
}
declare var UADeepLinkDelegate: {

	prototype: UADeepLinkDelegate;
};

declare class UADefaultMessageCenterListViewController extends UIViewController implements UIScrollViewDelegate, UITableViewDataSource, UITableViewDelegate {

	static alloc(): UADefaultMessageCenterListViewController; // inherited from NSObject

	static new(): UADefaultMessageCenterListViewController; // inherited from NSObject

	delegate: UAMessageCenterListViewDelegate;

	filter: NSPredicate;

	messageCenterStyle: UAMessageCenterStyle;

	selectedIndexPath: NSIndexPath;

	selectedMessageID: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidChangeAdjustedContentInset(scrollView: UIScrollView): void;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	sectionIndexTitlesForTableView(tableView: UITableView): NSArray<string>;

	self(): this;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewContextMenuConfigurationForRowAtIndexPathPoint(tableView: UITableView, indexPath: NSIndexPath, point: CGPoint): UIContextMenuConfiguration;

	tableViewDidBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndMultipleSelectionInteraction(tableView: UITableView): void;

	tableViewDidHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUpdateFocusInContextWithAnimationCoordinator(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	tableViewEditActionsForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewEstimatedHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewEstimatedHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewHeightForFooterInSection(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection(tableView: UITableView, section: number): number;

	tableViewHeightForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewIndentationLevelForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewPreviewForDismissingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewPreviewForHighlightingContextMenuWithConfiguration(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldBeginMultipleSelectionInteractionAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldSpringLoadRowAtIndexPathWithContext(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayContextMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillEndContextMenuInteractionWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating): void;

	tableViewWillPerformPreviewActionForMenuWithConfigurationAnimator(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class UADefaultMessageCenterMessageViewController extends UIViewController {

	static alloc(): UADefaultMessageCenterMessageViewController; // inherited from NSObject

	static new(): UADefaultMessageCenterMessageViewController; // inherited from NSObject

	delegate: UAMessageCenterMessageViewDelegate;

	disableMessageLinkPreviewAndCallouts: boolean;

	readonly message: UAInboxMessage;

	clearMessage(): void;

	loadMessageForID(messageID: string): void;
}

declare class UADefaultMessageCenterSplitViewController extends UISplitViewController implements UAMessageCenterListViewDelegate, UAMessageCenterMessageViewDelegate {

	static alloc(): UADefaultMessageCenterSplitViewController; // inherited from NSObject

	static new(): UADefaultMessageCenterSplitViewController; // inherited from NSObject

	disableMessageLinkPreviewAndCallouts: boolean;

	filter: NSPredicate;

	readonly listViewController: UADefaultMessageCenterListViewController;

	messageCenterStyle: UAMessageCenterStyle;

	readonly messageViewController: UADefaultMessageCenterMessageViewController;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didSelectMessageWithID(messageID: string): void;

	displayMessageForID(messageID: string): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	messageClosed(messageID: string): void;

	messageLoadFailedError(messageID: string, error: NSError): void;

	messageLoadStarted(messageID: string): void;

	messageLoadSucceeded(messageID: string): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldClearSelectionOnViewWillAppear(): boolean;
}

declare class UADefaultMessageCenterSplitViewDelegate extends NSObject implements UISplitViewControllerDelegate {

	static alloc(): UADefaultMessageCenterSplitViewDelegate; // inherited from NSObject

	static new(): UADefaultMessageCenterSplitViewDelegate; // inherited from NSObject

	constructor(o: { listViewController: UADefaultMessageCenterListViewController; });

	initWithListViewController(listViewController: UADefaultMessageCenterListViewController): this;

	primaryViewControllerForCollapsingSplitViewController(splitViewController: UISplitViewController): UIViewController;

	primaryViewControllerForExpandingSplitViewController(splitViewController: UISplitViewController): UIViewController;

	splitViewControllerCollapseSecondaryViewControllerOntoPrimaryViewController(splitViewController: UISplitViewController, secondaryViewController: UIViewController, primaryViewController: UIViewController): boolean;

	splitViewControllerDidCollapse(svc: UISplitViewController): void;

	splitViewControllerDidExpand(svc: UISplitViewController): void;

	splitViewControllerDisplayModeForExpandingToProposedDisplayMode(svc: UISplitViewController, proposedDisplayMode: UISplitViewControllerDisplayMode): UISplitViewControllerDisplayMode;

	splitViewControllerInteractivePresentationGestureDidEnd(svc: UISplitViewController): void;

	splitViewControllerInteractivePresentationGestureWillBegin(svc: UISplitViewController): void;

	splitViewControllerPopoverControllerWillPresentViewController(svc: UISplitViewController, pc: UIPopoverController, aViewController: UIViewController): void;

	splitViewControllerPreferredInterfaceOrientationForPresentation(splitViewController: UISplitViewController): UIInterfaceOrientation;

	splitViewControllerSeparateSecondaryViewControllerFromPrimaryViewController(splitViewController: UISplitViewController, primaryViewController: UIViewController): UIViewController;

	splitViewControllerShouldHideViewControllerInOrientation(svc: UISplitViewController, vc: UIViewController, orientation: UIInterfaceOrientation): boolean;

	splitViewControllerShowDetailViewControllerSender(splitViewController: UISplitViewController, vc: UIViewController, sender: any): boolean;

	splitViewControllerShowViewControllerSender(splitViewController: UISplitViewController, vc: UIViewController, sender: any): boolean;

	splitViewControllerSupportedInterfaceOrientations(splitViewController: UISplitViewController): UIInterfaceOrientationMask;

	splitViewControllerTopColumnForCollapsingToProposedTopColumn(svc: UISplitViewController, proposedTopColumn: UISplitViewControllerColumn): UISplitViewControllerColumn;

	splitViewControllerWillChangeToDisplayMode(svc: UISplitViewController, displayMode: UISplitViewControllerDisplayMode): void;

	splitViewControllerWillHideColumn(svc: UISplitViewController, column: UISplitViewControllerColumn): void;

	splitViewControllerWillHideViewControllerWithBarButtonItemForPopoverController(svc: UISplitViewController, aViewController: UIViewController, barButtonItem: UIBarButtonItem, pc: UIPopoverController): void;

	splitViewControllerWillShowColumn(svc: UISplitViewController, column: UISplitViewControllerColumn): void;

	splitViewControllerWillShowViewControllerInvalidatingBarButtonItem(svc: UISplitViewController, aViewController: UIViewController, barButtonItem: UIBarButtonItem): void;

	targetDisplayModeForActionInSplitViewController(svc: UISplitViewController): UISplitViewControllerDisplayMode;
}

declare class UADefaultMessageCenterUI extends NSObject implements UAMessageCenterDisplayDelegate {

	static alloc(): UADefaultMessageCenterUI; // inherited from NSObject

	static new(): UADefaultMessageCenterUI; // inherited from NSObject

	disableMessageLinkPreviewAndCallouts: boolean;

	filter: NSPredicate;

	messageCenterStyle: UAMessageCenterStyle;

	title: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dismissMessageCenterAnimated(animated: boolean): void;

	displayMessageCenterAnimated(animated: boolean): void;

	displayMessageCenterForMessageIDAnimated(messageID: string, animated: boolean): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class UADeferredSchedule extends UASchedule {

	static alloc(): UADeferredSchedule; // inherited from NSObject

	static new(): UADeferredSchedule; // inherited from NSObject

	readonly deferredData: UAScheduleDeferredData;
}

declare var UADeviceIDChangedNotification: string;

declare class UADispatcher extends NSObject {

	static alloc(): UADispatcher; // inherited from NSObject

	static globalDispatcher(): UADispatcher;

	static mainDispatcher(): UADispatcher;

	static new(): UADispatcher; // inherited from NSObject

	static serialDispatcher(): UADispatcher;

	dispatchAfterBlock(delay: number, block: () => void): UADisposable;

	dispatchAfterTimebaseBlock(delay: number, timebase: UADispatcherTimeBase, block: () => void): UADisposable;

	dispatchAsync(block: () => void): void;

	dispatchAsyncIfNecessary(block: () => void): void;

	dispatchSync(block: () => void): void;

	doSync(block: () => void): void;
}

declare const enum UADispatcherTimeBase {

	Wall = 0,

	System = 1
}

declare class UADisposable extends NSObject {

	static alloc(): UADisposable; // inherited from NSObject

	static disposableWithBlock(disposalBlock: () => void): UADisposable;

	static new(): UADisposable; // inherited from NSObject

	dispose(): void;
}

declare var UAEnableBackgroundLocationActionValue: string;

declare class UAEnableFeatureAction extends UAAction {

	static action(): UAEnableFeatureAction; // inherited from UAAction

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAEnableFeatureAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAEnableFeatureAction; // inherited from UAAction

	static alloc(): UAEnableFeatureAction; // inherited from NSObject

	static new(): UAEnableFeatureAction; // inherited from NSObject
}

declare var UAEnableFeatureActionDefaultRegistryAlias: string;

declare var UAEnableFeatureActionDefaultRegistryName: string;

declare var UAEnableLocationActionValue: string;

declare var UAEnableUserNotificationsActionValue: string;

declare class UAEvent extends NSObject {

	static alloc(): UAEvent; // inherited from NSObject

	static new(): UAEvent; // inherited from NSObject

	readonly data: NSDictionary<any, any>;

	eventData: NSDictionary<any, any>;

	readonly eventID: string;

	readonly eventType: string;

	readonly priority: UAEventPriority;

	readonly time: string;

	isValid(): boolean;
}

declare var UAEventKey: string;

declare const enum UAEventPriority {

	Low = 0,

	Normal = 1,

	High = 2
}

interface UAExtendableAnalyticsHeaders extends NSObjectProtocol {

	addAnalyticsHeadersBlock(headerBlock: () => NSDictionary<string, string>): void;
}
declare var UAExtendableAnalyticsHeaders: {

	prototype: UAExtendableAnalyticsHeaders;
};

interface UAExtendableChannelRegistration extends NSObjectProtocol {

	addChannelExtenderBlock(extender: (p1: UAChannelRegistrationPayload, p2: (p1: UAChannelRegistrationPayload) => void) => void): void;
}
declare var UAExtendableChannelRegistration: {

	prototype: UAExtendableChannelRegistration;
};

declare class UAExtendedActionsModuleLoader extends NSObject implements UAExtendedActionsModuleLoaderFactory, UAModuleLoader {

	static alloc(): UAExtendedActionsModuleLoader; // inherited from NSObject

	static extendedActionsModuleLoader(): UAModuleLoader;

	static new(): UAExtendedActionsModuleLoader; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	components(): NSArray<UAComponent>;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerActions(registry: UAActionRegistry): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface UAExtendedActionsModuleLoaderFactory extends NSObjectProtocol {
}
declare var UAExtendedActionsModuleLoaderFactory: {

	prototype: UAExtendedActionsModuleLoaderFactory;

	extendedActionsModuleLoader(): UAModuleLoader;
};

declare class UAExtendedActionsResources extends NSObject {

	static alloc(): UAExtendedActionsResources; // inherited from NSObject

	static bundle(): NSBundle;

	static new(): UAExtendedActionsResources; // inherited from NSObject
}

declare class UAFetchDeviceInfoAction extends UAAction {

	static action(): UAFetchDeviceInfoAction; // inherited from UAAction

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAFetchDeviceInfoAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAFetchDeviceInfoAction; // inherited from UAAction

	static alloc(): UAFetchDeviceInfoAction; // inherited from NSObject

	static new(): UAFetchDeviceInfoAction; // inherited from NSObject
}

declare var UAFetchDeviceInfoActionDefaultRegistryAlias: string;

declare var UAFetchDeviceInfoActionDefaultRegistryName: string;

declare var UAFullScreenBodyStyleKey: string;

declare var UAFullScreenButtonStyleKey: string;

declare var UAFullScreenDismissIconResourceKey: string;

declare var UAFullScreenHeaderStyleKey: string;

declare var UAFullScreenMediaStyleKey: string;

declare var UAFullScreenStyleFileName: string;

declare var UAFullScreenTextStyleKey: string;

declare var UAHTMLAdditionalPaddingKey: string;

declare var UAHTMLDismissIconResourceKey: string;

declare var UAHTMLHideDismissIconKey: string;

declare var UAHTMLMaxHeightKey: string;

declare var UAHTMLMaxWidthKey: string;

declare var UAHTMLStyleFileName: string;

declare class UAHTTPResponse extends NSObject {

	static alloc(): UAHTTPResponse; // inherited from NSObject

	static new(): UAHTTPResponse; // inherited from NSObject

	readonly status: number;

	constructor(o: { status: number; });

	initWithStatus(status: number): this;

	isClientError(): boolean;

	isServerError(): boolean;

	isSuccess(): boolean;
}

declare class UAInAppAutomation extends UAComponent {

	static alloc(): UAInAppAutomation; // inherited from NSObject

	static new(): UAInAppAutomation; // inherited from NSObject

	static shared(): UAInAppAutomation; // inherited from UAComponent

	enabled: boolean;

	readonly inAppMessageManager: UAInAppMessageManager;

	paused: boolean;

	cancelActionSchedulesWithGroupCompletionHandler(group: string, completionHandler: (p1: boolean) => void): void;

	cancelMessageSchedulesWithGroupCompletionHandler(group: string, completionHandler: (p1: boolean) => void): void;

	cancelScheduleWithIDCompletionHandler(scheduleID: string, completionHandler: (p1: boolean) => void): void;

	cancelSchedulesWithGroupCompletionHandler(group: string, completionHandler: (p1: boolean) => void): void;

	checkAudienceCompletionHandler(audience: UAScheduleAudience, completionHandler: (p1: boolean, p2: NSError) => void): void;

	editScheduleWithIDEditsCompletionHandler(identifier: string, edits: UAScheduleEdits, completionHandler: (p1: boolean) => void): void;

	getActionScheduleWithIDCompletionHandler(identifier: string, completionHandler: (p1: UAActionSchedule) => void): void;

	getActionSchedules(completionHandler: (p1: NSArray<UAActionSchedule>) => void): void;

	getActionSchedulesWithGroupCompletionHandler(group: string, completionHandler: (p1: NSArray<UAActionSchedule>) => void): void;

	getMessageScheduleWithIDCompletionHandler(identifier: string, completionHandler: (p1: UAInAppMessageSchedule) => void): void;

	getMessageSchedules(completionHandler: (p1: NSArray<UAInAppMessageSchedule>) => void): void;

	getMessageSchedulesWithGroupCompletionHandler(group: string, completionHandler: (p1: NSArray<UAInAppMessageSchedule>) => void): void;

	getSchedules(completionHandler: (p1: NSArray<UASchedule>) => void): void;

	scheduleCompletionHandler(schedule: UASchedule, completionHandler: (p1: boolean) => void): void;

	scheduleMultipleCompletionHandler(schedules: NSArray<UASchedule> | UASchedule[], completionHandler: (p1: boolean) => void): void;
}

declare class UAInAppMessage extends NSObject {

	static alloc(): UAInAppMessage; // inherited from NSObject

	static messageWithBuilderBlock(builderBlock: (p1: UAInAppMessageBuilder) => void): UAInAppMessage;

	static new(): UAInAppMessage; // inherited from NSObject

	readonly actions: NSDictionary<any, any>;

	readonly displayBehavior: string;

	readonly displayContent: UAInAppMessageDisplayContent;

	readonly displayType: UAInAppMessageDisplayType;

	readonly extras: NSDictionary<any, any>;

	readonly isReportingEnabled: boolean;

	readonly name: string;

	extend(builderBlock: (p1: UAInAppMessageBuilder) => void): UAInAppMessage;
}

interface UAInAppMessageAdapterProtocol extends NSObjectProtocol {

	display(completionHandler: (p1: UAInAppMessageResolution) => void): void;

	isReadyToDisplay(): boolean;

	prepareWithAssetsCompletionHandler(assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;
}
declare var UAInAppMessageAdapterProtocol: {

	prototype: UAInAppMessageAdapterProtocol;

	adapterForMessage(message: UAInAppMessage): UAInAppMessageAdapterProtocol;
};

declare class UAInAppMessageAssetManager extends NSObject {

	static alloc(): UAInAppMessageAssetManager; // inherited from NSObject

	static new(): UAInAppMessageAssetManager; // inherited from NSObject

	cachePolicyDelegate: UAInAppMessageCachePolicyDelegate;

	prepareAssetsDelegate: UAInAppMessagePrepareAssetsDelegate;
}

declare class UAInAppMessageAssets extends NSObject {

	static alloc(): UAInAppMessageAssets; // inherited from NSObject

	static new(): UAInAppMessageAssets; // inherited from NSObject

	getCacheURL(assetURL: NSURL): NSURL;

	isCached(assetURL: NSURL): boolean;
}

declare var UAInAppMessageBackgroundColorKey: string;

declare class UAInAppMessageBannerAdapter extends NSObject implements UAInAppMessageAdapterProtocol {

	static adapterForMessage(message: UAInAppMessage): UAInAppMessageBannerAdapter;

	static alloc(): UAInAppMessageBannerAdapter; // inherited from NSObject

	static new(): UAInAppMessageBannerAdapter; // inherited from NSObject

	style: UAInAppMessageBannerStyle;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	display(completionHandler: (p1: UAInAppMessageResolution) => void): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isReadyToDisplay(): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	prepareWithAssetsCompletionHandler(assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum UAInAppMessageBannerContentLayoutType {

	MediaLeft = 0,

	MediaRight = 1
}

declare class UAInAppMessageBannerDisplayContent extends UAInAppMessageDisplayContent {

	static alloc(): UAInAppMessageBannerDisplayContent; // inherited from NSObject

	static displayContentWithBuilderBlock(builderBlock: (p1: UAInAppMessageBannerDisplayContentBuilder) => void): UAInAppMessageBannerDisplayContent;

	static new(): UAInAppMessageBannerDisplayContent; // inherited from NSObject

	readonly actions: NSDictionary<any, any>;

	readonly backgroundColor: UIColor;

	readonly body: UAInAppMessageTextInfo;

	readonly borderRadiusPoints: number;

	readonly buttonLayout: UAInAppMessageButtonLayoutType;

	readonly buttons: NSArray<UAInAppMessageButtonInfo>;

	readonly contentLayout: UAInAppMessageBannerContentLayoutType;

	readonly dismissButtonColor: UIColor;

	readonly durationSeconds: number;

	readonly heading: UAInAppMessageTextInfo;

	readonly media: UAInAppMessageMediaInfo;

	readonly placement: UAInAppMessageBannerPlacementType;

	extend(builderBlock: (p1: UAInAppMessageBannerDisplayContentBuilder) => void): UAInAppMessageBannerDisplayContent;
}

declare class UAInAppMessageBannerDisplayContentBuilder extends NSObject {

	static alloc(): UAInAppMessageBannerDisplayContentBuilder; // inherited from NSObject

	static new(): UAInAppMessageBannerDisplayContentBuilder; // inherited from NSObject

	actions: NSDictionary<any, any>;

	backgroundColor: UIColor;

	body: UAInAppMessageTextInfo;

	borderRadiusPoints: number;

	buttonLayout: UAInAppMessageButtonLayoutType;

	buttons: NSArray<UAInAppMessageButtonInfo>;

	contentLayout: UAInAppMessageBannerContentLayoutType;

	dismissButtonColor: UIColor;

	durationSeconds: number;

	heading: UAInAppMessageTextInfo;

	media: UAInAppMessageMediaInfo;

	placement: UAInAppMessageBannerPlacementType;

	isValid(): boolean;
}

declare var UAInAppMessageBannerMaxButtons: number;

declare const enum UAInAppMessageBannerPlacementType {

	Top = 0,

	Bottom = 1
}

declare class UAInAppMessageBannerStyle extends NSObject implements UAInAppMessageStyleProtocol {

	static alloc(): UAInAppMessageBannerStyle; // inherited from NSObject

	static new(): UAInAppMessageBannerStyle; // inherited from NSObject

	static style(): UAInAppMessageBannerStyle;

	static styleWithContentsOfFile(path: string): UAInAppMessageBannerStyle;

	additionalPadding: UAPadding;

	bodyStyle: UAInAppMessageTextStyle;

	buttonStyle: UAInAppMessageButtonStyle;

	headerStyle: UAInAppMessageTextStyle;

	maxWidth: number;

	mediaStyle: UAInAppMessageMediaStyle;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var UAInAppMessageBodyKey: string;

declare var UAInAppMessageBorderRadiusKey: string;

declare class UAInAppMessageBuilder extends NSObject {

	static alloc(): UAInAppMessageBuilder; // inherited from NSObject

	static new(): UAInAppMessageBuilder; // inherited from NSObject

	actions: NSDictionary<any, any>;

	displayBehavior: string;

	displayContent: UAInAppMessageDisplayContent;

	extras: NSDictionary<any, any>;

	isReportingEnabled: boolean;

	name: string;

	isValid(): boolean;
}

declare class UAInAppMessageButtonInfo extends NSObject {

	static alloc(): UAInAppMessageButtonInfo; // inherited from NSObject

	static buttonInfoWithBuilderBlock(builderBlock: (p1: UAInAppMessageButtonInfoBuilder) => void): UAInAppMessageButtonInfo;

	static new(): UAInAppMessageButtonInfo; // inherited from NSObject

	readonly actions: NSDictionary<any, any>;

	readonly backgroundColor: UIColor;

	readonly behavior: UAInAppMessageButtonInfoBehaviorType;

	readonly borderColor: UIColor;

	readonly borderRadiusPoints: number;

	readonly identifier: string;

	readonly label: UAInAppMessageTextInfo;

	extend(builderBlock: (p1: UAInAppMessageButtonInfoBuilder) => void): UAInAppMessageButtonInfo;
}

declare const enum UAInAppMessageButtonInfoBehaviorType {

	Dismiss = 0,

	Cancel = 1
}

declare class UAInAppMessageButtonInfoBuilder extends NSObject {

	static alloc(): UAInAppMessageButtonInfoBuilder; // inherited from NSObject

	static new(): UAInAppMessageButtonInfoBuilder; // inherited from NSObject

	actions: NSDictionary<any, any>;

	backgroundColor: UIColor;

	behavior: UAInAppMessageButtonInfoBehaviorType;

	borderColor: UIColor;

	borderRadiusPoints: number;

	identifier: string;

	label: UAInAppMessageTextInfo;

	isValid(): boolean;
}

declare var UAInAppMessageButtonInfoIDLimit: number;

declare var UAInAppMessageButtonLayoutJoinedValue: string;

declare var UAInAppMessageButtonLayoutKey: string;

declare var UAInAppMessageButtonLayoutSeparateValue: string;

declare var UAInAppMessageButtonLayoutStackedValue: string;

declare const enum UAInAppMessageButtonLayoutType {

	Stacked = 0,

	Separate = 1,

	Joined = 2
}

declare class UAInAppMessageButtonStyle extends NSObject {

	static alloc(): UAInAppMessageButtonStyle; // inherited from NSObject

	static new(): UAInAppMessageButtonStyle; // inherited from NSObject

	static styleWithAdditionalPaddingButtonTextStyleButtonHeightStackedButtonSpacingSeparatedButtonSpacingBorderWidth(additionalPadding: UAPadding, textStyle: UAInAppMessageTextStyle, buttonHeight: number, stackedButtonSpacing: number, separatedButtonSpacing: number, borderWidth: number): UAInAppMessageButtonStyle;

	static styleWithDictionary(buttonStyle: NSDictionary<any, any>): UAInAppMessageButtonStyle;

	additionalPadding: UAPadding;

	borderWidth: number;

	buttonHeight: number;

	buttonTextStyle: UAInAppMessageTextStyle;

	separatedButtonSpacing: number;

	stackedButtonSpacing: number;
}

declare var UAInAppMessageButtonsKey: string;

interface UAInAppMessageCachePolicyDelegate extends NSObjectProtocol {

	shouldCacheOnSchedule(message: UAInAppMessage): boolean;

	shouldPersistCacheAfterDisplay(message: UAInAppMessage): boolean;
}
declare var UAInAppMessageCachePolicyDelegate: {

	prototype: UAInAppMessageCachePolicyDelegate;
};

declare var UAInAppMessageContentLayoutKey: string;

declare class UAInAppMessageCustomDisplayContent extends UAInAppMessageDisplayContent {

	static alloc(): UAInAppMessageCustomDisplayContent; // inherited from NSObject

	static displayContentWithValue(value: NSDictionary<any, any>): UAInAppMessageCustomDisplayContent;

	static new(): UAInAppMessageCustomDisplayContent; // inherited from NSObject

	readonly value: NSDictionary<any, any>;
}

declare class UAInAppMessageDefaultDisplayCoordinator extends NSObject implements UAInAppMessageDisplayCoordinator {

	static alloc(): UAInAppMessageDefaultDisplayCoordinator; // inherited from NSObject

	static coordinator(): UAInAppMessageDefaultDisplayCoordinator;

	static new(): UAInAppMessageDefaultDisplayCoordinator; // inherited from NSObject

	displayInterval: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly isReady: boolean; // inherited from UAInAppMessageDisplayCoordinator

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didBeginDisplayingMessage(message: UAInAppMessage): void;

	didFinishDisplayingMessage(message: UAInAppMessage): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class UAInAppMessageDefaultPrepareAssetsDelegate extends NSObject implements UAInAppMessagePrepareAssetsDelegate {

	static alloc(): UAInAppMessageDefaultPrepareAssetsDelegate; // inherited from NSObject

	static new(): UAInAppMessageDefaultPrepareAssetsDelegate; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	onPrepareAssetsCompletionHandler(message: UAInAppMessage, assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;

	onScheduleAssetsCompletionHandler(message: UAInAppMessage, assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var UAInAppMessageDismissButtonColorKey: string;

declare var UAInAppMessageDisplayBehaviorDefault: string;

declare var UAInAppMessageDisplayBehaviorImmediate: string;

declare class UAInAppMessageDisplayContent extends NSObject {

	static alloc(): UAInAppMessageDisplayContent; // inherited from NSObject

	static new(): UAInAppMessageDisplayContent; // inherited from NSObject

	readonly displayType: UAInAppMessageDisplayType;

	toJSON(): NSDictionary<any, any>;
}

interface UAInAppMessageDisplayCoordinator extends NSObjectProtocol {

	isReady: boolean;

	didBeginDisplayingMessage?(message: UAInAppMessage): void;

	didFinishDisplayingMessage?(message: UAInAppMessage): void;
}
declare var UAInAppMessageDisplayCoordinator: {

	prototype: UAInAppMessageDisplayCoordinator;
};

declare var UAInAppMessageDisplayCoordinatorIsReadyKey: string;

declare const enum UAInAppMessageDisplayType {

	Banner = 0,

	FullScreen = 1,

	Modal = 2,

	HTML = 3,

	Custom = 4
}

declare var UAInAppMessageDurationKey: string;

declare var UAInAppMessageFooterKey: string;

declare class UAInAppMessageFullScreenAdapter extends NSObject implements UAInAppMessageAdapterProtocol {

	static adapterForMessage(message: UAInAppMessage): UAInAppMessageFullScreenAdapter;

	static alloc(): UAInAppMessageFullScreenAdapter; // inherited from NSObject

	static new(): UAInAppMessageFullScreenAdapter; // inherited from NSObject

	style: UAInAppMessageFullScreenStyle;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	display(completionHandler: (p1: UAInAppMessageResolution) => void): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isReadyToDisplay(): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	prepareWithAssetsCompletionHandler(assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum UAInAppMessageFullScreenContentLayoutType {

	HeaderMediaBody = 0,

	MediaHeaderBody = 1,

	HeaderBodyMedia = 2
}

declare class UAInAppMessageFullScreenDisplayContent extends UAInAppMessageDisplayContent {

	static alloc(): UAInAppMessageFullScreenDisplayContent; // inherited from NSObject

	static displayContentWithBuilderBlock(builderBlock: (p1: UAInAppMessageFullScreenDisplayContentBuilder) => void): UAInAppMessageFullScreenDisplayContent;

	static new(): UAInAppMessageFullScreenDisplayContent; // inherited from NSObject

	readonly backgroundColor: UIColor;

	readonly body: UAInAppMessageTextInfo;

	readonly buttonLayout: UAInAppMessageButtonLayoutType;

	readonly buttons: NSArray<UAInAppMessageButtonInfo>;

	readonly contentLayout: UAInAppMessageFullScreenContentLayoutType;

	readonly dismissButtonColor: UIColor;

	readonly footer: UAInAppMessageButtonInfo;

	readonly heading: UAInAppMessageTextInfo;

	readonly media: UAInAppMessageMediaInfo;

	extend(builderBlock: (p1: UAInAppMessageFullScreenDisplayContentBuilder) => void): UAInAppMessageFullScreenDisplayContent;
}

declare class UAInAppMessageFullScreenDisplayContentBuilder extends NSObject {

	static alloc(): UAInAppMessageFullScreenDisplayContentBuilder; // inherited from NSObject

	static new(): UAInAppMessageFullScreenDisplayContentBuilder; // inherited from NSObject

	backgroundColor: UIColor;

	body: UAInAppMessageTextInfo;

	buttonLayout: UAInAppMessageButtonLayoutType;

	buttons: NSArray<UAInAppMessageButtonInfo>;

	contentLayout: UAInAppMessageFullScreenContentLayoutType;

	dismissButtonColor: UIColor;

	footer: UAInAppMessageButtonInfo;

	heading: UAInAppMessageTextInfo;

	media: UAInAppMessageMediaInfo;

	isValid(): boolean;
}

declare var UAInAppMessageFullScreenMaxButtons: number;

declare class UAInAppMessageFullScreenStyle extends NSObject implements UAInAppMessageStyleProtocol {

	static alloc(): UAInAppMessageFullScreenStyle; // inherited from NSObject

	static new(): UAInAppMessageFullScreenStyle; // inherited from NSObject

	static style(): UAInAppMessageFullScreenStyle;

	static styleWithContentsOfFile(path: string): UAInAppMessageFullScreenStyle;

	bodyStyle: UAInAppMessageTextStyle;

	buttonStyle: UAInAppMessageButtonStyle;

	dismissIconResource: string;

	headerStyle: UAInAppMessageTextStyle;

	mediaStyle: UAInAppMessageMediaStyle;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class UAInAppMessageHTMLAdapter extends NSObject implements UAInAppMessageAdapterProtocol {

	static adapterForMessage(message: UAInAppMessage): UAInAppMessageHTMLAdapter;

	static alloc(): UAInAppMessageHTMLAdapter; // inherited from NSObject

	static new(): UAInAppMessageHTMLAdapter; // inherited from NSObject

	style: UAInAppMessageHTMLStyle;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	display(completionHandler: (p1: UAInAppMessageResolution) => void): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isReadyToDisplay(): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	prepareWithAssetsCompletionHandler(assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var UAInAppMessageHTMLAllowsFullScreenKey: string;

declare var UAInAppMessageHTMLAspectLockKey: string;

declare class UAInAppMessageHTMLDisplayContent extends UAInAppMessageDisplayContent {

	static alloc(): UAInAppMessageHTMLDisplayContent; // inherited from NSObject

	static displayContentWithBuilderBlock(builderBlock: (p1: UAInAppMessageHTMLDisplayContentBuilder) => void): UAInAppMessageHTMLDisplayContent;

	static new(): UAInAppMessageHTMLDisplayContent; // inherited from NSObject

	readonly allowFullScreenDisplay: boolean;

	readonly aspectLock: boolean;

	readonly backgroundColor: UIColor;

	readonly borderRadiusPoints: number;

	readonly dismissButtonColor: UIColor;

	readonly height: number;

	readonly requireConnectivity: boolean;

	readonly url: string;

	readonly width: number;

	extend(builderBlock: (p1: UAInAppMessageHTMLDisplayContentBuilder) => void): UAInAppMessageHTMLDisplayContent;
}

declare class UAInAppMessageHTMLDisplayContentBuilder extends NSObject {

	static alloc(): UAInAppMessageHTMLDisplayContentBuilder; // inherited from NSObject

	static new(): UAInAppMessageHTMLDisplayContentBuilder; // inherited from NSObject

	allowFullScreenDisplay: boolean;

	aspectLock: boolean;

	backgroundColor: UIColor;

	borderRadiusPoints: number;

	dismissButtonColor: UIColor;

	height: number;

	requiresConnectivity: boolean;

	url: string;

	width: number;

	isValid(): boolean;
}

declare var UAInAppMessageHTMLHeightKey: string;

declare var UAInAppMessageHTMLRequireConnectivityKey: string;

declare class UAInAppMessageHTMLStyle extends NSObject implements UAInAppMessageStyleProtocol {

	static alloc(): UAInAppMessageHTMLStyle; // inherited from NSObject

	static new(): UAInAppMessageHTMLStyle; // inherited from NSObject

	static style(): UAInAppMessageHTMLStyle;

	static styleWithContentsOfFile(path: string): UAInAppMessageHTMLStyle;

	additionalPadding: UAPadding;

	dismissIconResource: string;

	hideDismissIcon: boolean;

	maxHeight: number;

	maxWidth: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var UAInAppMessageHTMLWidthKey: string;

declare var UAInAppMessageHeadingKey: string;

declare class UAInAppMessageImmediateDisplayCoordinator extends NSObject implements UAInAppMessageDisplayCoordinator {

	static alloc(): UAInAppMessageImmediateDisplayCoordinator; // inherited from NSObject

	static coordinator(): UAInAppMessageImmediateDisplayCoordinator;

	static new(): UAInAppMessageImmediateDisplayCoordinator; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly isReady: boolean; // inherited from UAInAppMessageDisplayCoordinator

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didBeginDisplayingMessage(message: UAInAppMessage): void;

	didFinishDisplayingMessage(message: UAInAppMessage): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class UAInAppMessageManager extends NSObject {

	static alloc(): UAInAppMessageManager; // inherited from NSObject

	static new(): UAInAppMessageManager; // inherited from NSObject

	readonly assetManager: UAInAppMessageAssetManager;

	delegate: UAInAppMessagingDelegate;

	displayInterval: number;

	setFactoryBlockForDisplayType(factory: (p1: UAInAppMessage) => UAInAppMessageAdapterProtocol, displayType: UAInAppMessageDisplayType): void;
}

declare class UAInAppMessageMediaInfo extends NSObject {

	static alloc(): UAInAppMessageMediaInfo; // inherited from NSObject

	static mediaInfoWithURLContentDescriptionType(url: string, contentDescription: string, type: UAInAppMessageMediaInfoType): UAInAppMessageMediaInfo;

	static new(): UAInAppMessageMediaInfo; // inherited from NSObject

	readonly contentDescription: string;

	readonly type: UAInAppMessageMediaInfoType;

	readonly url: string;
}

declare const enum UAInAppMessageMediaInfoType {

	Image = 0,

	Video = 1,

	YouTube = 2
}

declare var UAInAppMessageMediaKey: string;

declare class UAInAppMessageMediaStyle extends NSObject {

	static alloc(): UAInAppMessageMediaStyle; // inherited from NSObject

	static new(): UAInAppMessageMediaStyle; // inherited from NSObject

	static styleWithAdditionalPadding(additionalPadding: UAPadding): UAInAppMessageMediaStyle;

	static styleWithDictionary(mediaStyleDict: NSDictionary<any, any>): UAInAppMessageMediaStyle;

	additionalPadding: UAPadding;
}

declare class UAInAppMessageModalAdapter extends NSObject implements UAInAppMessageAdapterProtocol {

	static adapterForMessage(message: UAInAppMessage): UAInAppMessageModalAdapter;

	static alloc(): UAInAppMessageModalAdapter; // inherited from NSObject

	static new(): UAInAppMessageModalAdapter; // inherited from NSObject

	style: UAInAppMessageModalStyle;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	display(completionHandler: (p1: UAInAppMessageResolution) => void): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isReadyToDisplay(): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	prepareWithAssetsCompletionHandler(assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var UAInAppMessageModalAllowsFullScreenKey: string;

declare const enum UAInAppMessageModalContentLayoutType {

	HeaderMediaBody = 0,

	MediaHeaderBody = 1,

	HeaderBodyMedia = 2
}

declare class UAInAppMessageModalDisplayContent extends UAInAppMessageDisplayContent {

	static alloc(): UAInAppMessageModalDisplayContent; // inherited from NSObject

	static displayContentWithBuilderBlock(builderBlock: (p1: UAInAppMessageModalDisplayContentBuilder) => void): UAInAppMessageModalDisplayContent;

	static new(): UAInAppMessageModalDisplayContent; // inherited from NSObject

	readonly allowFullScreenDisplay: boolean;

	readonly backgroundColor: UIColor;

	readonly body: UAInAppMessageTextInfo;

	readonly borderRadiusPoints: number;

	readonly buttonLayout: UAInAppMessageButtonLayoutType;

	readonly buttons: NSArray<UAInAppMessageButtonInfo>;

	readonly contentLayout: UAInAppMessageModalContentLayoutType;

	readonly dismissButtonColor: UIColor;

	readonly footer: UAInAppMessageButtonInfo;

	readonly heading: UAInAppMessageTextInfo;

	readonly media: UAInAppMessageMediaInfo;

	extend(builderBlock: (p1: UAInAppMessageModalDisplayContentBuilder) => void): UAInAppMessageModalDisplayContent;
}

declare class UAInAppMessageModalDisplayContentBuilder extends NSObject {

	static alloc(): UAInAppMessageModalDisplayContentBuilder; // inherited from NSObject

	static new(): UAInAppMessageModalDisplayContentBuilder; // inherited from NSObject

	allowFullScreenDisplay: boolean;

	backgroundColor: UIColor;

	body: UAInAppMessageTextInfo;

	borderRadiusPoints: number;

	buttonLayout: UAInAppMessageButtonLayoutType;

	buttons: NSArray<UAInAppMessageButtonInfo>;

	contentLayout: UAInAppMessageModalContentLayoutType;

	dismissButtonColor: UIColor;

	footer: UAInAppMessageButtonInfo;

	heading: UAInAppMessageTextInfo;

	media: UAInAppMessageMediaInfo;

	isValid(): boolean;
}

declare var UAInAppMessageModalMaxButtons: number;

declare class UAInAppMessageModalStyle extends NSObject implements UAInAppMessageStyleProtocol {

	static alloc(): UAInAppMessageModalStyle; // inherited from NSObject

	static new(): UAInAppMessageModalStyle; // inherited from NSObject

	static style(): UAInAppMessageModalStyle;

	static styleWithContentsOfFile(path: string): UAInAppMessageModalStyle;

	additionalPadding: UAPadding;

	bodyStyle: UAInAppMessageTextStyle;

	buttonStyle: UAInAppMessageButtonStyle;

	dismissIconResource: string;

	headerStyle: UAInAppMessageTextStyle;

	maxHeight: number;

	maxWidth: number;

	mediaStyle: UAInAppMessageMediaStyle;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var UAInAppMessageNameLimit: number;

declare var UAInAppMessagePlacementKey: string;

interface UAInAppMessagePrepareAssetsDelegate extends NSObjectProtocol {

	onPrepareAssetsCompletionHandler(message: UAInAppMessage, assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;

	onScheduleAssetsCompletionHandler(message: UAInAppMessage, assets: UAInAppMessageAssets, completionHandler: (p1: UAInAppMessagePrepareResult) => void): void;
}
declare var UAInAppMessagePrepareAssetsDelegate: {

	prototype: UAInAppMessagePrepareAssetsDelegate;
};

declare const enum UAInAppMessagePrepareResult {

	Success = 0,

	Retry = 1,

	Cancel = 2,

	Invalidate = 3
}

declare class UAInAppMessageResolution extends NSObject {

	static alloc(): UAInAppMessageResolution; // inherited from NSObject

	static buttonClickResolutionWithButtonInfo(buttonInfo: UAInAppMessageButtonInfo): UAInAppMessageResolution;

	static messageClickResolution(): UAInAppMessageResolution;

	static new(): UAInAppMessageResolution; // inherited from NSObject

	static timedOutResolution(): UAInAppMessageResolution;

	static userDismissedResolution(): UAInAppMessageResolution;

	readonly buttonInfo: UAInAppMessageButtonInfo;

	readonly type: UAInAppMessageResolutionType;
}

declare const enum UAInAppMessageResolutionType {

	ButtonClick = 0,

	MessageClick = 1,

	UserDismissed = 2,

	TimedOut = 3
}

interface UAInAppMessageSceneDelegate extends NSObjectProtocol {

	sceneForMessageDefaultScene?(message: UAInAppMessage, defaultScene: UIWindowScene): UIWindowScene;
}
declare var UAInAppMessageSceneDelegate: {

	prototype: UAInAppMessageSceneDelegate;
};

declare class UAInAppMessageSceneManager extends NSObject {

	static alloc(): UAInAppMessageSceneManager; // inherited from NSObject

	static new(): UAInAppMessageSceneManager; // inherited from NSObject

	static shared(): UAInAppMessageSceneManager;

	delegate: UAInAppMessageSceneDelegate;

	sceneForMessage(message: UAInAppMessage): UIWindowScene;
}

declare class UAInAppMessageSchedule extends UASchedule {

	static alloc(): UAInAppMessageSchedule; // inherited from NSObject

	static new(): UAInAppMessageSchedule; // inherited from NSObject

	static scheduleWithMessageBuilderBlock(message: UAInAppMessage, builderBlock: (p1: UAScheduleBuilder) => void): UAInAppMessageSchedule;

	readonly message: UAInAppMessage;
}

interface UAInAppMessageStyleProtocol extends NSObjectProtocol {
}
declare var UAInAppMessageStyleProtocol: {

	prototype: UAInAppMessageStyleProtocol;

	style(): UAInAppMessageStyleProtocol;

	styleWithContentsOfFile(path: string): UAInAppMessageStyleProtocol;
};

declare class UAInAppMessageTextInfo extends NSObject {

	static alloc(): UAInAppMessageTextInfo; // inherited from NSObject

	static new(): UAInAppMessageTextInfo; // inherited from NSObject

	static textInfoWithBuilderBlock(builderBlock: (p1: UAInAppMessageTextInfoBuilder) => void): UAInAppMessageTextInfo;

	readonly alignment: UAInAppMessageTextInfoAlignmentType;

	readonly color: UIColor;

	readonly fontFamilies: NSArray<string>;

	readonly sizePoints: number;

	readonly style: UAInAppMessageTextInfoStyleType;

	readonly text: string;

	extend(builderBlock: (p1: UAInAppMessageTextInfoBuilder) => void): UAInAppMessageTextInfo;
}

declare const enum UAInAppMessageTextInfoAlignmentType {

	None = 0,

	Left = 1,

	Center = 2,

	Right = 3
}

declare class UAInAppMessageTextInfoBuilder extends NSObject {

	static alloc(): UAInAppMessageTextInfoBuilder; // inherited from NSObject

	static new(): UAInAppMessageTextInfoBuilder; // inherited from NSObject

	alignment: UAInAppMessageTextInfoAlignmentType;

	color: UIColor;

	fontFamilies: NSArray<string>;

	sizePoints: number;

	style: UAInAppMessageTextInfoStyleType;

	text: string;

	isValid(): boolean;
}

declare const enum UAInAppMessageTextInfoStyleType {

	Normal = 0,

	Bold = 1,

	Italic = 2,

	Underline = 4
}

declare class UAInAppMessageTextStyle extends NSObject {

	static alloc(): UAInAppMessageTextStyle; // inherited from NSObject

	static new(): UAInAppMessageTextStyle; // inherited from NSObject

	static styleWithAdditionalPaddingLetterSpacingLineSpacing(additionalPadding: UAPadding, letterSpacing: number, lineSpacing: number): UAInAppMessageTextStyle;

	static styleWithDictionary(textStyle: NSDictionary<any, any>): UAInAppMessageTextStyle;

	additionalPadding: UAPadding;

	letterSpacing: number;

	lineSpacing: number;
}

declare var UAInAppMessageURLKey: string;

interface UAInAppMessagingDelegate extends NSObjectProtocol {

	displayCoordinatorForMessage?(message: UAInAppMessage): UAInAppMessageDisplayCoordinator;

	extendMessage?(message: UAInAppMessage): UAInAppMessage;

	messageFinishedDisplayingScheduleIDResolution?(message: UAInAppMessage, scheduleID: string, resolution: UAInAppMessageResolution): void;

	messageWillBeDisplayedScheduleID?(message: UAInAppMessage, scheduleID: string): void;

	sceneForMessageDefaultScene?(message: UAInAppMessage, defaultScene: UIWindowScene): UIWindowScene;
}
declare var UAInAppMessagingDelegate: {

	prototype: UAInAppMessagingDelegate;
};

declare class UAInboxMessage extends NSObject {

	static alloc(): UAInboxMessage; // inherited from NSObject

	static new(): UAInboxMessage; // inherited from NSObject

	readonly contentType: string;

	readonly deleted: boolean;

	readonly extra: NSDictionary<any, any>;

	readonly messageBodyURL: NSURL;

	readonly messageExpiration: Date;

	readonly messageID: string;

	readonly messageList: UAInboxMessageList;

	readonly messageSent: Date;

	readonly messageURL: NSURL;

	readonly rawMessageObject: NSDictionary<any, any>;

	readonly title: string;

	readonly unread: boolean;

	isExpired(): boolean;

	markMessageReadWithCompletionHandler(completionHandler: (p1: UAInboxMessage) => void): UADisposable;
}

declare class UAInboxMessageList extends NSObject {

	static alloc(): UAInboxMessageList; // inherited from NSObject

	static new(): UAInboxMessageList; // inherited from NSObject

	readonly isBatchUpdating: boolean;

	readonly isRetrieving: boolean;

	readonly messages: NSArray<UAInboxMessage>;

	unreadCount: number;

	markMessagesDeletedCompletionHandler(messages: NSArray<any> | any[], completionHandler: () => void): UADisposable;

	markMessagesReadCompletionHandler(messages: NSArray<any> | any[], completionHandler: () => void): UADisposable;

	messageCount(): number;

	messageForBodyURL(url: NSURL): UAInboxMessage;

	messageForID(messageID: string): UAInboxMessage;

	messagesFilteredUsingPredicate(predicate: NSPredicate): NSArray<UAInboxMessage>;

	retrieveMessageListWithSuccessBlockWithFailureBlock(successBlock: () => void, failureBlock: () => void): UADisposable;
}

declare var UAInboxMessageListUpdatedNotification: string;

declare var UAInboxMessageListWillUpdateNotification: string;

declare class UAInboxUtils extends NSObject {

	static alloc(): UAInboxUtils; // inherited from NSObject

	static inboxMessageIDFromNotification(notification: NSDictionary<any, any>): string;

	static inboxMessageIDFromValue(values: any): string;

	static new(): UAInboxUtils; // inherited from NSObject

	static userAuthHeaderString(userData: UAUserData): string;
}

declare class UAInstallAttributionEvent extends UAEvent {

	static alloc(): UAInstallAttributionEvent; // inherited from NSObject

	static event(): UAInstallAttributionEvent;

	static eventWithAppPurchaseDateIAdImpressionDate(appPurchaseDate: Date, iAdImpressionDate: Date): UAInstallAttributionEvent;

	static new(): UAInstallAttributionEvent; // inherited from NSObject
}

declare class UAJSONMatcher extends NSObject {

	static alloc(): UAJSONMatcher; // inherited from NSObject

	static matcherWithJSONError(json: any): UAJSONMatcher;

	static matcherWithValueMatcher(valueMatcher: UAJSONValueMatcher): UAJSONMatcher;

	static matcherWithValueMatcherScope(valueMatcher: UAJSONValueMatcher, scope: NSArray<string> | string[]): UAJSONMatcher;

	static new(): UAJSONMatcher; // inherited from NSObject

	readonly payload: NSDictionary<any, any>;

	evaluateObject(object: any): boolean;
}

declare const enum UAJSONMatcherErrorCode {

	InvalidJSON = 0
}

declare var UAJSONMatcherErrorDomain: string;

declare class UAJSONPredicate extends NSObject {

	static alloc(): UAJSONPredicate; // inherited from NSObject

	static andPredicateWithSubpredicates(subpredicates: NSArray<UAJSONPredicate> | UAJSONPredicate[]): UAJSONPredicate;

	static new(): UAJSONPredicate; // inherited from NSObject

	static notPredicateWithSubpredicate(subpredicate: UAJSONPredicate): UAJSONPredicate;

	static orPredicateWithSubpredicates(subpredicates: NSArray<UAJSONPredicate> | UAJSONPredicate[]): UAJSONPredicate;

	static predicateWithJSONError(json: any): UAJSONPredicate;

	static predicateWithJSONMatcher(matcher: UAJSONMatcher): UAJSONPredicate;

	readonly payload: NSDictionary<any, any>;

	evaluateObject(object: any): boolean;
}

declare const enum UAJSONPredicateErrorCode {

	InvalidJSON = 0
}

declare var UAJSONPredicateErrorDomain: string;

declare class UAJSONSerialization extends NSObject {

	static alloc(): UAJSONSerialization; // inherited from NSObject

	static dataWithJSONObjectOptionsError(obj: any, opt: NSJSONWritingOptions): NSData;

	static new(): UAJSONSerialization; // inherited from NSObject
}

declare const enum UAJSONSerializationErrorCode {

	InvalidObject = 0
}

declare var UAJSONSerializationErrorDomain: string;

declare class UAJSONValueMatcher extends NSObject {

	static alloc(): UAJSONValueMatcher; // inherited from NSObject

	static matcherWhereBooleanEquals(boolean: boolean): UAJSONValueMatcher;

	static matcherWhereNumberAtLeast(number: number): UAJSONValueMatcher;

	static matcherWhereNumberAtLeastAtMost(lowerNumber: number, higherNumber: number): UAJSONValueMatcher;

	static matcherWhereNumberAtMost(number: number): UAJSONValueMatcher;

	static matcherWhereNumberEquals(number: number): UAJSONValueMatcher;

	static matcherWhereStringEquals(string: string): UAJSONValueMatcher;

	static matcherWhereValueIsPresent(present: boolean): UAJSONValueMatcher;

	static matcherWithArrayContainsPredicate(predicate: UAJSONPredicate): UAJSONValueMatcher;

	static matcherWithArrayContainsPredicateAtIndex(predicate: UAJSONPredicate, index: number): UAJSONValueMatcher;

	static matcherWithJSONError(json: any): UAJSONValueMatcher;

	static matcherWithVersionConstraint(versionConstraint: string): UAJSONValueMatcher;

	static new(): UAJSONValueMatcher; // inherited from NSObject

	readonly payload: NSDictionary<any, any>;

	evaluateObject(object: any): boolean;

	evaluateObjectIgnoreCase(object: any, ignoreCase: boolean): boolean;
}

declare const enum UAJSONValueMatcherErrorCode {

	InvalidJSON = 0
}

declare var UAJSONValueMatcherErrorDomain: string;

declare class UAJavaScriptCommand extends NSObject {

	static alloc(): UAJavaScriptCommand; // inherited from NSObject

	static commandForURL(URL: NSURL): UAJavaScriptCommand;

	static new(): UAJavaScriptCommand; // inherited from NSObject

	readonly URL: NSURL;

	readonly arguments: NSArray<string>;

	readonly name: string;

	readonly options: NSDictionary<any, any>;
}

interface UAJavaScriptCommandDelegate extends NSObjectProtocol {

	performCommandWebView(command: UAJavaScriptCommand, webView: WKWebView): boolean;
}
declare var UAJavaScriptCommandDelegate: {

	prototype: UAJavaScriptCommandDelegate;
};

declare class UAJavaScriptEnvironment extends NSObject {

	static alloc(): UAJavaScriptEnvironment; // inherited from NSObject

	static defaultEnvironment(): UAJavaScriptEnvironment;

	static new(): UAJavaScriptEnvironment; // inherited from NSObject

	addDictionaryGetterValue(methodName: string, value: NSDictionary<any, any>): void;

	addNumberGetterValue(methodName: string, value: number): void;

	addStringGetterValue(methodName: string, value: string): void;

	build(): string;
}

declare class UAKeychainUtils extends NSObject {

	static alloc(): UAKeychainUtils; // inherited from NSObject

	static createKeychainValueForUsernameWithPasswordForIdentifier(username: string, password: string, identifier: string): boolean;

	static deleteKeychainValue(identifier: string): void;

	static getDeviceID(): string;

	static getPassword(identifier: string): string;

	static getUsername(identifier: string): string;

	static new(): UAKeychainUtils; // inherited from NSObject

	static updateKeychainValueForUsernameWithPasswordForIdentifier(username: string, password: string, identifier: string): boolean;
}

declare class UALandingPageAction extends UAAction {

	static action(): UALandingPageAction; // inherited from UAAction

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UALandingPageAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UALandingPageAction; // inherited from UAAction

	static alloc(): UALandingPageAction; // inherited from NSObject

	static new(): UALandingPageAction; // inherited from NSObject

	borderRadiusPoints: number;

	builderExtender: UALandingPageBuilderExtender;
}

declare var UALandingPageActionDefaultRegistryAlias: string;

declare var UALandingPageActionDefaultRegistryName: string;

declare var UALandingPageAspectLockKey: string;

interface UALandingPageBuilderExtender extends NSObjectProtocol {

	extendMessageBuilder?(builder: UAInAppMessageBuilder): void;

	extendScheduleBuilder?(builder: UAScheduleBuilder): void;
}
declare var UALandingPageBuilderExtender: {

	prototype: UALandingPageBuilderExtender;
};

declare var UALandingPageDefaultBorderRadiusPoints: number;

declare var UALandingPageHeightKey: string;

declare var UALandingPageURLKey: string;

declare var UALandingPageWidthKey: string;

declare class UALegacyInAppMessage extends NSObject {

	static alloc(): UALegacyInAppMessage; // inherited from NSObject

	static message(): UALegacyInAppMessage;

	static messageWithPayload(payload: NSDictionary<any, any>): UALegacyInAppMessage;

	static new(): UALegacyInAppMessage; // inherited from NSObject

	alert: string;

	buttonActions: NSDictionary<any, any>;

	readonly buttonCategory: UANotificationCategory;

	buttonGroup: string;

	displayType: UALegacyInAppMessageDisplayType;

	duration: number;

	expiry: Date;

	extra: NSDictionary<any, any>;

	identifier: string;

	readonly notificationActions: NSArray<any>;

	onClick: NSDictionary<any, any>;

	readonly payload: NSDictionary<any, any>;

	position: UALegacyInAppMessagePosition;

	primaryColor: UIColor;

	secondaryColor: UIColor;

	isEqualToMessage(message: UALegacyInAppMessage): boolean;
}

interface UALegacyInAppMessageBuilderExtender extends NSObjectProtocol {

	extendMessageBuilderMessage?(builder: UAInAppMessageBuilder, message: UALegacyInAppMessage): void;

	extendScheduleBuilderMessage?(builder: UAScheduleBuilder, message: UALegacyInAppMessage): void;
}
declare var UALegacyInAppMessageBuilderExtender: {

	prototype: UALegacyInAppMessageBuilderExtender;
};

declare const enum UALegacyInAppMessageDisplayType {

	Banner = 0
}

interface UALegacyInAppMessageFactoryDelegate extends NSObjectProtocol {

	scheduleForMessage(message: UALegacyInAppMessage): UASchedule;
}
declare var UALegacyInAppMessageFactoryDelegate: {

	prototype: UALegacyInAppMessageFactoryDelegate;
};

declare const enum UALegacyInAppMessagePosition {

	Top = 0,

	Bottom = 1
}

declare class UALegacyInAppMessaging extends UAComponent implements UALegacyInAppMessageFactoryDelegate {

	static alloc(): UALegacyInAppMessaging; // inherited from NSObject

	static new(): UALegacyInAppMessaging; // inherited from NSObject

	static shared(): UALegacyInAppMessaging; // inherited from UAComponent

	builderExtender: UALegacyInAppMessageBuilderExtender;

	displayASAPEnabled: boolean;

	factoryDelegate: UALegacyInAppMessageFactoryDelegate;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scheduleForMessage(message: UALegacyInAppMessage): UASchedule;

	self(): this;
}

declare var UALineSpacingKey: string;

declare class UALocaleManager extends NSObject {

	static alloc(): UALocaleManager; // inherited from NSObject

	static new(): UALocaleManager; // inherited from NSObject

	currentLocale: NSLocale;

	clearLocale(): void;
}

interface UALocationModuleLoaderFactory extends NSObjectProtocol {
}
declare var UALocationModuleLoaderFactory: {

	prototype: UALocationModuleLoaderFactory;

	locationModuleLoaderWithDataStoreChannelAnalytics(dataStore: UAPreferenceDataStore, channel: UAChannel, analytics: UAAnalytics): any;
};

interface UALocationProvider extends NSObjectProtocol {

	backgroundLocationUpdatesAllowed: boolean;

	locationUpdatesEnabled: boolean;

	isLocationDeniedOrRestricted(): boolean;

	isLocationOptedIn(): boolean;
}
declare var UALocationProvider: {

	prototype: UALocationProvider;
};

interface UALocationProviderLoader extends NSObjectProtocol {

	locationProvider(): UALocationProvider;
}
declare var UALocationProviderLoader: {

	prototype: UALocationProviderLoader;
};

declare const enum UALogLevel {

	Undefined = -1,

	None = 0,

	Error = 1,

	Warn = 2,

	Info = 3,

	Debug = 4,

	Trace = 5
}

declare class UAMediaEventTemplate extends NSObject {

	static alloc(): UAMediaEventTemplate; // inherited from NSObject

	static browsedTemplate(): UAMediaEventTemplate;

	static consumedTemplate(): UAMediaEventTemplate;

	static consumedTemplateWithValue(eventValue: number): UAMediaEventTemplate;

	static consumedTemplateWithValueFromString(eventValue: string): UAMediaEventTemplate;

	static new(): UAMediaEventTemplate; // inherited from NSObject

	static sharedTemplate(): UAMediaEventTemplate;

	static sharedTemplateWithSourceWithMedium(source: string, medium: string): UAMediaEventTemplate;

	static starredTemplate(): UAMediaEventTemplate;

	author: string;

	category: string;

	eventDescription: string;

	identifier: string;

	isFeature: boolean;

	publishedDate: string;

	type: string;

	createEvent(): UACustomEvent;
}

declare class UAMessageCenter extends UAComponent {

	static alloc(): UAMessageCenter; // inherited from NSObject

	static new(): UAMessageCenter; // inherited from NSObject

	static shared(): UAMessageCenter; // inherited from UAComponent

	readonly defaultUI: UADefaultMessageCenterUI;

	displayDelegate: UAMessageCenterDisplayDelegate;

	readonly messageList: UAInboxMessageList;

	readonly user: UAUser;

	dismiss(animated: boolean): void;

	display(animated: boolean): void;

	displayMessageForID(messageID: string): void;

	displayMessageForIDAnimated(messageID: string, animated: boolean): void;
}

declare class UAMessageCenterAction extends UAAction {

	static action(): UAMessageCenterAction; // inherited from UAAction

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAMessageCenterAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAMessageCenterAction; // inherited from UAAction

	static alloc(): UAMessageCenterAction; // inherited from NSObject

	static new(): UAMessageCenterAction; // inherited from NSObject
}

declare class UAMessageCenterDateUtils extends NSObject {

	static alloc(): UAMessageCenterDateUtils; // inherited from NSObject

	static formattedDateRelativeToNow(date: Date): string;

	static new(): UAMessageCenterDateUtils; // inherited from NSObject
}

interface UAMessageCenterDisplayDelegate extends NSObjectProtocol {

	dismissMessageCenterAnimated(animated: boolean): void;

	displayMessageCenterAnimated(animated: boolean): void;

	displayMessageCenterForMessageIDAnimated(messageID: string, animated: boolean): void;
}
declare var UAMessageCenterDisplayDelegate: {

	prototype: UAMessageCenterDisplayDelegate;
};

declare class UAMessageCenterListCell extends UITableViewCell {

	static alloc(): UAMessageCenterListCell; // inherited from NSObject

	static appearance(): UAMessageCenterListCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UAMessageCenterListCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UAMessageCenterListCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): UAMessageCenterListCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UAMessageCenterListCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): UAMessageCenterListCell; // inherited from UIAppearance

	static new(): UAMessageCenterListCell; // inherited from NSObject

	date: UILabel;

	listIconView: UIImageView;

	messageCenterStyle: UAMessageCenterStyle;

	title: UILabel;

	unreadIndicator: UIView;

	setData(message: UAInboxMessage): void;
}

interface UAMessageCenterListViewDelegate extends NSObjectProtocol {

	didSelectMessageWithID(messageID: string): void;

	shouldClearSelectionOnViewWillAppear(): boolean;
}
declare var UAMessageCenterListViewDelegate: {

	prototype: UAMessageCenterListViewDelegate;
};

declare const enum UAMessageCenterMessageLoadErrorCode {

	ListUnavailable = 0,

	FailureStatus = 1,

	MessageExpired = 2
}

declare var UAMessageCenterMessageLoadErrorDomain: string;

declare var UAMessageCenterMessageLoadErrorHTTPStatusKey: string;

interface UAMessageCenterMessageViewDelegate extends NSObjectProtocol {

	messageClosed(messageID: string): void;

	messageLoadFailedError(messageID: string, error: NSError): void;

	messageLoadStarted(messageID: string): void;

	messageLoadSucceeded(messageID: string): void;
}
declare var UAMessageCenterMessageViewDelegate: {

	prototype: UAMessageCenterMessageViewDelegate;
};

declare class UAMessageCenterModuleLoader extends NSObject implements UAMessageCenterModuleLoaderFactory, UAModuleLoader {

	static alloc(): UAMessageCenterModuleLoader; // inherited from NSObject

	static messageCenterModuleLoaderWithDataStoreConfigChannel(dataStore: UAPreferenceDataStore, config: UARuntimeConfig, channel: UAChannel): UAModuleLoader;

	static new(): UAMessageCenterModuleLoader; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	components(): NSArray<UAComponent>;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	registerActions(registry: UAActionRegistry): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface UAMessageCenterModuleLoaderFactory extends NSObjectProtocol {
}
declare var UAMessageCenterModuleLoaderFactory: {

	prototype: UAMessageCenterModuleLoaderFactory;

	messageCenterModuleLoaderWithDataStoreConfigChannel(dataStore: UAPreferenceDataStore, config: UARuntimeConfig, channel: UAChannel): UAModuleLoader;
};

declare class UAMessageCenterNativeBridgeExtension extends NSObject implements UANativeBridgeExtensionDelegate {

	static alloc(): UAMessageCenterNativeBridgeExtension; // inherited from NSObject

	static new(): UAMessageCenterNativeBridgeExtension; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	actionsMetadataForCommandWebView(command: UAJavaScriptCommand, webView: WKWebView): NSDictionary<any, any>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	extendJavaScriptEnvironmentWebView(js: UAJavaScriptEnvironment, webView: WKWebView): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class UAMessageCenterResources extends NSObject {

	static alloc(): UAMessageCenterResources; // inherited from NSObject

	static bundle(): NSBundle;

	static new(): UAMessageCenterResources; // inherited from NSObject
}

declare class UAMessageCenterStyle extends NSObject {

	static alloc(): UAMessageCenterStyle; // inherited from NSObject

	static new(): UAMessageCenterStyle; // inherited from NSObject

	static style(): UAMessageCenterStyle;

	static styleWithContentsOfFile(path: string): UAMessageCenterStyle;

	cancelButtonTitleColor: UIColor;

	cellColor: UIColor;

	cellDateColor: UIColor;

	cellDateFont: UIFont;

	cellDateHighlightedColor: UIColor;

	cellHighlightedColor: UIColor;

	cellSeparatorColor: UIColor;

	cellTintColor: UIColor;

	cellTitleColor: UIColor;

	cellTitleFont: UIFont;

	cellTitleHighlightedColor: UIColor;

	deleteButtonTitleColor: UIColor;

	editButtonTitleColor: UIColor;

	iconsEnabled: boolean;

	listColor: UIColor;

	markAsReadButtonTitleColor: UIColor;

	navigationBarColor: UIColor;

	navigationBarOpaque: boolean;

	navigationBarStyle: UANavigationBarStyle;

	placeholderIcon: UIImage;

	refreshTintColor: UIColor;

	selectAllButtonTitleColor: UIColor;

	tintColor: UIColor;

	titleColor: UIColor;

	titleFont: UIFont;

	unreadIndicatorColor: UIColor;
}

declare var UAMessageDataScheme: string;

declare var UAModalAdditionalPaddingKey: string;

declare var UAModalBodyStyleKey: string;

declare var UAModalButtonStyleKey: string;

declare var UAModalDismissIconResourceKey: string;

declare var UAModalHeaderStyleKey: string;

declare var UAModalMaxHeightKey: string;

declare var UAModalMaxWidthKey: string;

declare var UAModalMediaStyleKey: string;

declare var UAModalStyleFileName: string;

declare var UAModalTextStyleKey: string;

declare class UAModifyAttributesAction extends UAAction {

	static action(): UAModifyAttributesAction; // inherited from UAAction

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAModifyAttributesAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAModifyAttributesAction; // inherited from UAAction

	static alloc(): UAModifyAttributesAction; // inherited from NSObject

	static new(): UAModifyAttributesAction; // inherited from NSObject
}

declare var UAModifyAttributesActionDefaultRegistryAlias: string;

declare var UAModifyAttributesActionDefaultRegistryName: string;

declare class UAModifyTagsAction extends UAAction {

	static action(): UAModifyTagsAction; // inherited from UAAction

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAModifyTagsAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAModifyTagsAction; // inherited from UAAction

	static alloc(): UAModifyTagsAction; // inherited from NSObject

	static new(): UAModifyTagsAction; // inherited from NSObject

	applyChannelTags(tags: NSArray<any> | any[]): void;

	applyChannelTagsGroup(tags: NSArray<any> | any[], group: string): void;

	applyNamedUserTagsGroup(tags: NSArray<any> | any[], group: string): void;
}

interface UAModuleLoader extends NSObjectProtocol {

	components?(): NSArray<UAComponent>;

	registerActions?(registry: UAActionRegistry): void;
}
declare var UAModuleLoader: {

	prototype: UAModuleLoader;
};

declare class UANSArrayValueTransformer extends NSValueTransformer {

	static alloc(): UANSArrayValueTransformer; // inherited from NSObject

	static new(): UANSArrayValueTransformer; // inherited from NSObject
}

declare class UANSDictionaryValueTransformer extends NSValueTransformer {

	static alloc(): UANSDictionaryValueTransformer; // inherited from NSObject

	static new(): UANSDictionaryValueTransformer; // inherited from NSObject
}

declare class UANSURLValueTransformer extends NSValueTransformer {

	static alloc(): UANSURLValueTransformer; // inherited from NSObject

	static new(): UANSURLValueTransformer; // inherited from NSObject
}

declare class UANamedUser extends UAComponent {

	static alloc(): UANamedUser; // inherited from NSObject

	static new(): UANamedUser; // inherited from NSObject

	static shared(): UANamedUser; // inherited from UAComponent

	identifier: string;

	readonly pendingAttributes: UAAttributePendingMutations;

	readonly pendingTagGroups: NSArray<UATagGroupsMutation>;

	addTagsGroup(tags: NSArray<string> | string[], tagGroupID: string): void;

	applyAttributeMutations(mutations: UAAttributeMutations): void;

	forceUpdate(): void;

	removeTagsGroup(tags: NSArray<string> | string[], tagGroupID: string): void;

	setTagsGroup(tags: NSArray<string> | string[], tagGroupID: string): void;

	updateTags(): void;
}

declare var UANamedUserIdentifierChangedNotification: string;

declare var UANamedUserIdentifierChangedNotificationIdentifierKey: string;

declare var UANamedUserUploadedAttributeMutationsNotification: string;

declare var UANamedUserUploadedAudienceMutationNotificationDateKey: string;

declare var UANamedUserUploadedAudienceMutationNotificationIdentifierKey: string;

declare var UANamedUserUploadedAudienceMutationNotificationMutationKey: string;

declare var UANamedUserUploadedTagGroupMutationNotification: string;

declare class UANativeBridge extends NSObject implements WKNavigationDelegate {

	static alloc(): UANativeBridge; // inherited from NSObject

	static nativeBridge(): UANativeBridge;

	static new(): UANativeBridge; // inherited from NSObject

	forwardNavigationDelegate: WKNavigationDelegate;

	javaScriptCommandDelegate: UAJavaScriptCommandDelegate;

	nativeBridgeDelegate: UANativeBridgeDelegate;

	nativeBridgeExtensionDelegate: UANativeBridgeExtensionDelegate;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	webViewAuthenticationChallengeShouldAllowDeprecatedTLS(webView: WKWebView, challenge: NSURLAuthenticationChallenge, decisionHandler: (p1: boolean) => void): void;

	webViewDecidePolicyForNavigationActionDecisionHandler(webView: WKWebView, navigationAction: WKNavigationAction, decisionHandler: (p1: WKNavigationActionPolicy) => void): void;

	webViewDecidePolicyForNavigationActionPreferencesDecisionHandler(webView: WKWebView, navigationAction: WKNavigationAction, preferences: WKWebpagePreferences, decisionHandler: (p1: WKNavigationActionPolicy, p2: WKWebpagePreferences) => void): void;

	webViewDecidePolicyForNavigationResponseDecisionHandler(webView: WKWebView, navigationResponse: WKNavigationResponse, decisionHandler: (p1: WKNavigationResponsePolicy) => void): void;

	webViewDidCommitNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidFailNavigationWithError(webView: WKWebView, navigation: WKNavigation, error: NSError): void;

	webViewDidFailProvisionalNavigationWithError(webView: WKWebView, navigation: WKNavigation, error: NSError): void;

	webViewDidFinishNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidReceiveAuthenticationChallengeCompletionHandler(webView: WKWebView, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	webViewDidReceiveServerRedirectForProvisionalNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewDidStartProvisionalNavigation(webView: WKWebView, navigation: WKNavigation): void;

	webViewNavigationActionDidBecomeDownload(webView: WKWebView, navigationAction: WKNavigationAction, download: WKDownload): void;

	webViewNavigationResponseDidBecomeDownload(webView: WKWebView, navigationResponse: WKNavigationResponse, download: WKDownload): void;

	webViewWebContentProcessDidTerminate(webView: WKWebView): void;
}

interface UANativeBridgeDelegate extends NSObjectProtocol {

	close(): void;
}
declare var UANativeBridgeDelegate: {

	prototype: UANativeBridgeDelegate;
};

interface UANativeBridgeExtensionDelegate extends NSObjectProtocol {

	actionsMetadataForCommandWebView?(command: UAJavaScriptCommand, webView: WKWebView): NSDictionary<any, any>;

	extendJavaScriptEnvironmentWebView?(js: UAJavaScriptEnvironment, webView: WKWebView): void;
}
declare var UANativeBridgeExtensionDelegate: {

	prototype: UANativeBridgeExtensionDelegate;
};

declare var UANativeBridgeUAirshipScheme: string;

declare const enum UANavigationBarStyle {

	Default = 0,

	Black = 1
}

declare var UANavigationBarStyleBlackKey: string;

declare var UANavigationBarStyleDefaultKey: string;

declare class UANetworkMonitor extends NSObject {

	static alloc(): UANetworkMonitor; // inherited from NSObject

	static new(): UANetworkMonitor; // inherited from NSObject

	readonly isConnected: boolean;

	connectionUpdates(callBack: (p1: boolean) => void): UADisposable;
}

declare class UANotificationAction extends NSObject {

	static actionWithIdentifierTitleOptions(identifier: string, title: string, options: UANotificationActionOptions): UANotificationAction;

	static alloc(): UANotificationAction; // inherited from NSObject

	static new(): UANotificationAction; // inherited from NSObject

	readonly identifier: string;

	readonly options: UANotificationActionOptions;

	readonly title: string;

	constructor(o: { identifier: string; title: string; options: UANotificationActionOptions; });

	asUNNotificationAction(): UNNotificationAction;

	initWithIdentifierTitleOptions(identifier: string, title: string, options: UANotificationActionOptions): this;

	isEqualToUNNotificationAction(notificationAction: UNNotificationAction): boolean;
}

declare var UANotificationActionOptionNone: UANotificationActionOptions;

declare const enum UANotificationActionOptions {

	AuthenticationRequired = 1,

	Destructive = 2,

	Foreground = 4
}

declare class UANotificationCategories extends NSObject {

	static alloc(): UANotificationCategories; // inherited from NSObject

	static createCategoriesFromFile(filePath: string): NSSet<any>;

	static createCategoryActions(categoryId: string, actionDefinitions: NSArray<any> | any[]): UANotificationCategory;

	static createCategoryActionsHiddenPreviewsBodyPlaceholder(categoryId: string, actionDefinitions: NSArray<any> | any[], hiddenPreviewsBodyPlaceholder: string): UANotificationCategory;

	static defaultCategories(): NSSet<any>;

	static defaultCategoriesWithRequireAuth(requireAuth: boolean): NSSet<any>;

	static new(): UANotificationCategories; // inherited from NSObject
}

declare class UANotificationCategory extends NSObject {

	static alloc(): UANotificationCategory; // inherited from NSObject

	static categoryWithIdentifierActionsIntentIdentifiersHiddenPreviewsBodyPlaceholderCategorySummaryFormatOptions(identifier: string, actions: NSArray<UANotificationAction> | UANotificationAction[], intentIdentifiers: NSArray<string> | string[], hiddenPreviewsBodyPlaceholder: string, format: string, options: UANotificationCategoryOptions): UANotificationCategory;

	static categoryWithIdentifierActionsIntentIdentifiersHiddenPreviewsBodyPlaceholderOptions(identifier: string, actions: NSArray<UANotificationAction> | UANotificationAction[], intentIdentifiers: NSArray<string> | string[], hiddenPreviewsBodyPlaceholder: string, options: UANotificationCategoryOptions): UANotificationCategory;

	static categoryWithIdentifierActionsIntentIdentifiersOptions(identifier: string, actions: NSArray<UANotificationAction> | UANotificationAction[], intentIdentifiers: NSArray<string> | string[], options: UANotificationCategoryOptions): UANotificationCategory;

	static new(): UANotificationCategory; // inherited from NSObject

	readonly actions: NSArray<UANotificationAction>;

	readonly categorySummaryFormat: string;

	readonly hiddenPreviewsBodyPlaceholder: string;

	readonly identifier: string;

	readonly intentIdentifiers: NSArray<string>;

	readonly options: UANotificationCategoryOptions;

	asUNNotificationCategory(): UNNotificationCategory;

	isEqualToUNNotificationCategory(category: UNNotificationCategory): boolean;
}

declare var UANotificationCategoryOptionNone: UANotificationCategoryOptions;

declare const enum UANotificationCategoryOptions {

	CustomDismissAction = 1,

	AllowInCarPlay = 2,

	AllowAnnouncement = 16
}

declare class UANotificationContent extends NSObject {

	static alloc(): UANotificationContent; // inherited from NSObject

	static new(): UANotificationContent; // inherited from NSObject

	static notificationWithNotificationInfo(notificationInfo: NSDictionary<any, any>): UANotificationContent;

	static notificationWithUNNotification(notification: UNNotification): UANotificationContent;

	readonly alertBody: string;

	readonly alertTitle: string;

	readonly badge: number;

	readonly categoryIdentifier: string;

	readonly contentAvailable: number;

	readonly launchImage: string;

	readonly localizationKeys: NSDictionary<any, any>;

	readonly notification: UNNotification;

	readonly notificationInfo: NSDictionary<any, any>;

	readonly sound: string;

	readonly summaryArgument: string;

	readonly summaryArgumentCount: number;

	readonly targetContentIdentifier: string;

	readonly threadIdentifier: string;
}

declare var UANotificationDefaultActionIdentifier: string;

declare var UANotificationDismissActionIdentifier: string;

declare const enum UANotificationOptions {

	None = 0,

	Badge = 1,

	Sound = 2,

	Alert = 4,

	CarPlay = 8,

	CriticalAlert = 16,

	ProvidesAppNotificationSettings = 32,

	Provisional = 64,

	Announcement = 128
}

declare class UANotificationResponse extends NSObject {

	static alloc(): UANotificationResponse; // inherited from NSObject

	static new(): UANotificationResponse; // inherited from NSObject

	static notificationResponseWithNotificationInfoActionIdentifierResponseText(notificationInfo: NSDictionary<any, any>, actionIdentifier: string, responseText: string): UANotificationResponse;

	static notificationResponseWithUNNotificationResponse(response: UNNotificationResponse): UANotificationResponse;

	readonly actionIdentifier: string;

	readonly notificationContent: UANotificationContent;

	readonly response: UNNotificationResponse;

	readonly responseText: string;
}

declare class UAOpenExternalURLAction extends UAAction {

	static action(): UAOpenExternalURLAction; // inherited from UAAction

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAOpenExternalURLAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAOpenExternalURLAction; // inherited from UAAction

	static alloc(): UAOpenExternalURLAction; // inherited from NSObject

	static new(): UAOpenExternalURLAction; // inherited from NSObject

	static parseURLFromArguments(_arguments: UAActionArguments): NSURL;
}

declare var UAOpenExternalURLActionDefaultRegistryAlias: string;

declare var UAOpenExternalURLActionDefaultRegistryName: string;

declare const enum UAOpenExternalURLActionErrorCode {

	URLFailedToOpen = 0
}

declare var UAOpenExternalURLActionErrorDomain: string;

declare class UAPadding extends NSObject {

	static alloc(): UAPadding; // inherited from NSObject

	static new(): UAPadding; // inherited from NSObject

	static paddingWithDictionary(paddingDict: NSDictionary<any, any>): UAPadding;

	static paddingWithTopBottomLeadingTrailing(top: number, bottom: number, leading: number, trailing: number): UAPadding;

	bottom: number;

	leading: number;

	top: number;

	trailing: number;
}

declare var UAPaddingBottomKey: string;

declare var UAPaddingLeadingKey: string;

declare var UAPaddingTopKey: string;

declare var UAPaddingTrailingKey: string;

declare class UAPasteboardAction extends UAAction {

	static action(): UAPasteboardAction; // inherited from UAAction

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAPasteboardAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAPasteboardAction; // inherited from UAAction

	static alloc(): UAPasteboardAction; // inherited from NSObject

	static new(): UAPasteboardAction; // inherited from NSObject
}

declare var UAPasteboardActionDefaultRegistryAlias: string;

declare var UAPasteboardActionDefaultRegistryName: string;

declare class UAPreferenceDataStore extends NSObject {

	static alloc(): UAPreferenceDataStore; // inherited from NSObject

	static new(): UAPreferenceDataStore; // inherited from NSObject

	static preferenceDataStoreWithKeyPrefix(keyPrefix: string): UAPreferenceDataStore;

	URLForKey(key: string): NSURL;

	arrayForKey(key: string): NSArray<any>;

	boolForKey(key: string): boolean;

	boolForKeyDefaultValue(key: string, defaultValue: boolean): boolean;

	dataForKey(key: string): NSData;

	dictionaryForKey(key: string): NSDictionary<any, any>;

	doubleForKey(key: string): number;

	doubleForKeyDefaultValue(key: string, defaultValue: number): number;

	floatForKey(key: string): number;

	integerForKey(key: string): number;

	keyExists(key: string): boolean;

	objectForKey(key: string): any;

	removeAll(): void;

	removeObjectForKey(key: string): void;

	setBoolForKey(value: boolean, key: string): void;

	setDoubleForKey(value: number, key: string): void;

	setFloatForKey(value: number, key: string): void;

	setIntegerForKey(value: number, key: string): void;

	setObjectForKey(value: any, key: string): void;

	setURLForKey(url: NSURL, key: string): void;

	stringArrayForKey(key: string): NSArray<any>;

	stringForKey(key: string): string;
}

declare class UAProximityRegion extends NSObject {

	static alloc(): UAProximityRegion; // inherited from NSObject

	static new(): UAProximityRegion; // inherited from NSObject

	static proximityRegionWithIDMajorMinor(proximityID: string, major: number, minor: number): UAProximityRegion;

	RSSI: number;

	latitude: number;

	longitude: number;
}

declare class UAPush extends UAComponent {

	static alloc(): UAPush; // inherited from NSObject

	static new(): UAPush; // inherited from NSObject

	static shared(): UAPush; // inherited from UAComponent

	accengageCategories: NSSet<UANotificationCategory>;

	readonly authorizationStatus: UAAuthorizationStatus;

	readonly authorizedNotificationSettings: UAAuthorizedNotificationSettings;

	autobadgeEnabled: boolean;

	backgroundPushNotificationsEnabled: boolean;

	backgroundPushNotificationsEnabledByDefault: boolean;

	badgeNumber: number;

	readonly combinedCategories: NSSet<UANotificationCategory>;

	customCategories: NSSet<UANotificationCategory>;

	defaultPresentationOptions: UNNotificationPresentationOptions;

	readonly deviceToken: string;

	extendedPushNotificationPermissionEnabled: boolean;

	readonly launchNotificationResponse: UANotificationResponse;

	notificationOptions: UANotificationOptions;

	pushNotificationDelegate: UAPushNotificationDelegate;

	pushTokenRegistrationEnabled: boolean;

	readonly quietTime: NSDictionary<any, any>;

	quietTimeEnabled: boolean;

	registrationDelegate: UARegistrationDelegate;

	requireAuthorizationForDefaultCategories: boolean;

	timeZone: NSTimeZone;

	readonly userPromptedForNotifications: boolean;

	userPushNotificationsEnabled: boolean;

	userPushNotificationsEnabledByDefault: boolean;

	enableUserPushNotifications(completionHandler: (p1: boolean) => void): void;

	resetBadge(): void;

	setBadgeNumber(badgeNumber: number): void;

	setQuietTimeStartHourStartMinuteEndHourEndMinute(startHour: number, startMinute: number, endHour: number, endMinute: number): void;

	updateRegistration(): void;
}

interface UAPushNotificationDelegate extends NSObjectProtocol {

	extendPresentationOptionsNotification?(options: UNNotificationPresentationOptions, notification: UNNotification): UNNotificationPresentationOptions;

	receivedBackgroundNotificationCompletionHandler?(notificationContent: UANotificationContent, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	receivedForegroundNotificationCompletionHandler?(notificationContent: UANotificationContent, completionHandler: () => void): void;

	receivedNotificationResponseCompletionHandler?(notificationResponse: UANotificationResponse, completionHandler: () => void): void;
}
declare var UAPushNotificationDelegate: {

	prototype: UAPushNotificationDelegate;
};

interface UAPushProviderDelegate extends NSObjectProtocol {

	autobadgeEnabled: boolean;

	backgroundPushNotificationsAllowed: boolean;

	badgeNumber: number;

	deviceToken: string;

	pushTokenRegistrationEnabled: boolean;

	quietTime: NSDictionary<any, any>;

	quietTimeEnabled: boolean;

	timeZone: NSTimeZone;

	userPushNotificationsAllowed: boolean;
}
declare var UAPushProviderDelegate: {

	prototype: UAPushProviderDelegate;
};

interface UAPushableComponent {

	presentationOptionsForNotificationDefaultPresentationOptions?(notification: UNNotification, options: UNNotificationPresentationOptions): UNNotificationPresentationOptions;

	receivedNotificationResponseCompletionHandler?(response: UANotificationResponse, completionHandler: () => void): void;

	receivedRemoteNotificationCompletionHandler?(notification: UANotificationContent, completionHandler: (p1: UIBackgroundFetchResult) => void): void;
}
declare var UAPushableComponent: {

	prototype: UAPushableComponent;
};

declare class UARateAppAction extends UAAction {

	static action(): UARateAppAction; // inherited from UAAction

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UARateAppAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UARateAppAction; // inherited from UAAction

	static alloc(): UARateAppAction; // inherited from NSObject

	static new(): UARateAppAction; // inherited from NSObject

	rateAppLinkPromptTimestamps(): NSArray<any>;

	rateAppPromptTimestamps(): NSArray<any>;
}

declare var UARateAppActionDefaultRegistryAlias: string;

declare var UARateAppActionDefaultRegistryName: string;

declare var UARateAppItunesIDKey: string;

declare var UARateAppLinkPromptBodyKey: string;

declare var UARateAppLinkPromptTitleKey: string;

declare var UARateAppShowLinkPromptKey: string;

declare var UAReceivedBackgroundNotificationEvent: string;

declare var UAReceivedForegroundNotificationEvent: string;

declare var UAReceivedNotificationResponseEvent: string;

declare class UARegionEvent extends UAEvent {

	static alloc(): UARegionEvent; // inherited from NSObject

	static new(): UARegionEvent; // inherited from NSObject

	static regionEventWithRegionIDSourceBoundaryEvent(regionID: string, source: string, boundaryEvent: UABoundaryEvent): UARegionEvent;

	readonly boundaryEvent: UABoundaryEvent;

	circularRegion: UACircularRegion;

	readonly payload: NSDictionary<any, any>;

	proximityRegion: UAProximityRegion;

	readonly regionID: string;

	readonly source: string;
}

declare var UARegionEventAdded: string;

declare var UARegionEventMaxCharacters: number;

declare var UARegionEventMaxLatitude: number;

declare var UARegionEventMaxLongitude: number;

declare var UARegionEventMinCharacters: number;

declare var UARegionEventMinLatitude: number;

declare var UARegionEventMinLongitude: number;

declare var UARegionIDKey: string;

interface UARegistrationDelegate extends NSObjectProtocol {

	apnsRegistrationFailedWithError?(error: NSError): void;

	apnsRegistrationSucceededWithDeviceToken?(deviceToken: NSData): void;

	notificationAuthorizedSettingsDidChange?(authorizedSettings: UAAuthorizedNotificationSettings): void;

	notificationRegistrationFinishedWithAuthorizedSettingsCategories?(authorizedSettings: UAAuthorizedNotificationSettings, categories: NSSet<UANotificationCategory>): void;

	notificationRegistrationFinishedWithAuthorizedSettingsCategoriesStatus?(authorizedSettings: UAAuthorizedNotificationSettings, categories: NSSet<UANotificationCategory>, status: UAAuthorizationStatus): void;

	registrationFailed?(): void;

	registrationSucceededForChannelIDDeviceToken?(channelID: string, deviceToken: string): void;
}
declare var UARegistrationDelegate: {

	prototype: UARegistrationDelegate;
};

declare class UARemoteConfig extends NSObject {

	static alloc(): UARemoteConfig; // inherited from NSObject

	static configWithRemoteData(remoteConfigData: NSDictionary<any, any>): UARemoteConfig;

	static configWithRemoteDataURLDeviceAPIURLAnalyticsURLChatURLChatWebSocketURL(remoteDataURL: string, deviceAPIURL: string, analyticsURL: string, chatURL: string, chatWebSocketURL: string): UARemoteConfig;

	static new(): UARemoteConfig; // inherited from NSObject

	analyticsURL: string;

	chatURL: string;

	chatWebSocketURL: string;

	deviceAPIURL: string;

	remoteDataURL: string;
}

declare class UARemoteConfigURLManager extends NSObject {

	static alloc(): UARemoteConfigURLManager; // inherited from NSObject

	static new(): UARemoteConfigURLManager; // inherited from NSObject

	static remoteConfigURLManagerWithDataStore(dataStore: UAPreferenceDataStore): UARemoteConfigURLManager;

	static remoteConfigURLManagerWithDataStoreNotificationCenter(dataStore: UAPreferenceDataStore, notificationCenter: NSNotificationCenter): UARemoteConfigURLManager;

	readonly analyticsURL: string;

	readonly chatURL: string;

	readonly chatWebSocketURL: string;

	readonly deviceAPIURL: string;

	readonly remoteDataURL: string;

	readonly urlConfig: UARemoteConfig;
}

declare var UARemoteConfigURLManagerConfigUpdated: string;

declare var UARemoteDataMetadataCountryKey: string;

declare var UARemoteDataMetadataLanguageKey: string;

declare var UARemoteDataMetadataSDKVersionKey: string;

declare class UARemoteDataPayload extends NSObject implements NSCopying {

	static alloc(): UARemoteDataPayload; // inherited from NSObject

	static new(): UARemoteDataPayload; // inherited from NSObject

	data: NSDictionary<any, any>;

	metadata: NSDictionary<any, any>;

	timestamp: Date;

	type: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

interface UARemoteDataProvider extends NSObjectProtocol {

	isMetadataCurrent(metadata: NSDictionary<any, any>): boolean;

	subscribeWithTypesBlock(payloadTypes: NSArray<string> | string[], publishBlock: (p1: NSArray<UARemoteDataPayload>) => void): UADisposable;
}
declare var UARemoteDataProvider: {

	prototype: UARemoteDataProvider;
};

declare class UARemoveTagsAction extends UAModifyTagsAction {

	static action(): UARemoveTagsAction; // inherited from UAAction

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UARemoveTagsAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UARemoveTagsAction; // inherited from UAAction

	static alloc(): UARemoveTagsAction; // inherited from NSObject

	static new(): UARemoveTagsAction; // inherited from NSObject
}

declare var UARemoveTagsActionDefaultRegistryAlias: string;

declare var UARemoveTagsActionDefaultRegistryName: string;

declare class UARequest extends NSObject {

	static alloc(): UARequest; // inherited from NSObject

	static new(): UARequest; // inherited from NSObject

	static requestWithBuilder(builder: UARequestBuilder): UARequest;

	static requestWithBuilderBlock(builderBlock: (p1: UARequestBuilder) => void): UARequest;

	readonly URL: NSURL;

	readonly body: NSData;

	readonly headers: NSDictionary<any, any>;

	readonly method: string;
}

declare class UARequestBuilder extends NSObject {

	static alloc(): UARequestBuilder; // inherited from NSObject

	static new(): UARequestBuilder; // inherited from NSObject

	URL: NSURL;

	body: NSData;

	compressBody: boolean;

	method: string;

	password: string;

	username: string;

	addHeaders(headers: NSDictionary<any, any>): void;

	setValueForHeader(value: string, header: string): void;
}

declare class UARequestSession extends NSObject {

	static alloc(): UARequestSession; // inherited from NSObject

	static new(): UARequestSession; // inherited from NSObject

	static sessionWithConfig(config: UARuntimeConfig): UARequestSession;

	static sessionWithConfigNSURLSession(config: UARuntimeConfig, session: NSURLSession): UARequestSession;

	static sharedNSURLSession(): NSURLSession;

	performHTTPRequestCompletionHandler(request: UARequest, completionHandler: (p1: NSData, p2: NSHTTPURLResponse, p3: NSError) => void): UADisposable;

	setValueForHeader(value: any, header: string): void;
}

declare const enum UARequestSessionError {

	InvalidHTTPResponse = 0,

	MissingURL = 1
}

declare var UARequestSessionErrorDomain: string;

declare class UARetailEventTemplate extends NSObject {

	static addedToCartTemplate(): UARetailEventTemplate;

	static addedToCartTemplateWithValue(eventValue: number): UARetailEventTemplate;

	static addedToCartTemplateWithValueFromString(eventValue: string): UARetailEventTemplate;

	static alloc(): UARetailEventTemplate; // inherited from NSObject

	static browsedTemplate(): UARetailEventTemplate;

	static browsedTemplateWithValue(eventValue: number): UARetailEventTemplate;

	static browsedTemplateWithValueFromString(eventValue: string): UARetailEventTemplate;

	static new(): UARetailEventTemplate; // inherited from NSObject

	static purchasedTemplate(): UARetailEventTemplate;

	static purchasedTemplateWithValue(eventValue: number): UARetailEventTemplate;

	static purchasedTemplateWithValueFromString(eventValue: string): UARetailEventTemplate;

	static sharedProductTemplate(): UARetailEventTemplate;

	static sharedProductTemplateWithSourceWithMedium(source: string, medium: string): UARetailEventTemplate;

	static sharedProductTemplateWithValue(eventValue: number): UARetailEventTemplate;

	static sharedProductTemplateWithValueFromString(eventValue: string): UARetailEventTemplate;

	static sharedProductTemplateWithValueFromStringWithSourceWithMedium(eventValue: string, source: string, medium: string): UARetailEventTemplate;

	static sharedProductTemplateWithValueWithSourceWithMedium(eventValue: number, source: string, medium: string): UARetailEventTemplate;

	static starredProductTemplate(): UARetailEventTemplate;

	static starredProductTemplateWithValue(eventValue: number): UARetailEventTemplate;

	static starredProductTemplateWithValueFromString(eventValue: string): UARetailEventTemplate;

	static wishlistTemplate(): UARetailEventTemplate;

	static wishlistTemplateWithNameWishlistID(name: string, wishlistID: string): UARetailEventTemplate;

	brand: string;

	category: string;

	eventDescription: string;

	eventValue: NSDecimalNumber;

	identifier: string;

	isNewItem: boolean;

	transactionID: string;

	createEvent(): UACustomEvent;
}

declare class UARuntimeConfig extends NSObject {

	static alloc(): UARuntimeConfig; // inherited from NSObject

	static new(): UARuntimeConfig; // inherited from NSObject

	readonly URLAllowList: NSArray<string>;

	readonly URLAllowListScopeJavaScriptInterface: NSArray<string>;

	readonly URLAllowListScopeOpenURL: NSArray<string>;

	readonly analyticsEnabled: boolean;

	readonly analyticsURL: string;

	readonly appKey: string;

	readonly appSecret: string;

	readonly automaticSetupEnabled: boolean;

	readonly channelCaptureEnabled: boolean;

	readonly channelCreationDelayEnabled: boolean;

	readonly chatURL: string;

	readonly chatWebSocketURL: string;

	readonly clearNamedUserOnAppRestore: boolean;

	readonly clearUserOnAppRestore: boolean;

	readonly customConfig: NSDictionary<any, any>;

	readonly dataCollectionOptInEnabled: boolean;

	readonly deviceAPIURL: string;

	readonly extendedBroadcastsEnabled: boolean;

	readonly inProduction: boolean;

	readonly itunesID: string;

	readonly logLevel: UALogLevel;

	readonly messageCenterStyleConfig: string;

	readonly remoteDataAPIURL: string;

	readonly requestAuthorizationToUseNotifications: boolean;

	readonly requireInitialRemoteConfigEnabled: boolean;

	readonly suppressAllowListError: boolean;
}

declare const enum UASDKExtension {

	Cordova = 0,

	Xamarin = 1,

	Unity = 2,

	Flutter = 3,

	ReactNative = 4,

	Titanium = 5
}

declare class UASchedule extends NSObject {

	static alloc(): UASchedule; // inherited from NSObject

	static new(): UASchedule; // inherited from NSObject

	readonly audience: UAScheduleAudience;

	readonly delay: UAScheduleDelay;

	readonly editGracePeriod: number;

	readonly end: Date;

	readonly group: string;

	readonly identifier: string;

	readonly interval: number;

	readonly isValid: boolean;

	readonly limit: number;

	readonly metadata: NSDictionary<any, any>;

	readonly priority: number;

	readonly start: Date;

	readonly triggers: NSArray<UAScheduleTrigger>;

	isEqualToSchedule(schedule: UASchedule): boolean;
}

declare class UAScheduleAction extends UAAction {

	static action(): UAScheduleAction; // inherited from UAAction

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAScheduleAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAScheduleAction; // inherited from UAAction

	static alloc(): UAScheduleAction; // inherited from NSObject

	static new(): UAScheduleAction; // inherited from NSObject
}

declare var UAScheduleActionDefaultRegistryAlias: string;

declare var UAScheduleActionDefaultRegistryName: string;

declare const enum UAScheduleActionErrorCode {

	InvalidJSON = 0
}

declare class UAScheduleAudience extends NSObject {

	static alloc(): UAScheduleAudience; // inherited from NSObject

	static audienceWithBuilderBlock(builderBlock: (p1: UAScheduleAudienceBuilder) => void): UAScheduleAudience;

	static new(): UAScheduleAudience; // inherited from NSObject

	readonly languageIDs: NSArray<string>;

	readonly locationOptIn: number;

	readonly missBehavior: UAScheduleAudienceMissBehaviorType;

	readonly notificationsOptIn: number;

	readonly tagSelector: UATagSelector;

	readonly versionPredicate: UAJSONPredicate;
}

declare class UAScheduleAudienceBuilder extends NSObject {

	static alloc(): UAScheduleAudienceBuilder; // inherited from NSObject

	static new(): UAScheduleAudienceBuilder; // inherited from NSObject

	languageTags: NSArray<string>;

	locationOptIn: number;

	missBehavior: UAScheduleAudienceMissBehaviorType;

	notificationsOptIn: number;

	tagSelector: UATagSelector;

	versionPredicate: UAJSONPredicate;

	isValid(): boolean;
}

declare const enum UAScheduleAudienceMissBehaviorType {

	Cancel = 0,

	Skip = 1,

	Penalize = 2
}

declare class UAScheduleBuilder extends NSObject {

	static alloc(): UAScheduleBuilder; // inherited from NSObject

	static new(): UAScheduleBuilder; // inherited from NSObject

	audience: UAScheduleAudience;

	delay: UAScheduleDelay;

	editGracePeriod: number;

	end: Date;

	group: string;

	identifier: string;

	interval: number;

	limit: number;

	metadata: NSDictionary<any, any>;

	priority: number;

	start: Date;

	triggers: NSArray<UAScheduleTrigger>;
}

declare const enum UAScheduleDataDeferredType {

	Unknown = 0,

	InAppMessage = 1
}

declare class UAScheduleDeferredData extends NSObject {

	static alloc(): UAScheduleDeferredData; // inherited from NSObject

	static deferredDataWithJSONError(json: any): UAScheduleDeferredData;

	static deferredDataWithURLRetriableOnTimeout(URL: NSURL, retriableOnTimeout: boolean): UAScheduleDeferredData;

	static deferredDataWithURLRetriableOnTimeoutType(URL: NSURL, retriableOnTimeout: boolean, type: UAScheduleDataDeferredType): UAScheduleDeferredData;

	static new(): UAScheduleDeferredData; // inherited from NSObject

	readonly URL: NSURL;

	readonly retriableOnTimeout: boolean;

	readonly type: UAScheduleDataDeferredType;

	toJSON(): NSDictionary<any, any>;
}

declare const enum UAScheduleDeferredDataErrorCode {

	InvalidJSON = 0
}

declare class UAScheduleDelay extends NSObject {

	static alloc(): UAScheduleDelay; // inherited from NSObject

	static delayWithBuilderBlock(builderBlock: (p1: UAScheduleDelayBuilder) => void): UAScheduleDelay;

	static delayWithJSONError(json: any): UAScheduleDelay;

	static new(): UAScheduleDelay; // inherited from NSObject

	readonly appState: UAScheduleDelayAppState;

	readonly cancellationTriggers: NSArray<UAScheduleTrigger>;

	readonly isValid: boolean;

	readonly regionID: string;

	readonly screens: NSArray<any>;

	readonly seconds: number;

	isEqualToDelay(delay: UAScheduleDelay): boolean;
}

declare const enum UAScheduleDelayAppState {

	Any = 0,

	Foreground = 1,

	Background = 2
}

declare var UAScheduleDelayAppStateBackgroundName: string;

declare var UAScheduleDelayAppStateForegroundName: string;

declare var UAScheduleDelayAppStateKey: string;

declare class UAScheduleDelayBuilder extends NSObject {

	static alloc(): UAScheduleDelayBuilder; // inherited from NSObject

	static new(): UAScheduleDelayBuilder; // inherited from NSObject

	appState: UAScheduleDelayAppState;

	cancellationTriggers: NSArray<UAScheduleTrigger>;

	regionID: string;

	screens: NSArray<any>;

	seconds: number;
}

declare var UAScheduleDelayCancellationTriggersKey: string;

declare const enum UAScheduleDelayErrorCode {

	InvalidJSON = 0
}

declare var UAScheduleDelayErrorDomain: string;

declare var UAScheduleDelayMaxCancellationTriggers: number;

declare var UAScheduleDelayRegionKey: string;

declare var UAScheduleDelayScreensKey: string;

declare var UAScheduleDelaySecondsKey: string;

declare class UAScheduleEdits extends NSObject {

	static alloc(): UAScheduleEdits; // inherited from NSObject

	static editsWithActionsBuilderBlock(actions: NSDictionary<any, any>, builderBlock: (p1: UAScheduleEditsBuilder) => void): UAScheduleEdits;

	static editsWithBuilderBlock(builderBlock: (p1: UAScheduleEditsBuilder) => void): UAScheduleEdits;

	static editsWithMessageBuilderBlock(message: UAInAppMessage, builderBlock: (p1: UAScheduleEditsBuilder) => void): UAScheduleEdits;

	static new(): UAScheduleEdits; // inherited from NSObject

	readonly audience: UAScheduleAudience;

	readonly editGracePeriod: number;

	readonly end: Date;

	readonly interval: number;

	readonly limit: number;

	readonly metadata: NSDictionary<any, any>;

	readonly priority: number;

	readonly start: Date;
}

declare class UAScheduleEditsBuilder extends NSObject {

	static alloc(): UAScheduleEditsBuilder; // inherited from NSObject

	static new(): UAScheduleEditsBuilder; // inherited from NSObject

	audience: UAScheduleAudience;

	editGracePeriod: number;

	end: Date;

	interval: number;

	limit: number;

	metadata: NSDictionary<any, any>;

	priority: number;

	start: Date;
}

declare var UAScheduleMaxTriggers: number;

declare class UAScheduleTrigger extends NSObject implements NSSecureCoding {

	static activeSessionTriggerWithCount(count: number): UAScheduleTrigger;

	static alloc(): UAScheduleTrigger; // inherited from NSObject

	static appInitTriggerWithCount(count: number): UAScheduleTrigger;

	static backgroundTriggerWithCount(count: number): UAScheduleTrigger;

	static customEventTriggerWithPredicateCount(predicate: UAJSONPredicate, count: number): UAScheduleTrigger;

	static customEventTriggerWithPredicateValue(predicate: UAJSONPredicate, value: number): UAScheduleTrigger;

	static foregroundTriggerWithCount(count: number): UAScheduleTrigger;

	static new(): UAScheduleTrigger; // inherited from NSObject

	static regionEnterTriggerForRegionIDCount(regionID: string, count: number): UAScheduleTrigger;

	static regionExitTriggerForRegionIDCount(regionID: string, count: number): UAScheduleTrigger;

	static screenTriggerForScreenNameCount(screenName: string, count: number): UAScheduleTrigger;

	static triggerWithJSONError(json: any): UAScheduleTrigger;

	static versionTriggerWithConstraintCount(versionConstraint: string, count: number): UAScheduleTrigger;

	readonly goal: number;

	readonly type: UAScheduleTriggerType;

	static readonly supportsSecureCoding: boolean; // inherited from NSSecureCoding

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	isEqualToTrigger(trigger: UAScheduleTrigger): boolean;
}

declare var UAScheduleTriggerActiveSessionName: string;

declare var UAScheduleTriggerAppBackgroundName: string;

declare var UAScheduleTriggerAppForegroundName: string;

declare var UAScheduleTriggerAppInitName: string;

declare var UAScheduleTriggerCustomEventCountName: string;

declare var UAScheduleTriggerCustomEventValueName: string;

declare const enum UAScheduleTriggerErrorCode {

	InvalidJSON = 0
}

declare var UAScheduleTriggerErrorDomain: string;

declare var UAScheduleTriggerGoalKey: string;

declare var UAScheduleTriggerPredicateKey: string;

declare var UAScheduleTriggerRegionEnterName: string;

declare var UAScheduleTriggerRegionExitName: string;

declare var UAScheduleTriggerScreenName: string;

declare const enum UAScheduleTriggerType {

	AppForeground = 0,

	AppBackground = 1,

	RegionEnter = 2,

	RegionExit = 3,

	CustomEventCount = 4,

	CustomEventValue = 5,

	Screen = 6,

	AppInit = 7,

	ActiveSession = 8,

	Version = 9
}

declare var UAScheduleTriggerTypeKey: string;

declare var UAScheduleTriggerVersionName: string;

declare var UAScreenKey: string;

declare var UAScreenTracked: string;

declare class UASearchEventTemplate extends NSObject {

	static alloc(): UASearchEventTemplate; // inherited from NSObject

	static new(): UASearchEventTemplate; // inherited from NSObject

	static template(): UASearchEventTemplate;

	static templateWithValue(eventValue: number): UASearchEventTemplate;

	category: string;

	eventValue: NSDecimalNumber;

	identifier: string;

	query: string;

	totalResults: number;

	type: string;

	createEvent(): UACustomEvent;
}

declare class UASemaphore extends NSObject {

	static alloc(): UASemaphore; // inherited from NSObject

	static new(): UASemaphore; // inherited from NSObject

	static semaphore(): UASemaphore;

	signal(): boolean;

	wait(): void;
}

declare var UASeparatedButtonSpacingKey: string;

declare class UAShareAction extends UAAction {

	static action(): UAShareAction; // inherited from UAAction

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAShareAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAShareAction; // inherited from UAAction

	static alloc(): UAShareAction; // inherited from NSObject

	static new(): UAShareAction; // inherited from NSObject
}

declare var UAShareActionDefaultRegistryAlias: string;

declare var UAShareActionDefaultRegistryName: string;

declare const enum UASituation {

	ManualInvocation = 0,

	LaunchedFromPush = 1,

	ForegroundPush = 2,

	BackgroundPush = 3,

	WebViewInvocation = 4,

	ForegroundInteractiveButton = 5,

	BackgroundInteractiveButton = 6,

	Automation = 7
}

declare var UAStackedButtonSpacingKey: string;

declare class UASystemVersion extends NSObject {

	static alloc(): UASystemVersion; // inherited from NSObject

	static new(): UASystemVersion; // inherited from NSObject

	static systemVersion(): UASystemVersion;

	currentSystemVersion(): string;

	isGreaterOrEqualToVersion(version: string): boolean;
}

declare class UATagGroups extends NSObject implements NSCoding {

	static alloc(): UATagGroups; // inherited from NSObject

	static new(): UATagGroups; // inherited from NSObject

	static tagGroupsWithTags(tags: NSDictionary<any, any>): UATagGroups;

	readonly tags: NSDictionary<any, any>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	containsAllTags(tagGroups: UATagGroups): boolean;

	containsOnlyDeviceTags(): boolean;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	intersect(tagGroups: UATagGroups): UATagGroups;

	merge(tagGroups: UATagGroups): UATagGroups;

	toJSON(): NSDictionary<any, any>;
}

declare class UATagGroupsMutation extends NSObject implements NSCoding {

	static alloc(): UATagGroupsMutation; // inherited from NSObject

	static collapseMutations(mutations: NSArray<UATagGroupsMutation> | UATagGroupsMutation[]): NSArray<UATagGroupsMutation>;

	static mutationToAddTagsGroup(tags: NSArray<string> | string[], group: string): UATagGroupsMutation;

	static mutationToRemoveTagsGroup(tags: NSArray<string> | string[], group: string): UATagGroupsMutation;

	static mutationToSetTagsGroup(tags: NSArray<string> | string[], group: string): UATagGroupsMutation;

	static new(): UATagGroupsMutation; // inherited from NSObject

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	applyToTagGroups(tagGroups: NSDictionary<any, any>): NSDictionary<any, any>;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	payload(): NSDictionary<any, any>;
}

declare class UATagSelector extends NSObject {

	static alloc(): UATagSelector; // inherited from NSObject

	static new(): UATagSelector; // inherited from NSObject

	static tag(tag: string): UATagSelector;

	apply(tags: NSArray<string> | string[]): boolean;
}

interface UATask extends NSObjectProtocol {

	expirationHandler: () => void;

	requestOptions: UATaskRequestOptions;

	taskID: string;

	taskCompleted(): void;

	taskFailed(): void;
}
declare var UATask: {

	prototype: UATask;
};

declare const enum UATaskConflictPolicy {

	Keep = 0,

	Replace = 1,

	Append = 2
}

declare class UATaskManager extends NSObject {

	static alloc(): UATaskManager; // inherited from NSObject

	static new(): UATaskManager; // inherited from NSObject

	static shared(): UATaskManager;

	enqueueRequestWithIDOptions(taskID: string, options: UATaskRequestOptions): void;

	enqueueRequestWithIDOptionsInitialDelay(taskID: string, options: UATaskRequestOptions, initialDelay: number): void;

	registerForTaskWithIDDispatcherLaunchHandler(identifier: string, dispatcher: UADispatcher, launchHandler: (p1: UATask) => void): void;

	registerForTaskWithIDsDispatcherLaunchHandler(identifiers: NSArray<string> | string[], dispatcher: UADispatcher, launchHandler: (p1: UATask) => void): void;
}

declare class UATaskRequestOptions extends NSObject {

	static alloc(): UATaskRequestOptions; // inherited from NSObject

	static defaultOptions(): UATaskRequestOptions;

	static new(): UATaskRequestOptions; // inherited from NSObject

	static optionsWithConflictPolicyRequiresNetworkExtras(conflictPolicy: UATaskConflictPolicy, requiresNetwork: boolean, extras: NSDictionary<any, any>): UATaskRequestOptions;

	readonly conflictPolicy: UATaskConflictPolicy;

	readonly extras: NSDictionary<any, any>;

	readonly isNetworkRequired: boolean;
}

declare var UATextAdditonalPaddingKey: string;

declare class UATextInputNotificationAction extends UANotificationAction {

	static actionWithIdentifierTitleOptions(identifier: string, title: string, options: UANotificationActionOptions): UATextInputNotificationAction; // inherited from UANotificationAction

	static actionWithIdentifierTitleTextInputButtonTitleTextInputPlaceholderOptions(identifier: string, title: string, textInputButtonTitle: string, textInputPlaceholder: string, options: UANotificationActionOptions): UATextInputNotificationAction;

	static alloc(): UATextInputNotificationAction; // inherited from NSObject

	static new(): UATextInputNotificationAction; // inherited from NSObject

	readonly textInputButtonTitle: string;

	readonly textInputPlaceholder: string;

	constructor(o: { identifier: string; title: string; textInputButtonTitle: string; textInputPlaceholder: string; options: UANotificationActionOptions; });

	initWithIdentifierTitleTextInputButtonTitleTextInputPlaceholderOptions(identifier: string, title: string, textInputButtonTitle: string, textInputPlaceholder: string, options: UANotificationActionOptions): this;
}

declare class UAURLAllowList extends NSObject {

	static alloc(): UAURLAllowList; // inherited from NSObject

	static allowListWithConfig(config: UARuntimeConfig): UAURLAllowList;

	static new(): UAURLAllowList; // inherited from NSObject

	delegate: UAURLAllowListDelegate;

	addEntry(patternString: string): boolean;

	addEntryScope(patternString: string, scope: UAURLAllowListScope): boolean;

	isAllowed(URL: NSURL): boolean;

	isAllowedScope(URL: NSURL, scope: UAURLAllowListScope): boolean;
}

interface UAURLAllowListDelegate extends NSObjectProtocol {

	allowURLScope?(URL: NSURL, scope: UAURLAllowListScope): boolean;
}
declare var UAURLAllowListDelegate: {

	prototype: UAURLAllowListDelegate;
};

declare const enum UAURLAllowListScope {

	JavaScriptInterface = 1,

	OpenURL = 2,

	All = 3
}

declare class UAUser extends NSObject {

	static alloc(): UAUser; // inherited from NSObject

	static new(): UAUser; // inherited from NSObject

	getUserData(completionHandler: (p1: UAUserData) => void): void;

	getUserDataQueue(completionHandler: (p1: UAUserData) => void, queue: NSObject): void;

	getUserDataSync(): UAUserData;
}

declare var UAUserCreatedNotification: string;

declare class UAUserData extends NSObject {

	static alloc(): UAUserData; // inherited from NSObject

	static new(): UAUserData; // inherited from NSObject

	readonly password: string;

	readonly username: string;
}

declare class UAUtils extends NSObject {

	static ISODateFormatterUTC(): NSDateFormatter;

	static ISODateFormatterUTCWithDelimiter(): NSDateFormatter;

	static addSkipBackupAttributeToItemAtURL(url: NSURL): boolean;

	static alloc(): UAUtils; // inherited from NSObject

	static appAuthHeaderString(): string;

	static authHeaderStringWithNamePassword(username: string, password: string): string;

	static bundleShortVersionString(): string;

	static carrierName(): string;

	static compareVersionToVersion(version1: string, version2: string): NSComparisonResult;

	static connectionType(): string;

	static deviceModelName(): string;

	static deviceTokenStringFromDeviceToken(deviceToken: NSData): string;

	static floatIsEqualToFloatWithAccuracy(float1: number, float2: number, accuracy: number): boolean;

	static getReadableFileSizeFromBytes(bytes: number): string;

	static isAlertingPush(notification: NSDictionary<any, any>): boolean;

	static isSilentPush(notification: NSDictionary<any, any>): boolean;

	static logFailedRequestWithMessageWithErrorWithResponse(request: UARequest, message: string, error: NSError, response: NSHTTPURLResponse): void;

	static mainWindow(): UIWindow;

	static mergeFetchResults(fetchResults: NSArray<any> | any[]): UIBackgroundFetchResult;

	static new(): UAUtils; // inherited from NSObject

	static nilIfEmpty(str: string): string;

	static parseISO8601DateFromString(timestamp: string): Date;

	static pluralizeSingularFormPluralForm(count: number, singular: string, plural: string): string;

	static sha256DigestWithString(input: string): NSData;

	static sha256HashWithString(input: string): string;

	static topController(): UIViewController;

	static windowForView(view: UIView): UIWindow;
}

declare class UAVersionMatcher extends NSObject {

	static alloc(): UAVersionMatcher; // inherited from NSObject

	static isExactVersion(versionConstraint: string): boolean;

	static isSubVersion(versionConstraint: string): boolean;

	static isVersionRange(versionConstraint: string): boolean;

	static matcherWithVersionConstraint(versionConstraint: string): UAVersionMatcher;

	static new(): UAVersionMatcher; // inherited from NSObject

	readonly versionConstraint: string;

	evaluateObject(object: any): boolean;
}

declare class UAViewUtils extends NSObject {

	static alloc(): UAViewUtils; // inherited from NSObject

	static applyContainerConstraintsToContainerContainedView(container: UIView, contained: UIView): void;

	static new(): UAViewUtils; // inherited from NSObject
}

declare class UAWalletAction extends UAOpenExternalURLAction {

	static action(): UAWalletAction; // inherited from UAAction

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAWalletAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAWalletAction; // inherited from UAAction

	static alloc(): UAWalletAction; // inherited from NSObject

	static new(): UAWalletAction; // inherited from NSObject
}

declare var UAWalletActionDefaultRegistryAlias: string;

declare var UAWalletActionDefaultRegistryName: string;

declare class UAWebView extends WKWebView {

	static alloc(): UAWebView; // inherited from NSObject

	static appearance(): UAWebView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UAWebView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UAWebView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): UAWebView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UAWebView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject> | typeof NSObject[]): UAWebView; // inherited from UIAppearance

	static new(): UAWebView; // inherited from NSObject
}

declare function UA_base64EncodedStringFromData(data: NSData): string;

declare function UA_dataFromBase64String(aString: string): NSData;

@NativeClass()
declare class UAirship extends NSObject {

	static alloc(): UAirship; // inherited from NSObject

	static analytics(): UAAnalytics;

	static channel(): UAChannel;

	static namedUser(): UANamedUser;

	static new(): UAirship; // inherited from NSObject

	static push(): UAPush;

	static setLogLevel(level: UALogLevel): void;

	static setLogging(enabled: boolean): void;

	static setLoudImpErrorLogging(enabled: boolean): void;

	static shared(): UAirship;

	static takeOff(config: UAConfig): void;

	readonly URLAllowList: UAURLAllowList;

	readonly actionRegistry: UAActionRegistry;

	readonly analytics: UAAnalytics;

	readonly applicationMetrics: UAApplicationMetrics;

	readonly channelCapture: UAChannelCapture;

	readonly config: UARuntimeConfig;

	dataCollectionEnabled: boolean;

	deepLinkDelegate: UADeepLinkDelegate;

	javaScriptCommandDelegate: UAJavaScriptCommandDelegate;

	readonly locale: UALocaleManager;

	readonly locationProvider: UALocationProvider;

	readonly remoteNotificationBackgroundModeEnabled: boolean;

	componentForClassName(className: string): UAComponent;
}

declare class UAirshipCoreResources extends NSObject {

	static alloc(): UAirshipCoreResources; // inherited from NSObject

	static bundle(): NSBundle;

	static new(): UAirshipCoreResources; // inherited from NSObject
}

declare var UAirshipTakeOffBackgroundThreadException: string;

declare class UAirshipVersion extends NSObject {

	static alloc(): UAirshipVersion; // inherited from NSObject

	static get(): string;

	static new(): UAirshipVersion; // inherited from NSObject
}

declare var uaLogLevel: UALogLevel;

declare var uaLoggingEnabled: boolean;

declare var uaLoudImpErrorLoggingEnabled: boolean;
