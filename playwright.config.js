import { defineConfig } from '@playwright/test';


export default defineConfig({

  testDir: './tests',

  use: {
    baseURL: 'https://practice.qabrains.com/ecommerce',

    headless: false,

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure'
  },

  reporter: [
    ['html'],
    ['allure-playwright'],
    ['json', { outputFile: 'test-results/results.json' }]
  ]

});