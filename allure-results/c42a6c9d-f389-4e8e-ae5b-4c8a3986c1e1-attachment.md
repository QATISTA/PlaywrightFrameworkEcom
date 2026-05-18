# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product.spec.js >> Product
- Location: tests\product.spec.js:3:5

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for locator('button').nth(3)

```

# Test source

```ts
  1  | export class ProductPage{
  2  |     constructor(page){
  3  |         this.page=page;
  4  |         console.log("hi");
  5  |         this.shirt=page.locator('button').nth(3)
  6  |     }
  7  | 
  8  |     async selectProduct(){
> 9  |         await this.shirt.click();
     |                          ^ Error: locator.click: Target page, context or browser has been closed
  10 |     }
  11 | }
```