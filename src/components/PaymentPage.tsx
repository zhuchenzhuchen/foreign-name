import { useState, useEffect } from 'react';
import { ArrowLeft, CreditCard, Smartphone, Globe, CheckCircle, XCircle, Loader } from 'lucide-react';
import { usePayment } from '../hooks/usePayment';
import { useLanguage } from '../hooks/useLanguage';
import { PaymentRequest, PaymentMethod } from '../types/payment';
import { PaymentService } from '../services/payment';

interface PaymentPageProps {
  planId: string;
  planName: string;
  price: number;
  billingCycle: 'monthly' | 'yearly';
  onSuccess: () => void;
  onCancel: () => void;
}

export default function PaymentPage({ planId, planName, price, billingCycle, onSuccess, onCancel }: PaymentPageProps) {
  const { t } = useLanguage();
  const { createPayment, verifyPayment, isLoading, error, clearError } = usePayment();
  const [selectedMethod, setSelectedMethod] = useState<string>('');
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [currentPayment, setCurrentPayment] = useState<any>(null);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'processing' | 'success' | 'failed'>('idle');

  useEffect(() => {
    // 获取支付方式列表
    const methods = PaymentService.getPaymentMethods();
    setPaymentMethods(methods);
    setSelectedMethod(methods[0]?.id || '');
  }, []);

  // 轮询支付状态
  useEffect(() => {
    if (currentPayment?.transactionId && paymentStatus === 'processing') {
      const interval = setInterval(async () => {
        try {
          const status = await verifyPayment(currentPayment.transactionId);
          if (status) {
            if (status.status === 'completed') {
              setPaymentStatus('success');
              clearInterval(interval);
              setTimeout(() => onSuccess(), 2000);
            } else if (status.status === 'failed' || status.status === 'cancelled') {
              setPaymentStatus('failed');
              clearInterval(interval);
            }
          }
        } catch (error) {
          console.error('支付状态检查失败:', error);
        }
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [currentPayment, paymentStatus, verifyPayment, onSuccess]);

  const handlePayment = async () => {
    if (!selectedMethod) return;

    try {
      clearError();
      setPaymentStatus('processing');

      const paymentRequest: PaymentRequest = {
        planId,
        billingCycle,
        paymentMethod: selectedMethod,
        amount: price,
        currency: 'USD',
        userId: 'current_user',
        email: 'user@example.com',
      };

      const response = await createPayment(paymentRequest);
      
      if (response.success) {
        setCurrentPayment(response);
        setPaymentStatus('processing');
      } else {
        setPaymentStatus('failed');
      }
    } catch (error) {
      setPaymentStatus('failed');
    }
  };

  const getPaymentMethodIcon = (type: string) => {
    switch (type) {
      case 'stripe':
        return <CreditCard className="w-6 h-6" />;
      case 'alipay':
      case 'wechat':
        return <Smartphone className="w-6 h-6" />;
      case 'paypal':
        return <Globe className="w-6 h-6" />;
      default:
        return <CreditCard className="w-6 h-6" />;
    }
  };

  const getPaymentMethodName = (method: PaymentMethod) => {
    return method.name;
  };

  if (paymentStatus === 'success') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 text-center">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {t.payment.successTitle || '支付成功！'}
            </h2>
            <p className="text-gray-600 mb-6">
              {t.payment.successMessage || '您的订阅已激活，正在跳转...'}
            </p>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  if (paymentStatus === 'failed') {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10 text-center">
            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {t.payment.failedTitle || '支付失败'}
            </h2>
            <p className="text-gray-600 mb-6">
              {t.payment.failedMessage || '支付过程中出现问题，请重试或选择其他支付方式。'}
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setPaymentStatus('idle');
                  setCurrentPayment(null);
                  clearError();
                }}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t.payment.retry || '重试'}
              </button>
              <button
                onClick={onCancel}
                className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
              >
                {t.payment.cancel || '取消'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        {/* 返回按钮 */}
        <button
          onClick={onCancel}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">{t.payment.backToPricing || '返回定价'}</span>
        </button>

        {/* 支付表单 */}
        <div className="bg-white py-8 px-4 shadow-xl sm:rounded-2xl sm:px-10">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            {t.payment.title || '完成支付'}
          </h2>

          {/* 订单信息 */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-medium text-gray-900 mb-2">
              {t.payment.orderSummary || '订单摘要'}
            </h3>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">
                {planName} ({billingCycle === 'monthly' ? t.payment.monthly : t.payment.yearly})
              </span>
              <span className="font-bold text-lg">${price}</span>
            </div>
          </div>

          {/* 错误提示 */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          {/* 支付方式选择 */}
          <div className="mb-6">
            <h3 className="font-medium text-gray-900 mb-4">
              {t.payment.selectPaymentMethod || '选择支付方式'}
            </h3>
            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <label
                  key={method.id}
                  className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedMethod === method.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.id}
                    checked={selectedMethod === method.id}
                    onChange={(e) => setSelectedMethod(e.target.value)}
                    className="sr-only"
                  />
                  <div className="flex items-center gap-3">
                    {getPaymentMethodIcon(method.type)}
                    <span className="font-medium">{getPaymentMethodName(method)}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* 支付按钮 */}
          <button
            onClick={handlePayment}
            disabled={!selectedMethod || isLoading || paymentStatus === 'processing'}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading || paymentStatus === 'processing' ? (
              <div className="flex items-center justify-center">
                <Loader className="animate-spin w-5 h-5 mr-2" />
                {t.payment.processing || '处理中...'}
              </div>
            ) : (
              `${t.payment.payNow || '立即支付'} $${price}`
            )}
          </button>

          {/* 支付处理状态 */}
          {paymentStatus === 'processing' && currentPayment && (
            <div className="mt-6 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">
                {t.payment.processingMessage || '正在处理您的支付，请稍候...'}
              </p>
              {currentPayment.qrCode && (
                <div className="mt-4">
                  <p className="text-sm text-gray-500 mb-2">
                    {t.payment.scanQRCode || '请使用手机扫描二维码完成支付'}
                  </p>
                  <div className="bg-white p-4 rounded-lg border inline-block">
                    <img src={currentPayment.qrCode} alt="QR Code" className="w-32 h-32" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
