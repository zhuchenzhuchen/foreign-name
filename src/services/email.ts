import { SendEmailRequest, VerifyEmailRequest } from '../types/auth';

// 模拟邮箱验证码存储
const EMAIL_CODES: Map<string, { code: string; timestamp: number; type: string }> = new Map();

// 验证码有效期（10分钟）
const CODE_EXPIRY_TIME = 10 * 60 * 1000;

// 发送间隔限制（60秒）
const SEND_INTERVAL = 60 * 1000;

export class EmailService {
  // 生成6位数字验证码
  private static generateCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  // 验证邮箱格式
  private static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // 检查发送间隔
  private static canSendCode(email: string): boolean {
    const lastSent = localStorage.getItem(`email_last_sent_${email}`);
    if (!lastSent) return true;
    
    const timeDiff = Date.now() - parseInt(lastSent);
    return timeDiff >= SEND_INTERVAL;
  }

  // 发送邮箱验证码
  static async sendEmailCode(request: SendEmailRequest): Promise<void> {
    const { email, type } = request;

    // 验证邮箱格式
    if (!this.isValidEmail(email)) {
      throw new Error('请输入有效的邮箱地址');
    }

    // 检查发送间隔
    if (!this.canSendCode(email)) {
      throw new Error('请等待60秒后再发送验证码');
    }

    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 1000));

    // 生成验证码
    const code = this.generateCode();
    const timestamp = Date.now();

    // 存储验证码
    EMAIL_CODES.set(email, { code, timestamp, type });
    
    // 记录发送时间
    localStorage.setItem(`email_last_sent_${email}`, timestamp.toString());

    // 检查是否配置了真实的邮箱服务
    const useRealEmail = process.env.VITE_USE_REAL_EMAIL === 'true';
    
    if (useRealEmail) {
      // 使用真实邮箱服务
      try {
        await this.sendRealEmail(email, code, type);
        console.log(`[真实邮箱] 验证码已发送到 ${email}`);
      } catch (error) {
        console.error('真实邮箱发送失败，回退到模拟模式:', error);
        // 回退到模拟模式
        this.logSimulatedEmail(email, code);
      }
    } else {
      // 模拟模式
      this.logSimulatedEmail(email, code);
    }
  }

  // 发送真实邮箱
  private static async sendRealEmail(email: string, code: string, type: string): Promise<void> {
    // 这里可以根据环境变量选择不同的邮箱服务提供商
    const provider = process.env.VITE_EMAIL_PROVIDER || 'nodemailer';
    
    if (provider === 'nodemailer') {
      // 使用 Nodemailer (需要后端支持)
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: email,
          code,
          type,
        }),
      });

      if (!response.ok) {
        throw new Error('邮箱发送失败');
      }
    } else if (provider === 'sendgrid') {
      // 使用 SendGrid
      const { SendGridEmailProvider } = await import('./email-providers/sendgrid');
      const emailProvider = new SendGridEmailProvider(process.env.VITE_SENDGRID_API_KEY!);
      
      await emailProvider.sendEmail(
        email,
        '验证码',
        `您的验证码是：${code}，10分钟内有效。`,
        `您的验证码是：<strong>${code}</strong>，10分钟内有效。`
      );
    } else if (provider === 'mailgun') {
      // 使用 Mailgun
      const { MailgunEmailProvider } = await import('./email-providers/mailgun');
      const emailProvider = new MailgunEmailProvider(
        process.env.VITE_MAILGUN_API_KEY!,
        process.env.VITE_MAILGUN_DOMAIN!
      );
      
      await emailProvider.sendEmail(
        email,
        '验证码',
        `您的验证码是：${code}，10分钟内有效。`,
        `您的验证码是：<strong>${code}</strong>，10分钟内有效。`
      );
    }
  }

  // 记录模拟邮箱
  private static logSimulatedEmail(email: string, code: string): void {
    // 在开发环境中，将验证码输出到控制台
    if (process.env.NODE_ENV === 'development') {
      console.log(`[开发模式] 邮箱 ${email} 的验证码: ${code}`);
    }
    console.log(`模拟发送邮箱到 ${email}: 您的验证码是 ${code}，10分钟内有效`);
  }

  // 验证邮箱验证码
  static async verifyEmailCode(request: VerifyEmailRequest): Promise<boolean> {
    const { email, code, type } = request;

    // 验证邮箱格式
    if (!this.isValidEmail(email)) {
      throw new Error('请输入有效的邮箱地址');
    }

    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 500));

    // 获取存储的验证码
    const storedData = EMAIL_CODES.get(email);
    
    if (!storedData) {
      throw new Error('验证码不存在或已过期');
    }

    // 检查验证码类型
    if (storedData.type !== type) {
      throw new Error('验证码类型不匹配');
    }

    // 检查验证码是否过期
    const timeDiff = Date.now() - storedData.timestamp;
    if (timeDiff > CODE_EXPIRY_TIME) {
      EMAIL_CODES.delete(email);
      throw new Error('验证码已过期，请重新获取');
    }

    // 验证验证码
    if (storedData.code !== code) {
      throw new Error('验证码错误');
    }

    // 验证成功后删除验证码
    EMAIL_CODES.delete(email);
    
    return true;
  }

  // 清除过期的验证码
  static clearExpiredCodes(): void {
    const now = Date.now();
    for (const [email, data] of EMAIL_CODES.entries()) {
      if (now - data.timestamp > CODE_EXPIRY_TIME) {
        EMAIL_CODES.delete(email);
      }
    }
  }

  // 获取剩余发送时间（秒）
  static getRemainingTime(email: string): number {
    const lastSent = localStorage.getItem(`email_last_sent_${email}`);
    if (!lastSent) return 0;
    
    const timeDiff = Date.now() - parseInt(lastSent);
    const remaining = Math.max(0, SEND_INTERVAL - timeDiff);
    return Math.ceil(remaining / 1000);
  }
}
