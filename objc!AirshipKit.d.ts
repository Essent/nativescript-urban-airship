
declare var AirshipKitVersionNumber: number;

declare var AirshipKitVersionNumberVar: number;

declare var AirshipKitVersionString: interop.Reference<number>;

declare var AirshipKitVersionStringVar: interop.Reference<number>;

declare class UAAPIClient extends NSObject {

	static alloc(): UAAPIClient; // inherited from NSObject

	static new(): UAAPIClient; // inherited from NSObject

	readonly config: UAConfig;

	readonly session: UARequestSession;

	constructor(o: { config: UAConfig; session: UARequestSession; });

	cancelAllRequests(): void;

	initWithConfigSession(config: UAConfig, session: UARequestSession): this;
}

declare class UAAPNSRegistration extends NSObject implements UAAPNSRegistrationProtocol {

	static alloc(): UAAPNSRegistration; // inherited from NSObject

	static new(): UAAPNSRegistration; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getCurrentAuthorizationOptionsWithCompletionHandler(completionHandler: (p1: UANotificationOptions) => void): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	updateRegistrationWithOptionsCategoriesCompletionHandler(options: UANotificationOptions, categories: NSSet<UANotificationCategory>, completionHandler: () => void): void;
}

interface UAAPNSRegistrationProtocol extends NSObjectProtocol {

	getCurrentAuthorizationOptionsWithCompletionHandler?(completionHandler: (p1: UANotificationOptions) => void): void;

	updateRegistrationWithOptionsCategoriesCompletionHandler?(options: UANotificationOptions, categories: NSSet<UANotificationCategory>, completionHandler: () => void): void;
}
declare var UAAPNSRegistrationProtocol: {

	prototype: UAAPNSRegistrationProtocol;
};

declare class UAAccountEventTemplate extends NSObject {

	static alloc(): UAAccountEventTemplate; // inherited from NSObject

	static new(): UAAccountEventTemplate; // inherited from NSObject

	static registeredTemplate(): UAAccountEventTemplate;

	static registeredTemplateWithValue(eventValue: number): UAAccountEventTemplate;

	static registeredTemplateWithValueFromString(eventValue: string): UAAccountEventTemplate;

	category: string;

	eventValue: NSDecimalNumber;

	transactionID: string;

	createEvent(): UACustomEvent;
}

declare class UAAction extends NSObject {

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAAction;

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAAction;

	static alloc(): UAAction; // inherited from NSObject

	static new(): UAAction; // inherited from NSObject

	acceptsArgumentsBlock: (p1: UAActionArguments) => boolean;

	actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void;

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

	runWithArgumentsCompletionHandler(_arguments: UAActionArguments, completionHandler: (p1: UAActionResult) => void): void;

	willPerformWithArguments(_arguments: UAActionArguments): void;
}

declare class UAActionArguments extends NSObject {

	static alloc(): UAActionArguments; // inherited from NSObject

	static argumentsWithValueWithSituation(value: any, situation: UASituation): UAActionArguments;

	static argumentsWithValueWithSituationMetadata(value: any, situation: UASituation, metadata: NSDictionary<any, any>): UAActionArguments;

	static new(): UAActionArguments; // inherited from NSObject

	readonly metadata: NSDictionary<any, any>;

	readonly situation: UASituation;

	readonly situationString: string;

	readonly value: any;
}

declare const enum UAActionFetchResult {

	NoData = 1,

	NewData = 0,

	Failed = 2
}

declare class UAActionJSDelegate extends NSObject implements UAJavaScriptDelegate {

	static alloc(): UAActionJSDelegate; // inherited from NSObject

	static new(): UAActionJSDelegate; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	callWithDataWithCompletionHandler(data: UAWebViewCallData, completionHandler: (p1: string) => void): void;

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

declare var UAActionMetadataForegroundPresentationKey: string;

declare var UAActionMetadataInboxMessageKey: string;

declare var UAActionMetadataPushPayloadKey: string;

declare var UAActionMetadataRegisteredName: string;

declare var UAActionMetadataResponseInfoKey: string;

declare var UAActionMetadataUserNotificationActionIDKey: string;

declare var UAActionMetadataWebViewKey: string;

declare const enum UAActionOperatorErrorCode {

	ChildActionRejectedArgs = 0
}

declare var UAActionOperatorErrorDomain: string;

declare class UAActionRegistry extends NSObject {

	static alloc(): UAActionRegistry; // inherited from NSObject

	static defaultRegistry(): UAActionRegistry;

	static new(): UAActionRegistry; // inherited from NSObject

	registeredActionEntries: NSMutableDictionary<any, any>;

	readonly registeredEntries: NSSet<NSMutableDictionary<any, any>>;

	reservedEntryNames: NSMutableArray<any>;

	addNameForEntryWithName(name: string, entryName: string): boolean;

	addSituationOverrideForEntryWithNameAction(situation: UASituation, name: string, action: UAAction): boolean;

	registerActionName(action: UAAction, name: string): boolean;

	registerActionNamePredicate(action: UAAction, name: string, predicate: (p1: UAActionArguments) => boolean): boolean;

	registerActionNames(action: UAAction, names: NSArray<any>): boolean;

	registerActionNamesPredicate(action: UAAction, names: NSArray<any>, predicate: (p1: UAActionArguments) => boolean): boolean;

	registerDefaultActions(): void;

	registerReservedActionNamePredicate(action: UAAction, name: string, predicate: (p1: UAActionArguments) => boolean): boolean;

	registryEntryWithName(name: string): UAActionRegistryEntry;

	removeEntryWithName(name: string): boolean;

	removeName(name: string): boolean;

	updateActionForEntryWithName(action: UAAction, name: string): boolean;

	updatePredicateForEntryWithName(predicate: (p1: UAActionArguments) => boolean, name: string): boolean;
}

declare class UAActionRegistryEntry extends NSObject {

	static alloc(): UAActionRegistryEntry; // inherited from NSObject

	static entryForActionPredicate(action: UAAction, predicate: (p1: UAActionArguments) => boolean): UAActionRegistryEntry;

	static new(): UAActionRegistryEntry; // inherited from NSObject

	action: UAAction;

	mutableNames: NSMutableArray<any>;

	readonly names: NSArray<string>;

	predicate: (p1: UAActionArguments) => boolean;

	actionForSituation(situation: UASituation): UAAction;

	addSituationOverrideWithAction(situation: UASituation, action: UAAction): void;
}

declare class UAActionResult extends NSObject {

	static actionNotFoundResult(): UAActionResult;

	static alloc(): UAActionResult; // inherited from NSObject

	static emptyResult(): UAActionResult;

	static new(): UAActionResult; // inherited from NSObject

	static rejectedArgumentsResult(): UAActionResult;

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

declare class UAActionSchedule extends NSObject {

	static actionScheduleWithIdentifierInfo(identifier: string, info: UAActionScheduleInfo): UAActionSchedule;

	static alloc(): UAActionSchedule; // inherited from NSObject

	static new(): UAActionSchedule; // inherited from NSObject

	readonly identifier: string;

	readonly info: UAActionScheduleInfo;

	isEqualToSchedule(schedule: UAActionSchedule): boolean;
}

declare class UAActionScheduleData extends NSManagedObject {

	static alloc(): UAActionScheduleData; // inherited from NSObject

	static new(): UAActionScheduleData; // inherited from NSObject

	actions: string;

	end: Date;

	group: string;

	identifier: string;

	limit: number;

	start: Date;

	triggeredCount: number;

	triggers: NSSet<NSManagedObject>;
}

declare class UAActionScheduleInfo extends NSObject {

	static actionScheduleInfoWithBuilderBlock(builderBlock: (p1: UAActionScheduleInfoBuilder) => void): UAActionScheduleInfo;

	static actionScheduleInfoWithJSONError(json: any): UAActionScheduleInfo;

	static alloc(): UAActionScheduleInfo; // inherited from NSObject

	static new(): UAActionScheduleInfo; // inherited from NSObject

	readonly actions: NSDictionary<any, any>;

	readonly end: Date;

	readonly group: string;

	readonly isValid: boolean;

	readonly limit: number;

	readonly start: Date;

	readonly triggers: NSArray<UAScheduleTrigger>;

	isEqualToScheduleInfo(scheduleInfo: UAActionScheduleInfo): boolean;
}

declare var UAActionScheduleInfoActionsKey: string;

declare class UAActionScheduleInfoBuilder extends NSObject {

	static alloc(): UAActionScheduleInfoBuilder; // inherited from NSObject

	static new(): UAActionScheduleInfoBuilder; // inherited from NSObject

	actions: NSDictionary<any, any>;

	end: Date;

	group: string;

	limit: number;

	start: Date;

	triggers: NSArray<UAScheduleTrigger>;
}

declare var UAActionScheduleInfoEndKey: string;

declare const enum UAActionScheduleInfoErrorCode {

	InvalidJSON = 0
}

declare var UAActionScheduleInfoErrorDomain: string;

declare var UAActionScheduleInfoGroupKey: string;

declare var UAActionScheduleInfoLimitKey: string;

declare var UAActionScheduleInfoMaxTriggers: number;

declare var UAActionScheduleInfoStartKey: string;

declare var UAActionScheduleInfoTriggersKey: string;

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

	presentationControllerViewControllerForAdaptivePresentationStyle(controller: UIPresentationController, style: UIModalPresentationStyle): UIViewController;

	presentationControllerWillPresentWithAdaptiveStyleTransitionCoordinator(presentationController: UIPresentationController, style: UIModalPresentationStyle, transitionCoordinator: UIViewControllerTransitionCoordinator): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	sourceRect(): CGRect;
}

declare class UAAddCustomEventAction extends UAAction {

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAAddCustomEventAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAAddCustomEventAction; // inherited from UAAction

	static alloc(): UAAddCustomEventAction; // inherited from NSObject

	static new(): UAAddCustomEventAction; // inherited from NSObject
}

declare const enum UAAddCustomEventActionErrorCode {

	InvalidEventName = 0
}

declare var UAAddCustomEventActionErrorDomain: string;

declare class UAAddTagsAction extends UAModifyTagsAction {

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAAddTagsAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAAddTagsAction; // inherited from UAAction

	static alloc(): UAAddTagsAction; // inherited from NSObject

	static new(): UAAddTagsAction; // inherited from NSObject
}

declare class UAAggregateActionResult extends UAActionResult {

	static actionNotFoundResult(): UAAggregateActionResult; // inherited from UAActionResult

	static alloc(): UAAggregateActionResult; // inherited from NSObject

	static emptyResult(): UAAggregateActionResult; // inherited from UAActionResult

	static new(): UAAggregateActionResult; // inherited from NSObject

	static rejectedArgumentsResult(): UAAggregateActionResult; // inherited from UAActionResult

	static resultWithError(error: NSError): UAAggregateActionResult; // inherited from UAActionResult

	static resultWithErrorWithFetchResult(error: NSError, fetchResult: UAActionFetchResult): UAAggregateActionResult; // inherited from UAActionResult

	static resultWithValue(value: any): UAAggregateActionResult; // inherited from UAActionResult

	static resultWithValueWithFetchResult(result: any, fetchResult: UAActionFetchResult): UAAggregateActionResult; // inherited from UAActionResult

	addResultForAction(result: UAActionResult, actionName: string): void;

	resultForAction(actionName: string): UAActionResult;
}

declare class UAAnalytics extends NSObject {

	static alloc(): UAAnalytics; // inherited from NSObject

	static analyticsWithConfigDataStore(airshipConfig: UAConfig, dataStore: UAPreferenceDataStore): UAAnalytics;

