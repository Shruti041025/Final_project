import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',

  //fullyParallel: false,

  timeout: 60_1000,

  retries: 2,

  // reporter: 'html',

  workers: 1,

  use: {

    baseURL: "https://www.cardekho.com/",

    headless: true,

    trace: 'on-first-retry',

    // Example: grant geolocation
    permissions: ['geolocation'],

    // If you want to mock geolocation 
    geolocation: { latitude: 12.9716, longitude: 77.5946 }, // Bangalore coords

  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

  ],

  // Reporter setup with Allure
  reporter: [
    ['list'], // Console output
    ['allure-playwright', {
      outputFolder: 'allure-results', // Allure results folder
      detail: true,
      suiteTitle: false,
    }],
  ],

});
