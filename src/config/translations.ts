// 中英文对照翻译配置
export type Language = 'en' | 'zh';

export interface Translations {
  // 导航栏
  nav: {
    home: string;
    backToHome: string;
    generate: string;
    about: string;
    faq: string;
    price: string;
    contact: string;
    language: string;
    getStarted: string;
    login: string;
    signup: string;
  };
  
  // 首页
  landing: {
    title: string;
    subtitle: string;
    getStarted: string;
    learnMore: string;
    poweredBy: string;
    guidedBy: string;
    everyNameTells: string;
    aiPowered: string;
    aiPoweredDesc: string;
    culturalDepth: string;
    culturalDepthDesc: string;
    personalized: string;
    personalizedDesc: string;
    simple: string;
    meaningful: string;
    yours: string;
    step1: string;
    step1Desc: string;
    step2: string;
    step2Desc: string;
    step3: string;
    step3Desc: string;
    readyToBegin: string;
    joinThousands: string;
    getYourChineseName: string;
    copyright: string;
  };
  
  // 生成页面
  generate: {
    title: string;
    subtitle: string;
    yourEnglishName: string;
    gender: string;
    male: string;
    female: string;
    neutral: string;
    nameStyle: string;
    traditional: string;
    modern: string;
    cute: string;
    heroic: string;
    preferences: string;
    optional: string;
    add: string;
    addCustomPreference: string;
    generateButton: string;
    generating: string;
      yourNameAwaits: string;
      fillInfo: string;
      step1Desc: string;
      step2Desc: string;
    yourChineseName: string;
    englishName: string;
    listenToPronunciation: string;
    characterMeanings: string;
    overallMeaning: string;
    culturalSignificance: string;
    bestUsedFor: string;
    alternativeNames: string;
    generatingStep1: string;
    generatingStep2: string;
    generatingStep3: string;
  };
  
  // FAQ页面
  faq: {
    title: string;
    subtitle: string;
    stillHaveQuestions: string;
    contactUs: string;
    contactButton: string;
    items: Array<{
      question: string;
      questionEn: string;
      answer: string;
      answerEn: string;
    }>;
  };
  
  // 定价页面
  pricing: {
    title: string;
    subtitle: string;
    monthly: string;
    yearly: string;
    save20: string;
    saveAmount: string;
    mostPopular: string;
    year: string;
    month: string;
    faqTitle: string;
    ctaTitle: string;
    ctaDescription: string;
    startFree: string;
    contactSales: string;
    plans: Array<{
      id: string;
      name: string;
      description: string;
      priceMonthly: number;
      priceYearly: number;
      icon: string;
      popular: boolean;
      buttonText: string;
      features: string[];
    }>;
    faqItems: Array<{
      question: string;
      answer: string;
    }>;
  };
  
  // 认证相关
  auth: {
    loginTitle: string;
    loginSubtitle: string;
    signupTitle: string;
    signupSubtitle: string;
    backToHome: string;
    email: string;
    phone: string;
    password: string;
    name: string;
    confirmPassword: string;
    verificationCode: string;
    loginType: string;
    registerType: string;
    emailLogin: string;
    phoneLogin: string;
    emailRegister: string;
    phoneRegister: string;
    emailRequired: string;
    emailInvalid: string;
    phoneRequired: string;
    phoneInvalid: string;
    passwordRequired: string;
    passwordMinLength: string;
    nameRequired: string;
    nameMinLength: string;
    confirmPasswordRequired: string;
    passwordMismatch: string;
    verificationCodeRequired: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    passwordPlaceholder: string;
    namePlaceholder: string;
    confirmPasswordPlaceholder: string;
    verificationCodePlaceholder: string;
    sendCode: string;
    resendCode: string;
    countdown: string;
    loginButton: string;
    signupButton: string;
    loggingIn: string;
    registering: string;
    forgotPassword: string;
    loginLink: string;
    signUpLink: string;
    termsText: string;
    termsLink: string;
    andText: string;
    privacyLink: string;
    termsAlert: string;
    privacyAlert: string;
    demoAccount: string;
    demoAccountInfo: string;
    sendCodeSuccess: string;
    sendCodeError: string;
    verifyCodeSuccess: string;
    verifyCodeError: string;
    sendEmailCode: string;
    resendEmailCode: string;
    emailCountdown: string;
    sendEmailCodeSuccess: string;
    sendEmailCodeError: string;
    verifyEmailCodeSuccess: string;
    verifyEmailCodeError: string;
  };
  
  // 支付相关
  payment: {
    title: string;
    backToPricing: string;
    orderSummary: string;
    monthly: string;
    yearly: string;
    selectPaymentMethod: string;
    payNow: string;
    processing: string;
    processingMessage: string;
    scanQRCode: string;
    successTitle: string;
    successMessage: string;
    failedTitle: string;
    failedMessage: string;
    retry: string;
    cancel: string;
    paymentMethods: {
      stripe: string;
      alipay: string;
      wechat: string;
      paypal: string;
    };
  };

  // 错误信息
  errors: {
    enterName: string;
    generateFailed: string;
    apiNotConfigured: string;
  };

  // 退款政策
  refund: {
    title: string;
    subtitle: string;
    lastUpdated: string;
    days30: string;
    days30Desc: string;
    simpleProcess: string;
    simpleProcessDesc: string;
    noQuestions: string;
    noQuestionsDesc: string;
    section1Title: string;
    section1Content: string;
    guarantee: string;
    guaranteeDesc: string;
    section2Title: string;
    eligibleTitle: string;
    eligibleItems: string[];
    notEligibleTitle: string;
    notEligibleItems: string[];
    section3Title: string;
    step1Title: string;
    step1Desc: string;
    subject: string;
    subjectText: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
    section4Title: string;
    processingItems: string[];
    section5Title: string;
    creditCard: string;
    creditCardDesc: string;
    paypal: string;
    paypalDesc: string;
    alipay: string;
    alipayDesc: string;
    wechat: string;
    wechatDesc: string;
    section6Title: string;
    section6Content: string;
    partialRefundItems: string[];
    contactTitle: string;
    contactContent: string;
    responseTime: string;
    responseTimeDesc: string;
    phone: string;
    satisfaction: string;
  };