	static analyticsWithConfigDataStoreEventManager(airshipConfig: UAConfig, dataStore: UAPreferenceDataStore, eventManager: UAEventManager): UAAnalytics;

	static new(): UAAnalytics; // inherited from NSObject

	readonly conversionPushMetadata: string;

	readonly conversionRichPushID: string;

	readonly conversionSendID: string;

	delegate: UAAnalyticsDelegate;

	enabled: boolean;

	readonly lastSendTime: Date;

	readonly sessionID: string;

	addEvent(event: UAEvent): void;

	associateDeviceIdentifiers(associatedIdentifiers: UAAssociatedIdentifiers): void;

	cancelUpload(): void;

	currentAssociatedDeviceIdentifiers(): UAAssociatedIdentifiers;

	launchedFromNotification(notification: NSDictionary<any, any>): void;

	scheduleUpload(): void;

	trackScreen(screen: string): void;
}

interface UAAnalyticsDelegate extends NSObjectProtocol {

	customEventAdded?(event: UACustomEvent): void;

	regionEventAdded?(event: UARegionEvent): void;

	screenTracked?(screenName: string): void;
}
declare var UAAnalyticsDelegate: {

	prototype: UAAnalyticsDelegate;
};

declare var UAAnalyticsValueNone: string;

declare class UAAppBackgroundEvent extends UAAppExitEvent {

	static alloc(): UAAppBackgroundEvent; // inherited from NSObject

	static event(): UAAppBackgroundEvent; // inherited from UAAppExitEvent

	static new(): UAAppBackgroundEvent; // inherited from NSObject
}

declare class UAAppExitEvent extends UAEvent {

	static alloc(): UAAppExitEvent; // inherited from NSObject

	static event(): UAAppExitEvent;

	static new(): UAAppExitEvent; // inherited from NSObject
}

declare class UAAppForegroundEvent extends UAAppInitEvent {

	static alloc(): UAAppForegroundEvent; // inherited from NSObject

	static event(): UAAppForegroundEvent; // inherited from UAAppInitEvent

	static new(): UAAppForegroundEvent; // inherited from NSObject
}

declare class UAAppInitEvent extends UAEvent {

	static alloc(): UAAppInitEvent; // inherited from NSObject

	static event(): UAAppInitEvent;

	static new(): UAAppInitEvent; // inherited from NSObject

	gatherData(): NSMutableDictionary<any, any>;
}

declare class UAAppIntegration extends NSObject {

	static alloc(): UAAppIntegration; // inherited from NSObject

	static applicationDidReceiveRemoteNotificationFetchCompletionHandler(application: UIApplication, userInfo: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	static applicationDidRegisterForRemoteNotificationsWithDeviceToken(application: UIApplication, deviceToken: NSData): void;

	static applicationDidRegisterUserNotificationSettings(application: UIApplication, notificationSettings: UIUserNotificationSettings): void;

	static applicationHandleActionWithIdentifierForRemoteNotificationCompletionHandler(application: UIApplication, identifier: string, userInfo: NSDictionary<any, any>, handler: () => void): void;

	static applicationHandleActionWithIdentifierForRemoteNotificationWithResponseInfoCompletionHandler(application: UIApplication, identifier: string, userInfo: NSDictionary<any, any>, responseInfo: NSDictionary<any, any>, handler: () => void): void;

	static handleForegroundNotificationMergedOptionsWithCompletionHandler(notification: UNNotification, options: UNNotificationPresentationOptions, completionHandler: () => void): void;

	static new(): UAAppIntegration; // inherited from NSObject

	static userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void): void;

	static userNotificationCenterWillPresentNotificationWithCompletionHandler(center: UNUserNotificationCenter, notification: UNNotification, completionHandler: (p1: UNNotificationPresentationOptions) => void): void;
}

declare class UAApplicationMetrics extends NSObject {

	static alloc(): UAApplicationMetrics; // inherited from NSObject

	static applicationMetricsWithDataStore(dataStore: UAPreferenceDataStore): UAApplicationMetrics;

	static new(): UAApplicationMetrics; // inherited from NSObject

	readonly lastApplicationOpenDate: Date;

	didBecomeActive(): void;
}

declare class UAAssociateIdentifiersEvent extends UAEvent {

	static alloc(): UAAssociateIdentifiersEvent; // inherited from NSObject

	static eventWithIDs(identifiers: UAAssociatedIdentifiers): UAAssociateIdentifiersEvent;

	static new(): UAAssociateIdentifiersEvent; // inherited from NSObject
}

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

	finish(): void;

	startAsyncOperation(): void;
}

declare class UAAutoIntegration extends NSObject {

	static alloc(): UAAutoIntegration; // inherited from NSObject

	static integrate(): void;

	static new(): UAAutoIntegration; // inherited from NSObject

	static reset(): void;
}

declare class UAAutoIntegrationDummyDelegate extends NSObject implements UNUserNotificationCenterDelegate {

	static alloc(): UAAutoIntegrationDummyDelegate; // inherited from NSObject

	static new(): UAAutoIntegrationDummyDelegate; // inherited from NSObject

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

	userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void): void;

	userNotificationCenterWillPresentNotificationWithCompletionHandler(center: UNUserNotificationCenter, notification: UNNotification, completionHandler: (p1: UNNotificationPresentationOptions) => void): void;
}

declare class UAAutomation extends NSObject implements UAAnalyticsDelegate {

	static alloc(): UAAutomation; // inherited from NSObject

	static automationWithConfigDataStore(config: UAConfig, dataStore: UAPreferenceDataStore): UAAutomation;

	static new(): UAAutomation; // inherited from NSObject

	automationStore: UAAutomationStore;

	preferenceDataStore: UAPreferenceDataStore;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	cancelAll(): void;

	cancelScheduleWithIdentifier(identifier: string): void;

	cancelSchedulesWithGroup(group: string): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	customEventAdded(event: UACustomEvent): void;

	getScheduleWithIdentifierCompletionHandler(identifier: string, completionHandler: (p1: UAActionSchedule) => void): void;

	getSchedules(completionHandler: (p1: NSArray<UAActionSchedule>) => void): void;

	getSchedulesWithGroupCompletionHandler(group: string, completionHandler: (p1: NSArray<UAActionSchedule>) => void): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	regionEventAdded(event: UARegionEvent): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scheduleActionsCompletionHandler(scheduleInfo: UAActionScheduleInfo, completionHandler: (p1: UAActionSchedule) => void): void;

	screenTracked(screenName: string): void;

	self(): this;
}

declare var UAAutomationScheduleLimit: number;

declare class UAAutomationStore extends NSObject {

	static alloc(): UAAutomationStore; // inherited from NSObject

	static automationStoreWithConfig(config: UAConfig): UAAutomationStore;

	static new(): UAAutomationStore; // inherited from NSObject

	deleteSchedulesWithPredicate(predicate: NSPredicate): void;

	fetchSchedulesWithPredicateLimitCompletionHandler(predicate: NSPredicate, limit: number, completionHandler: (p1: NSArray<UAActionScheduleData>) => void): void;

	fetchTriggersWithPredicateCompletionHandler(predicate: NSPredicate, completionHandler: (p1: NSArray<UAScheduleTriggerData>) => void): void;

	saveScheduleLimitCompletionHandler(schedule: UAActionSchedule, limit: number, completionHandler: (p1: boolean) => void): void;
}

declare var UABackgroundPushNotificationsEnabledKey: string;

declare class UABespokeCloseView extends UIView {

	static alloc(): UABespokeCloseView; // inherited from NSObject

	static appearance(): UABespokeCloseView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UABespokeCloseView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UABespokeCloseView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UABespokeCloseView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UABespokeCloseView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UABespokeCloseView; // inherited from UIAppearance

	static new(): UABespokeCloseView; // inherited from NSObject
}

declare class UABeveledLoadingIndicator extends UIView {

	static alloc(): UABeveledLoadingIndicator; // inherited from NSObject

	static appearance(): UABeveledLoadingIndicator; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UABeveledLoadingIndicator; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UABeveledLoadingIndicator; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UABeveledLoadingIndicator; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UABeveledLoadingIndicator; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UABeveledLoadingIndicator; // inherited from UIAppearance

	static new(): UABeveledLoadingIndicator; // inherited from NSObject

	hide(): void;

	show(): void;
}

declare const enum UABoundaryEvent {

	Enter = 1,

	Exit = 2
}

declare class UACancelSchedulesAction extends UAAction {

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UACancelSchedulesAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UACancelSchedulesAction; // inherited from UAAction

	static alloc(): UACancelSchedulesAction; // inherited from NSObject

	static new(): UACancelSchedulesAction; // inherited from NSObject
}

declare var UACancelSchedulesActionAll: string;

declare var UACancelSchedulesActionGroups: string;

declare var UACancelSchedulesActionIDs: string;

declare class UAChannelAPIClient extends UAAPIClient {

	static alloc(): UAChannelAPIClient; // inherited from NSObject

	static clientWithConfig(config: UAConfig): UAChannelAPIClient;

	static clientWithConfigSession(config: UAConfig, session: UARequestSession): UAChannelAPIClient;

	static new(): UAChannelAPIClient; // inherited from NSObject

	createChannelWithPayloadOnSuccessOnFailure(payload: UAChannelRegistrationPayload, successBlock: (p1: string, p2: string, p3: boolean) => void, failureBlock: (p1: number) => void): void;

	updateChannelWithLocationWithPayloadOnSuccessOnFailure(channelLocation: string, payload: UAChannelRegistrationPayload, successBlock: () => void, failureBlock: (p1: number) => void): void;
}

declare class UAChannelCapture extends NSObject implements UIAlertViewDelegate {

	static alloc(): UAChannelCapture; // inherited from NSObject

	static channelCaptureWithConfigPush(config: UAConfig, push: UAPush): UAChannelCapture;

	static new(): UAChannelCapture; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	alertViewCancel(alertView: UIAlertView): void;

	alertViewClickedButtonAtIndex(alertView: UIAlertView, buttonIndex: number): void;

	alertViewDidDismissWithButtonIndex(alertView: UIAlertView, buttonIndex: number): void;

	alertViewShouldEnableFirstOtherButton(alertView: UIAlertView): boolean;

	alertViewWillDismissWithButtonIndex(alertView: UIAlertView, buttonIndex: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didPresentAlertView(alertView: UIAlertView): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willPresentAlertView(alertView: UIAlertView): void;
}

declare var UAChannelCreatedEvent: string;

declare var UAChannelCreatedEventChannelKey: string;

declare var UAChannelCreatedEventExistingKey: string;

declare class UAChannelRegistrar extends NSObject {

	static alloc(): UAChannelRegistrar; // inherited from NSObject

	static channelRegistrarWithConfig(config: UAConfig): UAChannelRegistrar;

	static new(): UAChannelRegistrar; // inherited from NSObject

	channelAPIClient: UAChannelAPIClient;

	delegate: UAChannelRegistrarDelegate;

	isRegistrationInProgress: boolean;

	lastSuccessPayload: UAChannelRegistrationPayload;

	cancelAllRequests(): void;

	registerWithChannelIDChannelLocationWithPayloadForcefully(channelID: string, channelLocation: string, payload: UAChannelRegistrationPayload, forcefully: boolean): void;
}

interface UAChannelRegistrarDelegate extends NSObjectProtocol {

	channelCreatedChannelLocationExisting?(channelID: string, channelLocation: string, existing: boolean): void;

