export class ProductPage{
    constructor(page){
        this.page=page;
        console.log("hi");
        this.shirt=page.locator('button').nth(3)
    }

    async selectProduct(){
        await this.shirt.click();
    }
}