// 腾讯云短信服务集成
// 需要安装: npm install tencentcloud-sdk-nodejs

export class TencentSmsProvider {
  private client: any;
  private SmsClient: any;

  constructor(secretId: string, secretKey: string, region: string = 'ap-beijing') {
    this.secretId = secretId;
    this.secretKey = secretKey;
    this.region = region;
  }

  private secretId: string;
  private secretKey: string;
  private region: string;

  private async initClient() {
    if (!this.client) {
      // 动态导入腾讯云SDK
      // 这些依赖在 vite.config.ts 中被标记为 external，不会被打包
      try {
        const tencentcloud = await import('tencentcloud-sdk-nodejs');
        this.SmsClient = tencentcloud.sms.v20210111.Client;

        const clientConfig = {
          credential: {
            secretId: this.secretId,
            secretKey: this.secretKey,
          },
          region: this.region,
          profile: {
            httpProfile: {
              endpoint: 'sms.tencentcloudapi.com',
            },
          },
        };
        this.client = new this.SmsClient(clientConfig);
      } catch (error) {
        console.warn('腾讯云SDK未安装，这些依赖应该在服务器端使用:', error);
        throw new Error('腾讯云SDK未安装。在生产环境中这些依赖应该安装在服务器端。');
      }
    }
  }

  async sendSms(phone: string, code: string, templateId: string, signName: string): Promise<boolean> {
    try {
      await this.initClient();
      
      const params = {
        PhoneNumberSet: [`+86${phone}`],
        SmsSdkAppId: process.env.VITE_TENCENT_SMS_APP_ID,
        SignName: signName,
        TemplateId: templateId,
        TemplateParamSet: [code],
      };

      const response = await this.client.SendSms(params);
      return response.SendStatusSet[0]?.Code === 'Ok';
    } catch (error) {
      console.error('腾讯云短信发送失败:', error);
      return false;
    }
  }
}
