import { PaymentRequest, PaymentResponse, PaymentStatus, Subscription } from '../types/payment';

// 模拟支付数据存储
const PAYMENTS: Map<string, PaymentStatus> = new Map();
const SUBSCRIPTIONS: Map<string, Subscription> = new Map();

export class PaymentService {
  // 支持的支付方式
  static readonly PAYMENT_METHODS = [
    {
      id: 'stripe',
      name: 'Stripe',
      type: 'stripe' as const,
      icon: '💳',
      enabled: true,
    },
    {
      id: 'alipay',
      name: '支付宝',
      type: 'alipay' as const,
      icon: '🅰️',
      enabled: true,
    },
    {
      id: 'wechat',
      name: '微信支付',
      type: 'wechat' as const,
      icon: '💚',
      enabled: true,
    },
    {
      id: 'paypal',
      name: 'PayPal',
      type: 'paypal' as const,
      icon: '🅿️',
      enabled: true,
    },
  ];

  // 创建支付
  static async createPayment(request: PaymentRequest): Promise<PaymentResponse> {
    try {
      // 模拟网络延迟
      await new Promise(resolve => setTimeout(resolve, 1000));

      // 生成交易ID
      const transactionId = 'txn_' + Math.random().toString(36).substr(2, 9);

      // 根据支付方式处理
      switch (request.paymentMethod) {
        case 'stripe':
          return await this.createStripePayment(request, transactionId);
        case 'alipay':
          return await this.createAlipayPayment(request, transactionId);
        case 'wechat':
          return await this.createWechatPayment(request, transactionId);
        case 'paypal':
          return await this.createPaypalPayment(request, transactionId);
        default:
          throw new Error('不支持的支付方式');
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : '支付创建失败',
      };
    }
  }

  // Stripe 支付
  private static async createStripePayment(request: PaymentRequest, transactionId: string): Promise<PaymentResponse> {
    // 模拟 Stripe 支付
    const paymentUrl = `https://checkout.stripe.com/pay/cs_test_${transactionId}`;
    
    // 存储支付状态
    PAYMENTS.set(transactionId, {
      transactionId,
      status: 'pending',
      amount: request.amount,
      currency: request.currency,
      planId: request.planId,
      billingCycle: request.billingCycle,
      createdAt: new Date().toISOString(),
    });

    return {
      success: true,
      transactionId,
      paymentUrl,
    };
  }

  // 支付宝支付
  private static async createAlipayPayment(request: PaymentRequest, transactionId: string): Promise<PaymentResponse> {
    // 模拟支付宝支付
    const qrCode = `https://qr.alipay.com/bax${transactionId}`;
    
    // 存储支付状态
    PAYMENTS.set(transactionId, {
      transactionId,
      status: 'pending',
      amount: request.amount,
      currency: request.currency,
      planId: request.planId,
      billingCycle: request.billingCycle,
      createdAt: new Date().toISOString(),
    });

    return {
      success: true,
      transactionId,
      qrCode,
    };
  }

  // 微信支付
  private static async createWechatPayment(request: PaymentRequest, transactionId: string): Promise<PaymentResponse> {
    // 模拟微信支付
    const qrCode = `weixin://wxpay/bizpayurl?pr=${transactionId}`;
    
    // 存储支付状态
    PAYMENTS.set(transactionId, {
      transactionId,
      status: 'pending',
      amount: request.amount,
      currency: request.currency,
      planId: request.planId,
      billingCycle: request.billingCycle,
      createdAt: new Date().toISOString(),
    });

    return {
      success: true,
      transactionId,
      qrCode,
    };
  }

  // PayPal 支付
  private static async createPaypalPayment(request: PaymentRequest, transactionId: string): Promise<PaymentResponse> {
    // 模拟 PayPal 支付
    const paymentUrl = `https://www.paypal.com/checkoutnow?token=${transactionId}`;
    
    // 存储支付状态
    PAYMENTS.set(transactionId, {
      transactionId,
      status: 'pending',
      amount: request.amount,
      currency: request.currency,
      planId: request.planId,
      billingCycle: request.billingCycle,
      createdAt: new Date().toISOString(),
    });

    return {
      success: true,
      transactionId,
      paymentUrl,
    };
  }

  // 验证支付状态
  static async verifyPayment(transactionId: string): Promise<PaymentStatus | null> {
    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 500));

    const payment = PAYMENTS.get(transactionId);
    if (!payment) {
      return null;
    }

    // 模拟支付状态更新（在实际项目中，这里应该查询真实的支付状态）
    if (payment.status === 'pending') {
      // 随机决定支付是否成功（90% 成功率）
      const isSuccess = Math.random() > 0.1;
      payment.status = isSuccess ? 'completed' : 'failed';
      payment.completedAt = new Date().toISOString();
      
      if (!isSuccess) {
        payment.failureReason = '支付超时或用户取消';
      }

      PAYMENTS.set(transactionId, payment);
    }

    return payment;
  }

  // 取消支付
  static async cancelPayment(transactionId: string): Promise<boolean> {
    const payment = PAYMENTS.get(transactionId);
    if (!payment || payment.status !== 'pending') {
      return false;
    }

    payment.status = 'cancelled';
    PAYMENTS.set(transactionId, payment);
    return true;
  }

  // 创建订阅
  static async createSubscription(userId: string, planId: string, billingCycle: 'monthly' | 'yearly'): Promise<Subscription> {
    const subscriptionId = 'sub_' + Math.random().toString(36).substr(2, 9);
    const startDate = new Date();
    const endDate = new Date();
    
    if (billingCycle === 'monthly') {
      endDate.setMonth(endDate.getMonth() + 1);
    } else {
      endDate.setFullYear(endDate.getFullYear() + 1);
    }

    const subscription: Subscription = {
      id: subscriptionId,
      userId,
      planId,
      billingCycle,
      status: 'active',
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      nextBillingDate: endDate.toISOString(),
      autoRenew: true,
      paymentMethod: 'stripe',
    };

    SUBSCRIPTIONS.set(subscriptionId, subscription);
    return subscription;
  }

  // 获取订阅
  static async getSubscription(userId: string): Promise<Subscription | null> {
    for (const subscription of SUBSCRIPTIONS.values()) {
      if (subscription.userId === userId && subscription.status === 'active') {
        return subscription;
      }
    }
    return null;
  }

  // 取消订阅
  static async cancelSubscription(subscriptionId: string): Promise<boolean> {
    const subscription = SUBSCRIPTIONS.get(subscriptionId);
    if (!subscription) {
      return false;
    }

    subscription.status = 'cancelled';
    subscription.autoRenew = false;
    SUBSCRIPTIONS.set(subscriptionId, subscription);
    return true;
  }

  // 更新订阅
  static async updateSubscription(subscriptionId: string, planId: string): Promise<boolean> {
    const subscription = SUBSCRIPTIONS.get(subscriptionId);
    if (!subscription) {
      return false;
    }

    subscription.planId = planId;
    SUBSCRIPTIONS.set(subscriptionId, subscription);
    return true;
  }

  // 获取支付方式列表
  static getPaymentMethods() {
    return this.PAYMENT_METHODS;
  }
}
