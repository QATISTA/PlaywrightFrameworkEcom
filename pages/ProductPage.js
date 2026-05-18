export class ProductPage{
    constructor(page){
        this.page=page;
        console.log("hi");
        this.shirt=page.locator('button').nth(3)
        this.cartIcon = page.locator("//*[name()='path' and contains(@d,'M528.12 30')]")
    }

    async selectProduct(){
        await this.shirt.click();
        await this.cartIcon.click();
       // await this.page.waitForTimeout(2000);
       // console.log(await this.page.url());
    }
}