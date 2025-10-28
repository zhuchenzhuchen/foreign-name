// Environment configuration
export const config = {
  openrouterApiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
  siteUrl: import.meta.env.VITE_SITE_URL || 'http://localhost:5173',
  siteName: import.meta.env.VITE_SITE_NAME || 'Chinese Name Finder',
} as const;

export const isApiConfigured = () => {
  return !!config.openrouterApiKey && config.openrouterApiKey !== 'your_openrouter_api_key_here';
};
