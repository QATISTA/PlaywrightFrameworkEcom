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
  - waiting for locator('//input[@placeholder=\'Ex. John\']')

```

# Test source

```ts
  1  | export class CheckoutInfoPage{
  2  |     constructor(page){
  3  |         this.page=page;
  4  |         this.firstName=page.locator("//input[@placeholder='Ex. John']")
  5  |         this.lastName=page.locator("//input[@placeholder='Ex. Doe']")
  6  |         this.zipCode=page.locator("//input[@value='1207']")
  7  |         this.continueButton=page.getByText('Continue')
  8  |     }
  9  |     async CheckoutInfoProceed(){
> 10 |         this.firstName.fill("William")
     |                        ^ Error: locator.fill: Test ended.
  11 |         this.lastName.fill("Jones")
  12 |         this.zipCode.fill('76512')
  13 |         this.continueButton.click()
  14 |        //  await this.page.waitForTimeout(4000);
  15 |       //  console.log(await this.page.url());
  16 |     }
  17 | }
```