	registrationFailedWithPayload?(payload: UAChannelRegistrationPayload): void;

	registrationSucceededWithPayload?(payload: UAChannelRegistrationPayload): void;
}
declare var UAChannelRegistrarDelegate: {

	prototype: UAChannelRegistrarDelegate;
};

declare class UAChannelRegistrationPayload extends NSObject implements NSCopying {

	static alloc(): UAChannelRegistrationPayload; // inherited from NSObject

	static new(): UAChannelRegistrationPayload; // inherited from NSObject

	alias: string;

	backgroundEnabled: boolean;

	badge: number;

	deviceID: string;

	optedIn: boolean;

	pushAddress: string;

	quietTime: NSDictionary<any, any>;

	setTags: boolean;

	tags: NSArray<string>;

	timeZone: string;

	userID: string;

	asJSONData(): NSData;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	isEqualToPayload(payload: UAChannelRegistrationPayload): boolean;

	payloadDictionary(): NSDictionary<any, any>;
}

declare class UACircularRegion extends NSObject {

	static alloc(): UACircularRegion; // inherited from NSObject

	static circularRegionWithRadiusLatitudeLongitude(radius: number, latitude: number, longitude: number): UACircularRegion;

	static new(): UACircularRegion; // inherited from NSObject

	latitude: number;

	longitude: number;

	radius: number;

	isValid(): boolean;
}

declare class UACloseWindowAction extends UAAction {

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UACloseWindowAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UACloseWindowAction; // inherited from UAAction

	static alloc(): UACloseWindowAction; // inherited from NSObject

	static new(): UACloseWindowAction; // inherited from NSObject
}

declare class UAColorUtils extends NSObject {

	static alloc(): UAColorUtils; // inherited from NSObject

	static colorWithHexString(hexString: string): UIColor;

	static hexStringWithColor(color: UIColor): string;

	static new(): UAColorUtils; // inherited from NSObject
}

declare class UAConfig extends NSObject implements NSCopying {

	static alloc(): UAConfig; // inherited from NSObject

	static config(): UAConfig;

	static configWithContentsOfFile(path: string): UAConfig;

	static defaultConfig(): UAConfig;

	static isProductionProvisioningProfile(profilePath: string): boolean;

	static new(): UAConfig; // inherited from NSObject

	static normalizeDictionary(keyedValues: NSDictionary<any, any>): NSDictionary<any, any>;

	analyticsEnabled: boolean;

	analyticsURL: string;

	readonly appKey: string;

	readonly appSecret: string;

	automaticSetupEnabled: boolean;

	cacheDiskSizeInMB: number;

	channelCaptureEnabled: boolean;

	channelCreationDelayEnabled: boolean;

	clearNamedUserOnAppRestore: boolean;

	clearUserOnAppRestore: boolean;

	customConfig: NSDictionary<any, any>;

	defaultDetectProvisioningMode: boolean;

	detectProvisioningMode: boolean;

	developmentAppKey: string;

	developmentAppSecret: string;

	developmentLogLevel: UALogLevel;

	deviceAPIURL: string;

	inProduction: boolean;

	readonly isSimulator: boolean;

	landingPageContentURL: string;

	readonly logLevel: UALogLevel;

	messageCenterStyleConfig: string;

	productionAppKey: string;

	productionAppSecret: string;

	productionLogLevel: UALogLevel;

	profilePath: string;

	testingMasterSecret: string;

	whitelist: NSArray<string>;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	usesProductionPushServer(): boolean;

	validate(): boolean;
}

declare class UACustomEvent extends UAEvent {

	static alloc(): UACustomEvent; // inherited from NSObject

	static eventWithName(eventName: string): UACustomEvent;

	static eventWithNameValue(eventName: string, eventValue: number): UACustomEvent;

	static eventWithNameValueFromString(eventName: string, eventValue: string): UACustomEvent;

	static new(): UACustomEvent; // inherited from NSObject

	conversionPushMetadata: string;

	conversionSendID: string;

	eventName: string;

	eventValue: NSDecimalNumber;

	interactionID: string;

	interactionType: string;

	readonly payload: NSDictionary<any, any>;

	readonly properties: NSDictionary<any, any>;

	templateType: string;

	transactionID: string;

	setBoolPropertyForKey(value: boolean, key: string): void;

	setInteractionFromMessage(message: UAInboxMessage): void;

	setNumberPropertyForKey(value: number, key: string): void;

	setStringArrayPropertyForKey(value: NSArray<string>, key: string): void;

	setStringPropertyForKey(value: string, key: string): void;

	track(): void;
}

declare var UACustomEventCharacterLimit: number;

declare var UACustomEventInteractionIDKey: string;

declare var UACustomEventInteractionTypeKey: string;

declare var UACustomEventMaxPropertiesCount: number;

declare var UACustomEventNameKey: string;

declare var UACustomEventPropertiesKey: string;

declare var UACustomEventTransactionIDKey: string;

declare var UACustomEventValueKey: string;

declare class UADefaultMessageCenter extends NSObject {

	static alloc(): UADefaultMessageCenter; // inherited from NSObject

	static messageCenterWithConfig(config: UAConfig): UADefaultMessageCenter;

	static new(): UADefaultMessageCenter; // inherited from NSObject

	filter: NSPredicate;

	style: UADefaultMessageCenterStyle;

	title: string;

	dismiss(animated: boolean): void;

	display(animated: boolean): void;

	displayMessage(message: UAInboxMessage): void;

	displayMessageAnimated(message: UAInboxMessage, animated: boolean): void;
}

declare class UADefaultMessageCenterListCell extends UITableViewCell {

	static alloc(): UADefaultMessageCenterListCell; // inherited from NSObject

	static appearance(): UADefaultMessageCenterListCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UADefaultMessageCenterListCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UADefaultMessageCenterListCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UADefaultMessageCenterListCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UADefaultMessageCenterListCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UADefaultMessageCenterListCell; // inherited from UIAppearance

	static new(): UADefaultMessageCenterListCell; // inherited from NSObject

	date: UILabel;

	listIconView: UIImageView;

	style: UADefaultMessageCenterStyle;

	title: UILabel;

	unreadIndicator: UIView;

	setData(message: UAInboxMessage): void;
}

declare class UADefaultMessageCenterListViewController extends UIViewController implements UIScrollViewDelegate, UISplitViewControllerDelegate, UITableViewDataSource, UITableViewDelegate {

	static alloc(): UADefaultMessageCenterListViewController; // inherited from NSObject

	static new(): UADefaultMessageCenterListViewController; // inherited from NSObject

	closeBlock: (p1: boolean) => void;

	filter: NSPredicate;

	style: UADefaultMessageCenterStyle;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	displayMessage(message: UAInboxMessage): void;

	indexPathForPreferredFocusedViewInTableView(tableView: UITableView): NSIndexPath;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	numberOfSectionsInTableView(tableView: UITableView): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	primaryViewControllerForCollapsingSplitViewController(splitViewController: UISplitViewController): UIViewController;

	primaryViewControllerForExpandingSplitViewController(splitViewController: UISplitViewController): UIViewController;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

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

	splitViewControllerCollapseSecondaryViewControllerOntoPrimaryViewController(splitViewController: UISplitViewController, secondaryViewController: UIViewController, primaryViewController: UIViewController): boolean;

	splitViewControllerPopoverControllerWillPresentViewController(svc: UISplitViewController, pc: UIPopoverController, aViewController: UIViewController): void;

	splitViewControllerPreferredInterfaceOrientationForPresentation(splitViewController: UISplitViewController): UIInterfaceOrientation;

	splitViewControllerSeparateSecondaryViewControllerFromPrimaryViewController(splitViewController: UISplitViewController, primaryViewController: UIViewController): UIViewController;

	splitViewControllerShouldHideViewControllerInOrientation(svc: UISplitViewController, vc: UIViewController, orientation: UIInterfaceOrientation): boolean;

	splitViewControllerShowDetailViewControllerSender(splitViewController: UISplitViewController, vc: UIViewController, sender: any): boolean;

	splitViewControllerShowViewControllerSender(splitViewController: UISplitViewController, vc: UIViewController, sender: any): boolean;

	splitViewControllerSupportedInterfaceOrientations(splitViewController: UISplitViewController): UIInterfaceOrientationMask;

	splitViewControllerWillChangeToDisplayMode(svc: UISplitViewController, displayMode: UISplitViewControllerDisplayMode): void;

	splitViewControllerWillHideViewControllerWithBarButtonItemForPopoverController(svc: UISplitViewController, aViewController: UIViewController, barButtonItem: UIBarButtonItem, pc: UIPopoverController): void;

	splitViewControllerWillShowViewControllerInvalidatingBarButtonItem(svc: UISplitViewController, aViewController: UIViewController, barButtonItem: UIBarButtonItem): void;

	tableViewAccessoryButtonTappedForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewAccessoryTypeForRowWithIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellAccessoryType;

	tableViewCanEditRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanFocusRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewCellForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): UITableViewCell;

