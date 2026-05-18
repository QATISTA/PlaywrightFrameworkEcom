import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import {ProductPage} from '../pages/ProductPage';

export const test = base.extend({

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    productPage: async ({ page }, use) => {
        console.log("fixture running");
        const productPage = new ProductPage(page);
        await use(productPage);
    }

});

export { expect } from '@playwright/test';