import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowLeft, Phone, MessageSquare } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';
// import { SmsService } from '../services/sms';
// import { EmailService } from '../services/email';

interface LoginPageProps {
  onNavigate: (page: string) => void;
}

export default function LoginPage({ onNavigate }: LoginPageProps) {
  const { t } = useLanguage();
  const { login, sendSmsCode, sendEmailCode, isLoading, error, clearError } = useAuth();
  const [loginType, setLoginType] = useState<'email' | 'phone'>('email');
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    verificationCode: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [countdown, setCountdown] = useState(0);
  const [isSendingCode, setIsSendingCode] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // 清除错误信息
    if (error) clearError();
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // 倒计时效果
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  // 发送验证码
  const handleSendCode = async () => {
    if (loginType === 'phone') {
      if (!formData.phone) {
        setFormErrors(prev => ({ ...prev, phone: t.auth.phoneRequired || '请输入手机号码' }));
        return;
      }

      if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
        setFormErrors(prev => ({ ...prev, phone: t.auth.phoneInvalid || '请输入有效的手机号码' }));
        return;
      }

      try {
        setIsSendingCode(true);
        await sendSmsCode(formData.phone, 'login');
        setCountdown(60);
        setFormErrors(prev => ({ ...prev, phone: '' }));
      } catch (error) {
        // 错误已经在useAuth中处理
      } finally {
        setIsSendingCode(false);
      }
    } else if (loginType === 'email') {
      if (!formData.email) {
        setFormErrors(prev => ({ ...prev, email: t.auth.emailRequired || '请输入邮箱地址' }));
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        setFormErrors(prev => ({ ...prev, email: t.auth.emailInvalid || '请输入有效的邮箱地址' }));
        return;
      }

      try {
        setIsSendingCode(true);
        await sendEmailCode(formData.email, 'login');
        setCountdown(60);
        setFormErrors(prev => ({ ...prev, email: '' }));
      } catch (error) {
        // 错误已经在useAuth中处理
      } finally {
        setIsSendingCode(false);
      }
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (loginType === 'email') {
    if (!formData.email) {
      errors.email = t.auth.emailRequired || '请输入邮箱地址';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = t.auth.emailInvalid || '请输入有效的邮箱地址';
    }

      // 邮箱登录可以选择密码登录或验证码登录
      if (!formData.password && !formData.verificationCode) {
        errors.password = t.auth.passwordRequired || '请输入密码或验证码';
      } else if (formData.password && formData.password.length < 6) {
      errors.password = t.auth.passwordMinLength || '密码长度至少6位';
      } else if (formData.verificationCode && !formData.password) {
        // 如果使用验证码登录，不需要密码
      }
    } else if (loginType === 'phone') {
      if (!formData.phone) {
        errors.phone = t.auth.phoneRequired || '请输入手机号码';
      } else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
        errors.phone = t.auth.phoneInvalid || '请输入有效的手机号码';
      }

      if (!formData.verificationCode) {
        errors.verificationCode = t.auth.verificationCodeRequired || '请输入验证码';
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      await login({
        ...formData,
        loginType
      });
      // 登录成功后跳转到首页或生成页面
      onNavigate('generate');
    } catch (error) {
      // 错误已经在useAuth中处理
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-10 blur-3xl"></div>
      </div>
      
      {/* Chinese characters floating in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl text-blue-100 opacity-20 font-serif">登</div>
        <div className="absolute top-40 right-20 text-4xl text-cyan-100 opacity-20 font-serif">录</div>
        <div className="absolute bottom-40 left-20 text-5xl text-blue-100 opacity-20 font-serif">安</div>
        <div className="absolute bottom-20 right-10 text-3xl text-cyan-100 opacity-20 font-serif">全</div>
      </div>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* 返回按钮 */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">{t.auth.backToHome || '返回首页'}</span>
        </button>

        {/* Logo */}
        <div className="flex justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center">
            <span className="text-white font-bold text-2xl">中</span>
          </div>
        </div>

        <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
          {t.auth.loginTitle || '登录账户'}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {t.auth.loginSubtitle || '还没有账户？'}{' '}
          <button
            onClick={() => onNavigate('signup')}
            className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
          >
            {t.auth.signUpLink || '立即注册'}
          </button>
        </p>

        {/* 登录方式切换 */}
        <div className="mt-6">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              type="button"
              onClick={() => setLoginType('email')}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                loginType === 'email'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t.auth.emailLogin || '邮箱登录'}
            </button>
            <button
              type="button"
              onClick={() => setLoginType('phone')}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                loginType === 'phone'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t.auth.phoneLogin || '手机登录'}
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* 错误提示 */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            {/* 邮箱输入 */}
            {loginType === 'email' && (
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {t.auth.email || '邮箱地址'}
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    formErrors.email ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder={t.auth.emailPlaceholder || '请输入您的邮箱地址'}
                />
              </div>
              {formErrors.email && (
                <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
              )}
            </div>
            )}

            {/* 手机号输入 */}
            {loginType === 'phone' && (
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  {t.auth.phone || '手机号码'}
                </label>
                <div className="mt-1 relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      formErrors.phone ? 'border-red-300' : 'border-gray-300'
                    }`}
                    placeholder={t.auth.phonePlaceholder || '请输入您的手机号码'}
                  />
                </div>
                {formErrors.phone && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>
                )}
              </div>
            )}

            {/* 验证码输入 */}
            {loginType === 'phone' && (
              <div>
                <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700">
                  {t.auth.verificationCode || '验证码'}
                </label>
                <div className="mt-1 flex gap-2">
                  <div className="flex-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="verificationCode"
                      name="verificationCode"
                      type="text"
                      required
                      value={formData.verificationCode}
                      onChange={handleInputChange}
                      className={`block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                        formErrors.verificationCode ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder={t.auth.verificationCodePlaceholder || '请输入验证码'}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleSendCode}
                    disabled={isSendingCode || countdown > 0}
                    className="px-4 py-3 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSendingCode ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                        发送中...
                      </div>
                    ) : countdown > 0 ? (
                      t.auth.countdown?.replace('{seconds}', countdown.toString()) || `${countdown}秒后重新发送`
                    ) : (
                      t.auth.sendCode || '发送验证码'
                    )}
                  </button>
                </div>
                {formErrors.verificationCode && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.verificationCode}</p>
                )}
              </div>
            )}

            {/* 密码输入 - 仅邮箱登录时显示 */}
            {loginType === 'email' && (
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                {t.auth.password || '密码'}
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`block w-full pl-10 pr-12 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    formErrors.password ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder={t.auth.passwordPlaceholder || '请输入您的密码'}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              {formErrors.password && (
                <p className="mt-1 text-sm text-red-600">{formErrors.password}</p>
              )}
            </div>
            )}

            {/* 邮箱验证码输入 */}
            {loginType === 'email' && (
              <div>
                <label htmlFor="emailVerificationCode" className="block text-sm font-medium text-gray-700">
                  {t.auth.verificationCode || '验证码'} (可选)
                </label>
                <div className="mt-1 flex gap-2">
                  <div className="flex-1 relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MessageSquare className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="emailVerificationCode"
                      name="verificationCode"
                      type="text"
                      value={formData.verificationCode}
                      onChange={handleInputChange}
                      className={`block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                        formErrors.verificationCode ? 'border-red-300' : 'border-gray-300'
                      }`}
                      placeholder={t.auth.verificationCodePlaceholder || '请输入验证码'}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleSendCode}
                    disabled={isSendingCode || countdown > 0}
                    className="px-4 py-3 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {isSendingCode ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                        发送中...
                      </div>
                    ) : countdown > 0 ? (
                      t.auth.emailCountdown?.replace('{seconds}', countdown.toString()) || `${countdown}秒后重新发送`
                    ) : (
                      t.auth.sendEmailCode || '发送邮箱验证码'
                    )}
                  </button>
                </div>
                {formErrors.verificationCode && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.verificationCode}</p>
                )}
                <p className="mt-1 text-xs text-gray-500">
                  可以选择使用密码登录或邮箱验证码登录
                </p>
              </div>
            )}

            {/* 忘记密码 - 仅邮箱登录时显示 */}
            {loginType === 'email' && (
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="text-sm text-blue-600 hover:text-blue-500 transition-colors"
                onClick={() => {
                  // TODO: 实现忘记密码功能
                  alert(t.auth.forgotPassword || '忘记密码功能即将推出');
                }}
              >
                {t.auth.forgotPassword || '忘记密码？'}
              </button>
            </div>
            )}

            {/* 提交按钮 */}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    {t.auth.loggingIn || '登录中...'}
                  </div>
                ) : (
                  t.auth.loginButton || '登录'
                )}
              </button>
            </div>

            {/* 演示账户提示 */}
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="text-sm font-medium text-blue-800 mb-2">
                {t.auth.demoAccount || '演示账户'}
              </h3>
              <p className="text-xs text-blue-600">
                {t.auth.demoAccountInfo || '邮箱: demo@example.com 密码: password123'}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}



