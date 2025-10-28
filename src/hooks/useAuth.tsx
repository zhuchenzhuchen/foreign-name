import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { AuthContextType, AuthState, LoginRequest, RegisterRequest } from '../types/auth';
import { AuthService } from '../services/auth';
import { SmsService } from '../services/sms';
import { EmailService } from '../services/email';

// 认证状态类型
type AuthAction =
  | { type: 'AUTH_START' }
  | { type: 'AUTH_SUCCESS'; payload: { user: any; token: string } }
  | { type: 'AUTH_FAILURE'; payload: string }
  | { type: 'AUTH_LOGOUT' }
  | { type: 'AUTH_CLEAR_ERROR' };

// 初始状态
const initialState: AuthState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: true,
  error: null,
};

// Reducer函数
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'AUTH_START':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'AUTH_SUCCESS':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      };
    case 'AUTH_FAILURE':
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: action.payload,
      };
    case 'AUTH_LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      };
    case 'AUTH_CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// 创建Context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider组件
export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // 初始化时检查本地存储的认证信息
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = AuthService.getToken();
        const user = AuthService.getUser();

        if (token && user) {
          // 验证token是否有效
          const isValid = await AuthService.validateToken(token);
          if (isValid) {
            dispatch({ type: 'AUTH_SUCCESS', payload: { user, token } });
          } else {
            AuthService.clearAuthData();
            dispatch({ type: 'AUTH_FAILURE', payload: '登录已过期，请重新登录' });
          }
        } else {
          dispatch({ type: 'AUTH_FAILURE', payload: '' });
        }
      } catch (error) {
        dispatch({ type: 'AUTH_FAILURE', payload: '初始化认证状态失败' });
      }
    };

    initializeAuth();
  }, []);

  // 登录函数
  const login = async (credentials: LoginRequest): Promise<void> => {
    try {
      dispatch({ type: 'AUTH_START' });
      const response = await AuthService.login(credentials);
      AuthService.setAuthData(response.user, response.token);
      dispatch({ type: 'AUTH_SUCCESS', payload: response });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '登录失败';
      dispatch({ type: 'AUTH_FAILURE', payload: errorMessage });
      throw error;
    }
  };

  // 注册函数
  const register = async (userData: RegisterRequest): Promise<void> => {
    try {
      dispatch({ type: 'AUTH_START' });
      const response = await AuthService.register(userData);
      AuthService.setAuthData(response.user, response.token);
      dispatch({ type: 'AUTH_SUCCESS', payload: response });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '注册失败';
      dispatch({ type: 'AUTH_FAILURE', payload: errorMessage });
      throw error;
    }
  };

  // 登出函数
  const logout = async (): Promise<void> => {
    try {
      await AuthService.logout();
      dispatch({ type: 'AUTH_LOGOUT' });
    } catch (error) {
      // 即使登出失败，也要清除本地状态
      dispatch({ type: 'AUTH_LOGOUT' });
    }
  };

  // 发送短信验证码
  const sendSmsCode = async (phone: string, type: 'login' | 'register' | 'reset'): Promise<void> => {
    try {
      await SmsService.sendSmsCode({ phone, type });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '发送验证码失败';
      dispatch({ type: 'AUTH_FAILURE', payload: errorMessage });
      throw error;
    }
  };

  // 验证短信验证码
  const verifySmsCode = async (phone: string, code: string, type: 'login' | 'register' | 'reset'): Promise<boolean> => {
    try {
      return await SmsService.verifySmsCode({ phone, code, type });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '验证码验证失败';
      dispatch({ type: 'AUTH_FAILURE', payload: errorMessage });
      throw error;
    }
  };

  // 发送邮箱验证码
  const sendEmailCode = async (email: string, type: 'login' | 'register' | 'reset'): Promise<void> => {
    try {
      await EmailService.sendEmailCode({ email, type });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '发送验证码失败';
      dispatch({ type: 'AUTH_FAILURE', payload: errorMessage });
      throw error;
    }
  };

  // 验证邮箱验证码
  const verifyEmailCode = async (email: string, code: string, type: 'login' | 'register' | 'reset'): Promise<boolean> => {
    try {
      return await EmailService.verifyEmailCode({ email, code, type });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '验证码验证失败';
      dispatch({ type: 'AUTH_FAILURE', payload: errorMessage });
      throw error;
    }
  };

  // 清除错误信息
  const clearError = (): void => {
    dispatch({ type: 'AUTH_CLEAR_ERROR' });
  };

  const value: AuthContextType = {
    ...state,
    login,
    register,
    sendSmsCode,
    verifySmsCode,
    sendEmailCode,
    verifyEmailCode,
    logout,
    clearError,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook函数
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}



