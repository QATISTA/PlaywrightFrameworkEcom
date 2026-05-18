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
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//html/body/div[2]/div/div[2]/div/div/button[1]')

```

# Test source

```ts
  1  | export class ProductPage{
  2  |     constructor(page){
  3  |         this.page=page;
  4  |         this.shirt=page.locator("//html/body/div[2]/div/div[2]/div/div/button[1]")
  5  |     }
  6  | 
  7  |     async selectProduct(){
> 8  |         await this.shirt.click()
     |                          ^ Error: locator.click: Test timeout of 30000ms exceeded.
  9  |     }
  10 | }
```