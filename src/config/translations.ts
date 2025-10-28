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
  },
};