  // 联系我们
  contact: {
    title: string;
    subtitle: string;
    getInTouch: string;
    email: string;
    emailDesc: string;
    phone: string;
    phoneDesc: string;
    address: string;
    businessHours: string;
    mondayFriday: string;
    saturdaySunday: string;
    timezone: string;
    followUs: string;
    sendMessage: string;
    sendMessageDesc: string;
    successTitle: string;
    successMessage: string;
    yourName: string;
    namePlaceholder: string;
    yourEmail: string;
    emailPlaceholder: string;
    subject: string;
    selectSubject: string;
    generalInquiry: string;
    technicalSupport: string;
    feedback: string;
    refundRequest: string;
    partnership: string;
    other: string;
    message: string;
    messagePlaceholder: string;
    sending: string;
    sendButton: string;
    quickHelp: string;
    quickHelpDesc: string;
    visitFAQ: string;
    needHelp: string;
    needHelpDesc: string;
    faq: string;
    faqDesc: string;
    documentation: string;
    documentationDesc: string;
    directEmail: string;
    directEmailDesc: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Chinese Name Finder',
      backToHome: 'Back to Home',
      generate: 'Generate',
      about: 'About',
      faq: 'FAQ',
      price: 'Pricing',
      contact: 'Contact',
      language: 'EN',
      getStarted: 'Get Started',
      login: 'Log In',
      signup: 'Sign Up',
    },
    landing: {
      title: 'Find Your Perfect\nChinese Name',
      subtitle: 'Discover meaning, culture, and beauty.',
      getStarted: 'Get started',
      learnMore: 'Learn more',
      poweredBy: 'Powered by intelligence.',
      guidedBy: 'Guided by culture.',
      everyNameTells: 'Every name tells a story. Make yours meaningful.',
      aiPowered: 'AI-Powered',
      aiPoweredDesc: 'Advanced algorithms combine phonetics with cultural meaning for perfect matches.',
      culturalDepth: 'Cultural Depth',
      culturalDepthDesc: 'Detailed explanations of meaning and cultural significance for every name.',
      personalized: 'Personalized',
      personalizedDesc: 'Tailored to your preferences, style, and the meaning you want to express.',
      simple: 'Simple. Meaningful. Yours.',
      meaningful: 'Meaningful.',
      yours: 'Yours.',
      step1: 'Enter your name',
      step1Desc: 'Tell us your English name and what you value most.',
      step2: 'Choose your style',
      step2Desc: 'Select from traditional, modern, or other meaningful styles.',
      step3: 'Discover your name',
      step3Desc: 'Receive personalized options with pronunciation and meaning.',
      readyToBegin: 'Ready to begin?',
      joinThousands: 'Join thousands discovering their Chinese identity.',
      getYourChineseName: 'Get your Chinese name',
      copyright: '© 2025 Chinese Name Finder. All rights reserved.',
    },
    generate: {
      title: 'Generate Your Chinese Name',
      subtitle: 'Tell us about yourself and discover your perfect name.',
      yourEnglishName: 'Your English Name',
      gender: 'Gender',
      male: 'Male',
      female: 'Female',
      neutral: 'Neutral',
      nameStyle: 'Name Style',
      traditional: 'Traditional',
      modern: 'Modern',
      cute: 'Cute',
      heroic: 'Heroic',
      preferences: 'Preferences',
      optional: '(Optional)',
      add: 'Add',
      addCustomPreference: 'Add custom preference',
      generateButton: 'Generate Chinese Name',
      generating: 'Generating...',
      yourNameAwaits: 'Your Name Awaits',
      fillInfo: 'Fill in your information and generate to discover your perfect Chinese name.',
      step1Desc: 'Tell us your English name and what you value most.',
      step2Desc: 'Select from traditional, modern, or other meaningful styles.',
      yourChineseName: 'Your Chinese Name',
      englishName: 'English Name',
      listenToPronunciation: 'Listen to pronunciation',
      characterMeanings: 'Character Meanings',
      overallMeaning: 'Overall Meaning',
      culturalSignificance: 'Cultural Significance',
      bestUsedFor: 'Best Used For',
      alternativeNames: 'Alternative Names',
      generatingStep1: 'Analyzing your name...',
      generatingStep2: 'Finding perfect characters...',
      generatingStep3: 'Adding cultural meaning...',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to common questions about our Chinese name generation service.',
      stillHaveQuestions: 'Still have questions?',
      contactUs: "We're here to help! Contact our support team for personalized assistance.",
      contactButton: 'Contact Us',
      items: [
        {
          question: 'How does the Chinese name generation work?',
          questionEn: 'How does the Chinese name generation work?',
          answer: 'Our AI-powered system analyzes your English name, gender preferences, and style choices to generate culturally appropriate Chinese names. We consider phonetic similarity, cultural meaning, and traditional naming conventions to create meaningful names that resonate with your identity.',
          answerEn: '我们的AI驱动系统分析您的英文名字、性别偏好和风格选择，生成文化上合适的中文名字。我们考虑语音相似性、文化意义和传统命名惯例，创建与您身份产生共鸣的有意义的名字。'
        },
        {
          question: 'Are the generated names culturally authentic?',
          questionEn: 'Are the generated names culturally authentic?',
          answer: 'Yes! Our system is trained on extensive Chinese cultural and linguistic data. Each generated name includes proper Chinese characters (汉字), pinyin pronunciation, individual character meanings, and cultural significance. We ensure all names follow traditional Chinese naming conventions.',
          answerEn: '是的！我们的系统基于广泛的中国文化和语言数据进行训练。每个生成的名字都包含正确的中文字符（汉字）、拼音发音、单个字符含义和文化意义。我们确保所有名字都遵循传统的中文命名惯例。'
        },
        {
          question: 'Can I customize the name generation process?',
          questionEn: 'Can I customize the name generation process?',
          answer: 'Absolutely! You can choose your gender preference (male, female, or neutral), select from different styles (traditional, modern, cute, or heroic), and add personal preferences like "Wise", "Brave", "Success", etc. You can also add custom preferences to further personalize your results.',
          answerEn: '当然可以！您可以选择性别偏好（男性、女性或中性），从不同风格中选择（传统、现代、可爱或英雄），并添加个人偏好，如"智慧"、"勇敢"、"成功"等。您还可以添加自定义偏好来进一步个性化您的结果。'
        },
        {
          question: 'How many name options will I receive?',
          questionEn: 'How many name options will I receive?',
          answer: 'You\'ll receive one primary Chinese name with detailed explanations, plus 3 alternative options. Each name includes the Chinese characters, pinyin pronunciation, overall meaning, individual character meanings, cultural significance, and suggested use cases.',
          answerEn: '您将收到一个主要的中文名字，包含详细解释，以及3个备选选项。每个名字都包括中文字符、拼音发音、整体含义、单个字符含义、文化意义和建议使用场景。'
        },
        {
          question: 'Is there a pronunciation guide for the names?',
          questionEn: 'Is there a pronunciation guide for the names?',
          answer: 'Yes! Each name comes with pinyin pronunciation (the romanized form of Chinese characters) and individual character pronunciations. We also provide a "Listen to pronunciation" feature to help you learn the correct pronunciation.',
          answerEn: '是的！每个名字都配有拼音发音（中文字符的罗马化形式）和单个字符发音。我们还提供"听发音"功能，帮助您学习正确的发音。'
        },
        {
          question: 'Can I use these names for official documents?',
          questionEn: 'Can I use these names for official documents?',
          answer: 'While our names are culturally authentic and meaningful, we recommend consulting with native Chinese speakers or cultural experts before using them for official purposes. Our names are perfect for social media, creative projects, business cards, and personal use.',
          answerEn: '虽然我们的名字在文化上是真实和有意义的，但我们建议在用于正式目的之前咨询母语为中文的人或文化专家。我们的名字非常适合社交媒体、创意项目、名片和个人使用。'
        },
        {
          question: 'How accurate are the cultural meanings provided?',
          questionEn: 'How accurate are the cultural meanings provided?',
          answer: 'Our cultural meanings are based on extensive research and traditional Chinese culture. However, Chinese characters can have multiple meanings depending on context. We provide the most common and positive interpretations, but meanings can vary across different regions and time periods.',
          answerEn: '我们的文化含义基于广泛的研究和传统中国文化。然而，中文字符根据上下文可能有多种含义。我们提供最常见和积极的解释，但含义可能因不同地区和时间段而有所不同。'
        },
        {
          question: 'Do you offer different Chinese dialects?',
          questionEn: 'Do you offer different Chinese dialects?',
          answer: 'Currently, we focus on Mandarin Chinese (普通话) with standard pinyin pronunciation. This is the most widely used form of Chinese and is understood by speakers of all Chinese dialects. We may add dialect support in future updates.',
          answerEn: '目前，我们专注于普通话，使用标准拼音发音。这是使用最广泛的中文形式，所有中文方言的使用者都能理解。我们可能在未来的更新中添加方言支持。'
        },
        {
          question: 'Is my personal information secure?',
          questionEn: 'Is my personal information secure?',
          answer: 'Yes! We only collect the information necessary for name generation (your English name and preferences). We don\'t store personal data permanently, and all information is processed securely. Your privacy is our priority.',
          answerEn: '是的！我们只收集名字生成所需的信息（您的英文名字和偏好）。我们不永久存储个人数据，所有信息都经过安全处理。您的隐私是我们的首要任务。'
        },
        {
          question: 'Can I request a refund if I\'m not satisfied?',
          questionEn: 'Can I request a refund if I\'m not satisfied?',
          answer: 'We\'re confident you\'ll love your Chinese name! If you\'re not completely satisfied with the generated names, please contact our support team. We\'re happy to help you find the perfect name or provide additional options.',
          answerEn: '我们相信您会喜欢您的中文名字！如果您对生成的名字不完全满意，请联系我们的支持团队。我们很乐意帮助您找到完美的名字或提供其他选项。'
        }
      ]
    },
    pricing: {
      title: 'Simple, Transparent Pricing',
      subtitle: 'Choose the perfect plan for your Chinese name discovery journey. No hidden fees, no surprises.',
      monthly: 'Monthly',
      yearly: 'Yearly',
      save20: 'Save 20%',
      saveAmount: 'Save ${amount}',
      mostPopular: 'Most Popular',
      year: 'year',
      month: 'month',
      faqTitle: 'Frequently Asked Questions',
      ctaTitle: 'Ready to Find Your Perfect Chinese Name?',
      ctaDescription: 'Join thousands of users who have discovered their meaningful Chinese names. Start your journey today with our free trial.',
      startFree: 'Start Free Trial',
      contactSales: 'Contact Sales',
      plans: [
        {
          id: 'free',
          name: 'Free',
          description: 'Perfect for trying out our service',
          priceMonthly: 0,
          priceYearly: 0,
          icon: 'zap',
          popular: false,
          buttonText: 'Get Started Free',
          features: [
            '3 name generations per month',
            'Basic Chinese characters & pinyin',
            'Simple meaning explanations',
            'Email support',
            'Mobile-friendly interface'
          ]
        },
        {
          id: 'pro',
          name: 'Pro',
          description: 'Best for regular users and enthusiasts',
          priceMonthly: 9.99,
          priceYearly: 95.99,
          icon: 'star',
          popular: true,
          buttonText: 'Start Pro Trial',
          features: [
            'Unlimited name generations',
            'Detailed cultural significance',
            'Individual character meanings',
            'Alternative name suggestions',
            'Pronunciation audio guide',
            'Priority email support',
            'Export to PDF',
            'Advanced customization options'
          ]
        },
        {
          id: 'premium',
          name: 'Premium',
          description: 'For professionals and businesses',
          priceMonthly: 19.99,
          priceYearly: 191.99,
          icon: 'crown',
          popular: false,
          buttonText: 'Start Premium Trial',
          features: [
            'Everything in Pro',
            'Bulk name generation (up to 100)',
            'Custom style preferences',
            'Professional consultation',
            'Priority phone support',
            'API access',
            'White-label options',
            'Team collaboration tools',
            'Advanced analytics'
          ]
        }
      ],
      faqItems: [
        {
          question: 'Can I change plans anytime?',
          answer: 'Yes! You can upgrade, downgrade, or cancel your subscription at any time. Changes take effect immediately.'
        },
        {
          question: 'Is there a free trial?',
          answer: 'Absolutely! All paid plans come with a 7-day free trial. No credit card required to start.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, PayPal, and bank transfers for annual subscriptions.'
        },
        {
          question: 'Do you offer refunds?',
          answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied, we\'ll refund your payment.'
        },
        {
          question: 'Can I use this for commercial purposes?',
          answer: 'Yes! Our Pro and Premium plans include commercial usage rights. Check our terms for details.'
        },
        {
          question: 'Is my data secure?',
          answer: 'Absolutely. We use enterprise-grade security and never share your personal information.'
        }
      ]
    },
    auth: {
      loginTitle: 'Sign in to your account',
      loginSubtitle: "Don't have an account? ",
      signupTitle: 'Create your account',
      signupSubtitle: 'Already have an account? ',
      backToHome: 'Back to Home',
      email: 'Email Address',
      phone: 'Phone Number',
      password: 'Password',
      name: 'Name',
      confirmPassword: 'Confirm Password',
      verificationCode: 'Verification Code',
      loginType: 'Login Type',
      registerType: 'Register Type',
      emailLogin: 'Email Login',
      phoneLogin: 'Phone Login',
      emailRegister: 'Email Register',
      phoneRegister: 'Phone Register',
      emailRequired: 'Please enter your email address',
      emailInvalid: 'Please enter a valid email address',
      phoneRequired: 'Please enter your phone number',
      phoneInvalid: 'Please enter a valid phone number',
      passwordRequired: 'Please enter your password',
      passwordMinLength: 'Password must be at least 6 characters',
      nameRequired: 'Please enter your name',
      nameMinLength: 'Name must be at least 2 characters',
      confirmPasswordRequired: 'Please confirm your password',
      passwordMismatch: 'Passwords do not match',
      verificationCodeRequired: 'Please enter the verification code',
      emailPlaceholder: 'Enter your email address',
      phonePlaceholder: 'Enter your phone number',
      passwordPlaceholder: 'Enter your password',
      namePlaceholder: 'Enter your name',
      confirmPasswordPlaceholder: 'Re-enter your password',
      verificationCodePlaceholder: 'Enter verification code',
      sendCode: 'Send Code',
      resendCode: 'Resend Code',
      countdown: 'Resend in {seconds}s',
      loginButton: 'Sign In',
      signupButton: 'Sign Up',
      loggingIn: 'Signing in...',
      registering: 'Creating account...',
      forgotPassword: 'Forgot your password?',
      loginLink: 'Sign in',
      signUpLink: 'Sign up now',
      termsText: 'By signing up, you agree to our ',
      termsLink: 'Terms of Service',
      andText: ' and ',
      privacyLink: 'Privacy Policy',
      termsAlert: 'Terms of Service coming soon',
      privacyAlert: 'Privacy Policy coming soon',
      demoAccount: 'Demo Account',
      demoAccountInfo: 'Email: demo@example.com Password: password123',
      sendCodeSuccess: 'Verification code sent successfully',
      sendCodeError: 'Failed to send verification code',
      verifyCodeSuccess: 'Verification code verified successfully',
      verifyCodeError: 'Verification code verification failed',
      sendEmailCode: 'Send Email Code',
      resendEmailCode: 'Resend Email Code',
      emailCountdown: 'Resend in {seconds}s',
      sendEmailCodeSuccess: 'Email verification code sent successfully',
      sendEmailCodeError: 'Failed to send email verification code',
      verifyEmailCodeSuccess: 'Email verification code verified successfully',
      verifyEmailCodeError: 'Email verification code verification failed',
    },
    payment: {
      title: 'Complete Payment',
      backToPricing: 'Back to Pricing',
      orderSummary: 'Order Summary',
      monthly: 'Monthly',
      yearly: 'Yearly',
      selectPaymentMethod: 'Select Payment Method',
      payNow: 'Pay Now',
      processing: 'Processing...',
      processingMessage: 'Processing your payment, please wait...',
      scanQRCode: 'Please scan the QR code with your phone to complete payment',
      successTitle: 'Payment Successful!',
      successMessage: 'Your subscription has been activated, redirecting...',
      failedTitle: 'Payment Failed',
      failedMessage: 'There was a problem with your payment. Please try again or choose another payment method.',
      retry: 'Retry',
      cancel: 'Cancel',
      paymentMethods: {
        stripe: 'Credit Card (Stripe)',
        alipay: 'Alipay',
        wechat: 'WeChat Pay',
        paypal: 'PayPal',
      },
    },
    errors: {
      enterName: 'Please enter your English name',
      generateFailed: 'Failed to generate Chinese name. Please try again.',
      apiNotConfigured: 'API key not configured. Please set VITE_OPENROUTER_API_KEY in your environment variables.',
    },
    refund: {
      title: 'Refund Policy',
      subtitle: 'We stand behind our service with a fair and transparent refund policy',
      lastUpdated: 'Last Updated: November 6, 2025',
      days30: '30-Day Guarantee',
      days30Desc: 'Full refund within 30 days of purchase',
      simpleProcess: 'Simple Process',
      simpleProcessDesc: 'Easy refund request with minimal steps',
      noQuestions: 'Fair Policy',
      noQuestionsDesc: 'Clear terms with customer satisfaction priority',
      section1Title: '1. Our Commitment to You',
      section1Content: 'At Chinese Name Finder, we are committed to providing you with meaningful, culturally authentic Chinese names. We want you to be completely satisfied with your experience. If for any reason you are not happy with our service, we offer a straightforward refund policy.',
      guarantee: '30-Day Money-Back Guarantee',
      guaranteeDesc: 'If you are not satisfied with our service within 30 days of your purchase, you can request a full refund. No questions asked, no hassle.',
      section2Title: '2. Refund Eligibility',
      eligibleTitle: 'You Are Eligible for a Refund If:',
      eligibleItems: [
        'You purchased a paid plan (Pro or Premium) within the last 30 days',
        'You experienced technical issues that prevented you from using the service',
        'The generated names did not meet the quality standards described',
        'You were charged incorrectly or multiple times',
        'The service did not function as advertised'
      ],
      notEligibleTitle: 'Refunds Are Not Available For:',
      notEligibleItems: [
        'Purchases made more than 30 days ago',
        'Free plan users (as no payment was made)',
        'Accounts that violated our Terms of Service',
        'Requests made after extensive use of the service (100+ name generations)',
        'Change of mind after 30 days from purchase date'
      ],
      section3Title: '3. How to Request a Refund',
      step1Title: 'Contact Our Support Team',
      step1Desc: 'Send an email to our support team with your account details and purchase information. Please include your order number and the reason for your refund request.',
      subject: 'Subject',
      subjectText: 'Refund Request - [Your Order Number]',
      step2Title: 'Verification Process',
      step2Desc: 'Our team will review your request within 24-48 hours. We may ask for additional information to verify your purchase and account.',
      step3Title: 'Approval Notification',
      step3Desc: 'Once approved, you will receive a confirmation email with details about your refund and the expected processing time.',
      step4Title: 'Refund Processing',
      step4Desc: 'Refunds are processed to your original payment method within 5-10 business days, depending on your payment provider.',
      section4Title: '4. Refund Processing Time',
      processingItems: [
        'Credit/Debit Card: 5-10 business days (depending on your bank)',
        'PayPal: 3-5 business days',
        'Alipay/WeChat Pay: 3-7 business days',
        'Bank Transfer: 7-14 business days'
      ],
      section5Title: '5. Refund Methods',
      creditCard: 'Credit/Debit Card',
      creditCardDesc: 'Refunded to the original card used for purchase',
      paypal: 'PayPal',
      paypalDesc: 'Refunded to your PayPal account balance',
      alipay: 'Alipay',
      alipayDesc: 'Refunded to your Alipay account',
      wechat: 'WeChat Pay',
      wechatDesc: 'Refunded to your WeChat wallet',
      section6Title: '6. Partial Refunds',
      section6Content: 'In some cases, we may offer partial refunds based on your usage of the service. Partial refunds may apply when:',
      partialRefundItems: [
        'You have used a significant portion of your plan benefits',
        'You are downgrading from a higher-tier plan mid-cycle',
        'Technical issues affected only part of your subscription period'
      ],
      contactTitle: 'Questions About Refunds?',
      contactContent: 'If you have any questions about our refund policy or need assistance with a refund request, please contact us:',
      responseTime: 'Response Time',
      responseTimeDesc: 'We respond within 24-48 hours',
      phone: 'Phone',
      satisfaction: 'Your satisfaction is our priority. We are here to help!'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We\'re here to help! Get in touch with our team for support, questions, or feedback.',
      getInTouch: 'Get in Touch',
      email: 'Email',
      emailDesc: 'For general inquiries and support',
      phone: 'Phone',
      phoneDesc: 'Monday - Friday, 9 AM - 6 PM PST',
      address: 'Office Address',
      businessHours: 'Business Hours',
      mondayFriday: 'Monday - Friday: 9:00 AM - 6:00 PM PST',
      saturdaySunday: 'Saturday - Sunday: Closed',
      timezone: 'Pacific Standard Time (PST)',
      followUs: 'Follow Us',
      sendMessage: 'Send Us a Message',
      sendMessageDesc: 'Fill out the form below and we\'ll get back to you within 24 hours.',
      successTitle: 'Message Sent Successfully!',
      successMessage: 'Thank you for contacting us. We\'ll get back to you within 24 hours.',
      yourName: 'Your Name',
      namePlaceholder: 'Enter your full name',
      yourEmail: 'Your Email',
      emailPlaceholder: 'Enter your email address',
      subject: 'Subject',
      selectSubject: 'Select a subject',
      generalInquiry: 'General Inquiry',
      technicalSupport: 'Technical Support',
      feedback: 'Feedback',
      refundRequest: 'Refund Request',
      partnership: 'Partnership Opportunity',
      other: 'Other',
      message: 'Message',
      messagePlaceholder: 'Tell us how we can help you...',
      sending: 'Sending...',
      sendButton: 'Send Message',
      quickHelp: 'Need Quick Help?',
      quickHelpDesc: 'Check out our FAQ section for instant answers to common questions.',
      visitFAQ: 'Visit FAQ',
      needHelp: 'Need More Help?',
      needHelpDesc: 'Choose the best way to reach us based on your needs.',
      faq: 'FAQ',
      faqDesc: 'Find answers to common questions',
      documentation: 'Documentation',
      documentationDesc: 'Learn how to use our service',
      directEmail: 'Direct Email',
      directEmailDesc: 'Email us for personalized support'
    },
  },
  zh: {
    nav: {
      home: '中文名字生成器',
      backToHome: '返回首页',
      generate: '生成',
      about: '关于',
      faq: '常见问题',
      price: '价格',
      contact: '联系我们',
      language: '中文',
      getStarted: '开始使用',
      login: '登录',
      signup: '注册',
    },
    landing: {
      title: '找到您的完美\n中文名字',
      subtitle: '发现意义、文化和美感。',
      getStarted: '开始使用',
      learnMore: '了解更多',
      poweredBy: '智能驱动。',
      guidedBy: '文化引导。',
      everyNameTells: '每个名字都讲述一个故事。让您的名字有意义。',
      aiPowered: 'AI驱动',
      aiPoweredDesc: '先进算法结合语音学与文化意义，为您匹配完美名字。',
      culturalDepth: '文化深度',
      culturalDepthDesc: '为每个名字提供详细的意义解释和文化背景。',
      personalized: '个性化',
      personalizedDesc: '根据您的偏好、风格和想要表达的意义量身定制。',
      simple: '简单。有意义。属于您。',
      meaningful: '有意义。',
      yours: '属于您。',
      step1: '输入您的名字',
      step1Desc: '告诉我们您的英文名字和您最重视的品质。',
      step2: '选择您的风格',
      step2Desc: '从传统、现代或其他有意义的风格中选择。',
      step3: '发现您的名字',
      step3Desc: '获得个性化的选择，包含发音和含义。',
      readyToBegin: '准备开始了吗？',
      joinThousands: '加入数千人发现他们的中文身份。',
      getYourChineseName: '获取您的中文名字',
      copyright: '© 2025 中文名字生成器。保留所有权利。',
    },
    generate: {
      title: '生成您的中文名字',
      subtitle: '告诉我们关于您自己，发现您的完美名字。',
      yourEnglishName: '您的英文名字',
      gender: '性别',
      male: '男性',
      female: '女性',
      neutral: '中性',
      nameStyle: '名字风格',
      traditional: '传统',
      modern: '现代',
      cute: '可爱',
      heroic: '英雄',
      preferences: '偏好',
      optional: '（可选）',
      add: '添加',
      addCustomPreference: '添加自定义偏好',
      generateButton: '生成中文名字',
      generating: '生成中...',
      yourNameAwaits: '您的名字等待中',
      fillInfo: '填写您的信息并生成，发现您的完美中文名字。',
      step1Desc: '告诉我们您的英文名字和您最重视的品质。',
      step2Desc: '从传统、现代或其他有意义的风格中选择。',
      yourChineseName: '您的中文名字',
      englishName: '英文名字',
      listenToPronunciation: '听发音',
      characterMeanings: '汉字含义',
      overallMeaning: '整体含义',
      culturalSignificance: '文化意义',
      bestUsedFor: '最佳用途',
      alternativeNames: '备选名字',
      generatingStep1: '正在分析您的名字...',
      generatingStep2: '正在寻找完美汉字...',
      generatingStep3: '正在添加文化内涵...',
    },
    faq: {
      title: '常见问题',
      subtitle: '找到关于我们中文名字生成服务的常见问题答案。',
      stillHaveQuestions: '还有其他问题？',
      contactUs: '我们随时为您提供帮助！联系我们的支持团队获得个性化协助。',
      contactButton: '联系我们',
      items: [
        {
          question: '中文名字生成是如何工作的？',
          questionEn: 'How does the Chinese name generation work?',
          answer: '我们的AI驱动系统分析您的英文名字、性别偏好和风格选择，生成文化上合适的中文名字。我们考虑语音相似性、文化意义和传统命名惯例，创建与您身份产生共鸣的有意义的名字。',
          answerEn: 'Our AI-powered system analyzes your English name, gender preferences, and style choices to generate culturally appropriate Chinese names. We consider phonetic similarity, cultural meaning, and traditional naming conventions to create meaningful names that resonate with your identity.'
        },
        {
          question: '生成的名字在文化上是否真实？',
          questionEn: 'Are the generated names culturally authentic?',
          answer: '是的！我们的系统基于广泛的中国文化和语言数据进行训练。每个生成的名字都包含正确的中文字符（汉字）、拼音发音、单个字符含义和文化意义。我们确保所有名字都遵循传统的中文命名惯例。',
          answerEn: 'Yes! Our system is trained on extensive Chinese cultural and linguistic data. Each generated name includes proper Chinese characters (汉字), pinyin pronunciation, individual character meanings, and cultural significance. We ensure all names follow traditional Chinese naming conventions.'
        },
        {
          question: '我可以自定义名字生成过程吗？',
          questionEn: 'Can I customize the name generation process?',
          answer: '当然可以！您可以选择性别偏好（男性、女性或中性），从不同风格中选择（传统、现代、可爱或英雄），并添加个人偏好，如"智慧"、"勇敢"、"成功"等。您还可以添加自定义偏好来进一步个性化您的结果。',
          answerEn: 'Absolutely! You can choose your gender preference (male, female, or neutral), select from different styles (traditional, modern, cute, or heroic), and add personal preferences like "Wise", "Brave", "Success", etc. You can also add custom preferences to further personalize your results.'
        },
        {
          question: '我会收到多少个名字选项？',
          questionEn: 'How many name options will I receive?',
          answer: '您将收到一个主要的中文名字，包含详细解释，以及3个备选选项。每个名字都包括中文字符、拼音发音、整体含义、单个字符含义、文化意义和建议使用场景。',
          answerEn: 'You\'ll receive one primary Chinese name with detailed explanations, plus 3 alternative options. Each name includes the Chinese characters, pinyin pronunciation, overall meaning, individual character meanings, cultural significance, and suggested use cases.'
        },
        {
          question: '名字有发音指南吗？',
          questionEn: 'Is there a pronunciation guide for the names?',
          answer: '是的！每个名字都配有拼音发音（中文字符的罗马化形式）和单个字符发音。我们还提供"听发音"功能，帮助您学习正确的发音。',
          answerEn: 'Yes! Each name comes with pinyin pronunciation (the romanized form of Chinese characters) and individual character pronunciations. We also provide a "Listen to pronunciation" feature to help you learn the correct pronunciation.'
        },
        {
          question: '我可以将这些名字用于正式文件吗？',
          questionEn: 'Can I use these names for official documents?',
          answer: '虽然我们的名字在文化上是真实和有意义的，但我们建议在用于正式目的之前咨询母语为中文的人或文化专家。我们的名字非常适合社交媒体、创意项目、名片和个人使用。',
          answerEn: 'While our names are culturally authentic and meaningful, we recommend consulting with native Chinese speakers or cultural experts before using them for official purposes. Our names are perfect for social media, creative projects, business cards, and personal use.'
        },
        {
          question: '提供的文化含义有多准确？',
          questionEn: 'How accurate are the cultural meanings provided?',
          answer: '我们的文化含义基于广泛的研究和传统中国文化。然而，中文字符根据上下文可能有多种含义。我们提供最常见和积极的解释，但含义可能因不同地区和时间段而有所不同。',
          answerEn: 'Our cultural meanings are based on extensive research and traditional Chinese culture. However, Chinese characters can have multiple meanings depending on context. We provide the most common and positive interpretations, but meanings can vary across different regions and time periods.'
        },
        {
          question: '你们提供不同的中文方言吗？',
          questionEn: 'Do you offer different Chinese dialects?',
          answer: '目前，我们专注于普通话，使用标准拼音发音。这是使用最广泛的中文形式，所有中文方言的使用者都能理解。我们可能在未来的更新中添加方言支持。',
          answerEn: 'Currently, we focus on Mandarin Chinese (普通话) with standard pinyin pronunciation. This is the most widely used form of Chinese and is understood by speakers of all Chinese dialects. We may add dialect support in future updates.'
        },
        {
          question: '我的个人信息安全吗？',
          questionEn: 'Is my personal information secure?',
          answer: '是的！我们只收集名字生成所需的信息（您的英文名字和偏好）。我们不永久存储个人数据，所有信息都经过安全处理。您的隐私是我们的首要任务。',
          answerEn: 'Yes! We only collect the information necessary for name generation (your English name and preferences). We don\'t store personal data permanently, and all information is processed securely. Your privacy is our priority.'
        },
        {
          question: '如果我不满意可以要求退款吗？',
          questionEn: 'Can I request a refund if I\'m not satisfied?',
          answer: '我们相信您会喜欢您的中文名字！如果您对生成的名字不完全满意，请联系我们的支持团队。我们很乐意帮助您找到完美的名字或提供其他选项。',
          answerEn: 'We\'re confident you\'ll love your Chinese name! If you\'re not completely satisfied with the generated names, please contact our support team. We\'re happy to help you find the perfect name or provide additional options.'
        }
      ]
    },
    pricing: {
      title: '简单透明的定价',
      subtitle: '为您的中文名字发现之旅选择完美方案。无隐藏费用，无意外惊喜。',
      monthly: '月付',
      yearly: '年付',
      save20: '节省20%',
      saveAmount: '节省${amount}元',
      mostPopular: '最受欢迎',
      year: '年',
      month: '月',
      faqTitle: '常见问题',
      ctaTitle: '准备好找到您的完美中文名字了吗？',
      ctaDescription: '加入数千名已经发现他们有意义中文名字的用户。今天就通过我们的免费试用开始您的旅程。',
      startFree: '开始免费试用',
      contactSales: '联系销售',
      plans: [
        {
          id: 'free',
          name: '免费版',
          description: '适合试用我们的服务',
          priceMonthly: 0,
          priceYearly: 0,
          icon: 'zap',
          popular: false,
          buttonText: '免费开始',
          features: [
            '每月3次名字生成',
            '基础中文字符和拼音',
            '简单含义解释',
            '邮件支持',
            '移动端友好界面'
          ]
        },
        {
          id: 'pro',
          name: '专业版',
          description: '适合普通用户和爱好者',
          priceMonthly: 9.99,
          priceYearly: 95.99,
          icon: 'star',
          popular: true,
          buttonText: '开始专业版试用',
          features: [
            '无限次名字生成',
            '详细文化意义',
            '单个字符含义',
            '备选名字建议',
            '发音音频指南',
            '优先邮件支持',
            '导出为PDF',
            '高级自定义选项'
          ]
        },
        {
          id: 'premium',
          name: '高级版',
          description: '适合专业人士和企业',
          priceMonthly: 19.99,
          priceYearly: 191.99,
          icon: 'crown',
          popular: false,
          buttonText: '开始高级版试用',
          features: [
            '包含专业版所有功能',
            '批量名字生成（最多100个）',
            '自定义风格偏好',
            '专业咨询服务',
            '优先电话支持',
            'API访问权限',
            '白标选项',
            '团队协作工具',
            '高级分析功能'
          ]
        }
      ],
      faqItems: [
        {
          question: '我可以随时更改方案吗？',
          answer: '可以！您可以随时升级、降级或取消订阅。更改立即生效。'
        },
        {
          question: '有免费试用吗？',
          answer: '当然有！所有付费方案都提供7天免费试用。开始试用无需信用卡。'
        },
        {
          question: '你们接受哪些支付方式？',
          answer: '我们接受所有主要信用卡、PayPal，以及年付的银行转账。'
        },
        {
          question: '你们提供退款吗？',
          answer: '是的，我们提供30天退款保证。如果您不满意，我们将退还您的付款。'
        },
        {
          question: '我可以用于商业目的吗？',
          answer: '可以！我们的专业版和高级版包含商业使用权限。详情请查看我们的条款。'
        },
        {
          question: '我的数据安全吗？',
          answer: '绝对安全。我们使用企业级安全措施，绝不分享您的个人信息。'
        }
      ]
    },
    auth: {
      loginTitle: '登录您的账户',
      loginSubtitle: '还没有账户？',
      signupTitle: '创建您的账户',
      signupSubtitle: '已有账户？',
      backToHome: '返回首页',
      email: '邮箱地址',
      phone: '手机号码',
      password: '密码',
      name: '姓名',
      confirmPassword: '确认密码',
      verificationCode: '验证码',
      loginType: '登录方式',
      registerType: '注册方式',
      emailLogin: '邮箱登录',
      phoneLogin: '手机登录',
      emailRegister: '邮箱注册',
      phoneRegister: '手机注册',
      emailRequired: '请输入邮箱地址',
      emailInvalid: '请输入有效的邮箱地址',
      phoneRequired: '请输入手机号码',
      phoneInvalid: '请输入有效的手机号码',
      passwordRequired: '请输入密码',
      passwordMinLength: '密码长度至少6位',
      nameRequired: '请输入姓名',
      nameMinLength: '姓名至少2个字符',
      confirmPasswordRequired: '请确认密码',
      passwordMismatch: '两次输入的密码不一致',
      verificationCodeRequired: '请输入验证码',
      emailPlaceholder: '请输入您的邮箱地址',
      phonePlaceholder: '请输入您的手机号码',
      passwordPlaceholder: '请输入您的密码',
      namePlaceholder: '请输入您的姓名',
      confirmPasswordPlaceholder: '请再次输入密码',
      verificationCodePlaceholder: '请输入验证码',
      sendCode: '发送验证码',
      resendCode: '重新发送',
      countdown: '{seconds}秒后重新发送',
      loginButton: '登录',
      signupButton: '注册',
      loggingIn: '登录中...',
      registering: '注册中...',
      forgotPassword: '忘记密码？',
      loginLink: '立即登录',
      signUpLink: '立即注册',
      termsText: '注册即表示您同意我们的',
      termsLink: '用户协议',
      andText: '和',
      privacyLink: '隐私政策',
      termsAlert: '用户协议功能即将推出',
      privacyAlert: '隐私政策功能即将推出',
      demoAccount: '演示账户',
      demoAccountInfo: '邮箱: demo@example.com 密码: password123',
      sendCodeSuccess: '验证码发送成功',
      sendCodeError: '验证码发送失败',
      verifyCodeSuccess: '验证码验证成功',
      verifyCodeError: '验证码验证失败',
      sendEmailCode: '发送邮箱验证码',
      resendEmailCode: '重新发送邮箱验证码',
      emailCountdown: '{seconds}秒后重新发送',
      sendEmailCodeSuccess: '邮箱验证码发送成功',
      sendEmailCodeError: '邮箱验证码发送失败',
      verifyEmailCodeSuccess: '邮箱验证码验证成功',
      verifyEmailCodeError: '邮箱验证码验证失败',
    },
    payment: {
      title: '完成支付',
      backToPricing: '返回定价',
      orderSummary: '订单摘要',
      monthly: '月付',
      yearly: '年付',
      selectPaymentMethod: '选择支付方式',
      payNow: '立即支付',
      processing: '处理中...',
      processingMessage: '正在处理您的支付，请稍候...',
      scanQRCode: '请使用手机扫描二维码完成支付',
      successTitle: '支付成功！',
      successMessage: '您的订阅已激活，正在跳转...',
      failedTitle: '支付失败',
      failedMessage: '支付过程中出现问题，请重试或选择其他支付方式。',
      retry: '重试',
      cancel: '取消',
      paymentMethods: {
        stripe: '信用卡 (Stripe)',
        alipay: '支付宝',
        wechat: '微信支付',
        paypal: 'PayPal',
      },
    },
    errors: {
      enterName: '请输入您的英文名字',
      generateFailed: '生成中文名字失败。请重试。',
      apiNotConfigured: 'API密钥未配置。请在环境变量中设置VITE_OPENROUTER_API_KEY。',
    },
    refund: {
      title: '退款政策',
      subtitle: '我们以公平透明的退款政策支持我们的服务',
      lastUpdated: '最后更新：2025年11月6日',
      days30: '30天保证',
      days30Desc: '购买后30天内全额退款',
      simpleProcess: '简单流程',
      simpleProcessDesc: '简单的退款申请，最少的步骤',
      noQuestions: '公平政策',
      noQuestionsDesc: '清晰的条款，客户满意度优先',
      section1Title: '1. 我们对您的承诺',
      section1Content: '在Chinese Name Finder，我们致力于为您提供有意义、文化真实的中文名字。我们希望您对我们的服务完全满意。如果出于任何原因您对我们的服务不满意，我们提供直接的退款政策。',
      guarantee: '30天退款保证',
      guaranteeDesc: '如果您在购买后30天内对我们的服务不满意，可以申请全额退款。无需询问，没有麻烦。',
      section2Title: '2. 退款资格',
      eligibleTitle: '您有资格获得退款，如果：',
      eligibleItems: [
        '您在过去30天内购买了付费计划（专业版或高级版）',
        '您遇到了阻止您使用服务的技术问题',
        '生成的名字未达到所述的质量标准',
        '您被错误收费或多次收费',
        '服务未按广告宣传的方式运行'
      ],
      notEligibleTitle: '以下情况不提供退款：',
      notEligibleItems: [
        '超过30天前的购买',
        '免费计划用户（因为没有付款）',
        '违反我们服务条款的账户',
        '在大量使用服务后提出的请求（超过100次名字生成）',
        '购买日期后30天后改变主意'
      ],
      section3Title: '3. 如何申请退款',
      step1Title: '联系我们的支持团队',
      step1Desc: '向我们的支持团队发送电子邮件，包含您的账户详细信息和购买信息。请包括您的订单号和退款请求的原因。',
      subject: '主题',
      subjectText: '退款请求 - [您的订单号]',
      step2Title: '验证流程',
      step2Desc: '我们的团队将在24-48小时内审核您的请求。我们可能会要求提供额外信息以验证您的购买和账户。',
      step3Title: '批准通知',
      step3Desc: '一旦批准，您将收到一封确认电子邮件，其中包含有关您的退款和预期处理时间的详细信息。',
      step4Title: '退款处理',
      step4Desc: '退款将在5-10个工作日内处理到您的原始支付方式，具体取决于您的支付提供商。',
      section4Title: '4. 退款处理时间',
      processingItems: [
        '信用卡/借记卡：5-10个工作日（取决于您的银行）',
        'PayPal：3-5个工作日',
        '支付宝/微信支付：3-7个工作日',
        '银行转账：7-14个工作日'
      ],
      section5Title: '5. 退款方式',
      creditCard: '信用卡/借记卡',
      creditCardDesc: '退款到用于购买的原始卡',
      paypal: 'PayPal',
      paypalDesc: '退款到您的PayPal账户余额',
      alipay: '支付宝',
      alipayDesc: '退款到您的支付宝账户',
      wechat: '微信支付',
      wechatDesc: '退款到您的微信钱包',
      section6Title: '6. 部分退款',
      section6Content: '在某些情况下，我们可能会根据您对服务的使用情况提供部分退款。部分退款可能适用于：',
      partialRefundItems: [
        '您已使用了计划福利的很大一部分',
        '您在周期中从更高级别的计划降级',
        '技术问题仅影响了您订阅期的一部分'
      ],
      contactTitle: '有关退款的问题？',
      contactContent: '如果您对我们的退款政策有任何疑问或需要退款请求方面的帮助，请联系我们：',
      responseTime: '响应时间',
      responseTimeDesc: '我们在24-48小时内回复',
      phone: '电话',
      satisfaction: '您的满意是我们的首要任务。我们在这里帮助您！'
    },
    contact: {
      title: '联系我们',
      subtitle: '我们随时为您提供帮助！联系我们的团队获取支持、提问或反馈。',
      getInTouch: '联系方式',
      email: '电子邮件',
      emailDesc: '一般咨询和支持',
      phone: '电话',
      phoneDesc: '周一至周五，上午9点至下午6点（太平洋时间）',
      address: '办公地址',
      businessHours: '营业时间',
      mondayFriday: '周一至周五：上午9:00 - 下午6:00（太平洋时间）',
      saturdaySunday: '周六至周日：关闭',
      timezone: '太平洋标准时间（PST）',
      followUs: '关注我们',
      sendMessage: '给我们留言',
      sendMessageDesc: '填写下面的表单，我们将在24小时内回复您。',
      successTitle: '消息发送成功！',
      successMessage: '感谢您联系我们。我们将在24小时内回复您。',
      yourName: '您的姓名',
      namePlaceholder: '请输入您的全名',
      yourEmail: '您的邮箱',
      emailPlaceholder: '请输入您的邮箱地址',
      subject: '主题',
      selectSubject: '选择主题',
      generalInquiry: '一般咨询',
      technicalSupport: '技术支持',
      feedback: '反馈意见',
      refundRequest: '退款请求',
      partnership: '合作机会',
      other: '其他',
      message: '留言',
      messagePlaceholder: '告诉我们如何帮助您...',
      sending: '发送中...',
      sendButton: '发送消息',
      quickHelp: '需要快速帮助？',
      quickHelpDesc: '查看我们的常见问题部分，获取常见问题的即时答案。',
      visitFAQ: '访问常见问题',
      needHelp: '需要更多帮助？',
      needHelpDesc: '根据您的需求选择最佳的联系方式。',
      faq: '常见问题',
      faqDesc: '查找常见问题的答案',
      documentation: '文档',
      documentationDesc: '了解如何使用我们的服务',
      directEmail: '直接邮件',
      directEmailDesc: '通过电子邮件获取个性化支持'
    },
  },
};

