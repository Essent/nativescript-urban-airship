import { Observable } from 'tns-core-modules/data/observable';
import * as scrollViewModule from "tns-core-modules/ui/scroll-view";
import { NsUrbanairship } from 'nativescript-urban-airship';

export class HelloWorldModel extends Observable {
    public message: string;

    constructor() {
        super();

        this.message = 'ED Push test';
    }

    public registerClicked() {
        NsUrbanairship.getInstance().registerUser('MyTestNameUserID10');
    }

    public registerClickedAnotherUser() {
        NsUrbanairship.getInstance().registerUser('MyTestNameUserID11');
    }

    public registerClickedAnotherUser13() {
        NsUrbanairship.getInstance().registerUser('MyTestNameUserID13');
    }

    public registerClickedAnotherUser14() {
        NsUrbanairship.getInstance().registerUser('MyTestNameUserID14');
    }

    public optIn() {
        NsUrbanairship.getInstance().notificationOptIn();
    }

    public optOut() {
        NsUrbanairship.getInstance().notificationOptOut();
    }

    public unregisterClicked() {
        NsUrbanairship.getInstance().unRegisterUser();
        alert('user will no longer receive notifications');
    }

    public notificationStatus() {
        const status = NsUrbanairship.getInstance().isOptIn();
        alert(`user has opt in: ${status}`);
    }

    public resetBadgeCount() {
        NsUrbanairship.getInstance().resetBadgeCount();
        alert('Badge is reset');
    }

    public channelID() {
        const channelID = NsUrbanairship.getInstance().getChannelID();
        alert(`the current channelID: ${channelID}`);
    }
}
