# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.js >> Complete Ecommerce Flow
- Location: tests\e2e.spec.js:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner [ref=e3]:
      - generic [ref=e5]:
        - link "logo (Practice Site)" [ref=e6] [cursor=pointer]:
          - /url: /ecommerce
          - img "logo" [ref=e7]
          - generic [ref=e8]: (Practice Site)
        - generic [ref=e9]:
          - button "1" [ref=e10] [cursor=pointer]:
            - img [ref=e11]
            - generic [ref=e13]: "1"
          - button "practice@qabrains.com" [ref=e14] [cursor=pointer]:
            - img [ref=e15]
            - generic [ref=e17]: practice@qabrains.com
            - img [ref=e19]
    - generic [ref=e21]:
      - generic [ref=e22]:
        - heading "Products" [level=3] [ref=e23]
        - generic [ref=e24]:
          - paragraph [ref=e25]: Order by
          - combobox [ref=e26] [cursor=pointer]:
            - text: Select...
            - img
      - generic [ref=e27]:
        - generic [ref=e28]:
          - button [ref=e29] [cursor=pointer]:
            - button [ref=e30]:
              - img [ref=e31]
          - link "Sample Shirt Name" [ref=e33] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=1
            - img "Sample Shirt Name" [ref=e34]
          - link "Sample Shirt Name" [ref=e35] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=1
          - link "A sample description for the product." [ref=e36] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=1
          - generic [ref=e37]:
            - generic [ref=e38]: $49.99
            - button "Remove from cart" [ref=e39] [cursor=pointer]
        - generic [ref=e40]:
          - button [ref=e41] [cursor=pointer]:
            - button [ref=e42]:
              - img [ref=e43]
          - link "Sample Shoe Name" [ref=e45] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=2
            - img "Sample Shoe Name"
          - link "Sample Shoe Name" [ref=e46] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=2
          - link "A sample description for the product." [ref=e47] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=2
          - generic [ref=e48]:
            - generic [ref=e49]: $89.00
            - button "Add to cart" [ref=e50] [cursor=pointer]
        - generic [ref=e51]:
          - button [ref=e52] [cursor=pointer]:
            - button [ref=e53]:
              - img [ref=e54]
          - link "Sample Jacket Name" [ref=e56] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=3
            - img "Sample Jacket Name"
          - link "Sample Jacket Name" [ref=e57] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=3
          - link "A sample description for the product." [ref=e58] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=3
          - generic [ref=e59]:
            - generic [ref=e60]: $129.50
            - button "Add to cart" [ref=e61] [cursor=pointer]
        - generic [ref=e62]:
          - button [ref=e63] [cursor=pointer]:
            - button [ref=e64]:
              - img [ref=e65]
          - link "Sample Trouser Name" [ref=e67] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=4
            - img "Sample Trouser Name"
          - link "Sample Trouser Name" [ref=e68] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=4
          - link "A sample description for the product." [ref=e69] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=4
          - generic [ref=e70]:
            - generic [ref=e71]: $72.00
            - button "Add to cart" [ref=e72] [cursor=pointer]
        - generic [ref=e73]:
          - button [ref=e74] [cursor=pointer]:
            - button [ref=e75]:
              - img [ref=e76]
          - link "Sample T-Shirt Name" [ref=e78] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=5
            - img "Sample T-Shirt Name"
          - link "Sample T-Shirt Name" [ref=e79] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=5
          - link "A sample description for the product." [ref=e80] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=5
          - generic [ref=e81]:
            - generic [ref=e82]: $45.00
            - button "Add to cart" [ref=e83] [cursor=pointer]
        - generic [ref=e84]:
          - button [ref=e85] [cursor=pointer]:
            - button [ref=e86]:
              - img [ref=e87]
          - link "Sample Sunglass Name" [ref=e89] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=6
            - img "Sample Sunglass Name"
          - link "Sample Sunglass Name" [ref=e90] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=6
          - link "A sample description for the product." [ref=e91] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=6
          - generic [ref=e92]:
            - generic [ref=e93]: $256.45
            - button "Add to cart" [ref=e94] [cursor=pointer]
        - generic [ref=e95]:
          - button [ref=e96] [cursor=pointer]:
            - button [ref=e97]:
              - img [ref=e98]
          - link "Sample Jacket Name" [ref=e100] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=7
            - img "Sample Jacket Name"
          - link "Sample Jacket Name" [ref=e101] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=7
          - link "A sample description for the product." [ref=e102] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=7
          - generic [ref=e103]:
            - generic [ref=e104]: $111.00
            - button "Add to cart" [ref=e105] [cursor=pointer]
        - generic [ref=e106]:
          - button [ref=e107] [cursor=pointer]:
            - button [ref=e108]:
              - img [ref=e109]
          - link "Sample Sunglass Name" [ref=e111] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=8
            - img "Sample Sunglass Name"
          - link "Sample Sunglass Name" [ref=e112] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=8
          - link "A sample description for the product." [ref=e113] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=8
          - generic [ref=e114]:
            - generic [ref=e115]: $256.45
            - button "Add to cart" [ref=e116] [cursor=pointer]
        - generic [ref=e117]:
          - button [ref=e118] [cursor=pointer]:
            - button [ref=e119]:
              - img [ref=e120]
          - link "Sample T-Shirt Name" [ref=e122] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=9
            - img "Sample T-Shirt Name"
          - link "Sample T-Shirt Name" [ref=e123] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=9
          - link "A sample description for the product." [ref=e124] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=9
          - generic [ref=e125]:
            - generic [ref=e126]: $56.45
            - button "Add to cart" [ref=e127] [cursor=pointer]
    - contentinfo [ref=e128]:
      - generic [ref=e130]:
        - generic [ref=e131]:
          - link "logo":
            - /url: https://qabrains.com
            - img "logo"
          - paragraph [ref=e132]: QA Brains is the ultimate QA Community to exchange knowledge, seek advice, and engage in discussions that enhance Quality Assurance testers' skills and expertise.
        - generic [ref=e133]:
          - heading "QA Topics" [level=3] [ref=e134]
          - paragraph [ref=e135]: No featured topics available
        - generic [ref=e136]:
          - heading "Quick Links" [level=3] [ref=e137]
          - list [ref=e138]:
            - listitem [ref=e139]:
              - link "Discussion" [ref=e140] [cursor=pointer]:
                - /url: https://qabrains.com/discussion
            - listitem [ref=e141]:
              - link "About Us" [ref=e142] [cursor=pointer]:
                - /url: https://qabrains.com/about
            - listitem [ref=e143]:
              - link "Terms & Conditions" [ref=e144] [cursor=pointer]:
                - /url: https://qabrains.com/terms
            - listitem [ref=e145]:
              - link "Privacy Policy" [ref=e146] [cursor=pointer]:
                - /url: https://qabrains.com/policy
        - generic [ref=e147]:
          - heading "Follow Us" [level=3] [ref=e148]
          - generic [ref=e149]:
            - link [ref=e150] [cursor=pointer]:
              - /url: https://www.linkedin.com/showcase/qabrainscom
              - img [ref=e151]
            - link [ref=e153] [cursor=pointer]:
              - /url: https://www.facebook.com/qabrainscom
              - img [ref=e154]
            - link [ref=e157] [cursor=pointer]:
              - /url: https://www.youtube.com/@QABrains
              - img [ref=e158]
          - generic [ref=e161]:
            - heading "For Support" [level=3] [ref=e162]
            - link "support@qabrains.com" [ref=e163] [cursor=pointer]:
              - /url: mailto:support@qabrains.com
      - paragraph [ref=e165]: © 2026 QA Brains | All Rights Reserved
  - region "Notifications alt+T":
    - list:
      - listitem [ref=e166]:
        - img [ref=e168]
        - generic [ref=e171]: Added to cart
  - alert [ref=e172]
```

# Test source

```ts
  1  | export class ProductPage{
  2  |     constructor(page){
  3  |         this.page=page;
  4  |         console.log("hi");
  5  |         this.shirt=page.locator('button').nth(3)
  6  |         this.cartIcon = page.locator("//*[name()='path' and contains(@d,'M528.12 30')]")
  7  |     }
  8  | 
  9  |     async selectProduct(){
  10 |         await this.shirt.click();
  11 |         await this.cartIcon.click();
> 12 |         await this.page.waitForTimeout(2000);
     |                         ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  13 |         console.log(await this.page.url());
  14 |     }
  15 | }
```