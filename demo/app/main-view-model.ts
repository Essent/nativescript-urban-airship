import { Observable } from 'data/observable';
import { NsUrbanairship } from 'nativescript-ns-urbanairship';

export class HelloWorldModel extends Observable {
  public message: string;

  constructor() {
    super();

    this.message = 'ED Push test';
  }

  public registerClicked() {
    NsUrbanairship.getInstance().registerUser("MyTestNameUserID3");
    NsUrbanairship.getInstance().notificationOptIn();
  }

  public unregisterClicked() {
    NsUrbanairship.getInstance().unRegisterUser();
    NsUrbanairship.getInstance().notificationOptOut();
  }
}
