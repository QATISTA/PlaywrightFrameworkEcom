# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product.spec.js >> Product
- Location: tests\product.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//img[@alt=\'Sample Shirt Name\']') to be visible

```

# Test source

```ts
  1  | export class ProductPage{
  2  |     constructor(page){
  3  |         this.page=page;
  4  |         this.shirt=page.locator("//img[@alt='Sample Shirt Name']")
  5  |     }
  6  | 
  7  |     async selectProduct(){
> 8  |         await this.shirt.waitFor({ state: 'visible' });
     |                          ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  9  |         await this.shirt.click();
  10 |     }
  11 | }
```