import * as application from 'application';
import { PushNotification } from './push-notification/push-notification';
import { NsUrbanairship } from 'nativescript-urban-airship';

// place your initialize before the start of your application
PushNotification.initialize();

application.start({ moduleName: "main-page" });
