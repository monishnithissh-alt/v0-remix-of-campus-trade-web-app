import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.campustrade',
  appName: 'v0CampusTrade',
  webDir: 'public',
  server: {
    url: 'http://10.0.2.2:3000',
    androidScheme: 'http',
    cleartext: true,
  },
};

export default config;
