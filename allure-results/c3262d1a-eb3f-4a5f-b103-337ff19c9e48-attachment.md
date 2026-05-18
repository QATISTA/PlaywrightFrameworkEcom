# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.js >> Complete Ecommerce Flow
- Location: tests\e2e.spec.js:4:5

# Error details

```
Error: locator.fill: Test ended.
Call log:
  - waiting for locator('#email')

```

# Test source

```ts
  1  | export class LoginPage {
  2  |     constructor(page) {
  3  |         this.page = page;
  4  |         this.userEmail = page.locator('#email');
  5  |         this.userPassword = page.locator('#password');
  6  |         this.loginButton = page.locator("//button[@type='submit']");
  7  |     }
  8  | 
  9  |     async navigate() {
  10 |         await this.page.goto('');
  11 |     }
  12 | 
  13 |     async login(email, password) {
> 14 |         await this.userEmail.fill(email);
     |                              ^ Error: locator.fill: Test ended.
  15 |         await this.userPassword.fill(password);
  16 | 
  17 |         await Promise.all([
  18 |             this.loginButton.click()
  19 |         ]);
  20 |     }
  21 | 
  22 | 
  23 | }
```