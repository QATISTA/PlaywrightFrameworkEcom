export class CheckoutInfoPage{
    constructor(page){
        this.page=page;
        this.firstName=page.locator("//input[@placeholder='Ex. John']")
        this.lastName=page.locator("//input[@placeholder='Ex. Doe']")
        this.zipCode=page.locator("//input[@value='1207']")
        this.continueButton=page.getByText('Continue')
    }
    async CheckoutInfoProceed(){
        await this.firstName.fill("William")
        await  this.lastName.fill("Jones")
        await  this.zipCode.fill('76512')
        await this.continueButton.click()
       //  await this.page.waitForTimeout(4000);
      //  console.log(await this.page.url());
    }
}