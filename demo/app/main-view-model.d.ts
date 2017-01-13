import { Observable } from 'data/observable';
export declare class HelloWorldModel extends Observable {
    message: string;
    constructor();
    registerClicked(): void;
    unregisterClicked(): void;
}
