import { Observable } from 'data/observable';
import { NsUrbanairship } from 'nativescript-ns-urbanairship';

export class HelloWorldModel extends Observable {
  public message: string;

  constructor() {
    super();

    this.message = 'ED Push test';
  }

  public registerClicked() {
    NsUrbanairship.getInstance().enablePush("MyTestNameUserID3");
  }

  public unregisterClicked() {
    NsUrbanairship.getInstance().disablePush();
  }
}
