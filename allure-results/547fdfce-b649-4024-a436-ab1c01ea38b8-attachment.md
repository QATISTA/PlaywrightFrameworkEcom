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
            - img "Sample Shirt Name"
          - link "Sample Shirt Name" [ref=e34] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=1
          - link "A sample description for the product." [ref=e35] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=1
          - generic [ref=e36]:
            - generic [ref=e37]: $49.99
            - button "Remove from cart" [ref=e38] [cursor=pointer]
        - generic [ref=e39]:
          - button [ref=e40] [cursor=pointer]:
            - button [ref=e41]:
              - img [ref=e42]
          - link "Sample Shoe Name" [ref=e44] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=2
            - img "Sample Shoe Name"
          - link "Sample Shoe Name" [ref=e45] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=2
          - link "A sample description for the product." [ref=e46] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=2
          - generic [ref=e47]:
            - generic [ref=e48]: $89.00
            - button "Add to cart" [ref=e49] [cursor=pointer]
        - generic [ref=e50]:
          - button [ref=e51] [cursor=pointer]:
            - button [ref=e52]:
              - img [ref=e53]
          - link "Sample Jacket Name" [ref=e55] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=3
            - img "Sample Jacket Name"
          - link "Sample Jacket Name" [ref=e56] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=3
          - link "A sample description for the product." [ref=e57] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=3
          - generic [ref=e58]:
            - generic [ref=e59]: $129.50
            - button "Add to cart" [ref=e60] [cursor=pointer]
        - generic [ref=e61]:
          - button [ref=e62] [cursor=pointer]:
            - button [ref=e63]:
              - img [ref=e64]
          - link "Sample Trouser Name" [ref=e66] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=4
            - img "Sample Trouser Name"
          - link "Sample Trouser Name" [ref=e67] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=4
          - link "A sample description for the product." [ref=e68] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=4
          - generic [ref=e69]:
            - generic [ref=e70]: $72.00
            - button "Add to cart" [ref=e71] [cursor=pointer]
        - generic [ref=e72]:
          - button [ref=e73] [cursor=pointer]:
            - button [ref=e74]:
              - img [ref=e75]
          - link "Sample T-Shirt Name" [ref=e77] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=5
            - img "Sample T-Shirt Name"
          - link "Sample T-Shirt Name" [ref=e78] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=5
          - link "A sample description for the product." [ref=e79] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=5
          - generic [ref=e80]:
            - generic [ref=e81]: $45.00
            - button "Add to cart" [ref=e82] [cursor=pointer]
        - generic [ref=e83]:
          - button [ref=e84] [cursor=pointer]:
            - button [ref=e85]:
              - img [ref=e86]
          - link "Sample Sunglass Name" [ref=e88] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=6
            - img "Sample Sunglass Name"
          - link "Sample Sunglass Name" [ref=e89] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=6
          - link "A sample description for the product." [ref=e90] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=6
          - generic [ref=e91]:
            - generic [ref=e92]: $256.45
            - button "Add to cart" [ref=e93] [cursor=pointer]
        - generic [ref=e94]:
          - button [ref=e95] [cursor=pointer]:
            - button [ref=e96]:
              - img [ref=e97]
          - link "Sample Jacket Name" [ref=e99] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=7
            - img "Sample Jacket Name"
          - link "Sample Jacket Name" [ref=e100] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=7
          - link "A sample description for the product." [ref=e101] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=7
          - generic [ref=e102]:
            - generic [ref=e103]: $111.00
            - button "Add to cart" [ref=e104] [cursor=pointer]
        - generic [ref=e105]:
          - button [ref=e106] [cursor=pointer]:
            - button [ref=e107]:
              - img [ref=e108]
          - link "Sample Sunglass Name" [ref=e110] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=8
            - img "Sample Sunglass Name"
          - link "Sample Sunglass Name" [ref=e111] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=8
          - link "A sample description for the product." [ref=e112] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=8
          - generic [ref=e113]:
            - generic [ref=e114]: $256.45
            - button "Add to cart" [ref=e115] [cursor=pointer]
        - generic [ref=e116]:
          - button [ref=e117] [cursor=pointer]:
            - button [ref=e118]:
              - img [ref=e119]
          - link "Sample T-Shirt Name" [ref=e121] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=9
            - img "Sample T-Shirt Name"
          - link "Sample T-Shirt Name" [ref=e122] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=9
          - link "A sample description for the product." [ref=e123] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=9
          - generic [ref=e124]:
            - generic [ref=e125]: $56.45
            - button "Add to cart" [ref=e126] [cursor=pointer]
    - contentinfo [ref=e127]:
      - generic [ref=e129]:
        - generic [ref=e130]:
          - link "logo":
            - /url: https://qabrains.com
            - img "logo"
          - paragraph [ref=e131]: QA Brains is the ultimate QA Community to exchange knowledge, seek advice, and engage in discussions that enhance Quality Assurance testers' skills and expertise.
        - generic [ref=e132]:
          - heading "QA Topics" [level=3] [ref=e133]
          - paragraph [ref=e134]: No featured topics available
        - generic [ref=e135]:
          - heading "Quick Links" [level=3] [ref=e136]
          - list [ref=e137]:
            - listitem [ref=e138]:
              - link "Discussion" [ref=e139] [cursor=pointer]:
                - /url: https://qabrains.com/discussion
            - listitem [ref=e140]:
              - link "About Us" [ref=e141] [cursor=pointer]:
                - /url: https://qabrains.com/about
            - listitem [ref=e142]:
              - link "Terms & Conditions" [ref=e143] [cursor=pointer]:
                - /url: https://qabrains.com/terms
            - listitem [ref=e144]:
              - link "Privacy Policy" [ref=e145] [cursor=pointer]:
                - /url: https://qabrains.com/policy
        - generic [ref=e146]:
          - heading "Follow Us" [level=3] [ref=e147]
          - generic [ref=e148]:
            - link [ref=e149] [cursor=pointer]:
              - /url: https://www.linkedin.com/showcase/qabrainscom
              - img [ref=e150]
            - link [ref=e152] [cursor=pointer]:
              - /url: https://www.facebook.com/qabrainscom
              - img [ref=e153]
            - link [ref=e156] [cursor=pointer]:
              - /url: https://www.youtube.com/@QABrains
              - img [ref=e157]
          - generic [ref=e160]:
            - heading "For Support" [level=3] [ref=e161]
            - link "support@qabrains.com" [ref=e162] [cursor=pointer]:
              - /url: mailto:support@qabrains.com
      - paragraph [ref=e164]: © 2026 QA Brains | All Rights Reserved
  - region "Notifications alt+T":
    - list:
      - listitem [ref=e165]:
        - img [ref=e167]
        - generic [ref=e170]: Added to cart
  - alert [ref=e171]
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