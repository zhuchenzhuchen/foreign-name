// 阿里云短信服务集成
// 需要安装: npm install @alicloud/sms20170525

import Sms20170525, * as $Sms20170525 from '@alicloud/sms20170525';
import * as $OpenApi from '@alicloud/openapi-client';
import * as $Util from '@alicloud/tea-util';

export class AliyunSmsProvider {
  private client: Sms20170525;

  constructor(accessKeyId: string, accessKeySecret: string) {
    const config = new $OpenApi.Config({
      accessKeyId,
      accessKeySecret,
      endpoint: 'dysmsapi.aliyuncs.com',
    });
    this.client = new Sms20170525(config);
  }

  async sendSms(phone: string, code: string, templateCode: string, signName: string): Promise<boolean> {
    try {
      const sendSmsRequest = new $Sms20170525.SendSmsRequest({
        phoneNumbers: phone,
        signName,
        templateCode,
        templateParam: JSON.stringify({ code }),
      });

      const runtime = new $Util.RuntimeOptions({});
      const response = await this.client.sendSmsWithOptions(sendSmsRequest, runtime);
      
      return response.body?.code === 'OK';
    } catch (error) {
      console.error('阿里云短信发送失败:', error);
      return false;
    }
  }
}