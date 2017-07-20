import * as application from 'tns-core-modules/application';
import { PushNotification } from './push-notification';
import { NsUrbanairship } from 'nativescript-urban-airship';

// place your initialize before the start of your application
PushNotification.initialize();

application.start({ moduleName: "main-page" });
