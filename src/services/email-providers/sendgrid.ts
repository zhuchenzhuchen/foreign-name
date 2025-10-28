// SendGrid 邮箱服务提供商
// 需要安装: npm install @sendgrid/mail

export class SendGridEmailProvider {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async sendEmail(to: string, subject: string, text: string, html: string): Promise<void> {
    try {
      // 动态导入 SendGrid
      const sgMail = await import('@sendgrid/mail');
      sgMail.default.setApiKey(this.apiKey);

      const msg = {
        to,
        from: process.env.VITE_FROM_EMAIL || 'noreply@example.com',
        subject,
        text,
        html,
      };

      await sgMail.default.send(msg);
    } catch (error) {
      console.error('SendGrid 邮箱发送失败:', error);
      throw new Error('邮箱发送失败');
    }
  }
}
