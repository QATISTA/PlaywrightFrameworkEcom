export class CheckoutOverviewPage{
    constructor(page){
        this.page=page;
        this.finshButton=page.getByText('Finish')
    }

    async Finish(){
        await this.finshButton.click()
    }
}