	tableViewCommitEditingStyleForRowAtIndexPath(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewDidDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

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

	tableViewMoveRowAtIndexPathToIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewPerformActionForRowAtIndexPathWithSender(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewSectionForSectionIndexTitleAtIndex(tableView: UITableView, title: string, index: number): number;

	tableViewShouldHighlightRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldUpdateFocusInContext(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewTitleForFooterInSection(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection(tableView: UITableView, section: number): string;

	tableViewViewForFooterInSection(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayCellForRowAtIndexPath(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;

	tableViewWillDisplayFooterViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	targetDisplayModeForActionInSplitViewController(svc: UISplitViewController): UISplitViewControllerDisplayMode;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class UADefaultMessageCenterMessageViewController extends UIViewController implements UARichContentWindow, UIWebViewDelegate {

	static alloc(): UADefaultMessageCenterMessageViewController; // inherited from NSObject

	static new(): UADefaultMessageCenterMessageViewController; // inherited from NSObject

	closeBlock: (p1: boolean) => void;

	filter: NSPredicate;

	message: UAInboxMessage;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	closeWebViewAnimated(webView: UIWebView, animated: boolean): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	loadMessageAtIndex(index: number): void;

	loadMessageForID(mid: string): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	webViewDidFailLoadWithError(webView: UIWebView, error: NSError): void;

	webViewDidFinishLoad(webView: UIWebView): void;

	webViewDidStartLoad(webView: UIWebView): void;

	webViewShouldStartLoadWithRequestNavigationType(webView: UIWebView, request: NSURLRequest, navigationType: UIWebViewNavigationType): boolean;
}

declare class UADefaultMessageCenterSplitViewController extends UISplitViewController {

	static alloc(): UADefaultMessageCenterSplitViewController; // inherited from NSObject

	static new(): UADefaultMessageCenterSplitViewController; // inherited from NSObject

	filter: NSPredicate;

	readonly listViewController: UADefaultMessageCenterListViewController;

	style: UADefaultMessageCenterStyle;
}

declare class UADefaultMessageCenterStyle extends NSObject {

	static alloc(): UADefaultMessageCenterStyle; // inherited from NSObject

	static new(): UADefaultMessageCenterStyle; // inherited from NSObject

	static style(): UADefaultMessageCenterStyle;

	static styleWithContentsOfFile(path: string): UADefaultMessageCenterStyle;

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

	iconsEnabled: boolean;

	listColor: UIColor;

	navigationBarColor: UIColor;

	navigationBarOpaque: boolean;

	placeholderIcon: UIImage;

	refreshTintColor: UIColor;

	tintColor: UIColor;

	titleColor: UIColor;

	titleFont: UIFont;

	unreadIndicatorColor: UIColor;
}

declare class UADelayOperation extends NSBlockOperation {

	static alloc(): UADelayOperation; // inherited from NSObject

	static blockOperationWithBlock(block: () => void): UADelayOperation; // inherited from NSBlockOperation

	static new(): UADelayOperation; // inherited from NSObject

	static operationWithDelayInSeconds(seconds: number): UADelayOperation;

	readonly seconds: number;
}

declare class UADeviceRegistrationEvent extends UAEvent {

	static alloc(): UADeviceRegistrationEvent; // inherited from NSObject

	static event(): UADeviceRegistrationEvent;

	static new(): UADeviceRegistrationEvent; // inherited from NSObject
}

declare class UADisplayInboxAction extends UAAction {

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UADisplayInboxAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UADisplayInboxAction; // inherited from UAAction

	static alloc(): UADisplayInboxAction; // inherited from NSObject

	static new(): UADisplayInboxAction; // inherited from NSObject

	displayInboxMessageSituation(message: UAInboxMessage, situation: UASituation): void;

	displayInboxWithSituation(situation: UASituation): void;
}

declare class UADisposable extends NSObject {

	static alloc(): UADisposable; // inherited from NSObject

	static disposableWithBlock(disposalBlock: () => void): UADisposable;

	static new(): UADisposable; // inherited from NSObject

	dispose(): void;
}

declare class UAEvent extends NSObject {

	static alloc(): UAEvent; // inherited from NSObject

	static new(): UAEvent; // inherited from NSObject

	readonly data: NSDictionary<any, any>;

	readonly eventID: string;

	readonly eventType: string;

	readonly jsonEventSize: number;

	readonly priority: UAEventPriority;

	readonly time: string;

	carrierName(): string;

	isValid(): boolean;

	notificationTypes(): NSArray<any>;
}

declare class UAEventAPIClient extends UAAPIClient {

	static alloc(): UAEventAPIClient; // inherited from NSObject

	static clientWithConfig(config: UAConfig): UAEventAPIClient;

	static clientWithConfigSession(config: UAConfig, session: UARequestSession): UAEventAPIClient;

	static new(): UAEventAPIClient; // inherited from NSObject

	uploadEventsCompletionHandler(events: NSArray<any>, completionHandler: (p1: NSHTTPURLResponse) => void): void;
}

declare class UAEventData extends NSManagedObject {

	static alloc(): UAEventData; // inherited from NSObject

	static new(): UAEventData; // inherited from NSObject

	bytes: number;

	data: NSData;

	identifier: string;

	sessionID: string;

	storeDate: Date;

	time: string;

	type: string;
}

declare class UAEventManager extends NSObject {

	static alloc(): UAEventManager; // inherited from NSObject

	static eventManagerWithConfigDataStore(config: UAConfig, dataStore: UAPreferenceDataStore): UAEventManager;

	static eventManagerWithConfigDataStoreEventStoreClientQueue(config: UAConfig, dataStore: UAPreferenceDataStore, eventStore: UAEventStore, client: UAEventAPIClient, queue: NSOperationQueue): UAEventManager;

	static new(): UAEventManager; // inherited from NSObject

	readonly lastSendTime: Date;

	addEventSessionID(event: UAEvent, sessionID: string): void;

	cancelUpload(): void;

	deleteAllEvents(): void;

	scheduleUpload(): void;
}

declare const enum UAEventPriority {

	Low = 0,

	Normal = 1,

	High = 2
}

declare class UAEventStore extends NSObject {

	static alloc(): UAEventStore; // inherited from NSObject

	static eventStoreWithConfig(config: UAConfig): UAEventStore;

	static new(): UAEventStore; // inherited from NSObject

	deleteAllEvents(): void;

	deleteEventsWithIDs(eventIds: NSArray<string>): void;

	fetchEventsWithMaxBatchSizeCompletionHandler(maxBatchSize: number, completionHandler: (p1: NSArray<UAEventData>) => void): void;

	saveEventSessionID(event: UAEvent, sessionID: string): void;

	trimEventsToStoreSize(bytes: number): void;
}

declare class UAFetchDeviceInfoAction extends UAAction {

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAFetchDeviceInfoAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAFetchDeviceInfoAction; // inherited from UAAction

	static alloc(): UAFetchDeviceInfoAction; // inherited from NSObject

	static new(): UAFetchDeviceInfoAction; // inherited from NSObject
}

declare class UAInAppDisplayEvent extends UAEvent {

	static alloc(): UAInAppDisplayEvent; // inherited from NSObject

	static eventWithMessage(message: UAInAppMessage): UAInAppDisplayEvent;

	static new(): UAInAppDisplayEvent; // inherited from NSObject
}

declare class UAInAppMessage extends NSObject {

	static alloc(): UAInAppMessage; // inherited from NSObject

	static message(): UAInAppMessage;

	static messageWithPayload(payload: NSDictionary<any, any>): UAInAppMessage;

	static new(): UAInAppMessage; // inherited from NSObject

	alert: string;

	readonly buttonActionBindings: NSArray<any>;

	buttonActions: NSDictionary<any, any>;

	readonly buttonCategory: UANotificationCategory;

	buttonGroup: string;

	displayType: UAInAppMessageDisplayType;

	duration: number;

	expiry: Date;

	extra: NSDictionary<any, any>;

	identifier: string;

	readonly notificationActionContext: UIUserNotificationActionContext;

	readonly notificationActions: NSArray<any>;

	onClick: NSDictionary<any, any>;

	readonly payload: NSDictionary<any, any>;

	position: UAInAppMessagePosition;

	primaryColor: UIColor;

	secondaryColor: UIColor;

	isEqualToMessage(message: UAInAppMessage): boolean;
}

declare class UAInAppMessageButtonActionBinding extends NSObject {

	static alloc(): UAInAppMessageButtonActionBinding; // inherited from NSObject

	static new(): UAInAppMessageButtonActionBinding; // inherited from NSObject

	actions: NSDictionary<any, any>;

	identifier: string;

	situation: UASituation;

	title: string;
}

declare class UAInAppMessageController extends NSObject implements UIGestureRecognizerDelegate {

	static alloc(): UAInAppMessageController; // inherited from NSObject

	static controllerWithMessageDelegateDismissalBlock(message: UAInAppMessage, delegate: UAInAppMessageControllerDelegate, dismissalBlock: (p1: UAInAppMessageController) => void): UAInAppMessageController;

	static new(): UAInAppMessageController; // inherited from NSObject

	defaultDelegate: UAInAppMessageControllerDefaultDelegate;

	readonly isShowing: boolean;

	readonly message: UAInAppMessage;

	userDelegate: UAInAppMessageControllerDelegate;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dismiss(): void;

	gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldReceivePress(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;

	gestureRecognizerShouldReceiveTouch(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;

	gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	gestureRecognizerShouldRequireFailureOfGestureRecognizer(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	show(): boolean;
}

declare class UAInAppMessageControllerDefaultDelegate extends NSObject implements UAInAppMessageControllerDelegate {

	static alloc(): UAInAppMessageControllerDefaultDelegate; // inherited from NSObject

	static new(): UAInAppMessageControllerDefaultDelegate; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { message: UAInAppMessage; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithMessage(message: UAInAppMessage): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	messageViewAnimateInWithParentViewCompletionHandler(messageView: UIView, parentView: UIView, completionHandler: () => void): void;

	messageViewAnimateOutWithParentViewCompletionHandler(messageView: UIView, parentView: UIView, completionHandler: () => void): void;

	messageViewButtonAtIndex(messageView: UIView, index: number): UIControl;

	messageViewDidChangeTouchState(messageView: UIView, touchDown: boolean): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	viewForMessageParentView(message: UAInAppMessage, parentView: UIView): UIView;
}

interface UAInAppMessageControllerDelegate extends NSObjectProtocol {

	messageViewAnimateInWithParentViewCompletionHandler?(messageView: UIView, parentView: UIView, completionHandler: () => void): void;

	messageViewAnimateOutWithParentViewCompletionHandler?(messageView: UIView, parentView: UIView, completionHandler: () => void): void;

	messageViewButtonAtIndex(messageView: UIView, index: number): UIControl;

	messageViewDidChangeTouchState?(messageView: UIView, touchDown: boolean): void;

	viewForMessageParentView(message: UAInAppMessage, parentView: UIView): UIView;
}
declare var UAInAppMessageControllerDelegate: {

	prototype: UAInAppMessageControllerDelegate;
};

declare const enum UAInAppMessageDisplayType {

	Unknown = 0,

	Banner = 1
}

declare const enum UAInAppMessagePosition {

	Top = 0,

	Bottom = 1
}

declare class UAInAppMessageView extends UIView {

	static alloc(): UAInAppMessageView; // inherited from NSObject

	static appearance(): UAInAppMessageView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): UAInAppMessageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): UAInAppMessageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): UAInAppMessageView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): UAInAppMessageView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): UAInAppMessageView; // inherited from UIAppearance

	static new(): UAInAppMessageView; // inherited from NSObject

	readonly button1: UIButton;

	readonly button2: UIButton;

	readonly messageLabel: UILabel;

	onLayoutSubviews: () => void;

	readonly tab: UIView;

	constructor(o: { position: UAInAppMessagePosition; numberOfButtons: number; });

	initWithPositionNumberOfButtons(position: UAInAppMessagePosition, numberOfButtons: number): this;
}

declare class UAInAppMessaging extends NSObject {

	static alloc(): UAInAppMessaging; // inherited from NSObject

	static inAppMessagingWithAnalyticsDataStore(analytics: UAAnalytics, dataStore: UAPreferenceDataStore): UAInAppMessaging;

	static new(): UAInAppMessaging; // inherited from NSObject

	autoDisplayEnabled: boolean;

	defaultPrimaryColor: UIColor;

	defaultSecondaryColor: UIColor;

	displayASAPEnabled: boolean;

	displayDelay: number;

	font: UIFont;

	keyboardDisplayed: boolean;

	messageControllerDelegate: UAInAppMessageControllerDelegate;

	messagingDelegate: UAInAppMessagingDelegate;

	pendingMessage: UAInAppMessage;

	deletePendingMessage(message: UAInAppMessage): void;

	displayMessage(message: UAInAppMessage): void;

	displayPendingMessage(): void;

	invalidateAutoDisplayTimer(): void;
}

interface UAInAppMessagingDelegate extends NSObjectProtocol {

	messageWillBeDisplayed?(message: UAInAppMessage): void;

	pendingMessageAvailable?(message: UAInAppMessage): void;
}
declare var UAInAppMessagingDelegate: {

	prototype: UAInAppMessagingDelegate;
};

declare class UAInAppResolutionEvent extends UAEvent {

	static alloc(): UAInAppResolutionEvent; // inherited from NSObject

	static buttonClickedResolutionWithMessageButtonIdentifierButtonTitleDisplayDuration(message: UAInAppMessage, buttonID: string, buttonTitle: string, duration: number): UAInAppResolutionEvent;

	static directOpenResolutionWithMessage(message: UAInAppMessage): UAInAppResolutionEvent;

	static dismissedResolutionWithMessageDisplayDuration(message: UAInAppMessage, duration: number): UAInAppResolutionEvent;

	static expiredMessageResolutionWithMessage(message: UAInAppMessage): UAInAppResolutionEvent;

	static messageClickedResolutionWithMessageDisplayDuration(message: UAInAppMessage, duration: number): UAInAppResolutionEvent;

	static new(): UAInAppResolutionEvent; // inherited from NSObject

	static replacedResolutionWithMessageReplacement(message: UAInAppMessage, replacement: UAInAppMessage): UAInAppResolutionEvent;

	static timedOutResolutionWithMessageDisplayDuration(message: UAInAppMessage, duration: number): UAInAppResolutionEvent;
}

declare class UAInbox extends NSObject {

	static alloc(): UAInbox; // inherited from NSObject

	static inboxWithUserConfigDataStore(user: UAUser, config: UAConfig, dataStore: UAPreferenceDataStore): UAInbox;

	static new(): UAInbox; // inherited from NSObject

	readonly client: UAInboxAPIClient;

	delegate: UAInboxDelegate;

	messageList: UAInboxMessageList;

	user: UAUser;
}

declare class UAInboxAPIClient extends UAAPIClient {

	static alloc(): UAInboxAPIClient; // inherited from NSObject

	static clientWithConfigSessionUserDataStore(config: UAConfig, session: UARequestSession, user: UAUser, dataStore: UAPreferenceDataStore): UAInboxAPIClient;

	static new(): UAInboxAPIClient; // inherited from NSObject

	clearLastModifiedTime(): void;

	performBatchDeleteForMessagesOnSuccessOnFailure(messages: NSArray<any>, successBlock: () => void, failureBlock: (p1: number) => void): void;

	performBatchMarkAsReadForMessagesOnSuccessOnFailure(messages: NSArray<any>, successBlock: () => void, failureBlock: (p1: number) => void): void;

	requestToPerformBatchDeleteForMessages(messages: NSArray<any>): UARequest;

	requestToPerformBatchMarkReadForMessages(messages: NSArray<any>): UARequest;

	requestToRetrieveMessageList(): UARequest;

	retrieveMessageListOnSuccessOnFailure(successBlock: (p1: number, p2: NSArray<any>) => void, failureBlock: (p1: number) => void): void;
}

declare class UAInboxDBManager extends NSObject {

	static alloc(): UAInboxDBManager; // inherited from NSObject

	static new(): UAInboxDBManager; // inherited from NSObject

	readonly mainContext: NSManagedObjectContext;

	readonly managedObjectModel: NSManagedObjectModel;

	readonly persistentStoreCoordinator: NSPersistentStoreCoordinator;

	readonly privateContext: NSManagedObjectContext;

	readonly storeURL: NSURL;

	constructor(o: { config: UAConfig; });

	addMessageFromDictionaryContext(dictionary: NSDictionary<any, any>, context: NSManagedObjectContext): UAInboxMessage;

	deleteMessagesContext(messages: NSArray<any>, context: NSManagedObjectContext): void;

	fetchMessagesWithPredicateContextCompletionHandler(predicate: NSPredicate, context: NSManagedObjectContext, completionHandler: (p1: NSArray<any>) => void): void;

	initWithConfig(config: UAConfig): this;

	updateMessageWithDictionaryContext(dictionary: NSDictionary<any, any>, context: NSManagedObjectContext): boolean;
}

interface UAInboxDelegate extends NSObjectProtocol {

	richPushMessageAvailable?(richPushMessage: UAInboxMessage): void;

	showInbox(): void;

	showInboxMessage?(message: UAInboxMessage): void;
}
declare var UAInboxDelegate: {

	prototype: UAInboxDelegate;
};

declare class UAInboxMessage extends NSObject {

	static alloc(): UAInboxMessage; // inherited from NSObject

	static messageWithData(data: UAInboxMessageData): UAInboxMessage;

	static new(): UAInboxMessage; // inherited from NSObject

	readonly contentType: string;

	data: UAInboxMessageData;

	readonly deleted: boolean;

	readonly extra: NSDictionary<any, any>;

	readonly inbox: UAInboxMessageList;

	readonly messageBodyURL: NSURL;

	readonly messageExpiration: Date;

	readonly messageID: string;

	readonly messageSent: Date;

	readonly messageURL: NSURL;

	readonly rawMessageObject: NSDictionary<any, any>;

	readonly title: string;

	readonly unread: boolean;

	isExpired(): boolean;

	markMessageReadWithCompletionHandler(completionHandler: (p1: UAInboxMessage) => void): UADisposable;
}

declare class UAInboxMessageData extends NSManagedObject {

	static alloc(): UAInboxMessageData; // inherited from NSObject

	static new(): UAInboxMessageData; // inherited from NSObject

	contentType: string;

	deletedClient: boolean;

	extra: NSDictionary<any, any>;

	readonly isGone: boolean;

	messageBodyURL: NSURL;

	messageExpiration: Date;

	messageID: string;

	messageSent: Date;

	messageURL: NSURL;

	rawMessageObject: NSDictionary<any, any>;

	title: string;

	unread: boolean;

	unreadClient: boolean;
}

declare class UAInboxMessageList extends NSObject {

	static alloc(): UAInboxMessageList; // inherited from NSObject

	static messageListWithUserClientConfig(user: UAUser, client: UAInboxAPIClient, config: UAConfig): UAInboxMessageList;

	static new(): UAInboxMessageList; // inherited from NSObject

	batchOperationCount: number;

	client: UAInboxAPIClient;

	inboxDBManager: UAInboxDBManager;

	readonly isBatchUpdating: boolean;

	readonly isRetrieving: boolean;

	messageIDMap: NSDictionary<any, any>;

	messageURLMap: NSDictionary<any, any>;

	readonly messages: NSArray<UAInboxMessage>;

	retrieveOperationCount: number;

	unreadCount: number;

	user: UAUser;

	loadSavedMessages(): void;

	markMessagesDeletedCompletionHandler(messages: NSArray<any>, completionHandler: () => void): UADisposable;

	markMessagesReadCompletionHandler(messages: NSArray<any>, completionHandler: () => void): UADisposable;

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
}

declare class UAIncomingInAppMessageAction extends UAAction {

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAIncomingInAppMessageAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAIncomingInAppMessageAction; // inherited from UAAction

	static alloc(): UAIncomingInAppMessageAction; // inherited from NSObject

	static new(): UAIncomingInAppMessageAction; // inherited from NSObject
}

declare class UAInstallAttributionEvent extends UAEvent {

	static alloc(): UAInstallAttributionEvent; // inherited from NSObject

	static event(): UAInstallAttributionEvent;

	static eventWithAppPurchaseDateIAdImpressionDate(appPurchaseDate: Date, iAdImpressionDate: Date): UAInstallAttributionEvent;

	static new(): UAInstallAttributionEvent; // inherited from NSObject
}

declare class UAInteractiveNotificationEvent extends UAEvent {

	static alloc(): UAInteractiveNotificationEvent; // inherited from NSObject

	static eventWithNotificationActionCategoryIDNotification(action: UANotificationAction, category: string, notification: NSDictionary<any, any>): UAInteractiveNotificationEvent;

	static eventWithNotificationActionCategoryIDNotificationResponseText(action: UANotificationAction, category: string, notification: NSDictionary<any, any>, responseText: string): UAInteractiveNotificationEvent;

	static new(): UAInteractiveNotificationEvent; // inherited from NSObject
}

declare class UAJSONMatcher extends NSObject {

	static alloc(): UAJSONMatcher; // inherited from NSObject

	static matcherWithJSONError(json: any): UAJSONMatcher;

	static matcherWithValueMatcher(valueMatcher: UAJSONValueMatcher): UAJSONMatcher;

	static matcherWithValueMatcherKey(valueMatcher: UAJSONValueMatcher, key: string): UAJSONMatcher;

	static matcherWithValueMatcherKeyScope(valueMatcher: UAJSONValueMatcher, key: string, scope: NSArray<string>): UAJSONMatcher;

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

	static andPredicateWithSubpredicates(subpredicates: NSArray<UAJSONPredicate>): UAJSONPredicate;

	static new(): UAJSONPredicate; // inherited from NSObject

	static notPredicateWithSubpredicate(subpredicate: UAJSONPredicate): UAJSONPredicate;

	static orPredicateWithSubpredicates(subpredicates: NSArray<UAJSONPredicate>): UAJSONPredicate;

	static predicateWithJSONError(json: any): UAJSONPredicate;

	static predicateWithJSONMatcher(matcher: UAJSONMatcher): UAJSONPredicate;

	readonly payload: NSDictionary<any, any>;

	evaluateObject(object: any): boolean;
}

declare const enum UAJSONPredicateErrorCode {

	InvalidJSON = 0
}

declare var UAJSONPredicateErrorDomain: string;

declare const enum UAJSONSerializationErrorCode {

	InvalidObject = 0
}

declare var UAJSONSerializationErrorDomain: string;

declare class UAJSONValueMatcher extends NSObject {

	static alloc(): UAJSONValueMatcher; // inherited from NSObject

	static matcherWhereNumberAtLeast(number: number): UAJSONValueMatcher;

	static matcherWhereNumberAtLeastAtMost(lowerNumber: number, higherNumber: number): UAJSONValueMatcher;

	static matcherWhereNumberAtMost(number: number): UAJSONValueMatcher;

	static matcherWhereNumberEquals(number: number): UAJSONValueMatcher;

	static matcherWhereStringEquals(string: string): UAJSONValueMatcher;

	static matcherWhereValueIsPresent(present: boolean): UAJSONValueMatcher;

	static matcherWithJSONError(json: any): UAJSONValueMatcher;

	static new(): UAJSONValueMatcher; // inherited from NSObject

	readonly payload: NSDictionary<any, any>;

	evaluateObject(object: any): boolean;
}

declare const enum UAJSONValueMatcherErrorCode {

	InvalidJSON = 0
}

declare var UAJSONValueMatcherErrorDomain: string;

declare class UAJSONValueTransformer extends NSValueTransformer {

	static alloc(): UAJSONValueTransformer; // inherited from NSObject

	static new(): UAJSONValueTransformer; // inherited from NSObject
}

interface UAJavaScriptDelegate extends NSObjectProtocol {

	callWithDataWithCompletionHandler(data: UAWebViewCallData, completionHandler: (p1: string) => void): void;
}
declare var UAJavaScriptDelegate: {

	prototype: UAJavaScriptDelegate;
};

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

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UALandingPageAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UALandingPageAction; // inherited from UAAction

	static alloc(): UALandingPageAction; // inherited from NSObject

	static new(): UALandingPageAction; // inherited from NSObject
}

declare var UALandingPageAspectLockKey: string;

declare var UALandingPageFill: string;

declare var UALandingPageHeightKey: string;

declare class UALandingPageOverlayController extends NSObject implements UARichContentWindow, UIWebViewDelegate {

	static alloc(): UALandingPageOverlayController; // inherited from NSObject

	static closeAll(animated: boolean): void;

	static new(): UALandingPageOverlayController; // inherited from NSObject

	static showMessage(message: UAInboxMessage): void;

	static showMessageWithHeaders(message: UAInboxMessage, headers: NSDictionary<any, any>): void;

	static showMessageWithHeadersSizeAspectLock(message: UAInboxMessage, headers: NSDictionary<any, any>, size: CGSize, aspectLock: boolean): void;

	static showURLWithHeaders(url: NSURL, headers: NSDictionary<any, any>): void;

	static showURLWithHeadersSizeAspectLock(url: NSURL, headers: NSDictionary<any, any>, size: CGSize, aspectLock: boolean): void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	closeWebViewAnimated(webView: UIWebView, animated: boolean): void;

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

	webViewDidFailLoadWithError(webView: UIWebView, error: NSError): void;

	webViewDidFinishLoad(webView: UIWebView): void;

	webViewDidStartLoad(webView: UIWebView): void;

	webViewShouldStartLoadWithRequestNavigationType(webView: UIWebView, request: NSURLRequest, navigationType: UIWebViewNavigationType): boolean;
}

declare var UALandingPageURLKey: string;

declare var UALandingPageWidthKey: string;

declare class UALegacyAPNSRegistration extends NSObject implements UAAPNSRegistrationProtocol {

	static alloc(): UALegacyAPNSRegistration; // inherited from NSObject

	static new(): UALegacyAPNSRegistration; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getCurrentAuthorizationOptionsWithCompletionHandler(completionHandler: (p1: UANotificationOptions) => void): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	updateRegistrationWithOptionsCategoriesCompletionHandler(options: UANotificationOptions, categories: NSSet<UANotificationCategory>, completionHandler: () => void): void;
}

declare class UALocation extends NSObject implements CLLocationManagerDelegate {

	static alloc(): UALocation; // inherited from NSObject

	static locationWithAnalyticsDataStore(analytics: UAAnalytics, dataStore: UAPreferenceDataStore): UALocation;

	static new(): UALocation; // inherited from NSObject

	analytics: UAAnalytics;

	autoRequestAuthorizationEnabled: boolean;

	backgroundLocationUpdatesAllowed: boolean;

	dataStore: UAPreferenceDataStore;

	delegate: UALocationDelegate;

	readonly lastLocation: CLLocation;

	locationManager: CLLocationManager;

	locationUpdatesEnabled: boolean;

	locationUpdatesStarted: boolean;

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

	locationManagerDidChangeAuthorizationStatus(manager: CLLocationManager, status: CLAuthorizationStatus): void;

	locationManagerDidDetermineStateForRegion(manager: CLLocationManager, state: CLRegionState, region: CLRegion): void;

	locationManagerDidEnterRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidExitRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidFailWithError(manager: CLLocationManager, error: NSError): void;

	locationManagerDidFinishDeferredUpdatesWithError(manager: CLLocationManager, error: NSError): void;

	locationManagerDidPauseLocationUpdates(manager: CLLocationManager): void;

	locationManagerDidRangeBeaconsInRegion(manager: CLLocationManager, beacons: NSArray<CLBeacon>, region: CLBeaconRegion): void;

	locationManagerDidResumeLocationUpdates(manager: CLLocationManager): void;

	locationManagerDidStartMonitoringForRegion(manager: CLLocationManager, region: CLRegion): void;

	locationManagerDidUpdateHeading(manager: CLLocationManager, newHeading: CLHeading): void;

	locationManagerDidUpdateLocations(manager: CLLocationManager, locations: NSArray<CLLocation>): void;

	locationManagerDidUpdateToLocationFromLocation(manager: CLLocationManager, newLocation: CLLocation, oldLocation: CLLocation): void;

	locationManagerDidVisit(manager: CLLocationManager, visit: CLVisit): void;

	locationManagerMonitoringDidFailForRegionWithError(manager: CLLocationManager, region: CLRegion, error: NSError): void;

	locationManagerRangingBeaconsDidFailForRegionWithError(manager: CLLocationManager, region: CLBeaconRegion, error: NSError): void;

	locationManagerShouldDisplayHeadingCalibration(manager: CLLocationManager): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface UALocationDelegate extends NSObjectProtocol {

	locationUpdatesStarted?(): void;

	locationUpdatesStopped?(): void;

	receivedLocationUpdates?(locations: NSArray<any>): void;
}
declare var UALocationDelegate: {

	prototype: UALocationDelegate;
};

declare class UALocationEvent extends UAEvent {

	static alloc(): UALocationEvent; // inherited from NSObject

	static locationEventWithLocationProviderTypeDesiredAccuracyDistanceFilter(location: CLLocation, providerType: string, desiredAccuracy: number, distanceFilter: number): UALocationEvent;

	static new(): UALocationEvent; // inherited from NSObject

	static significantChangeLocationEventWithLocationProviderType(location: CLLocation, providerType: string): UALocationEvent;

	static singleLocationEventWithLocationProviderTypeDesiredAccuracyDistanceFilter(location: CLLocation, providerType: string, desiredAccuracy: number, distanceFilter: number): UALocationEvent;

	static standardLocationEventWithLocationProviderTypeDesiredAccuracyDistanceFilter(location: CLLocation, providerType: string, desiredAccuracy: number, distanceFilter: number): UALocationEvent;
}

declare var UALocationEventAnalyticsType: string;

declare var UALocationEventDesiredAccuracyKey: string;

declare var UALocationEventDistanceFilterKey: string;

declare var UALocationEventForegroundKey: string;

declare var UALocationEventHorizontalAccuracyKey: string;

declare var UALocationEventLatitudeKey: string;

declare var UALocationEventLongitudeKey: string;

declare var UALocationEventProviderKey: string;

declare var UALocationEventUpdateTypeChange: string;

declare var UALocationEventUpdateTypeContinuous: string;

declare var UALocationEventUpdateTypeKey: string;

declare var UALocationEventUpdateTypeNone: string;

declare var UALocationEventUpdateTypeSingle: string;

declare var UALocationEventVerticalAccuracyKey: string;

declare var UALocationServiceProviderGps: string;

declare var UALocationServiceProviderNetwork: string;

declare var UALocationServiceProviderUnknown: string;

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

declare class UAMessageCenterDateUtils extends NSObject {

	static alloc(): UAMessageCenterDateUtils; // inherited from NSObject

	static formattedDateRelativeToNow(date: Date): string;

	static new(): UAMessageCenterDateUtils; // inherited from NSObject
}

declare class UAModifyTagsAction extends UAAction {

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAModifyTagsAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAModifyTagsAction; // inherited from UAAction

	static alloc(): UAModifyTagsAction; // inherited from NSObject

	static new(): UAModifyTagsAction; // inherited from NSObject

	applyChannelTags(tags: NSArray<any>): void;

	applyChannelTagsGroup(tags: NSArray<any>, group: string): void;

	applyNamedUserTagsGroup(tags: NSArray<any>, group: string): void;
}

declare class UANamedUser extends NSObject {

	static alloc(): UANamedUser; // inherited from NSObject

	static namedUserWithPushConfigDataStore(push: UAPush, config: UAConfig, dataStore: UAPreferenceDataStore): UANamedUser;

	static new(): UANamedUser; // inherited from NSObject

	changeToken: string;

	config: UAConfig;

	dataStore: UAPreferenceDataStore;

	identifier: string;

	lastUpdatedToken: string;

	namedUserAPIClient: UANamedUserAPIClient;

	push: UAPush;

	tagGroupsAPIClient: UATagGroupsAPIClient;

	addTagsGroup(tags: NSArray<string>, tagGroupID: string): void;

	disassociateNamedUserIfNil(): void;

	forceUpdate(): void;

	removeTagsGroup(tags: NSArray<string>, tagGroupID: string): void;

	setTagsGroup(tags: NSArray<string>, tagGroupID: string): void;

	update(): void;

	updateTags(): void;
}

declare class UANamedUserAPIClient extends UAAPIClient {

	static alloc(): UANamedUserAPIClient; // inherited from NSObject

	static clientWithConfig(config: UAConfig): UANamedUserAPIClient;

	static clientWithConfigSession(config: UAConfig, session: UARequestSession): UANamedUserAPIClient;

	static new(): UANamedUserAPIClient; // inherited from NSObject

	associateChannelIDOnSuccessOnFailure(identifier: string, channelID: string, successBlock: () => void, failureBlock: (p1: number) => void): void;

	disassociateOnSuccessOnFailure(channelID: string, successBlock: () => void, failureBlock: (p1: number) => void): void;
}

declare var UANamedUserAddTagGroupsSettingsKey: string;

declare var UANamedUserChangeTokenKey: string;

declare var UANamedUserIDKey: string;

declare var UANamedUserLastUpdatedTokenKey: string;

declare var UANamedUserRemoveTagGroupsSettingsKey: string;

declare class UANotificationAction extends NSObject {

	static actionWithIdentifierTitleOptions(identifier: string, title: string, options: UANotificationActionOptions): UANotificationAction;

	static alloc(): UANotificationAction; // inherited from NSObject

	static new(): UANotificationAction; // inherited from NSObject

	readonly identifier: string;

	readonly options: UANotificationActionOptions;

	readonly title: string;

	constructor(o: { identifier: string; title: string; options: UANotificationActionOptions; });

	asUIUserNotificationAction(): UIUserNotificationAction;

	asUNNotificationAction(): UNNotificationAction;

	initWithIdentifierTitleOptions(identifier: string, title: string, options: UANotificationActionOptions): this;

	isEqualToUIUserNotificationAction(notificationAction: UIUserNotificationAction): boolean;

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

	static createCategoryActions(categoryId: string, actionDefinitions: NSArray<any>): UANotificationCategory;

	static defaultCategories(): NSSet<any>;

	static defaultCategoriesWithRequireAuth(requireAuth: boolean): NSSet<any>;

	static new(): UANotificationCategories; // inherited from NSObject
}

declare class UANotificationCategory extends NSObject {

	static alloc(): UANotificationCategory; // inherited from NSObject

	static categoryWithIdentifierActionsIntentIdentifiersOptions(identifier: string, actions: NSArray<UANotificationAction>, intentIdentifiers: NSArray<string>, options: UANotificationCategoryOptions): UANotificationCategory;

	static new(): UANotificationCategory; // inherited from NSObject

	readonly actions: NSArray<UANotificationAction>;

	readonly identifier: string;

	readonly intentIdentifiers: NSArray<string>;

	readonly options: UANotificationCategoryOptions;

	asUIUserNotificationCategory(): UIUserNotificationCategory;

	asUNNotificationCategory(): UNNotificationCategory;

	isEqualToUIUserNotificationCategory(category: UIUserNotificationCategory): boolean;

	isEqualToUNNotificationCategory(category: UNNotificationCategory): boolean;
}

declare const enum UANotificationCategoryOptions {

	None = 0,

	CustomDismissAction = 1,

	AllowInCarPlay = 2
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
}

declare var UANotificationDefaultActionIdentifier: string;

declare var UANotificationDismissActionIdentifier: string;

declare var UANotificationOptionNone: UANotificationOptions;

declare const enum UANotificationOptions {

	Badge = 1,

	Sound = 2,

	Alert = 4,

	CarPlay = 8
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

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAOpenExternalURLAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAOpenExternalURLAction; // inherited from UAAction

	static alloc(): UAOpenExternalURLAction; // inherited from NSObject

	static new(): UAOpenExternalURLAction; // inherited from NSObject
}

declare const enum UAOpenExternalURLActionErrorCode {

	URLFailedToOpen = 0
}

declare var UAOpenExternalURLActionErrorDomain: string;

declare class UAOverlayInboxMessageAction extends UAAction {

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAOverlayInboxMessageAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAOverlayInboxMessageAction; // inherited from UAAction

	static alloc(): UAOverlayInboxMessageAction; // inherited from NSObject

	static new(): UAOverlayInboxMessageAction; // inherited from NSObject
}

declare const enum UAOverlayInboxMessageActionErrorCode {

	MessageUnavailable = 0
}

declare var UAOverlayInboxMessageActionErrorDomain: string;

declare class UAPasteboardAction extends UAAction {

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAPasteboardAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAPasteboardAction; // inherited from UAAction

	static alloc(): UAPasteboardAction; // inherited from NSObject

	static new(): UAPasteboardAction; // inherited from NSObject
}

declare class UAPreferenceDataStore extends NSObject {

	static alloc(): UAPreferenceDataStore; // inherited from NSObject

	static new(): UAPreferenceDataStore; // inherited from NSObject

	static preferenceDataStoreWithKeyPrefix(keyPrefix: string): UAPreferenceDataStore;

	URLForKey(key: string): NSURL;

	addTagGroupsMutationAtBeginningForKey(mutation: UATagGroupsMutation, atBeginning: boolean, key: string): void;

	arrayForKey(key: string): NSArray<any>;

	boolForKey(key: string): boolean;

	dataForKey(key: string): NSData;

	dictionaryForKey(key: string): NSDictionary<any, any>;

	doubleForKey(key: string): number;

	floatForKey(key: string): number;

	integerForKey(key: string): number;

	migrateTagGroupSettingsForAddTagsKeyRemoveTagsKeyNewKey(addTagsKey: string, removeTagsKey: string, key: string): void;

	migrateUnprefixedKeys(keys: NSArray<any>): void;

	objectForKey(key: string): any;

	pollTagGroupsMutationForKey(key: string): UATagGroupsMutation;

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

	major: number;

	minor: number;

	proximityID: string;

	isValid(): boolean;
}

declare class UAPush extends NSObject implements UAChannelRegistrarDelegate {

	static alloc(): UAPush; // inherited from NSObject

	static new(): UAPush; // inherited from NSObject

	static pushWithConfigDataStore(config: UAConfig, dataStore: UAPreferenceDataStore): UAPush;

	alias: string;

	allowUnregisteringUserNotificationTypes: boolean;

	readonly authorizedNotificationOptions: UANotificationOptions;

	autobadgeEnabled: boolean;

	backgroundPushNotificationsEnabled: boolean;

	backgroundPushNotificationsEnabledByDefault: boolean;

	channelCreationEnabled: boolean;

	readonly channelID: string;

	channelLocation: string;

	channelRegistrar: UAChannelRegistrar;

	channelTagRegistrationEnabled: boolean;

	readonly combinedCategories: NSSet<UANotificationCategory>;

	customCategories: NSSet<UANotificationCategory>;

	dataStore: UAPreferenceDataStore;

	defaultPresentationOptions: UNNotificationPresentationOptions;

	readonly deviceToken: string;

	readonly launchNotificationResponse: UANotificationResponse;

	notificationOptions: UANotificationOptions;

	pushNotificationDelegate: UAPushNotificationDelegate;

	pushRegistration: UAAPNSRegistrationProtocol;

	pushTokenRegistrationEnabled: boolean;

	readonly quietTime: NSDictionary<any, any>;

	quietTimeEnabled: boolean;

	registrationBackgroundTask: number;

	registrationDelegate: UARegistrationDelegate;

	requireAuthorizationForDefaultCategories: boolean;

	requireSettingsAppToDisableUserNotifications: boolean;

	shouldUpdateAPNSRegistration: boolean;

	tagGroupsAPIClient: UATagGroupsAPIClient;

	tags: NSArray<string>;

	timeZone: NSTimeZone;

	userPushNotificationsEnabled: boolean;

	userPushNotificationsEnabledByDefault: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addTag(tag: string): void;

	addTags(tags: NSArray<string>): void;

	addTagsGroup(tags: NSArray<string>, tagGroupID: string): void;

	applicationBackgroundRefreshStatusChanged(): void;

	applicationDidBecomeActive(): void;

	applicationDidEnterBackground(): void;

	backgroundPushNotificationsAllowed(): boolean;

	channelCreatedChannelLocationExisting(channelID: string, channelLocation: string, existing: boolean): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createChannelPayload(): UAChannelRegistrationPayload;

	defaultTimeZoneForQuietTime(): NSTimeZone;

	enableChannelCreation(): void;

	handleNotificationResponseCompletionHandler(response: UANotificationResponse, handler: () => void): void;

	handleRemoteNotificationForegroundCompletionHandler(notification: UANotificationContent, foreground: boolean, handler: (p1: UIBackgroundFetchResult) => void): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	migratePushSettings(): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	presentationOptionsForNotification(notification: UNNotification): UNNotificationPresentationOptions;

	registrationFailedWithPayload(payload: UAChannelRegistrationPayload): void;

	registrationSucceededWithPayload(payload: UAChannelRegistrationPayload): void;

	removeTag(tag: string): void;

	removeTags(tags: NSArray<string>): void;

	removeTagsGroup(tags: NSArray<string>, tagGroupID: string): void;

	resetBadge(): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setBadgeNumber(badgeNumber: number): void;

	setQuietTimeStartHourStartMinuteEndHourEndMinute(startHour: number, startMinute: number, endHour: number, endMinute: number): void;

	setTagsGroup(tags: NSArray<string>, tagGroupID: string): void;

	updateAPNSRegistration(): void;

	updateAuthorizedNotificationTypes(): void;

	updateChannelRegistrationForcefully(forcefully: boolean): void;

	updateRegistration(): void;

	userPushNotificationsAllowed(): boolean;
}

declare var UAPushAddTagGroupsSettingsKey: string;

declare var UAPushAliasSettingsKey: string;

declare var UAPushBadgeSettingsKey: string;

declare var UAPushChannelCreationOnForeground: string;

declare var UAPushChannelIDKey: string;

declare var UAPushChannelLocationKey: string;

declare var UAPushEnabledSettingsMigratedKey: string;

interface UAPushNotificationDelegate extends NSObjectProtocol {

	presentationOptionsForNotification?(notification: UNNotification): UNNotificationPresentationOptions;

	receivedBackgroundNotificationCompletionHandler?(notificationContent: UANotificationContent, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	receivedForegroundNotificationCompletionHandler?(notificationContent: UANotificationContent, completionHandler: () => void): void;

	receivedNotificationResponseCompletionHandler?(notificationResponse: UANotificationResponse, completionHandler: () => void): void;
}
declare var UAPushNotificationDelegate: {

	prototype: UAPushNotificationDelegate;
};

declare var UAPushQuietTimeEnabledSettingsKey: string;

declare var UAPushQuietTimeEndKey: string;

declare var UAPushQuietTimeSettingsKey: string;

declare var UAPushQuietTimeStartKey: string;

declare class UAPushReceivedEvent extends UAEvent {

	static alloc(): UAPushReceivedEvent; // inherited from NSObject

	static eventWithNotification(notification: NSDictionary<any, any>): UAPushReceivedEvent;

	static new(): UAPushReceivedEvent; // inherited from NSObject
}

declare var UAPushRemoveTagGroupsSettingsKey: string;

declare var UAPushTagsSettingsKey: string;

declare var UAPushTimeZoneSettingsKey: string;

declare var UAPushTokenRegistrationEnabledKey: string;

declare class UARegionEvent extends UAEvent {

	static alloc(): UARegionEvent; // inherited from NSObject

	static new(): UARegionEvent; // inherited from NSObject

	static regionEventCharacterCountIsValid(string: string): boolean;

	static regionEventLatitudeIsValid(latitude: number): boolean;

	static regionEventLongitudeIsValid(longitude: number): boolean;

	static regionEventRSSIIsValid(RSSI: number): boolean;

	static regionEventRadiusIsValid(radius: number): boolean;

	static regionEventWithRegionIDSourceBoundaryEvent(regionID: string, source: string, boundaryEvent: UABoundaryEvent): UARegionEvent;

	boundaryEvent: UABoundaryEvent;

	circularRegion: UACircularRegion;

	readonly payload: NSDictionary<any, any>;

	proximityRegion: UAProximityRegion;

	regionID: string;

	source: string;
}

interface UARegistrationDelegate extends NSObjectProtocol {

	notificationAuthorizedOptionsDidChange?(options: UANotificationOptions): void;

	notificationRegistrationFinishedWithOptionsCategories?(options: UANotificationOptions, categories: NSSet<any>): void;

	registrationFailed?(): void;

	registrationSucceededForChannelIDDeviceToken?(channelID: string, deviceToken: string): void;
}
declare var UARegistrationDelegate: {

	prototype: UARegistrationDelegate;
};

declare class UARemoveTagsAction extends UAModifyTagsAction {

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UARemoveTagsAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UARemoveTagsAction; // inherited from UAAction

	static alloc(): UARemoveTagsAction; // inherited from NSObject

	static new(): UARemoveTagsAction; // inherited from NSObject
}

declare class UARequest extends NSObject {

	static alloc(): UARequest; // inherited from NSObject

	static new(): UARequest; // inherited from NSObject

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

	setValueForHeader(value: any, header: string): void;
}

declare class UARequestSession extends NSObject {

	static alloc(): UARequestSession; // inherited from NSObject

	static new(): UARequestSession; // inherited from NSObject

	static sessionWithConfig(config: UAConfig): UARequestSession;

	static sessionWithConfigNSURLSession(config: UAConfig, session: NSURLSession): UARequestSession;

	static sessionWithConfigNSURLSessionQueue(config: UAConfig, session: NSURLSession, queue: NSOperationQueue): UARequestSession;

	cancelAllRequests(): void;

	dataTaskWithRequestCompletionHandler(request: UARequest, completionHandler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): void;

	dataTaskWithRequestRetryWhereCompletionHandler(request: UARequest, retryBlock: (p1: NSData, p2: NSURLResponse) => boolean, completionHandler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): void;

	setValueForHeader(value: any, header: string): void;
}

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

	brand: string;

	category: string;

	eventDescription: string;

	eventValue: NSDecimalNumber;

	identifier: string;

	isNewItem: boolean;

	transactionID: string;

	createEvent(): UACustomEvent;
}

interface UARichContentWindow extends NSObjectProtocol {

	closeWebViewAnimated?(webView: UIWebView, animated: boolean): void;
}
declare var UARichContentWindow: {

	prototype: UARichContentWindow;
};

declare class UASQLite extends NSObject {

	static alloc(): UASQLite; // inherited from NSObject

	static new(): UASQLite; // inherited from NSObject

	busyRetryTimeout: number;

	dbPath: string;

	constructor(o: { DBPath: string; });

	beginDeferredTransaction(): boolean;

	beginTransaction(): boolean;

	close(): void;

	commit(): boolean;

	executeQueryArguments(sql: string, args: NSArray<any>): NSArray<any>;

	executeUpdateArguments(sql: string, args: NSArray<any>): boolean;

	indexExists(indexName: string): boolean;

	initWithDBPath(aDBPath: string): this;

	lastErrorCode(): number;

	lastErrorMessage(): string;

	open(aDBPath: string): boolean;

	rollback(): boolean;

	tableExists(tableName: string): boolean;
}

declare class UAScheduleAction extends UAAction {

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAScheduleAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAScheduleAction; // inherited from UAAction

	static alloc(): UAScheduleAction; // inherited from NSObject

	static new(): UAScheduleAction; // inherited from NSObject
}

declare class UAScheduleTrigger extends NSObject {

	static alloc(): UAScheduleTrigger; // inherited from NSObject

	static backgroundTriggerWithCount(count: number): UAScheduleTrigger;

	static customEventTriggerWithPredicateCount(predicate: UAJSONPredicate, count: number): UAScheduleTrigger;

	static customEventTriggerWithPredicateValue(predicate: UAJSONPredicate, value: number): UAScheduleTrigger;

	static foregroundTriggerWithCount(count: number): UAScheduleTrigger;

	static new(): UAScheduleTrigger; // inherited from NSObject

	static regionEnterTriggerForRegionIDCount(regionID: string, count: number): UAScheduleTrigger;

	static regionExitTriggerForRegionIDCount(regionID: string, count: number): UAScheduleTrigger;

	static screenTriggerForScreenNameCount(screenName: string, count: number): UAScheduleTrigger;

	static triggerWithJSONError(json: any): UAScheduleTrigger;

	static triggerWithTypeGoalPredicate(type: UAScheduleTriggerType, goal: number, predicate: UAJSONPredicate): UAScheduleTrigger;

	readonly goal: number;

	predicate: UAJSONPredicate;

	readonly type: UAScheduleTriggerType;

	isEqualToTrigger(trigger: UAScheduleTrigger): boolean;
}

declare var UAScheduleTriggerAppBackgroundName: string;

declare var UAScheduleTriggerAppForegroundName: string;

declare var UAScheduleTriggerCustomEventCountName: string;

declare var UAScheduleTriggerCustomEventValueName: string;

declare class UAScheduleTriggerData extends NSManagedObject {

	static alloc(): UAScheduleTriggerData; // inherited from NSObject

	static new(): UAScheduleTriggerData; // inherited from NSObject

	goal: number;

	goalProgress: number;

	predicateData: NSData;

	schedule: UAActionScheduleData;

	start: Date;

	type: number;
}

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

	Screen = 6
}

declare var UAScheduleTriggerTypeKey: string;

declare class UAScreenTrackingEvent extends UAEvent {

	static alloc(): UAScreenTrackingEvent; // inherited from NSObject

	static eventWithScreenStartTime(screen: string, startTime: number): UAScreenTrackingEvent;

	static new(): UAScreenTrackingEvent; // inherited from NSObject

	duration: number;

	previousScreen: string;

	screen: string;

	startTime: number;

	stopTime: number;
}

declare class UAShareAction extends UAAction {

	static actionWithBlock(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void): UAShareAction; // inherited from UAAction

	static actionWithBlockAcceptingArguments(actionBlock: (p1: UAActionArguments, p2: (p1: UAActionResult) => void) => void, predicateBlock: (p1: UAActionArguments) => boolean): UAShareAction; // inherited from UAAction

	static alloc(): UAShareAction; // inherited from NSObject

	static new(): UAShareAction; // inherited from NSObject
}

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

declare class UATagGroupsAPIClient extends UAAPIClient {

	static alloc(): UATagGroupsAPIClient; // inherited from NSObject

	static clientWithConfig(config: UAConfig): UATagGroupsAPIClient;

	static clientWithConfigSession(config: UAConfig, session: UARequestSession): UATagGroupsAPIClient;

	static new(): UATagGroupsAPIClient; // inherited from NSObject

	updateChannelTagGroupsMutationCompletionHandler(channelId: string, mutation: UATagGroupsMutation, completionHandler: (p1: number) => void): void;

	updateNamedUserTagGroupsMutationCompletionHandler(identifier: string, mutation: UATagGroupsMutation, completionHandler: (p1: number) => void): void;
}

declare class UATagGroupsMutation extends NSObject {

	static alloc(): UATagGroupsMutation; // inherited from NSObject

	static collapseMutations(mutations: NSArray<UATagGroupsMutation>): NSArray<UATagGroupsMutation>;

	static mutationToAddTagsGroup(tags: NSArray<string>, group: string): UATagGroupsMutation;

	static mutationToRemoveTagsGroup(tags: NSArray<string>, group: string): UATagGroupsMutation;

	static mutationToSetTagsGroup(tags: NSArray<string>, group: string): UATagGroupsMutation;

	static mutationWithAddTagsRemoveTags(addTags: NSDictionary<any, any>, removeTags: NSDictionary<any, any>): UATagGroupsMutation;

	static new(): UATagGroupsMutation; // inherited from NSObject

	payload(): NSDictionary<any, any>;
}

declare class UATagUtils extends NSObject {

	static alloc(): UATagUtils; // inherited from NSObject

	static new(): UATagUtils; // inherited from NSObject

	static normalizeTagGroupID(tagGroupID: string): string;

	static normalizeTags(tags: NSArray<any>): NSArray<string>;
}

declare class UAURLProtocol extends NSURLProtocol {

	static addCachableURL(url: NSURL): void;

	static alloc(): UAURLProtocol; // inherited from NSObject

	static clearCache(): void;

	static new(): UAURLProtocol; // inherited from NSObject

	static removeCachableURL(url: NSURL): void;
}

declare class UAURLRequestOperation extends UAAsyncOperation {

	static alloc(): UAURLRequestOperation; // inherited from NSObject

	static new(): UAURLRequestOperation; // inherited from NSObject

	static operationWithBlock(block: (p1: UAAsyncOperation) => void): UAURLRequestOperation; // inherited from UAAsyncOperation

	static operationWithRequestSessionCompletionHandler(request: NSURLRequest, session: NSURLSession, completionHandler: (p1: NSData, p2: NSURLResponse, p3: NSError) => void): UAURLRequestOperation;
}

declare class UAUser extends NSObject {

	static alloc(): UAUser; // inherited from NSObject

	static new(): UAUser; // inherited from NSObject

	static userWithPushConfigDataStore(push: UAPush, config: UAConfig, dataStore: UAPreferenceDataStore): UAUser;

	apiClient: UAUserAPIClient;

	config: UAConfig;

	readonly created: boolean;

	creatingUser: boolean;

	dataStore: UAPreferenceDataStore;

	readonly password: string;

	readonly url: string;

	readonly username: string;

	createUser(): void;

	updateUser(): void;
}

declare class UAUserAPIClient extends UAAPIClient {

	static alloc(): UAUserAPIClient; // inherited from NSObject

	static clientWithConfig(config: UAConfig): UAUserAPIClient;

	static clientWithConfigSession(config: UAConfig, session: UARequestSession): UAUserAPIClient;

	static new(): UAUserAPIClient; // inherited from NSObject

	createUserWithChannelIDOnSuccessOnFailure(channelID: string, successBlock: (p1: UAUserData, p2: NSDictionary<any, any>) => void, failureBlock: (p1: number) => void): void;

	updateUserChannelIDOnSuccessOnFailure(user: UAUser, channelID: string, successBlock: () => void, failureBlock: (p1: number) => void): void;
}

declare var UAUserCreatedNotification: string;

declare class UAUserData extends NSObject {

	static alloc(): UAUserData; // inherited from NSObject

	static dataWithUsernamePasswordUrl(username: string, password: string, url: string): UAUserData;

	static new(): UAUserData; // inherited from NSObject

	readonly password: string;

	readonly url: string;

	readonly username: string;

	constructor(o: { username: string; password: string; url: string; });

	initWithUsernamePasswordUrl(username: string, password: string, url: string): this;
}

declare var UAUserPushNotificationsEnabledKey: string;

declare class UAUtils extends NSObject {

	static ISODateFormatterUTC(): NSDateFormatter;

	static ISODateFormatterUTCWithDelimiter(): NSDateFormatter;

	static addSkipBackupAttributeToItemAtURL(url: NSURL): boolean;

	static alloc(): UAUtils; // inherited from NSObject

	static appAuthHeaderString(): string;

	static connectionType(): string;

	static deviceID(): string;

	static deviceModelName(): string;

	static getReadableFileSizeFromBytes(bytes: number): string;

	static isSilentPush(notification: NSDictionary<any, any>): boolean;

	static logFailedRequestWithMessageWithErrorWithResponse(request: UARequest, message: string, error: NSError, response: NSHTTPURLResponse): void;

	static mainWindow(): UIWindow;

	static new(): UAUtils; // inherited from NSObject

	static pluralizeSingularFormPluralForm(count: number, singular: string, plural: string): string;

	static topController(): UIViewController;

	static userAuthHeaderString(): string;
}

declare class UAWebViewCallData extends NSObject {

	static alloc(): UAWebViewCallData; // inherited from NSObject

	static callDataForURLWebView(url: NSURL, webView: UIWebView): UAWebViewCallData;

	static callDataForURLWebViewMessage(url: NSURL, webView: UIWebView, message: UAInboxMessage): UAWebViewCallData;

	static new(): UAWebViewCallData; // inherited from NSObject

	arguments: NSArray<string>;

	message: UAInboxMessage;

	name: string;

	options: NSDictionary<any, any>;

	url: NSURL;

	webView: UIWebView;
}

declare class UAWebViewDelegate extends NSObject implements UARichContentWindow, UIWebViewDelegate {

	static alloc(): UAWebViewDelegate; // inherited from NSObject

	static new(): UAWebViewDelegate; // inherited from NSObject

	forwardDelegate: UIWebViewDelegate;

	richContentWindow: UARichContentWindow;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	closeWebViewAnimated(webView: UIWebView, animated: boolean): void;

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

	webViewDidFailLoadWithError(webView: UIWebView, error: NSError): void;

	webViewDidFinishLoad(webView: UIWebView): void;

	webViewDidStartLoad(webView: UIWebView): void;

	webViewShouldStartLoadWithRequestNavigationType(webView: UIWebView, request: NSURLRequest, navigationType: UIWebViewNavigationType): boolean;
}

declare class UAWhitelist extends NSObject {

	static alloc(): UAWhitelist; // inherited from NSObject

	static new(): UAWhitelist; // inherited from NSObject

	static whitelistWithConfig(config: UAConfig): UAWhitelist;

	addEntry(patternString: string): boolean;

	isWhitelisted(url: NSURL): boolean;
}

declare function UA_NewBase64Decode(inputBuffer: string, length: number, outputLength: interop.Pointer | interop.Reference<number>): interop.Pointer | interop.Reference<any>;

declare function UA_NewBase64Encode(inputBuffer: interop.Pointer | interop.Reference<any>, length: number, separateLines: boolean, outputLength: interop.Pointer | interop.Reference<number>): string;

declare function UA_base64EncodedStringFromData(data: NSData): string;

declare function UA_dataFromBase64String(aString: string): NSData;

declare class UAirship extends NSObject {

	static alloc(): UAirship; // inherited from NSObject

	static automation(): UAAutomation;

	static defaultMessageCenter(): UADefaultMessageCenter;

	static handleAppDidFinishLaunchingNotification(notification: NSNotification): void;

	static handleAppTerminationNotification(notification: NSNotification): void;

	static inAppMessaging(): UAInAppMessaging;

	static inbox(): UAInbox;

	static inboxUser(): UAUser;

	static land(): void;

	static location(): UALocation;

	static namedUser(): UANamedUser;

	static new(): UAirship; // inherited from NSObject

	static push(): UAPush;

	static resources(): NSBundle;

	static setLogLevel(level: UALogLevel): void;

	static setLogging(enabled: boolean): void;

	static setLoudImpErrorLogging(enabled: boolean): void;

	static shared(): UAirship;

	static takeOff(config: UAConfig): void;

	actionJSDelegate: UAJavaScriptDelegate;

	readonly actionRegistry: UAActionRegistry;

	readonly analytics: UAAnalytics;

	readonly applicationMetrics: UAApplicationMetrics;

	channelCapture: UAChannelCapture;

	readonly config: UAConfig;

	dataStore: UAPreferenceDataStore;

	jsDelegate: UAJavaScriptDelegate;

	readonly remoteNotificationBackgroundModeEnabled: boolean;

	sharedAutomation: UAAutomation;

	sharedDefaultMessageCenter: UADefaultMessageCenter;

	sharedInAppMessaging: UAInAppMessaging;

	sharedInbox: UAInbox;

	sharedInboxUser: UAUser;

	sharedLocation: UALocation;

	sharedNamedUser: UANamedUser;

	sharedPush: UAPush;

	readonly whitelist: UAWhitelist;
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
