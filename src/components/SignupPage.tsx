import React, { useState, useEffect } from 'react';
import { Eye, EyeOff, Mail, Lock, User, ArrowLeft, Phone, MessageSquare } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import { useLanguage } from '../hooks/useLanguage';

interface SignupPageProps {
  onNavigate: (page: string) => void;
}

export default function SignupPage({ onNavigate }: SignupPageProps) {
  const { t } = useLanguage();
  const { register, sendSmsCode, sendEmailCode, isLoading, error, clearError } = useAuth();
  const [registerType, setRegisterType] = useState<'email' | 'phone'>('email');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    verificationCode: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
    if (registerType === 'phone') {
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
        await sendSmsCode(formData.phone, 'register');
        setCountdown(60);
        setFormErrors(prev => ({ ...prev, phone: '' }));
      } catch (error) {
        // 错误已经在useAuth中处理
      } finally {
        setIsSendingCode(false);
      }
    } else if (registerType === 'email') {
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
        await sendEmailCode(formData.email, 'register');
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

    if (!formData.name.trim()) {
      errors.name = t.auth.nameRequired || '请输入姓名';
    } else if (formData.name.trim().length < 2) {
      errors.name = t.auth.nameMinLength || '姓名至少2个字符';
    }

    if (registerType === 'email') {
      if (!formData.email) {
        errors.email = t.auth.emailRequired || '请输入邮箱地址';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = t.auth.emailInvalid || '请输入有效的邮箱地址';
      }
    } else if (registerType === 'phone') {
      if (!formData.phone) {
        errors.phone = t.auth.phoneRequired || '请输入手机号码';
      } else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
        errors.phone = t.auth.phoneInvalid || '请输入有效的手机号码';
      }

      if (!formData.verificationCode) {
        errors.verificationCode = t.auth.verificationCodeRequired || '请输入验证码';
      }
    }

    if (!formData.password) {
      errors.password = t.auth.passwordRequired || '请输入密码';
    } else if (formData.password.length < 6) {
      errors.password = t.auth.passwordMinLength || '密码长度至少6位';
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = t.auth.confirmPasswordRequired || '请确认密码';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = t.auth.passwordMismatch || '两次输入的密码不一致';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      await register({
        ...formData,
        registerType
      });
      // 注册成功后跳转到首页或生成页面
      onNavigate('generate');
    } catch (error) {
      // 错误已经在useAuth中处理
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
        <div className="absolute top-20 left-10 text-6xl text-blue-100 opacity-20 font-serif">注</div>
        <div className="absolute top-40 right-20 text-4xl text-cyan-100 opacity-20 font-serif">册</div>
        <div className="absolute bottom-40 left-20 text-5xl text-blue-100 opacity-20 font-serif">新</div>
        <div className="absolute bottom-20 right-10 text-3xl text-cyan-100 opacity-20 font-serif">用</div>
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
          {t.auth.signupTitle || '创建账户'}
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          {t.auth.signupSubtitle || '已有账户？'}{' '}
          <button
            onClick={() => onNavigate('login')}
            className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
          >
            {t.auth.loginLink || '立即登录'}
          </button>
        </p>

        {/* 注册方式切换 */}
        <div className="mt-6">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              type="button"
              onClick={() => setRegisterType('email')}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                registerType === 'email'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t.auth.emailRegister || '邮箱注册'}
            </button>
            <button
              type="button"
              onClick={() => setRegisterType('phone')}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                registerType === 'phone'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t.auth.phoneRegister || '手机注册'}
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

            {/* 姓名输入 */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                {t.auth.name || '姓名'}
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`block w-full pl-10 pr-3 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    formErrors.name ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder={t.auth.namePlaceholder || '请输入您的姓名'}
                />
              </div>
              {formErrors.name && (
                <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>
              )}
            </div>

            {/* 邮箱输入 */}
            {registerType === 'email' && (
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
            {registerType === 'phone' && (
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

            {/* 手机验证码输入 */}
            {registerType === 'phone' && (
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

            {/* 邮箱验证码输入 */}
            {registerType === 'email' && (
              <div>
                <label htmlFor="emailVerificationCode" className="block text-sm font-medium text-gray-700">
                  {t.auth.verificationCode || '验证码'}
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
                      t.auth.emailCountdown?.replace('{seconds}', countdown.toString()) || `${countdown}秒后重新发送`
                    ) : (
                      t.auth.sendEmailCode || '发送邮箱验证码'
                    )}
                  </button>
                </div>
                {formErrors.verificationCode && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.verificationCode}</p>
                )}
              </div>
            )}

            {/* 密码输入 */}
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
                  autoComplete="new-password"
                  required
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

            {/* 确认密码输入 */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                {t.auth.confirmPassword || '确认密码'}
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`block w-full pl-10 pr-12 py-3 border rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                    formErrors.confirmPassword ? 'border-red-300' : 'border-gray-300'
                  }`}
                  placeholder={t.auth.confirmPasswordPlaceholder || '请再次输入密码'}
                />
                <button
                  type="button"
                  onClick={toggleConfirmPasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
              {formErrors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">{formErrors.confirmPassword}</p>
              )}
            </div>

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
                    {t.auth.registering || '注册中...'}
                  </div>
                ) : (
                  t.auth.signupButton || '注册'
                )}
              </button>
            </div>

            {/* 用户协议 */}
            <div className="text-center">
              <p className="text-xs text-gray-600">
                {t.auth.termsText || '注册即表示您同意我们的'}{' '}
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-500 transition-colors"
                  onClick={() => {
                    // TODO: 显示用户协议
                    alert(t.auth.termsAlert || '用户协议功能即将推出');
                  }}
                >
                  {t.auth.termsLink || '用户协议'}
                </button>
                {' '}{t.auth.andText || '和'}{' '}
                <button
                  type="button"
                  className="text-blue-600 hover:text-blue-500 transition-colors"
                  onClick={() => {
                    // TODO: 显示隐私政策
                    alert(t.auth.privacyAlert || '隐私政策功能即将推出');
                  }}
                >
                  {t.auth.privacyLink || '隐私政策'}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
