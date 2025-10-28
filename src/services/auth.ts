import { LoginRequest, RegisterRequest, AuthResponse, User } from '../types/auth';
import { SmsService } from './sms';
import { EmailService } from './email';

// API基础URL - 在实际项目中，这应该是真实的后端API地址
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api/auth';

// 模拟用户数据存储 - 在实际项目中，这些数据会存储在数据库中
const MOCK_USERS: Array<User & { password: string }> = [
  {
    id: '1',
    email: 'demo@example.com',
    phone: '13800138000',
    name: 'Demo User',
    password: 'password123',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    email: 'admin@example.com',
    phone: '13900139000',
    name: 'Admin User',
    password: 'admin123',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    email: 'test@example.com',
    name: 'Test User',
    password: 'test123',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

// 模拟localStorage中的用户token
const TOKEN_KEY = 'auth_token';
const USER_KEY = 'user_data';

export class AuthService {
  // 通用HTTP请求函数
  private static async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      if (!response.ok) {
        const error = await response.json().catch(() => ({ message: '请求失败' }));
        throw new Error(error.message || '请求失败');
      }

      return await response.json();
    } catch (error) {
      // 如果API不可用，回退到mock数据
      console.warn('API请求失败，使用mock数据:', error);
      throw error;
    }
  }

  // 获取存储的token
  static getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  // 获取存储的用户数据
  static getUser(): User | null {
    const userData = localStorage.getItem(USER_KEY);
    return userData ? JSON.parse(userData) : null;
  }

  // 存储认证信息
  static setAuthData(user: User, token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  // 清除认证信息
  static clearAuthData(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }

  // 生成模拟token
  private static generateToken(): string {
    return 'mock_token_' + Math.random().toString(36).substr(2, 9);
  }

  // 验证邮箱格式
  private static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // 验证手机号格式
  private static isValidPhone(phone: string): boolean {
    const phoneRegex = /^1[3-9]\d{9}$/;
    return phoneRegex.test(phone);
  }

  // 验证密码强度
  private static isValidPassword(password: string): boolean {
    return password.length >= 6;
  }

  // 登录
  static async login(credentials: LoginRequest): Promise<AuthResponse> {
    const { email, phone, password, verificationCode, loginType } = credentials;

    // 验证输入
    if (loginType === 'email') {
      if (!email || !password) {
        throw new Error('邮箱和密码不能为空');
      }
      if (!this.isValidEmail(email)) {
        throw new Error('请输入有效的邮箱地址');
      }
    } else if (loginType === 'phone') {
      if (!phone || !verificationCode) {
        throw new Error('手机号和验证码不能为空');
      }
      if (!this.isValidPhone(phone)) {
        throw new Error('请输入有效的手机号码');
      }
    }

    // 尝试调用真实API
    try {
      const response = await this.request<AuthResponse>('/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
      });
      
      // 存储认证信息
      this.setAuthData(response.user, response.token);
      
      return response;
    } catch (apiError) {
      // API失败，使用mock数据
      console.log('使用mock登录逻辑');
    }

    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 1000));

    let user: (User & { password: string }) | undefined;

    if (loginType === 'email') {
      // 邮箱登录
      user = MOCK_USERS.find(u => u.email === email && u.password === password);
      if (!user) {
        throw new Error('邮箱或密码错误');
      }
    } else if (loginType === 'phone') {
      // 手机号登录 - 验证短信验证码
      try {
        await SmsService.verifySmsCode({
          phone: phone!,
          code: verificationCode!,
          type: 'login'
        });
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : '验证码验证失败');
      }

      // 查找用户（通过手机号）
      user = MOCK_USERS.find(u => u.phone === phone);
      if (!user) {
        throw new Error('该手机号未注册');
      }
    }

    if (!user) {
      throw new Error('登录失败');
    }

    // 生成token
    const token = this.generateToken();

    // 返回用户数据（不包含密码）
    const { password: _, ...userWithoutPassword } = user;
    const authResponse: AuthResponse = {
      user: userWithoutPassword,
      token
    };

    // 存储认证信息
    this.setAuthData(authResponse.user, authResponse.token);

    return authResponse;
  }

  // 注册
  static async register(userData: RegisterRequest): Promise<AuthResponse> {
    const { email, phone, password, name, confirmPassword, verificationCode, registerType } = userData;

    // 验证输入
    if (registerType === 'email') {
      if (!email || !password || !name || !confirmPassword) {
        throw new Error('所有字段都必须填写');
      }
      if (!this.isValidEmail(email)) {
        throw new Error('请输入有效的邮箱地址');
      }
    } else if (registerType === 'phone') {
      if (!phone || !password || !name || !confirmPassword || !verificationCode) {
        throw new Error('所有字段都必须填写');
      }
      if (!this.isValidPhone(phone)) {
        throw new Error('请输入有效的手机号码');
      }
    }

    if (!this.isValidPassword(password)) {
      throw new Error('密码长度至少6位');
    }

    if (password !== confirmPassword) {
      throw new Error('两次输入的密码不一致');
    }

    // 尝试调用真实API
    try {
      const response = await this.request<AuthResponse>('/register', {
        method: 'POST',
        body: JSON.stringify(userData),
      });
      
      // 存储认证信息
      this.setAuthData(response.user, response.token);
      
      return response;
    } catch (apiError) {
      // API失败，使用mock数据
      console.log('使用mock注册逻辑');
    }

    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 1000));

    // 验证短信验证码（如果是手机号注册）
    if (registerType === 'phone') {
      try {
        await SmsService.verifySmsCode({
          phone: phone!,
          code: verificationCode!,
          type: 'register'
        });
      } catch (error) {
        throw new Error(error instanceof Error ? error.message : '验证码验证失败');
      }
    }

    // 检查邮箱或手机号是否已存在
    if (registerType === 'email') {
      const existingUser = MOCK_USERS.find(u => u.email === email);
      if (existingUser) {
        throw new Error('该邮箱已被注册');
      }
    } else if (registerType === 'phone') {
      const existingUser = MOCK_USERS.find(u => u.phone === phone);
      if (existingUser) {
        throw new Error('该手机号已被注册');
      }
    }

    // 创建新用户
    const newUser: User & { password: string } = {
      id: (MOCK_USERS.length + 1).toString(),
      email: registerType === 'email' ? email! : undefined,
      phone: registerType === 'phone' ? phone! : undefined,
      password,
      name,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // 添加到模拟数据库
    MOCK_USERS.push(newUser);

    // 生成token
    const token = this.generateToken();

    // 返回用户数据（不包含密码）
    const { password: _, ...userWithoutPassword } = newUser;
    const authResponse: AuthResponse = {
      user: userWithoutPassword,
      token
    };

    // 存储认证信息
    this.setAuthData(authResponse.user, authResponse.token);

    return authResponse;
  }

  // 登出
  static async logout(): Promise<void> {
    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 500));
    this.clearAuthData();
  }

  // 验证token（在实际项目中，这应该向服务器验证token的有效性）
  static async validateToken(token: string): Promise<boolean> {
    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // 简单的token验证逻辑
    return token.startsWith('mock_token_');
  }

  // 刷新用户信息
  static async refreshUser(): Promise<User | null> {
    const token = this.getToken();
    if (!token) {
      return null;
    }

    const isValid = await this.validateToken(token);
    if (!isValid) {
      this.clearAuthData();
      return null;
    }

    return this.getUser();
  }
}



