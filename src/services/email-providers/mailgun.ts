// Mailgun 邮箱服务提供商
// 需要安装: npm install mailgun-js

export class MailgunEmailProvider {
  private apiKey: string;
  private domain: string;

  constructor(apiKey: string, domain: string) {
    this.apiKey = apiKey;
    this.domain = domain;
  }

  async sendEmail(to: string, subject: string, text: string, html: string): Promise<void> {
    try {
      // 动态导入 Mailgun
      const mailgun = await import('mailgun-js');
      const mg = mailgun.default({
        apiKey: this.apiKey,
        domain: this.domain,
      });

      const data = {
        from: process.env.VITE_FROM_EMAIL || `noreply@${this.domain}`,
        to,
        subject,
        text,
        html,
      };

      await mg.messages().send(data);
    } catch (error) {
      console.error('Mailgun 邮箱发送失败:', error);
      throw new Error('邮箱发送失败');
    }
  }
}
