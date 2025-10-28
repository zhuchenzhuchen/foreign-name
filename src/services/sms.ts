import { SendSmsRequest, VerifySmsRequest } from '../types/auth';

// 模拟短信验证码存储
const SMS_CODES: Map<string, { code: string; timestamp: number; type: string }> = new Map();

// 验证码有效期（5分钟）
const CODE_EXPIRY_TIME = 5 * 60 * 1000;

// 发送间隔限制（60秒）
const SEND_INTERVAL = 60 * 1000;

export class SmsService {
  // 生成6位数字验证码
  private static generateCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  // 验证手机号格式
  private static isValidPhone(phone: string): boolean {
    const phoneRegex = /^1[3-9]\d{9}$/;
    return phoneRegex.test(phone);
  }

  // 检查发送间隔
  private static canSendCode(phone: string): boolean {
    const lastSent = localStorage.getItem(`sms_last_sent_${phone}`);
    if (!lastSent) return true;
    
    const timeDiff = Date.now() - parseInt(lastSent);
    return timeDiff >= SEND_INTERVAL;
  }

  // 发送短信验证码
  static async sendSmsCode(request: SendSmsRequest): Promise<void> {
    const { phone, type } = request;

    // 验证手机号格式
    if (!this.isValidPhone(phone)) {
      throw new Error('请输入有效的手机号码');
    }

    // 检查发送间隔
    if (!this.canSendCode(phone)) {
      throw new Error('请等待60秒后再发送验证码');
    }

    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 1000));

    // 生成验证码
    const code = this.generateCode();
    const timestamp = Date.now();

    // 存储验证码
    SMS_CODES.set(phone, { code, timestamp, type });
    
    // 记录发送时间
    localStorage.setItem(`sms_last_sent_${phone}`, timestamp.toString());

    // 检查是否配置了真实的短信服务
    const useRealSms = process.env.VITE_USE_REAL_SMS === 'true';
    
    if (useRealSms) {
      // 使用真实短信服务
      try {
        await this.sendRealSms(phone, code, type);
        console.log(`[真实短信] 验证码已发送到 ${phone}`);
      } catch (error) {
        console.error('真实短信发送失败，回退到模拟模式:', error);
        // 回退到模拟模式
        this.logSimulatedSms(phone, code);
      }
    } else {
      // 模拟模式
      this.logSimulatedSms(phone, code);
    }
  }

  // 发送真实短信
  private static async sendRealSms(phone: string, code: string, type: string): Promise<void> {
    // 这里可以根据环境变量选择不同的短信服务提供商
    const provider = process.env.VITE_SMS_PROVIDER || 'tencent';
    
    if (provider === 'tencent') {
      // 使用腾讯云短信
      const { TencentSmsProvider } = await import('./sms-providers/tencent');
      const smsProvider = new TencentSmsProvider(
        process.env.VITE_TENCENT_SECRET_ID!,
        process.env.VITE_TENCENT_SECRET_KEY!,
        process.env.VITE_TENCENT_REGION || 'ap-beijing'
      );
      
      const success = await smsProvider.sendSms(
        phone,
        code,
        process.env.VITE_TENCENT_TEMPLATE_ID!,
        process.env.VITE_TENCENT_SIGN_NAME!
      );
      
      if (!success) {
        throw new Error('腾讯云短信发送失败');
      }
    } else if (provider === 'aliyun') {
      // 使用阿里云短信
      const { AliyunSmsProvider } = await import('./sms-providers/aliyun');
      const smsProvider = new AliyunSmsProvider(
        process.env.VITE_ALIYUN_ACCESS_KEY_ID!,
        process.env.VITE_ALIYUN_ACCESS_KEY_SECRET!
      );
      
      const success = await smsProvider.sendSms(
        phone,
        code,
        process.env.VITE_ALIYUN_TEMPLATE_CODE!,
        process.env.VITE_ALIYUN_SIGN_NAME!
      );
      
      if (!success) {
        throw new Error('阿里云短信发送失败');
      }
    }
  }

  // 记录模拟短信
  private static logSimulatedSms(phone: string, code: string): void {
    // 在开发环境中，将验证码输出到控制台
    if (process.env.NODE_ENV === 'development') {
      console.log(`[开发模式] 手机号 ${phone} 的验证码: ${code}`);
    }
    console.log(`模拟发送短信到 ${phone}: 您的验证码是 ${code}，5分钟内有效`);
  }

  // 验证短信验证码
  static async verifySmsCode(request: VerifySmsRequest): Promise<boolean> {
    const { phone, code, type } = request;

    // 验证手机号格式
    if (!this.isValidPhone(phone)) {
      throw new Error('请输入有效的手机号码');
    }

    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 500));

    // 获取存储的验证码
    const storedData = SMS_CODES.get(phone);
    
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
      SMS_CODES.delete(phone);
      throw new Error('验证码已过期，请重新获取');
    }

    // 验证验证码
    if (storedData.code !== code) {
      throw new Error('验证码错误');
    }

    // 验证成功后删除验证码
    SMS_CODES.delete(phone);
    
    return true;
  }

  // 清除过期的验证码
  static clearExpiredCodes(): void {
    const now = Date.now();
    for (const [phone, data] of SMS_CODES.entries()) {
      if (now - data.timestamp > CODE_EXPIRY_TIME) {
        SMS_CODES.delete(phone);
      }
    }
  }

  // 获取剩余发送时间（秒）
  static getRemainingTime(phone: string): number {
    const lastSent = localStorage.getItem(`sms_last_sent_${phone}`);
    if (!lastSent) return 0;
    
    const timeDiff = Date.now() - parseInt(lastSent);
    const remaining = Math.max(0, SEND_INTERVAL - timeDiff);
    return Math.ceil(remaining / 1000);
  }
}
