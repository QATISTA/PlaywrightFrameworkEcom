export class CartPage{
    constructor(page){
        this.page=page;
        this.checkoutButton = page.locator("button[class='flex items-center gap-2 bg-qa-clr hover:bg-blue-600 transition duration-300 ease-in-out text-white px-6 py-2 rounded-3xl cursor-pointer'] span")
    }

    async clickCheckout(){
        await this.checkoutButton.click()
       // await this.page.waitForTimeout(4000);
       // console.log(await this.page.url());
    }
} 