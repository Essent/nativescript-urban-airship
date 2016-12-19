export class Common {
  public detectProvisioningMode: boolean;
  public inProduction: boolean;
  public developmentAppKey: string;
  public developmentAppSecret: string;
  public productionAppKey: string;
  public productionAppSecret: string;
  public gcmSender: string;

  constructor() {
    this.detectProvisioningMode = true;
    this.inProduction = false;
    this.developmentAppKey = "Your Development App Key";
    this.developmentAppSecret = "Your Development App Secret";
    this.productionAppKey = "Your Production App Key";
    this.productionAppSecret = "Your Production App Secret";
    this.gcmSender = "";  // FCM/GCM sender ID
  }
}

