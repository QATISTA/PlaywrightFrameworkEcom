# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Login
- Location: tests\login.spec.js:4:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#email')
    - locator resolved to <input id="email" type="email" name="email" class="form-control " placeholder="eg. user@user.com"/>
    - fill("qa_testers@qabrains.com")
  - attempting fill action

```

```
Error: apiRequestContext._wrapApiCall: Target page, context or browser has been closed
```