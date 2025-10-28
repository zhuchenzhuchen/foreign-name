export interface User {
  id: string;
  email: string;
  phone?: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginRequest {
  email?: string;
  phone?: string;
  password: string;
  verificationCode?: string;
  loginType: 'email' | 'phone';
}

export interface RegisterRequest {
  email?: string;
  phone?: string;
  password: string;
  name: string;
  confirmPassword: string;
  verificationCode?: string;
  registerType: 'email' | 'phone';
}

export interface SendSmsRequest {
  phone: string;
  type: 'login' | 'register' | 'reset';
}

export interface VerifySmsRequest {
  phone: string;
  code: string;
  type: 'login' | 'register' | 'reset';
}

export interface SendEmailRequest {
  email: string;
  type: 'login' | 'register' | 'reset';
}

export interface VerifyEmailRequest {
  email: string;
  code: string;
  type: 'login' | 'register' | 'reset';
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface AuthContextType extends AuthState {
  login: (credentials: LoginRequest) => Promise<void>;
  register: (userData: RegisterRequest) => Promise<void>;
  sendSmsCode: (phone: string, type: 'login' | 'register' | 'reset') => Promise<void>;
  verifySmsCode: (phone: string, code: string, type: 'login' | 'register' | 'reset') => Promise<boolean>;
  sendEmailCode: (email: string, type: 'login' | 'register' | 'reset') => Promise<void>;
  verifyEmailCode: (email: string, code: string, type: 'login' | 'register' | 'reset') => Promise<boolean>;
  logout: () => void;
  clearError: () => void;
}



