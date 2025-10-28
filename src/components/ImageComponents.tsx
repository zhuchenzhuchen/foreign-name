// 图片组件库 - 提供各种装饰性图片和图标组件

export const ChineseCharacter = ({ 
  character, 
  size = 'text-6xl', 
  className = '' 
}: { 
  character: string; 
  size?: string; 
  className?: string; 
}) => (
  <div className={`${size} text-blue-100 opacity-20 font-serif ${className}`}>
    {character}
  </div>
);

export const DecorativeCircle = ({ 
  size = 'w-32 h-32', 
  color = 'bg-blue-100', 
  opacity = 'opacity-20', 
  blur = 'blur-2xl',
  className = '' 
}: { 
  size?: string; 
  color?: string; 
  opacity?: string; 
  blur?: string; 
  className?: string; 
}) => (
  <div className={`${size} ${color} rounded-full ${opacity} ${blur} ${className}`}></div>
);

export const GradientCircle = ({ 
  size = 'w-40 h-40', 
  className = '' 
}: { 
  size?: string; 
  className?: string; 
}) => (
  <div className={`${size} bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-15 blur-xl ${className}`}></div>
);

export const StepNumber = ({ 
  number, 
  color = 'bg-blue-600', 
  size = 'w-8 h-8' 
}: { 
  number: string | number; 
  color?: string; 
  size?: string; 
}) => (
  <div className={`${size} ${color} text-white rounded-full flex items-center justify-center text-sm font-bold z-10`}>
    {number}
  </div>
);

export const FloatingElement = ({ 
  children, 
  position = 'absolute', 
  className = '' 
}: { 
  children: React.ReactNode; 
  position?: string; 
  className?: string; 
}) => (
  <div className={`${position} ${className}`}>
    {children}
  </div>
);

export const BackgroundPattern = ({ 
  type = 'circles' 
}: { 
  type?: 'circles' | 'characters' | 'mixed' 
}) => {
  if (type === 'circles') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <DecorativeCircle 
          size="w-80 h-80" 
          className="absolute -top-40 -right-40" 
        />
        <DecorativeCircle 
          size="w-80 h-80" 
          color="bg-cyan-100" 
          className="absolute -bottom-40 -left-40" 
        />
        <GradientCircle 
          size="w-96 h-96" 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
        />
      </div>
    );
  }

  if (type === 'characters') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ChineseCharacter character="中" size="text-6xl" className="absolute top-20 left-10" />
        <ChineseCharacter character="文" size="text-4xl" className="absolute top-40 right-20" />
        <ChineseCharacter character="名" size="text-5xl" className="absolute bottom-40 left-20" />
        <ChineseCharacter character="字" size="text-3xl" className="absolute bottom-20 right-10" />
        <ChineseCharacter character="智" size="text-2xl" className="absolute top-1/3 left-1/4" />
        <ChineseCharacter character="慧" size="text-3xl" className="absolute top-2/3 right-1/3" />
      </div>
    );
  }

  if (type === 'mixed') {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <DecorativeCircle 
          size="w-32 h-32" 
          className="absolute top-20 right-10" 
        />
        <DecorativeCircle 
          size="w-40 h-40" 
          color="bg-cyan-100" 
          className="absolute bottom-20 left-10" 
        />
        <GradientCircle 
          size="w-24 h-24" 
          className="absolute top-1/2 left-1/3" 
        />
        <ChineseCharacter character="文" size="text-4xl" className="absolute top-1/4 right-1/4" />
        <ChineseCharacter character="化" size="text-3xl" className="absolute bottom-1/4 left-1/4" />
      </div>
    );
  }

  return null;
};

export const CardWithShadow = ({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) => (
  <div className={`bg-white rounded-3xl p-8 shadow-lg border border-gray-100 ${className}`}>
    {children}
  </div>
);

export const IconWrapper = ({ 
  children, 
  size = 'w-8 h-8', 
  color = 'text-blue-600', 
  className = '' 
}: { 
  children: React.ReactNode; 
  size?: string; 
  color?: string; 
  className?: string; 
}) => (
  <div className={`${size} ${color} ${className}`}>
    {children}
  </div>
);

export const AnimatedElement = ({ 
  children, 
  animation = 'float', 
  className = '' 
}: { 
  children: React.ReactNode; 
  animation?: 'float' | 'pulse' | 'bounce' | 'spin'; 
  className?: string; 
}) => {
  const animationClasses = {
    float: 'animate-bounce',
    pulse: 'animate-pulse',
    bounce: 'animate-bounce',
    spin: 'animate-spin'
  };

  return (
    <div className={`${animationClasses[animation]} ${className}`}>
      {children}
    </div>
  );
};

export const GradientText = ({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string; 
}) => (
  <span className={`bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
);

export const SectionDivider = ({ 
  type = 'wave', 
  className = '' 
}: { 
  type?: 'wave' | 'line' | 'dots'; 
  className?: string; 
}) => {
  if (type === 'wave') {
    return (
      <div className={`w-full h-16 ${className}`}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                opacity=".25" 
                className="fill-blue-100"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                opacity=".5" 
                className="fill-cyan-100"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                className="fill-blue-200"></path>
        </svg>
      </div>
    );
  }

  if (type === 'line') {
    return (
      <div className={`w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent ${className}`}></div>
    );
  }

  if (type === 'dots') {
    return (
      <div className={`flex justify-center space-x-2 ${className}`}>
        <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
        <div className="w-2 h-2 bg-cyan-300 rounded-full"></div>
        <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
      </div>
    );
  }

  return null;
};
