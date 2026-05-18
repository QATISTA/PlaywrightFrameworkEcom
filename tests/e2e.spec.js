import { test, expect } from '../fixtures/baseFixture';
import loginData from '../test-data/LoginData.json';

test('Complete Ecommerce Flow', async ({ loginPage,productPage }) => {

    const newLogin = loginData.login;

    await loginPage.navigate('');

    await loginPage.login(
        newLogin.email,
        newLogin.password
    );
    await productPage.selectProduct();
   
});