# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: e2e.spec.js >> Complete Ecommerce Flow
- Location: tests\e2e.spec.js:4:5

# Error details

```
Error: locator.fill: SyntaxError: Failed to execute 'evaluate' on 'Document': The string '//input[@placeholder='Ex. Doe' is not a valid XPath expression.
    at Object.queryAll (<anonymous>:6017:25)
    at InjectedScript._queryEngineAll (<anonymous>:6730:49)
    at InjectedScript.querySelectorAll (<anonymous>:6717:30)
    at eval (eval at evaluate (:302:30), <anonymous>:2:39)
    at UtilityScript.evaluate (<anonymous>:304:16)
    at UtilityScript.<anonymous> (<anonymous>:1:44)
Call log:
  - waiting for locator('//input[@placeholder=\'Ex. Doe')

```

```
Error: page.waitForTimeout: Test ended.
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
    - generic [ref=e22]:
      - heading "Your Cart" [level=3] [ref=e23]
      - generic [ref=e25]:
        - generic [ref=e26]:
          - generic [ref=e27]:
            - paragraph [ref=e28]: Product Details
            - img "Sample Shirt Name" [ref=e30]
          - generic [ref=e31]:
            - heading "Sample Shirt Name" [level=3] [ref=e32]
            - button "Remove" [ref=e33] [cursor=pointer]
        - generic [ref=e34]:
          - paragraph [ref=e35]: Quantity
          - generic [ref=e36]:
            - button "-" [ref=e37] [cursor=pointer]
            - generic [ref=e38]: "1"
            - button "+" [ref=e39] [cursor=pointer]
        - generic [ref=e40]:
          - paragraph [ref=e41]: Price
          - paragraph [ref=e42]: $49.99
        - generic [ref=e43]:
          - paragraph [ref=e44]: Total
          - paragraph [ref=e45]: $49.99
      - generic [ref=e46]:
        - button "Continue Shopping" [active] [ref=e47] [cursor=pointer]:
          - img [ref=e48]
          - generic [ref=e50]: Continue Shopping
        - button "Checkout" [ref=e51] [cursor=pointer]:
          - generic [ref=e52]: Checkout
          - img [ref=e53]
    - contentinfo [ref=e55]:
      - generic [ref=e57]:
        - generic [ref=e58]:
          - link "logo":
            - /url: https://qabrains.com
            - img "logo"
          - paragraph [ref=e59]: QA Brains is the ultimate QA Community to exchange knowledge, seek advice, and engage in discussions that enhance Quality Assurance testers' skills and expertise.
        - generic [ref=e60]:
          - heading "QA Topics" [level=3] [ref=e61]
          - list [ref=e62]:
            - listitem [ref=e63]:
              - link "Web Testing" [ref=e64] [cursor=pointer]:
                - /url: https://qabrains.com/topics/web-testing
            - listitem [ref=e65]:
              - link "Interview Questions" [ref=e66] [cursor=pointer]:
                - /url: https://qabrains.com/topics/interview-questions
            - listitem [ref=e67]:
              - link "Testing Framework" [ref=e68] [cursor=pointer]:
                - /url: https://qabrains.com/topics/testing-framework
            - listitem [ref=e69]:
              - link "See more" [ref=e70] [cursor=pointer]:
                - /url: https://qabrains.com/topics
                - text: See more
                - img [ref=e72]
        - generic [ref=e74]:
          - heading "Quick Links" [level=3] [ref=e75]
          - list [ref=e76]:
            - listitem [ref=e77]:
              - link "Discussion" [ref=e78] [cursor=pointer]:
                - /url: https://qabrains.com/discussion
            - listitem [ref=e79]:
              - link "About Us" [ref=e80] [cursor=pointer]:
                - /url: https://qabrains.com/about
            - listitem [ref=e81]:
              - link "Terms & Conditions" [ref=e82] [cursor=pointer]:
                - /url: https://qabrains.com/terms
            - listitem [ref=e83]:
              - link "Privacy Policy" [ref=e84] [cursor=pointer]:
                - /url: https://qabrains.com/policy
        - generic [ref=e85]:
          - heading "Follow Us" [level=3] [ref=e86]
          - generic [ref=e87]:
            - link [ref=e88] [cursor=pointer]:
              - /url: https://www.linkedin.com/showcase/qabrainscom
              - img [ref=e89]
            - link [ref=e91] [cursor=pointer]:
              - /url: https://www.facebook.com/qabrainscom
              - img [ref=e92]
            - link [ref=e95] [cursor=pointer]:
              - /url: https://www.youtube.com/@QABrains
              - img [ref=e96]
          - generic [ref=e99]:
            - heading "For Support" [level=3] [ref=e100]
            - link "support@qabrains.com" [ref=e101] [cursor=pointer]:
              - /url: mailto:support@qabrains.com
      - paragraph [ref=e103]: © 2026 QA Brains | All Rights Reserved
  - region "Notifications alt+T"
  - alert [ref=e104]
```

# Test source

```ts
  1  | export class CheckoutInfoPage{
  2  |     constructor(page){
  3  |         this.page=page;
  4  |         this.firstName=page.locator("//input[@placeholder='Ex. John']")
  5  |         this.lastName=page.locator("//input[@placeholder='Ex. Doe")
  6  |         this.zipCode=page.locator("//input[@value='1207")
  7  |         this.continueButton=page.getByText('Continue')
  8  |     }
  9  | 
  10 |     async CheckoutInfoProceed(){
  11 |         this.firstName.fill("William")
  12 |         this.lastName.fill("Jones")
  13 |         this.zipCode.fill('76512')
  14 |         this.continueButton.click()
> 15 |          await this.page.waitForTimeout(4000);
     |                          ^ Error: page.waitForTimeout: Test ended.
  16 |         console.log(await this.page.url());
  17 |     }
  18 | }
```