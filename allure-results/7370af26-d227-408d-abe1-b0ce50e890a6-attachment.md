# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.js >> Complete Ecommerce Flow
- Location: tests\e2e.spec.js:4:5

# Error details

```
ReferenceError: cartPage is not defined
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
            - img "Sample Shoe Name" [ref=e46]
          - link "Sample Shoe Name" [ref=e47] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=2
          - link "A sample description for the product." [ref=e48] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=2
          - generic [ref=e49]:
            - generic [ref=e50]: $89.00
            - button "Add to cart" [ref=e51] [cursor=pointer]
        - generic [ref=e52]:
          - button [ref=e53] [cursor=pointer]:
            - button [ref=e54]:
              - img [ref=e55]
          - link "Sample Jacket Name" [ref=e57] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=3
            - img "Sample Jacket Name" [ref=e58]
          - link "Sample Jacket Name" [ref=e59] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=3
          - link "A sample description for the product." [ref=e60] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=3
          - generic [ref=e61]:
            - generic [ref=e62]: $129.50
            - button "Add to cart" [ref=e63] [cursor=pointer]
        - generic [ref=e64]:
          - button [ref=e65] [cursor=pointer]:
            - button [ref=e66]:
              - img [ref=e67]
          - link "Sample Trouser Name" [ref=e69] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=4
            - img "Sample Trouser Name" [ref=e70]
          - link "Sample Trouser Name" [ref=e71] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=4
          - link "A sample description for the product." [ref=e72] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=4
          - generic [ref=e73]:
            - generic [ref=e74]: $72.00
            - button "Add to cart" [ref=e75] [cursor=pointer]
        - generic [ref=e76]:
          - button [ref=e77] [cursor=pointer]:
            - button [ref=e78]:
              - img [ref=e79]
          - link "Sample T-Shirt Name" [ref=e81] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=5
            - img "Sample T-Shirt Name" [ref=e82]
          - link "Sample T-Shirt Name" [ref=e83] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=5
          - link "A sample description for the product." [ref=e84] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=5
          - generic [ref=e85]:
            - generic [ref=e86]: $45.00
            - button "Add to cart" [ref=e87] [cursor=pointer]
        - generic [ref=e88]:
          - button [ref=e89] [cursor=pointer]:
            - button [ref=e90]:
              - img [ref=e91]
          - link "Sample Sunglass Name" [ref=e93] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=6
            - img "Sample Sunglass Name" [ref=e94]
          - link "Sample Sunglass Name" [ref=e95] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=6
          - link "A sample description for the product." [ref=e96] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=6
          - generic [ref=e97]:
            - generic [ref=e98]: $256.45
            - button "Add to cart" [ref=e99] [cursor=pointer]
        - generic [ref=e100]:
          - button [ref=e101] [cursor=pointer]:
            - button [ref=e102]:
              - img [ref=e103]
          - link "Sample Jacket Name" [ref=e105] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=7
            - img "Sample Jacket Name" [ref=e106]
          - link "Sample Jacket Name" [ref=e107] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=7
          - link "A sample description for the product." [ref=e108] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=7
          - generic [ref=e109]:
            - generic [ref=e110]: $111.00
            - button "Add to cart" [ref=e111] [cursor=pointer]
        - generic [ref=e112]:
          - button [ref=e113] [cursor=pointer]:
            - button [ref=e114]:
              - img [ref=e115]
          - link "Sample Sunglass Name" [ref=e117] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=8
            - img "Sample Sunglass Name" [ref=e118]
          - link "Sample Sunglass Name" [ref=e119] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=8
          - link "A sample description for the product." [ref=e120] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=8
          - generic [ref=e121]:
            - generic [ref=e122]: $256.45
            - button "Add to cart" [ref=e123] [cursor=pointer]
        - generic [ref=e124]:
          - button [ref=e125] [cursor=pointer]:
            - button [ref=e126]:
              - img [ref=e127]
          - link "Sample T-Shirt Name" [ref=e129] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=9
            - img "Sample T-Shirt Name" [ref=e130]
          - link "Sample T-Shirt Name" [ref=e131] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=9
          - link "A sample description for the product." [ref=e132] [cursor=pointer]:
            - /url: /ecommerce/product-details?id=9
          - generic [ref=e133]:
            - generic [ref=e134]: $56.45
            - button "Add to cart" [ref=e135] [cursor=pointer]
    - contentinfo [ref=e136]:
      - generic [ref=e138]:
        - generic [ref=e139]:
          - link "logo":
            - /url: https://qabrains.com
            - img "logo"
          - paragraph [ref=e140]: QA Brains is the ultimate QA Community to exchange knowledge, seek advice, and engage in discussions that enhance Quality Assurance testers' skills and expertise.
        - generic [ref=e141]:
          - heading "QA Topics" [level=3] [ref=e142]
          - list [ref=e143]:
            - listitem [ref=e144]:
              - link "Web Testing" [ref=e145] [cursor=pointer]:
                - /url: https://qabrains.com/topics/web-testing
            - listitem [ref=e146]:
              - link "Interview Questions" [ref=e147] [cursor=pointer]:
                - /url: https://qabrains.com/topics/interview-questions
            - listitem [ref=e148]:
              - link "Testing Framework" [ref=e149] [cursor=pointer]:
                - /url: https://qabrains.com/topics/testing-framework
            - listitem [ref=e150]:
              - link "See more" [ref=e151] [cursor=pointer]:
                - /url: https://qabrains.com/topics
                - text: See more
                - img [ref=e153]
        - generic [ref=e155]:
          - heading "Quick Links" [level=3] [ref=e156]
          - list [ref=e157]:
            - listitem [ref=e158]:
              - link "Discussion" [ref=e159] [cursor=pointer]:
                - /url: https://qabrains.com/discussion
            - listitem [ref=e160]:
              - link "About Us" [ref=e161] [cursor=pointer]:
                - /url: https://qabrains.com/about
            - listitem [ref=e162]:
              - link "Terms & Conditions" [ref=e163] [cursor=pointer]:
                - /url: https://qabrains.com/terms
            - listitem [ref=e164]:
              - link "Privacy Policy" [ref=e165] [cursor=pointer]:
                - /url: https://qabrains.com/policy
        - generic [ref=e166]:
          - heading "Follow Us" [level=3] [ref=e167]
          - generic [ref=e168]:
            - link [ref=e169] [cursor=pointer]:
              - /url: https://www.linkedin.com/showcase/qabrainscom
              - img [ref=e170]
            - link [ref=e172] [cursor=pointer]:
              - /url: https://www.facebook.com/qabrainscom
              - img [ref=e173]
            - link [ref=e176] [cursor=pointer]:
              - /url: https://www.youtube.com/@QABrains
              - img [ref=e177]
          - generic [ref=e180]:
            - heading "For Support" [level=3] [ref=e181]
            - link "support@qabrains.com" [ref=e182] [cursor=pointer]:
              - /url: mailto:support@qabrains.com
      - paragraph [ref=e184]: © 2026 QA Brains | All Rights Reserved
  - region "Notifications alt+T"
  - alert [ref=e185]
```

# Test source

```ts
  1  | import { test, expect } from '../fixtures/baseFixture';
  2  | import loginData from '../test-data/LoginData.json';
  3  | 
  4  | test('Complete Ecommerce Flow', async ({ loginPage,productPage }) => {
  5  | 
  6  |     const newLogin = loginData.login;
  7  | 
  8  |     await loginPage.navigate('');
  9  | 
  10 |     await loginPage.login(
  11 |         newLogin.email,
  12 |         newLogin.password
  13 |     );
  14 |     await productPage.selectProduct();
  15 |    
> 16 |     await cartPage.clickCheckout();
     |     ^ ReferenceError: cartPage is not defined
  17 | });
```