import { createContext, useContext, useReducer, ReactNode } from 'react';
import { PaymentContextType, PaymentRequest, PaymentResponse, PaymentStatus, Subscription } from '../types/payment';
import { PaymentService } from '../services/payment';

// 支付状态类型
type PaymentState = {
  isLoading: boolean;
  error: string | null;
  currentPayment: PaymentStatus | null;
  subscription: Subscription | null;
};

// 支付动作类型
type PaymentAction =
  | { type: 'PAYMENT_START' }
  | { type: 'PAYMENT_SUCCESS'; payload: PaymentResponse }
  | { type: 'PAYMENT_FAILURE'; payload: string }
  | { type: 'PAYMENT_STATUS_UPDATE'; payload: PaymentStatus }
  | { type: 'SUBSCRIPTION_UPDATE'; payload: Subscription | null }
  | { type: 'CLEAR_ERROR' };

// 初始状态
const initialState: PaymentState = {
  isLoading: false,
  error: null,
  currentPayment: null,
  subscription: null,
};

// Reducer函数
const paymentReducer = (state: PaymentState, action: PaymentAction): PaymentState => {
  switch (action.type) {
    case 'PAYMENT_START':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'PAYMENT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
      };
    case 'PAYMENT_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case 'PAYMENT_STATUS_UPDATE':
      return {
        ...state,
        currentPayment: action.payload,
      };
    case 'SUBSCRIPTION_UPDATE':
      return {
        ...state,
        subscription: action.payload,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

// 创建Context
const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

// Provider组件
export function PaymentProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(paymentReducer, initialState);

  // 创建支付
  const createPayment = async (request: PaymentRequest): Promise<PaymentResponse> => {
    try {
      dispatch({ type: 'PAYMENT_START' });
      const response = await PaymentService.createPayment(request);
      
      if (response.success) {
        dispatch({ type: 'PAYMENT_SUCCESS', payload: response });
        
        // 如果支付成功，创建订阅
        if (response.transactionId) {
          const subscription = await PaymentService.createSubscription(
            request.userId || 'current_user',
            request.planId,
            request.billingCycle
          );
          dispatch({ type: 'SUBSCRIPTION_UPDATE', payload: subscription });
        }
      } else {
        dispatch({ type: 'PAYMENT_FAILURE', payload: response.error || '支付失败' });
      }
      
      return response;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '支付创建失败';
      dispatch({ type: 'PAYMENT_FAILURE', payload: errorMessage });
      throw error;
    }
  };

  // 验证支付状态
  const verifyPayment = async (transactionId: string): Promise<PaymentStatus | null> => {
    try {
      const status = await PaymentService.verifyPayment(transactionId);
      if (status) {
        dispatch({ type: 'PAYMENT_STATUS_UPDATE', payload: status });
      }
      return status;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '支付验证失败';
      dispatch({ type: 'PAYMENT_FAILURE', payload: errorMessage });
      throw error;
    }
  };

  // 取消支付
  const cancelPayment = async (transactionId: string): Promise<boolean> => {
    try {
      return await PaymentService.cancelPayment(transactionId);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '支付取消失败';
      dispatch({ type: 'PAYMENT_FAILURE', payload: errorMessage });
      throw error;
    }
  };

  // 获取订阅
  const getSubscription = async (userId: string): Promise<Subscription | null> => {
    try {
      const subscription = await PaymentService.getSubscription(userId);
      dispatch({ type: 'SUBSCRIPTION_UPDATE', payload: subscription });
      return subscription;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '获取订阅失败';
      dispatch({ type: 'PAYMENT_FAILURE', payload: errorMessage });
      throw error;
    }
  };

  // 取消订阅
  const cancelSubscription = async (subscriptionId: string): Promise<boolean> => {
    try {
      const success = await PaymentService.cancelSubscription(subscriptionId);
      if (success) {
        dispatch({ type: 'SUBSCRIPTION_UPDATE', payload: null });
      }
      return success;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '取消订阅失败';
      dispatch({ type: 'PAYMENT_FAILURE', payload: errorMessage });
      throw error;
    }
  };

  // 更新订阅
  const updateSubscription = async (subscriptionId: string, planId: string): Promise<boolean> => {
    try {
      return await PaymentService.updateSubscription(subscriptionId, planId);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '更新订阅失败';
      dispatch({ type: 'PAYMENT_FAILURE', payload: errorMessage });
      throw error;
    }
  };

  // 清除错误
  const clearError = (): void => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  const value: PaymentContextType = {
    ...state,
    createPayment,
    verifyPayment,
    cancelPayment,
    getSubscription,
    cancelSubscription,
    updateSubscription,
    clearError,
  };

  return (
    <PaymentContext.Provider value={value}>
      {children}
    </PaymentContext.Provider>
  );
}

// Hook函数
export function usePayment(): PaymentContextType {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
}
