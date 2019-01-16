import { Observable } from 'tns-core-modules/data/observable';
import * as scrollViewModule from "tns-core-modules/ui/scroll-view";
import { NsUrbanAirship } from 'nativescript-urban-airship';

export class HelloWorldModel extends Observable {
    public message: string;

    constructor() {
        super();

        this.message = 'ED Push test';
    }

    public registerClicked() {
        NsUrbanAirship.getInstance().registerUser('MyTestNameUserID10');
    }

    public registerClickedAnotherUser() {
        NsUrbanAirship.getInstance().registerUser('MyTestNameUserID11');
    }

    public registerClickedAnotherUser13() {
        NsUrbanAirship.getInstance().registerUser('MyTestNameUserID13');
    }

    public registerClickedAnotherUser14() {
        NsUrbanAirship.getInstance().registerUser('MyTestNameUserID14');
    }

    public optIn() {
        NsUrbanAirship.getInstance().notificationOptIn();
    }

    public optOut() {
        NsUrbanAirship.getInstance().notificationOptOut();
    }

    public unregisterClicked() {
        NsUrbanAirship.getInstance().unRegisterUser();
        alert('user will no longer receive notifications');
    }

    public notificationStatus() {
        const status = NsUrbanAirship.getInstance().isOptIn();
        alert(`user has opt in: ${status}`);
    }

    public resetBadgeCount() {
        NsUrbanAirship.getInstance().resetBadgeCount();
        alert('Badge is reset');
    }

    public channelID() {
        const channelID = NsUrbanAirship.getInstance().getChannelID();
        alert(`the current channelID: ${channelID}`);
    }
}
