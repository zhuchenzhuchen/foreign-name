import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initToolbar } from '@stagewise/toolbar';

// 初始化 Stagewise Toolbar（仅在开发环境）
if (import.meta.env.DEV) {
  initToolbar({
    experimental: {
      enableStagewiseMCP: true,
      enableToolCalls: true,
    },
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
