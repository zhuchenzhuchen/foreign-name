import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      external: [
        '@alicloud/sms20170525',
        '@alicloud/openapi-client',
        '@alicloud/tea-util',
        'tencentcloud-sdk-nodejs',
        '@sendgrid/mail',
        'mailgun-js',
        'nodemailer',
      ],
    },
  },
  optimizeDeps: {
    exclude: [
      'lucide-react',
      '@alicloud/sms20170525',
      '@alicloud/openapi-client',
      '@alicloud/tea-util',
      'tencentcloud-sdk-nodejs',
      '@sendgrid/mail',
      'mailgun-js',
      'nodemailer',
    ],
  },
});
