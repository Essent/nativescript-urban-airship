import { UrbanAirshipSettings } from 'nativescript-urban-airship';

/**
 * Optional: declare your model where you see fit inside of your application.
 * A good place might be your application configuration file.
 *
 **/
export const urbanAirshipSettings: UrbanAirshipSettings = {
    developmentAppKey: "Your Development App Key",
    developmentAppSecret: "Your Development App Secret",
    fcmSender: "Your Google API Project Number",
    detectProvisioningMode: false,
    // Toggles between the development and production app credentials
    // Before submitting your application to an app store set to true
    inProduction: false,
    productionAppKey: "Your Production App Key",
    productionAppSecret: "Your Production Secret"
};
