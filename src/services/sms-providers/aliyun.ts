// 阿里云短信服务集成
// 需要安装: npm install @alicloud/sms20170525

export class AliyunSmsProvider {
  private client: any;
  private Sms20170525: any;
  private $Sms20170525: any;
  private $OpenApi: any;
  private $Util: any;

  constructor(accessKeyId: string, accessKeySecret: string) {
    // 延迟初始化，使用动态导入
    this.accessKeyId = accessKeyId;
    this.accessKeySecret = accessKeySecret;
  }

  private accessKeyId: string;
  private accessKeySecret: string;

  private async initClient() {
    if (!this.client) {
      // 动态导入阿里云SDK
      // 这些依赖在 vite.config.ts 中被标记为 external，不会被打包
      // 如果依赖不存在，会抛出错误并优雅降级
      try {
        const smsModule = await import('@alicloud/sms20170525');
        const openApiModule = await import('@alicloud/openapi-client');
        const utilModule = await import('@alicloud/tea-util');

        this.Sms20170525 = smsModule.default || smsModule;
        this.$Sms20170525 = smsModule;
        this.$OpenApi = openApiModule;
        this.$Util = utilModule;

        const config = new this.$OpenApi.Config({
          accessKeyId: this.accessKeyId,
          accessKeySecret: this.accessKeySecret,
          endpoint: 'dysmsapi.aliyuncs.com',
        });
        this.client = new this.Sms20170525(config);
      } catch (error) {
        console.warn('阿里云SDK未安装，这些依赖应该在服务器端使用:', error);
        throw new Error('阿里云SDK未安装。在生产环境中这些依赖应该安装在服务器端。');
      }
    }
  }

  async sendSms(phone: string, code: string, templateCode: string, signName: string): Promise<boolean> {
    try {
      await this.initClient();
      
      const sendSmsRequest = new this.$Sms20170525.SendSmsRequest({
        phoneNumbers: phone,
        signName,
        templateCode,
        templateParam: JSON.stringify({ code }),
      });

      const runtime = new this.$Util.RuntimeOptions({});
      const response = await this.client.sendSmsWithOptions(sendSmsRequest, runtime);
      
      return response.body?.code === 'OK';
    } catch (error) {
      console.error('阿里云短信发送失败:', error);
      return false;
    }
  }
}