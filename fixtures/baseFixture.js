import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import {ProductPage} from '../pages/ProductPage';
import {CartPage} from '../pages/CartPage';
import {CheckoutInfoPage} from '../pages/CheckoutInfoPage';
import {CheckoutOverviewPage} from '../pages/CheckoutOverviewPage';


export const test = base.extend({

    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },

    productPage: async ({ page }, use) => {
        console.log("fixture running");
        const productPage = new ProductPage(page);
        await use(productPage);
    },

    cartPage: async ({page}, use) =>{
        const cartPage = new CartPage(page);
        await use(cartPage);

    },
    checkoutInfoPage: async ({page}, use) =>{
        const checkoutInfoPage = new CheckoutInfoPage(page);
        await use(checkoutInfoPage);

    },
    checkoutOverviewPage: async ({page}, use) =>{
        const checkoutOverviewPage = new CheckoutOverviewPage(page);
        await use(checkoutOverviewPage);
    }
});

export { expect } from '@playwright/test';