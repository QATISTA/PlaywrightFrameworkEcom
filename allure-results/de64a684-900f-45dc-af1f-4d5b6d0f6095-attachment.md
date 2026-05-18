# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: product.spec.js >> Product
- Location: tests\product.spec.js:3:5

# Error details

```
Error: locator.click: Unexpected token "/" while parsing css selector "/html[1]/body[1]/div[2]/div[1]/div[2]/div[1]/div[1]/button[1]". Did you mean to CSS.escape it?
Call log:
  - waiting for /html[1]/body[1]/div[2]/div[1]/div[2]/div[1]/div[1]/button[1]

```

# Test source

```ts
  1  | export class ProductPage{
  2  |     constructor(page){
  3  |         this.page=page;
  4  |         this.shirt=page.locator("/html[1]/body[1]/div[2]/div[1]/div[2]/div[1]/div[1]/button[1]")
  5  |     }
  6  | 
  7  |     async selectProduct(){
> 8  |         await this.shirt.click()
     |                          ^ Error: locator.click: Unexpected token "/" while parsing css selector "/html[1]/body[1]/div[2]/div[1]/div[2]/div[1]/div[1]/button[1]". Did you mean to CSS.escape it?
  9  |     }
  10 | }
```