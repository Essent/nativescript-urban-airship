export class Common {
    public detectProvisioningMode: boolean;
    public inProduction: boolean;
    public developmentAppKey: string;
    public developmentAppSecret: string;
    public productionAppKey: string;
    public productionAppSecret: string;
    public gcmSender: string;
}

export interface UrbanAirshipSettings {
    detectProvisioningMode: boolean;
    inProduction: boolean;
    developmentAppKey: string;
    developmentAppSecret: string;
    productionAppKey: string;
    productionAppSecret: string;
    gcmSender: string;
}