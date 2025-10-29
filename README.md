# Chinese Name Finder

A modern web application that helps foreigners find meaningful Chinese names using AI-powered generation.

## Features

- 🤖 AI-powered name generation using DeepSeek API
- 🎨 Multiple name styles (Traditional, Modern, Cute, Heroic)
- 👤 Gender-specific name generation
- 🎯 Personalized preferences
- 📖 Detailed character meanings and cultural significance
- 🔊 Pronunciation guide
- 📱 Responsive design

## Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chinese-name-finder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_OPENROUTER_API_KEY=your_openrouter_api_key_here
   VITE_SITE_URL=http://localhost:5173
   VITE_SITE_NAME=Chinese Name Finder
   ```

   To get an API key:
   - Visit [OpenRouter](https://openrouter.ai/)
   - Sign up for an account
   - Get your API key from the dashboard
   - Replace `your_openrouter_api_key_here` with your actual API key

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## Usage

1. **Enter your English name** in the input field
2. **Select your gender** (Male, Female, or Neutral)
3. **Choose a name style** that appeals to you
4. **Add preferences** (optional) like "Wise", "Peace", "Success", etc.
5. **Click "Generate Chinese Name"** to get your personalized Chinese name
6. **Explore the results** including:
   - Chinese characters and pronunciation
   - Individual character meanings
   - Overall name significance
   - Cultural background
   - Usage recommendations
   - Alternative name options

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **AI API**: DeepSeek via OpenRouter
- **State Management**: React Hooks

## API Configuration

The application uses the DeepSeek model through OpenRouter for generating Chinese names. The API call includes:

- **Model**: `deepseek/deepseek-chat-v3.1`
- **Temperature**: 0.7 (for creative but consistent results)
- **Max Tokens**: 2000
- **Response Format**: Structured JSON with name details

## Deployment

### Vercel 自动部署

项目已配置 Vercel 自动部署。每次将代码推送到 Git 仓库的主分支（main/master）时，Vercel 会自动触发部署。

#### 设置自动部署的步骤：

1. **连接 Git 仓库到 Vercel**
   - 登录 [Vercel](https://vercel.com/)
   - 进入项目设置（Project Settings）
   - 在 "Git" 部分连接你的 Git 仓库（GitHub/GitLab/Bitbucket）

2. **配置自动部署**
   - 在项目设置中选择 "Git" 标签
   - 确保 "Automatic Deployments" 已启用
   - 选择要部署的分支（通常是 `main` 或 `master`）

3. **环境变量配置**
   - 在 Vercel 项目设置中，进入 "Environment Variables"
   - 添加以下环境变量：
     ```
     VITE_OPENROUTER_API_KEY=your_api_key_here
     VITE_SITE_URL=https://your-domain.vercel.app
     VITE_SITE_NAME=Chinese Name Finder
     ```

4. **推送代码触发部署**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

#### 部署配置说明：

- **构建命令**: `npm run build`
- **输出目录**: `dist`
- **框架**: 自定义（Vite）
- **路由**: SPA 模式（所有路由重定向到 index.html）

#### 验证部署：

部署成功后，你可以在 Vercel 仪表板中：
- 查看部署日志
- 访问预览 URL
- 查看构建错误（如果有）

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

### Project Structure

```
src/
├── components/          # React components
│   ├── AboutPage.tsx   # About page component
│   ├── GeneratePage.tsx # Main name generation page
│   └── LandingPage.tsx # Home page component
├── config/             # Configuration files
│   └── env.ts         # Environment configuration
├── services/           # API services
│   └── api.ts         # DeepSeek API integration
├── App.tsx            # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

If you encounter any issues or have questions, please open an issue on GitHub.

