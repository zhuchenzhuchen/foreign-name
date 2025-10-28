// 支付相关类型定义

export interface PaymentPlan {
  id: string;
  name: string;
  description: string;
  priceMonthly: number;
  priceYearly: number;
  features: string[];
  popular?: boolean;
}

export interface PaymentMethod {
  id: string;
  name: string;
  type: 'card' | 'alipay' | 'wechat' | 'paypal' | 'stripe';
  icon: string;
  enabled: boolean;
}

export interface PaymentRequest {
  planId: string;
  billingCycle: 'monthly' | 'yearly';
  paymentMethod: string;
  amount: number;
  currency: string;
  userId?: string;
  email?: string;
}

export interface PaymentResponse {
  success: boolean;
  transactionId?: string;
  paymentUrl?: string;
  qrCode?: string;
  message?: string;
  error?: string;
}

export interface PaymentStatus {
  transactionId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
  amount: number;
  currency: string;
  planId: string;
  billingCycle: 'monthly' | 'yearly';
  createdAt: string;
  completedAt?: string;
  failureReason?: string;
}

export interface Subscription {
  id: string;
  userId: string;
  planId: string;
  billingCycle: 'monthly' | 'yearly';
  status: 'active' | 'cancelled' | 'expired' | 'paused';
  startDate: string;
  endDate: string;
  nextBillingDate?: string;
  autoRenew: boolean;
  paymentMethod: string;
}

export interface PaymentContextType {
  // 支付方法
  createPayment: (request: PaymentRequest) => Promise<PaymentResponse>;
  verifyPayment: (transactionId: string) => Promise<PaymentStatus | null>;
  cancelPayment: (transactionId: string) => Promise<boolean>;
  
  // 订阅管理
  getSubscription: (userId: string) => Promise<Subscription | null>;
  cancelSubscription: (subscriptionId: string) => Promise<boolean>;
  updateSubscription: (subscriptionId: string, planId: string) => Promise<boolean>;
  
  // 状态
  isLoading: boolean;
  error: string | null;
  clearError: () => void;
}
