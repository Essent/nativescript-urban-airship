import {Observable} from 'data/observable';
import {NsUrbanairship} from 'nativescript-ns-urbanairship';

export class HelloWorldModel extends Observable {
  public message: string;
  private nsUrbanairship: NsUrbanairship;

  constructor() {
    super();

    this.nsUrbanairship = new NsUrbanairship();
    this.message = 'ED Push test';
  }

  public registerClicked() {
    this.nsUrbanairship.enablePush("MyTestNameUserID3");
  }

  public unregisterClicked() {
    this.nsUrbanairship.disablePush();
  }
}
