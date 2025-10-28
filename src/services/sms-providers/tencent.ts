// 腾讯云短信服务集成
// 需要安装: npm install tencentcloud-sdk-nodejs

import * as tencentcloud from 'tencentcloud-sdk-nodejs';

const SmsClient = tencentcloud.sms.v20210111.Client;

export class TencentSmsProvider {
  private client: any;

  constructor(secretId: string, secretKey: string, region: string = 'ap-beijing') {
    const clientConfig = {
      credential: {
        secretId,
        secretKey,
      },
      region,
      profile: {
        httpProfile: {
          endpoint: 'sms.tencentcloudapi.com',
        },
      },
    };
    this.client = new SmsClient(clientConfig);
  }

  async sendSms(phone: string, code: string, templateId: string, signName: string): Promise<boolean> {
    try {
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
